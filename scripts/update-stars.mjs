// Rewrites every entry list in README.md as a table with GitHub stars and the
// date of the last commit on the default branch, sorted by stars, then by that date.
// Safe to re-run: it reads both "- [Name](url) - text" lines and the tables it wrote before.
// Token: GITHUB_TOKEN, or whatever `gh auth token` prints.
import { readFileSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const FILE = new URL('../README.md', import.meta.url)
// Bare repo URLs only: /tree/ and /blob/ links point into someone's monorepo, whose stars would mislead.
// github.com/features/... is a product page, not a repo.
const REPO = /^https:\/\/github\.com\/(?!features\/)([\w.-]+)\/([\w.-]+?)\/?$/
const ENTRY = /^\[([^\]]+)\]\(([^)\s]+)\)$/
const LIST_ROW = /^- (\[[^\]]+\]\([^)\s]+\)) - (.*)$/

// Returns an entry, null for a table header or separator row, undefined for any other line.
function parse(line) {
  const list = line.match(LIST_ROW)
  const cells = list
    ? list.slice(1)
    : line.startsWith('|') && line.slice(1, -1).split(/(?<!\\)\|/).map((c) => c.trim().replace(/\\\|/g, '|'))
  if (!cells) return undefined
  const link = cells[0].match(ENTRY)
  if (!link) return /^\|[\s:|-]+\|$/.test(line) || cells[0] === 'Name' ? null : undefined
  return { name: link[1], url: link[2], desc: cells[1] ?? '' }
}

const blocks = []
const lines = readFileSync(FILE, 'utf8').split('\n')
for (let i = 0; i < lines.length; ) {
  const rows = []
  for (let e; i < lines.length && (e = parse(lines[i])) !== undefined; i++) if (e) rows.push(e)
  blocks.push(rows.length ? rows : lines[i++])
}
const tables = blocks.filter(Array.isArray)

const token = process.env.GITHUB_TOKEN || execSync('gh auth token').toString().trim()
const key = (url) => url.match(REPO)?.slice(1, 3).join('/')
const repos = [...new Set(tables.flat().map((e) => key(e.url)).filter(Boolean))]
const stats = new Map()
for (let i = 0; i < repos.length; i += 50) {
  const chunk = repos.slice(i, i + 50)
  const query = `{${chunk
    .map((r, j) => {
      const [owner, name] = r.split('/')
      return `r${j}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { stargazerCount defaultBranchRef { target { ... on Commit { committedDate } } } }`
    })
    .join('\n')}}`
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `bearer ${token}` },
    body: JSON.stringify({ query }),
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok || !body.data) throw new Error(`GitHub API ${res.status}: ${JSON.stringify(body)}`)
  chunk.forEach((r, j) => {
    const d = body.data[`r${j}`]
    if (!d) return console.warn(`Not found, left blank: ${r}`)
    stats.set(r, { stars: d.stargazerCount, date: d.defaultBranchRef?.target?.committedDate?.slice(0, 10) ?? '' })
  })
}

const cell = (s) => s.replace(/\|/g, '\\|')
function render(rows) {
  for (const e of rows) e.s = stats.get(key(e.url))
  rows.sort(
    (a, b) =>
      (b.s?.stars ?? -1) - (a.s?.stars ?? -1) ||
      (b.s?.date ?? '').localeCompare(a.s?.date ?? '') ||
      a.name.localeCompare(b.name),
  )
  // Sections with no GitHub repos (essays, talks, products) get no empty number columns.
  const numbers = rows.some((e) => key(e.url))
  return [
    numbers ? '| Name | Description | Stars | Last commit |' : '| Name | Description |',
    numbers ? '| --- | --- | ---: | --- |' : '| --- | --- |',
    ...rows.map(
      (e) =>
        `| [${cell(e.name)}](${e.url}) | ${cell(e.desc)} |` +
        (numbers ? ` ${e.s ? e.s.stars.toLocaleString('en-US') : '—'} | ${e.s?.date || '—'} |` : ''),
    ),
  ].join('\n')
}

writeFileSync(FILE, blocks.map((b) => (Array.isArray(b) ? render(b) : b)).join('\n'))
console.log(`${tables.length} tables, ${tables.flat().length} entries, ${stats.size}/${repos.length} repos with stats`)
