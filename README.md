# Awesome Software Factories [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of software factories: systems that run AI coding agents autonomously, in parallel, and in loops to turn a backlog into working software.

People also call these **agent factories**, and when no human reads the code at all, **dark software factories** (from the manufacturing term "lights-out factory").

A single coding agent is not a factory. A factory is the machinery around the agents: the backlog that feeds them, the sandboxes that isolate them, the loops that keep them going, and the gates that check their output before it ships.

## Contents

- [What is a software factory?](#what-is-a-software-factory)
- [Open-source factories](#open-source-factories)
- [Ticket-to-PR pipelines](#ticket-to-pr-pipelines)
- [Autonomous loops](#autonomous-loops)
- [Parallel session managers and agent kanbans](#parallel-session-managers-and-agent-kanbans)
- [Isolation: worktrees and sandboxes](#isolation-worktrees-and-sandboxes)
- [Backlog and spec layer](#backlog-and-spec-layer)
- [Review and merge gates](#review-and-merge-gates)
- [Multi-agent coding frameworks](#multi-agent-coding-frameworks)
- [Hosted and commercial factories](#hosted-and-commercial-factories)
- [Field reports](#field-reports)
- [Essays](#essays)
- [Talks and podcasts](#talks-and-podcasts)
- [Books](#books)
- [Benchmarks](#benchmarks)
- [Related lists](#related-lists)
- [Contributing](#contributing)

## What is a software factory?

The idea has a few names, each with a slightly different emphasis:

- **Software factory.** Bob Bemer used the term in 1968. In the AI-agent sense it means a system where agents read and write artifacts (specs, issues, pull requests) in a defined workflow, and people step in only for key decisions. Factory.ai, Steve Yegge's Gas Town, and OpenAI's Symphony popularised this usage in 2025-2026.
- **Agent factory.** Same idea, stressing that the unit of work is an agent run rather than a developer session. Yegge describes Gas Town as "more like a coding agent factory than a coding agent."
- **Dark factory / light factory.** Dan Shapiro coined "dark factory" in January 2026 as level 5 of his five-level scale: humans set goals, agents plan, build, test, and ship, and nobody reads the diff. Addy Osmani and Dex Horthy contrast it with a **light factory**, where humans still make judgment calls upstream in specs and architecture. Horthy ran a real lights-off factory for three months in 2025 and abandoned it because the codebase degraded, which is why most teams below run light factories.

Legend: `⚠️ unmaintained` means no commits for 6+ months or the project is archived. `💰` means paid or closed-source.

## Open-source factories

End-to-end systems: work comes in from a backlog, agents plan, build, test, and review, pull requests come out.

| Name | Description | Stars | Last commit |
| --- | --- | ---: | --- |
| [gstack](https://github.com/garrytan/gstack) | Garry Tan's own Claude Code setup, branded an "open source software factory": 23 tools playing CEO, designer, engineering manager, release manager, docs engineer, and QA. `Backends: Claude Code` | 142,425 | 2026-11-23 |
| [Symphony](https://github.com/openai/symphony) | OpenAI's open spec plus Elixir reference implementation for turning issue-tracker items into isolated, autonomous agent runs. The tracker is the control plane. `Backends: any, demo uses Codex` | 28,134 | 2026-09-15 |
| [Gas Town](https://github.com/gastownhall/gastown) | Steve Yegge's multi-agent orchestrator. A Mayor dispatches work to colonies of 20-30 parallel agents, with Witness and Deacon roles supervising, and Beads as memory. `Backends: Claude Code, Codex, Copilot, Gemini, Cursor, Kiro, Amp, OpenCode, and more` | 18,870 | 2026-11-12 |
| [Superplane](https://github.com/superplanehq/superplane) | Self-hostable orchestrator that runs agents against backlog issues and coordinates the surrounding source control, CI, review, and approvals, looping a failed run back to the agent with context. | 10,134 | 2026-11-23 |
| [LoopForge](https://github.com/Tencent/LoopForge) | Self-hosted workflow engine where a chat bot or a saved SOP runs agent, script, and human-approval steps in order, each in its own sandbox, with failed steps sent back for rework. `Backends: CodeBuddy, Codex, Claude Code, OpenCode, Cursor CLI, Antigravity, Kimi Code, Pi, DeepSeek Harness, ZCode` | 5,804 | 2026-11-23 |
| [CodeMachine CLI](https://github.com/moazbuilds/CodeMachine-CLI) | Orchestrates coding agents into repeatable, long-running workflows. `⚠️ unmaintained` | 2,517 | 2026-02-25 |
| [Synara](https://github.com/Emanuele-web04/synara) | Local-first desktop app combining project management, coding-agent sessions, terminal and browser tools, and code review in one workspace. | 2,296 | 2026-11-22 |
| [zeroshot](https://github.com/the-open-engine/zeroshot) | Planner and implementer loop with independent validators in isolated worktrees or Docker, running until a change verifies or fails with a reproducible report. Pulls from GitHub, GitLab, Jira, Azure DevOps. `Backends: Claude, Codex, Gemini, OpenCode` | 2,220 | 2026-11-23 |
| [QualityLayer](https://github.com/maxritter/qualitylayer) | Desktop and browser app that takes a change through discuss, research, plan, outline, and implement, with an optional independent reviewer checking every requirement before it counts as done. `Backends: Claude Code, Codex, Cursor, Grok, Antigravity, Pi, OpenCode, Copilot` | 2,159 | 2026-11-23 |
| [Fabro](https://github.com/fabro-sh/fabro) | "The open source dark software factory for expert engineers." Rust. | 1,883 | 2026-11-20 |
| [Gas City](https://github.com/gastownhall/gascity) | Gas Town's reusable parts repackaged as a composable SDK: declarative config, work routing, and health monitoring for building your own agent factory. `Backends: Claude Code, Codex, Gemini CLI` | 1,569 | 2026-11-23 |
| [Attractor](https://github.com/strongdm/attractor) | StrongDM's spec for a non-interactive coding agent "sufficient for use in a software factory." The open part of their "nobody reads the code" system. `⚠️ unmaintained` | 1,349 | 2026-03-17 |
| [Fusion](https://github.com/Runfusion/Fusion) | "Your software factory." Multi-node orchestrator with a kanban board, plan-review-execute gates, per-task worktrees, and hierarchical missions. | 1,344 | 2026-10-26 |
| [Helmor](https://github.com/dohooo/helmor) | Local-first workbench that runs agents through plan, run, review, test, merge, and ship, each agent in its own worktree. `Backends: Claude Code, Codex, and others` | 1,319 | 2026-07-24 |
| [eve Software Factory Template](https://github.com/vercel-labs/eve-software-factory-template) | Vercel Labs template where agents own each SDLC stage (classifier, analyst, implementer, reviewer) and humans make judgment calls. `Backends: Claude Agent SDK` | 1,183 | 2026-11-17 |
| [SWE-AF](https://github.com/Agent-Field/SWE-AF) | "Autonomous software engineering fleet." One API call plans, codes, tests, and ships a PR. `Backends: Claude Code, OpenCode, Codex` | 1,138 | 2026-11-12 |
| [loki-mode](https://github.com/asklokesh/loki-mode) | PRD to deployed product: 41 agents in 8 swarms, nine quality gates, and blind three-reviewer review. Source-available under BUSL. | 1,121 | 2026-11-22 |
| [Optio](https://github.com/jonwiggins/optio) | Self-hosted engineering platform. Tickets from GitHub, Linear, Jira, or Notion become merged PRs through a Kubernetes-style reconciliation control plane, plus one-shot jobs and long-lived agents. `Backends: Claude Code, Codex, Copilot, Gemini, OpenCode, Cursor` | 1,113 | 2026-11-22 |
| [Super Simple Software Factory](https://github.com/disler/super-simple-software-factory) | Deterministic Python owns the workflow graph and coding agents are bounded nodes inside it, packaged as one portable skill. By IndyDevDan. `Backends: Pi, Claude Code` | 1,066 | 2026-08-02 |
| [Atomic](https://github.com/bastani-inc/atomic) | Verifiable coding agent runtime: defines the engineering process as an explicit graph of stages, checks, and approval gates instead of trusting an agent to follow instructions. | 883 | 2026-11-23 |
| [Pullboard](https://github.com/pullboard-dev/pullboard) | Local-first board where agents build against an approved spec in their own worktree lane and a separate agent must verify the exact commit before it merges. | 851 | 2026-11-23 |
| [Helix](https://github.com/helixml/helix) | Runs a fleet of coding agents on your own infrastructure, each with its own sandboxed desktop, planned and reviewed from a shared spec-driven Kanban board. `Backends: Claude Code, Codex, Gemini CLI, Qwen Code, any ACP agent` | 834 | 2026-11-22 |
| [CodeAF](https://github.com/Agent-Field/CodeAF) | Single-binary harness for open models that splits tasks into parallel branches, then checks and merges the results automatically. `Backends: OpenRouter, DeepSeek, GLM, Kimi, MiniMax, Qwen, Ollama, any OpenAI-compatible endpoint` | 831 | 2026-11-22 |
| [AI Software Factory](https://github.com/coleam00/ai-software-factory) | GitHub issues in, merged PRs out, with verification gates so nobody has to read the diff. By Cole Medin. `Backends: Claude Code` | 556 | 2026-11-13 |
| [Machinist](https://github.com/owainlewis/machinist) | Worker-fleet infrastructure that pulls tasks from ticket queues into isolated workspaces. Accepts any executable that reads a prompt from stdin. `Backends: Codex, Claude Code, any CLI` | 543 | 2026-11-23 |
| [Turbo](https://github.com/tobihagemann/turbo) | Markdown skills that turn Claude Code or Codex into a human-gated pipeline through shape, build, check, review, try, ship, and learn stages, with the other tool acting as peer reviewer. `Backends: Claude Code, Codex` | 426 | 2026-11-23 |
| [addyosmani/factory](https://github.com/addyosmani/factory) | Installs a factory operating model into a GitHub repo: issues become a work queue, scheduled agents triage, implement, test, review, and open draft PRs. `Backends: Claude Code, Codex` | 378 | 2026-08-19 |
| [Foreman](https://github.com/VisionForge-OU/foreman) | TUI that supervises headless Claude Code agents through a gated delivery pipeline. `Backends: Claude Code` | 362 | 2026-06-24 |
| [Genie](https://github.com/automagik-si/genie) | "Wishes in, PRs out." Interviews you, plans, dispatches parallel agents into isolated worktrees, and reviews before showing you the result. | 354 | 2026-11-22 |
| [DevBox](https://github.com/rudderlabs/devbox) | Hand it a ticket: it plans the change, writes the code, runs the tests, reviews its own diff, and opens a draft pull request, then pushes fixes from review comments. `Backends: Claude Code, Codex` | 342 | 2026-11-12 |
| [Finn-loop](https://github.com/finna/Finn-loop) | Three Claude Code skills, spec, build, review, and humans merge. `Backends: Claude Code` | 325 | 2026-07-23 |
| [Superlite](https://github.com/iha2/superlite) | Claude Code plugin that turns an approved plan into parallel, cost-routed coding agents with a review gate before merge. `Backends: Claude Code, Codex, Cursor, Gemini CLI, OpenCode` | 314 | 2026-11-18 |
| [Orbi](https://github.com/orbi-build/orbi) | "The factory that builds and operates AI software factories." GitHub issues in, runnable systems out. | 260 | 2026-11-22 |
| [ESF](https://github.com/mitkox/esf) | Fork of Machinist that runs coding agents through Temporal workflows into isolated CubeSandbox microVMs, with independent verification gates before a patch is accepted. `Backends: Claude Code, Codex, OpenCode, Pi` | 240 | 2026-11-05 |
| [Kapso](https://github.com/Leeroo-AI/kapso) | Self-improving factory built for measurable objectives, with published results on MLE-Bench and ALE-Bench. | 231 | 2026-11-22 |
| [Ramure](https://github.com/fulcrumresearch/ramure) | Library for structuring and running multi-agent coding workflows, pitched as "build your own software factory." Formerly Druids. | 225 | 2026-06-10 |
| [Squid](https://github.com/iusztinpaul/squid) | "An opinionated software factory." A Claude Code plugin that turns a feature spec into a reviewed PR through a five-agent pipeline with two human gates. `Backends: Claude Code` | 220 | 2026-11-17 |
| [Taskplane](https://github.com/HenryLach/taskplane) | Multi-agent coding orchestration that describes itself as "more light-factory than dark-factory." Transparency first. | 220 | 2026-09-18 |
| [Anneal](https://github.com/mosonlab/anneal) | Chains of coding agents plan, review, implement, and merge a spec unattended on your own machine, with two independent reviewers before anything merges. `Backends: Claude Code, Codex, Pi` | 196 | 2026-09-26 |
| [dark-factory-experiment](https://github.com/coleam00/dark-factory-experiment) | AI workflows triage, implement, review, and auto-merge issues with no human reading the diff. Runs a live app at chat.dynamous.ai. | 176 | 2026-08-14 |
| [Inkwell](https://github.com/disler/inkwell-agent-sandboxes-and-software-factory) | The Super Simple Software Factory running on throwaway sandboxed VMs. | 171 | 2026-08-09 |
| [uzi (vtmocanu)](https://github.com/vtmocanu/uzi) | Autonomous multi-agent coding orchestrator with sandboxed launchers and a GitLab-issue-driven backlog. `Backends: Claude Agent SDK, Codex` | 157 | 2026-11-23 |
| [Sgai](https://github.com/sandgardenhq/sgai) | Sandgarden's local factory. Define the outcome in a single `GOAL.md` and a coordinated set of agents builds it, with a web dashboard showing what each agent is doing. | 141 | 2026-07-03 |
| [HAR](https://github.com/os-factory/har) | Open agent harness (CLI plus MCP) with isolated worktrees and deterministic verification. `Backends: Claude Code, Cursor, Codex, any MCP agent` | 135 | 2026-11-23 |
| [Fluent](https://github.com/mrinalwadhwa/fluent) | Turns vision docs, bug reports, and production logs into working software and improves its own process as it goes. | 135 | 2026-11-10 |
| [Agentic Orchestrator](https://github.com/doordash-oss/agentic-orchestrator) | DoorDash's deterministic harness that turns a feature description into a reviewed pull request through gated phases (research, design, plan, implement, review, publish), with concurrent workflows supervised from one desktop workspace. `Backends: Claude Code, Codex, OpenCode` | 133 | 2026-11-18 |
| [claude-lane-stack](https://github.com/VKirill/claude-lane-stack) | One-person factory: a Claude Code PM hands tasks to cheaper writer agents in worktrees and auto-merges to main after verification. `Backends: Claude Code, Codex, Qwen, Grok, Kimi` | 125 | 2026-11-13 |
| [opencastle](https://github.com/monkilabs/opencastle) | Multi-agent orchestration setup that spans seven agent tools. `Backends: Copilot, Cursor, Claude Code, OpenCode, Windsurf, Codex, Antigravity` | 81 | 2026-11-20 |
| [Human](https://github.com/gethuman-sh/human) | Pipes tickets, docs, designs, and analytics into one pipeline with Claude driving and a human reviewing before ship. `Backends: Claude Code` | 68 | 2026-09-26 |
| [Mastra Factory](https://github.com/mastra-ai/softwarefactory-template) | Open-source factory server from Mastra. Connects GitHub, Linear, and Slack to a configurable board (intake, triage, planning, build, review, done) where each stage runs on manual or auto mode. Install with `npm create factory`. Beta since September 2026. [Docs](https://factory.mastra.ai/). | 67 | 2026-11-18 |
| [Donmai](https://github.com/RenseiAI/donmai-libraries) | Multi-agent fleet management for coding agents, billed as "the open-source software factory." | 66 | 2026-11-04 |
| [OctopusGarden](https://github.com/foundatron/octopusgarden) | "Dark software factory": specs in, code out, through a convergence loop. Go. `⚠️ unmaintained` | 65 | 2026-03-18 |
| [Miniforge](https://github.com/miniforge-ai/miniforge) | "Designed to behave like a factory, not a chatbot." Policy-as-code governance over autonomous development, written in Clojure. | 60 | 2026-11-23 |
| [Forge](https://github.com/LucasDuys/forge) | Brainstorm-to-commit pipeline for Claude Code: a one-line idea becomes a tested, reviewed, committed branch. `Backends: Claude Code` | 57 | 2026-05-31 |
| [software-factory (nicolasmelo1)](https://github.com/nicolasmelo1/software-factory) | Single Rust binary where every rule is written twice: once as prose, once as an enforced check with a mutation test proving it fires. | 47 | 2026-11-17 |
| [oh-my-symphony](https://github.com/cskwork/oh-my-symphony) | Community fork of Symphony that drives eight coding CLIs from one orchestrator with a terminal kanban and web dashboard. `Backends: Codex, Claude Code, Gemini, Antigravity, Kiro, OpenCode, Pi` | 45 | 2026-10-28 |
| [Minimum Viable Factory](https://github.com/ashtilawat/minimum-viable-factory) | Ticket in, deployed web app out. A deliberately small reference implementation. | 44 | 2026-07-14 |
| [Forgeo](https://github.com/lucaGazzola/forgeo) | Scheduled factory that keeps the backlog as a plain JSON file, runs an agent on each task, and commits straight to main. No branches, no PRs. `Backends: Claude Code, Codex, OpenCode` | 35 | 2026-11-01 |
| [Beadhive](https://github.com/beadhive/beadhive) | An agentic software factory that closes the loop, MCP-native and wired to your issue tracker. | 31 | 2026-11-23 |
| [dark-factory](https://github.com/DUBSOpenHub/dark-factory) | Agentic dark factory with "sealed-envelope" testing so agents cannot see the tests they must pass. | 27 | 2026-07-28 |
| [SMILE Software Factory](https://github.com/DavidChen-006/smile-software-factory) | Scripted driver loop turns a task queue into reviewed pull requests, one worker per task in pooled worktrees and one reviewer per PR. `Backends: Claude Code` | 24 | 2026-09-21 |
| [Factory (watt-mind)](https://github.com/watt-mind/factory) | Self-improving agentic loop runtime where git is the source of truth and CI is the gate. | 21 | 2026-11-21 |
| [Patchmill](https://github.com/rochecompaan/patchmill) | Agent-driven software factory with daily development. | 20 | 2026-11-22 |
| [Foundry](https://github.com/bifrost5/foundry) | Persistent control plane that resumes agent work across multi-day projects without losing context. | 12 | 2026-11-18 |
| [software-factory (stratonext)](https://github.com/stratonext/software-factory) | Local CLI that runs YAML-defined pipelines of coding-agent and shell stages, each request in its own git worktree. `Backends: Claude Code` | 12 | 2026-10-09 |
| [Even Keel](https://github.com/NamerekT/even-keel) | Local service that works through a project's tasks one at a time in dependency order, one agent session and worktree per task, waits out subscription usage limits, and takes tasks from its built-in tracker or from Huly, GitHub, GitLab, Linear, Jira or Forgejo issues. `Backends: Claude Code, Codex, OpenCode, Copilot CLI` | 9 | 2026-11-20 |
| [OpenFactory](https://github.com/BeeverForge/openfactory-core) | Tickets in, reviewed pull requests out. Self-hosted, no vendor lock-in. | 8 | 2026-10-28 |
| [Fabrika](https://github.com/berkaycubuk/fabrika) | Minimalist software factory that runs on your own computer. | 7 | 2026-07-03 |
| [Atelier](https://github.com/duanecilliers/atelier) | A Python engine runs agents in bounded phases while a Next.js cockpit observes and controls them, with a SQLite trace as the source of truth. | 6 | 2026-08-20 |
| [shipmill](https://github.com/shipmill/shipmill) | Policy-driven pipeline that triages GitHub issues, fixes them, and carries the result through review, release, deploy, and rollback, with a single config file deciding how far automation may go. `Backends: Claude Code` | 4 | 2026-11-23 |
| [Guarded Dark Factory](https://github.com/ruslantrachuk/dark-factory) | Claude Code plugin that runs the whole software lifecycle past the PR: requirements, build and review, releases of only accepted work, a production monitor, and an on-call agent in the client's chat, all held to the rules by hooks. | 2 | 2026-11-23 |

## Ticket-to-PR pipelines

Tools that watch an issue tracker or event stream and dispatch agents to open pull requests.

| Name | Description | Stars | Last commit |
| --- | --- | ---: | --- |
| [OpenHands](https://github.com/OpenHands/OpenHands) | Self-hosted control center for coding agents with a GitHub resolver: label an issue and it opens a PR. `Backends: own agent, Claude Code, Codex, Gemini, any ACP agent` | 94,126 | 2026-11-22 |
| [Multica](https://github.com/multica-ai/multica) | Self-hostable workspace where agents take issues like teammates, report progress, and hand back for review. `Backends: Claude Code, Codex, Cursor, Copilot, Kimi, OpenCode` | 57,434 | 2026-11-23 |
| [Open SWE](https://github.com/langchain-ai/open-swe) | Async coding agent you invoke from Slack, a Linear issue, or a GitHub comment. Posts results back. | 11,252 | 2026-11-23 |
| [Claude Code Action](https://github.com/anthropics/claude-code-action) | Anthropic's official GitHub Action. Answers questions and implements code changes on PRs and issues, auto-detecting mode from @claude mentions, issue assignments, or explicit prompts. `Backends: Claude Code` | 10,054 | 2026-11-20 |
| [Claude Code PM (ccpm)](https://github.com/automazeio/ccpm) | Turns GitHub Issues into a task queue and runs one agent per issue, each in its own worktree. `Backends: Claude Code` | 8,463 | 2026-11-04 |
| [Sweep](https://github.com/sweepai/sweep) | The original open-source GitHub issue-to-PR bot. Has since pivoted to a JetBrains plugin. `⚠️ unmaintained` | 7,702 | 2025-09-18 |
| [Mission Control](https://github.com/builderz-labs/mission-control) | Self-hosted control plane that dispatches tasks to agent runtimes, with run review and spend tracking. `Backends: OpenClaw, Claude Code, Codex, and others` | 6,516 | 2026-10-28 |
| [Open Agents](https://github.com/vercel-labs/open-agents) | Vercel Labs' reference app for background coding agents: the agent runs outside the sandbox and drives it through file, search, and shell tools, then opens a PR. | 5,914 | 2026-06-04 |
| [GitHub Agentic Workflows (gh-aw)](https://github.com/github/gh-aw) | GitHub's own tool. Markdown plus YAML agentic workflows compile to locked-down GitHub Actions with sandboxed agents and validated "safe outputs." | 5,679 | 2026-11-23 |
| [Kiro Crew](https://github.com/kirodotdev/KiroCrew) | AWS's persistent workspace that drives the Kiro CLI across concurrent sessions with checkpoint resume, spawned subagents, and cron or webhook jobs behind approval gates. `Backends: Kiro` | 5,046 | 2026-11-23 |
| [Open-Inspect](https://github.com/open-inspect/background-agents) | Self-hosted background coding agent reachable from web, Slack, GitHub, or Linear, with multiplayer sessions, scheduled automations, and parallel sandboxed sub-tasks. `Backends: Claude Code, Codex, Grok, OpenCode` | 3,510 | 2026-11-21 |
| [run-gemini-cli](https://github.com/google-github-actions/run-gemini-cli) | Google's official GitHub Action for invoking Gemini CLI on repository events: PR review, issue triage, and on-demand mentions. `Backends: Gemini CLI` | 2,131 | 2026-11-19 |
| [centaur](https://github.com/paradigmxyz/centaur) | Paradigm's multiplayer self-hosted agents with Slack-native conversations, Kubernetes sandboxes, and durable workflows. | 1,454 | 2026-11-23 |
| [codex-action](https://github.com/openai/codex-action) | OpenAI's official GitHub Action for running Codex from a workflow with tight control over its privileges. `Backends: Codex` | 1,310 | 2026-11-16 |
| [Agentics](https://github.com/githubnext/agentics) | Ready-made gh-aw workflows from GitHub Next: CI coach, log watcher, grumpy reviewer, nitpick reviewer. | 1,067 | 2026-10-24 |
| [Cyrus](https://github.com/cyrusagents/cyrus) | Background agent that watches issues assigned to it in Linear, GitHub, GitLab, or Slack and works each in its own worktree. | 912 | 2026-11-18 |
| [aeon](https://github.com/aeonfun/aeon) | Runs unattended on GitHub Actions, dispatching markdown-defined skills to agent CLIs and healing skills that fail. | 797 | 2026-11-21 |
| [super-board](https://github.com/EricTechPro/super-board) | Moves a card added to a GitHub Project through builder, tester, and reviewer lanes, opening and merging a pull request once checks pass. `Backends: Claude Code, Codex, OpenCode` | 730 | 2026-10-29 |
| [Open Session](https://github.com/tellahq/opensession) | Self-hosted server with worktrees or sandboxes, intake from Slack, Linear, Plain, and GitHub, and diff and PR review. | 428 | 2026-11-20 |
| [no_human](https://github.com/no-human-ai/no_human) | Takes a ticket from Jira, Linear, monday.com, GitHub, or GitLab and drives an agent to a reviewed PR, locally. | 323 | 2026-10-09 |
| [oz-for-oss](https://github.com/warpdotdev/oz-for-oss) | Open GitHub App and webhook control plane behind Warp Factories: agents triage issues, draft specs, open PRs, review, and verify. `Backends: Warp Oz` | 319 | 2026-11-16 |
| [remote-swe-agents](https://github.com/aws-samples/remote-swe-agents) | AWS serverless control plane with a dedicated EC2 worker per session, triggered by issue comments, assignments, and PR reviews. | 243 | 2026-10-06 |
| [Contrabass](https://github.com/junhoyeo/contrabass) | Go reimplementation of the Symphony pattern. Pulls from Linear, GitHub Issues, or a local board into isolated worktrees. | 230 | 2026-07-17 |
| [Sortie](https://github.com/sortie-ai/sortie) | Single Go binary that turns tracker tickets into isolated agent sessions with retries, stall detection, and cleanup. Supports GitHub, GitLab, Gitea, Linear, Jira. | 226 | 2026-11-21 |
| [Autonomous cloud coding agents (AWS sample)](https://github.com/aws-samples/sample-autonomous-cloud-coding-agents) | AWS's own sample of background agents that turn tasks into PRs in isolated runtimes, with orchestration, observability, and governance built in. | 215 | 2026-11-20 |
| [Hatice](https://github.com/mksglu/hatice) | Polls Linear, GitHub Issues, or GitLab and dispatches Claude Code agents into isolated workspaces with retries, reconciliation, and a live dashboard. `Backends: Claude Code` | 169 | 2026-10-12 |
| [Taskuary](https://github.com/ldbumble/taskuary) | Work inbox that triages issues into approval-gated agent runs. | 152 | 2026-11-23 |
| [oz-agent-action](https://github.com/warpdotdev/oz-agent-action) | Warp's official GitHub Action for running the Oz coding agent on repository events. `Backends: Warp Oz` | 121 | 2026-11-18 |
| [groundcrew](https://github.com/ClipboardHealth/groundcrew) | Dispatches a task backlog to local agents, one sandboxed worktree per task. | 69 | 2026-11-20 |
| [harness-kanban](https://github.com/Orenoid/harness-kanban) | Cloud kanban for fully containerized agents running around the clock on assigned issues. | 38 | 2026-05-30 |
| [Yak](https://github.com/Geocodio/yak) | Picks up small "papercut" tasks from Slack, Linear, Sentry, and GitHub and delivers reviewable PRs. Built by Geocodio for their own backlog. | 35 | 2026-11-23 |
| [NEEDLE](https://github.com/jedarden/NEEDLE) | Headless orchestrator with an explicit state machine that processes a task queue and dispatches to agent CLIs. | 33 | 2026-11-13 |
| [Baton](https://github.com/mraza007/baton) | Daemon that polls GitHub Issues by label, gives each a worktree, and runs Claude Code to open a PR. `Backends: Claude Code` `⚠️ unmaintained` | 32 | 2026-03-27 |
| [HiveDispatch](https://github.com/thomasmeadows/HiveDispatch) | Worker that claims Jira or GitHub Issues tickets, runs a coding agent in an isolated worktree, and opens a pull request that reports back to the ticket; never merges on its own. `Backends: Claude Code, Codex, Grok Build, Antigravity CLI, OpenClaw, DeepCode` | 19 | 2026-10-03 |
| [MindFlock](https://github.com/MindFlock/MindFlock) | A ticket assigned in Jira, Linear, GitHub Issues, Shortcut, or Asana becomes an already-running agent session in its own worktree. You review the diff and merge. | 15 | 2026-11-23 |
| [factory-agent](https://github.com/BayramAnnakov/factory-agent) | Linear issue to Claude Managed Agents to GitHub PR. About one dollar and three minutes per feature. `Backends: Claude Managed Agents` `⚠️ unmaintained` | 6 | 2026-04-13 |
| [DevIntern](https://github.com/getdevintern/devintern) | Self-hosted worker that routes ready tickets from Jira, Linear, GitHub Issues and other trackers to the right repository across many repos, opens PRs from isolated worktrees after an optional self-review pass, follows up on review comments and merge conflicts, and runs cron automations and Sentry bugfixes. `Backends: Claude Code, Codex, Cursor, OpenCode` `💰` | 5 | 2026-11-23 |
| [Alfred](https://github.com/luminik-io/alfred) | Local, scheduler-run fleet of agents driven by GitHub issue labels. `Backends: Claude Code, Codex` `⚠️ unmaintained` | 4 | 2026-11-15 |
| [issue-to-pr-agent](https://github.com/alvarocanoo/issue-to-pr-agent) | Planner, executor, verifier loop on the Claude Agent SDK in a Docker sandbox, with SWE-bench Lite traces. `Backends: Claude Agent SDK` | 2 | 2026-05-26 |
| [another-orchestrator](https://github.com/linuxlewis/another-orchestrator) | An LLM planner reads Linear or GitHub Issues, then a deterministic state machine dispatches headless agents through YAML workflows in isolated worktrees. `Backends: Claude Code, Codex` | 1 | 2026-06-04 |

## Autonomous loops

The "Ralph Wiggum" pattern: feed an agent the same prompt in a loop, with tests as back pressure, until the spec is done. Named by Geoffrey Huntley in July 2025.

| Name | Description | Stars | Last commit |
| --- | --- | ---: | --- |
| [ralph (snarktank)](https://github.com/snarktank/ralph) | The minimal PRD-driven loop most others copy: read PRD and progress file, do one item, test, commit, repeat. `Backends: Amp, Claude Code` `⚠️ unmaintained` | 22,329 | 2026-02-02 |
| [Loop Engineering (cobusgreyling)](https://github.com/cobusgreyling/loop-engineering) | Seven production loop patterns plus CLI tools that score readiness, scaffold state, estimate cost, detect drift, and isolate worktrees. | 11,821 | 2026-11-23 |
| [ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | Autonomous Claude Code loop with smarter exit detection than string matching. The most-starred standalone Ralph. `Backends: Claude Code` | 9,739 | 2026-11-04 |
| [LoopX](https://github.com/loopx-project/loopx) | Provider-neutral control plane above Codex, Claude Code, and Cursor that keeps objectives, gates, todos, and quota stable across bounded turns. | 6,748 | 2026-11-23 |
| [ralph-orchestrator](https://github.com/mikeyobrien/ralph-orchestrator) | Ralph with a "hat system" of personas, back-pressure gates for tests, lint, and typecheck, and Telegram check-ins. `Backends: Claude Code, Codex, Gemini CLI, Kiro, OpenCode, Copilot CLI, Amp` | 3,209 | 2026-11-13 |
| [ralphy](https://github.com/michaelshimeles/ralphy) | Bash script that loops an agent until the PRD is complete. `Backends: Claude Code, Codex, OpenCode, Cursor, Qwen, Droid` `⚠️ unmaintained` | 2,983 | 2026-02-05 |
| [ralph-tui](https://github.com/subsy/ralph-tui) | TUI that drives an agent through a task list with exit detection, connected to task trackers, with interactive PRD creation. | 2,474 | 2026-11-04 |
| [Babysitter](https://github.com/a5c-ai/babysitter) | Deterministic self-orchestration for agent workforces on complex multi-step workflows. | 1,932 | 2026-08-31 |
| [Open Ralph Wiggum](https://github.com/Th0rgal/open-ralph-wiggum) | `ralph "prompt"` starts a loop on any of several backends. `Backends: OpenCode, Claude Code, Codex, Copilot CLI, Cursor Agent, Qwen Code` | 1,909 | 2026-06-02 |
| [LongHorizon-Harness](https://github.com/AMAP-ML/LongHorizon-Harness) | Long-running harness that splits work into manager, executor, and auditor roles so only independently verified results persist. | 1,887 | 2026-11-11 |
| [ralphex](https://github.com/umputun/ralphex) | Fresh session per task, with validation, retries, multi-phase review, and automatic commits. `Backends: Claude Code, Codex` | 1,522 | 2026-11-22 |
| [continuous-claude](https://github.com/AnandChowdhary/continuous-claude) | Ralph loop with PRs: runs Claude Code continuously, opens PRs, waits for checks, and merges. `Backends: Claude Code` | 1,388 | 2026-10-29 |
| [Bernstein](https://github.com/sipyourdrink-ltd/bernstein) | Deterministic, zero-LLM-cost scheduler for 40+ CLI agents in parallel worktrees, with a signed, tamper-evident audit chain. | 1,223 | 2026-11-23 |
| [Agentic Harness Engineering (AHE)](https://github.com/china-qijizhifeng/agentic-harness-engineering) | Self-evolving harness loop: evaluate, analyse, and improve the prompts and tools around a coding agent, not the model itself. | 982 | 2026-10-30 |
| [ralph (iannuttall)](https://github.com/iannuttall/ralph) | Minimal file-based loop: each iteration starts fresh, reads on-disk state, commits one story. Archived. `Backends: Codex, Claude, Droid, OpenCode` `⚠️ unmaintained` | 952 | 2026-02-04 |
| [ralph-loop-agent](https://github.com/vercel-labs/ralph-loop-agent) | Vercel Labs' Ralph loop built on the AI SDK. | 848 | 2026-09-16 |
| [fractal](https://github.com/plasma-ai/fractal) | Recursively delegates separable subtasks to child agents in their own worktrees, bounded by depth, cost, and time. | 798 | 2026-10-25 |
| [Looper](https://github.com/ksimback/looper) | Claude Code skill that interviews you to design a review-gated agent loop, with stop conditions and budget caps, before you run it. `Backends: Claude Code, Codex` | 719 | 2026-08-09 |
| [smart-ralph](https://github.com/tzachbon/smart-ralph) | Claude Code plugin combining the Ralph loop with a structured spec workflow and context compaction. `Backends: Claude Code` | 565 | 2026-09-02 |
| [Auto-Harness](https://github.com/neosigmaai/auto-harness) | Point your own coding agent at a benchmark and let it iterate overnight: analyse failures, improve its own prompt and tools, gate against a regression suite, repeat. | 559 | 2026-09-16 |
| [ralph-wiggum-cursor](https://github.com/agrimsingh/ralph-wiggum-cursor) | Ralph loop for Cursor CLI with token tracking and context rotation. `Backends: Cursor` `⚠️ unmaintained` | 496 | 2026-01-26 |
| [ralph-wiggum (fstandhartinger)](https://github.com/fstandhartinger/ralph-wiggum) | Spec-driven Ralph loop that repeats a task until its acceptance criteria verify, committing only on success. `Backends: Claude Code, Codex, Gemini, Copilot` `⚠️ unmaintained` | 317 | 2026-05-11 |
| [MartinLoop](https://github.com/Keesan12/martin-loop) | Wraps coding-agent runs with budget caps, verification gates, iteration limits, and signed run receipts. `Backends: Claude Code, Codex, Gemini, and OpenAI-compatible endpoints` | 263 | 2026-11-19 |
| [LoopTroop](https://github.com/looptroop-ai/LoopTroop) | An LLM council plans the work, then Ralph-style loops retry failed units with fresh context on OpenCode worktrees. `Backends: OpenCode` | 182 | 2026-11-22 |
| [OMK](https://github.com/dmae97/omk) | Evidence-gated runner that routes tasks into scoped DAG lanes with replayable artifacts. `Backends: Codex, Claude Code, OpenCode` | 153 | 2026-11-23 |
| [lalph](https://github.com/tim-smart/lalph) | Source-agnostic Ralph-style loop. | 137 | 2026-10-11 |
| [wreckit](https://github.com/mikehostetler/wreckit) | Ralph-style loop that works a text file of ideas through research, plan, implement, and PR, with all state kept as trackable files in `.wreckit/`. `⚠️ unmaintained` | 129 | 2026-02-08 |
| [ralph (aymenfurter)](https://github.com/aymenfurter/ralph) | Ralph loop for GitHub Copilot as a VS Code extension with a visual control panel. `Backends: Copilot` `⚠️ unmaintained` | 110 | 2026-02-27 |
| [ralph-starter](https://github.com/rubenmarcus/ralph-starter) | Bootstraps a Ralph loop from Figma, Linear, Notion, or GitHub specs, with cost tracking. `⚠️ unmaintained` | 107 | 2026-04-08 |
| [agent-afk](https://github.com/griffinwork40/agent-afk) | "The coding agent you don't have to watch." Builds, self-verifies, texts you when done, and keeps a decision log. | 64 | 2026-11-23 |
| [ProofLoop](https://github.com/exiw-ai/proofloop) | Write a definition of done once. The orchestrator plans, executes, and verifies in a loop until the contract is satisfied. `Backends: OpenCode, Codex, Claude Code` `⚠️ unmaintained` | 37 | 2026-01-12 |
| [ralph-loop (syuya2036)](https://github.com/syuya2036/ralph-loop) | Agent-agnostic Ralph that also works with local Ollama models. `⚠️ unmaintained` | 33 | 2026-01-07 |
| [agent-yes](https://github.com/snomiao/agent-yes) | Runs agents unattended: auto-answers prompts, retries on rate limits, and lets you tail and steer every running agent from a web dashboard. `Backends: Claude Code, Codex, Gemini CLI` | 32 | 2026-11-20 |
| [loopgate_harness](https://github.com/rxdt/loopgate_harness) | Repo-native loop where each iteration must update specs and pass gates before it commits. | 28 | 2026-09-30 |
| [ralphctl](https://github.com/lukas-grigis/ralphctl) | Generator-evaluator Ralph harness across repos. `Backends: Claude Code, Codex, Copilot` | 24 | 2026-11-22 |
| [gralph](https://github.com/frizynn/gralph) | Ralph loop with git-worktree isolation and multi-agent scaling. `Backends: Claude Code, Cursor` `⚠️ unmaintained` | 16 | 2026-02-06 |
| [loop-engineering](https://github.com/selmakcby/loop-engineering) | Claude Code skill for a self-running loop gated by a verification check the agent cannot fool, plus a max-turns budget. `Backends: Claude Code` | 15 | 2026-06-23 |
| [afk](https://github.com/alexanderop/afk) | Spec, vertical slices, TDD loops, refactor, agentic QA, multi-agent review. Human judgment only at the edges. `Backends: Claude Code` | 4 | 2026-07-30 |
| [claude-overnight](https://github.com/igdutra/claude-overnight) | Spec-driven overnight runner that implements, QAs, reviews, and opens PRs while you sleep. `Backends: Claude Code` | 0 | 2026-10-04 |
| [ralph-loop plugin](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop) | Anthropic's official Claude Code plugin. A Stop hook blocks exit and re-feeds the prompt until a completion string or iteration cap. `Backends: Claude Code` | — | — |

## Parallel session managers and agent kanbans

Run many agent sessions at once, each in its own worktree, and review their output from one place.

| Name | Description | Stars | Last commit |
| --- | --- | ---: | --- |
| [Orca](https://github.com/stablyai/orca) | Fans one prompt across several agents, each in its own worktree, then compares and merges the winner. Desktop, mobile, and remote runtime. `Backends: Codex, Claude Code, OpenCode, Pi` | 133,737 | 2026-11-23 |
| [t3code](https://github.com/pingdotgg/t3code) | Harness control surface as web, mobile, or desktop app. `Backends: Claude Code, Codex, Cursor, Grok Build, OpenCode` | 73,284 | 2026-11-23 |
| [herdr](https://github.com/herdrdev/herdr) | Background runtime that owns agent terminals. Sessions survive reboot and agents spawn panes and message each other over a socket API. | 52,431 | 2026-11-19 |
| [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | Teams-first multi-agent orchestration layer for Claude Code with staged pipelines. `Backends: Claude Code` | 41,024 | 2026-11-11 |
| [AionUi](https://github.com/iOfficeAI/AionUi) | Free desktop app that runs 20+ CLI agents around the clock. `Backends: OpenClaw, Hermes, Claude Code, Codex, OpenCode, and more` | 34,448 | 2026-11-05 |
| [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | The same author's workflow layer for Codex CLI: hooks, agent teams, and status dashboards. `Backends: Codex` | 33,838 | 2026-11-22 |
| [cmux (manaflow)](https://github.com/manaflow-ai/cmux) | Ghostty-based macOS terminal with vertical tabs built for multitasking across many agents. | 28,905 | 2026-11-23 |
| [Vibe Kanban](https://github.com/BloopAI/vibe-kanban) | Kanban board to plan, run, and review many agent tasks, each in its own worktree, with built-in code review and PR creation. Bloop has shut down and the project is now community-maintained. `Backends: Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode, Droid, Qwen Code` | 28,793 | 2026-11-15 |
| [Happy](https://github.com/slopus/happy) | Start a session locally and control it from your phone, end-to-end encrypted, with voice. `Backends: Claude Code, Codex` | 24,772 | 2026-11-22 |
| [Paseo](https://github.com/getpaseo/paseo) | Self-hosted daemon with desktop, mobile, web, and CLI clients, voice mode, and no telemetry. `Backends: Claude Code, Codex, Copilot, OpenCode, Pi` | 24,746 | 2026-11-23 |
| [opcode](https://github.com/winfunc/opcode) | Desktop GUI and toolkit for Claude Code: browse projects and sessions, create custom agents, run them as background processes, track usage costs, and manage MCP servers. `Backends: Claude Code` | 22,461 | 2026-11-06 |
| [Paradev](https://github.com/ParadevAI/Paradev) | Agentic IDE that runs 100+ agents in parallel worktrees using your own subscriptions. Formerly Superset. `Backends: Claude Code, Codex, Copilot, Cursor Agent, Gemini CLI, Mistral Vibe, OpenCode, and more` | 16,501 | 2026-11-23 |
| [qm](https://github.com/yc-software/qm) | Y Combinator's multiplayer harness: an isolated workspace per teammate, shared Slack channels, driven from the web. | 15,762 | 2026-11-23 |
| [cc-haha](https://github.com/NanmiCoder/cc-haha) | Desktop Claude Code workbench with multi-session search, worktree launching, diff review, subagent visualisation, and chat-app integrations. `Backends: Claude Code` | 15,530 | 2026-11-23 |
| [Agent Orchestrator](https://github.com/OrchestratorInc/agent-orchestrator) | Plan, run, and supervise coding agents from one place. Spawns agents, fixes CI, resolves merge conflicts, and reviews. `Backends: 27 agents including Claude Code, Codex, Cursor, Aider, Copilot, Devin` | 15,040 | 2026-11-23 |
| [Claude Code UI](https://github.com/siteboon/claudecodeui) | Desktop, mobile, and web UI to view and manage active sessions remotely. `Backends: Claude Code, Cursor CLI, Codex` | 14,735 | 2026-11-19 |
| [Aperant](https://github.com/AndyMik90/Aperant) | Up to 12 agent terminals in parallel worktrees, a self-validating QA loop, and AI-assisted merge-conflict resolution. | 14,623 | 2026-06-14 |
| [openchamber](https://github.com/openchamber/openchamber) | Workspace for running, supervising, and reviewing agent work across desktop, browser, editor, and mobile, with per-run worktrees. | 13,191 | 2026-11-23 |
| [HumanLayer](https://github.com/humanlayer/humanlayer) | Daemon-backed workspace that runs agent sessions on your team's own machines and syncs tasks, plans, and reviews to a desktop and web app you can steer from. `Backends: Claude Code, Codex, OpenCode, Pi` | 12,933 | 2026-11-23 |
| [Omnigent](https://github.com/omnigent-ai/omnigent) | Meta-harness: one orchestration layer over six agent harnesses, so you can swap harnesses without rewriting, enforce policy and sandboxing, and collaborate from any device. `Backends: Claude Code, Codex, Cursor, OpenCode, Hermes, Pi` | 11,502 | 2026-11-23 |
| [Claude Squad](https://github.com/smtg-ai/claude-squad) | Terminal app that runs several agents at once, each in its own tmux session and worktree, with a shared diff view. `Backends: Claude Code, Codex, OpenCode, Amp, Aider, Gemini` | 8,853 | 2026-11-13 |
| [stagewise](https://github.com/stagewise-io/stagewise) | Open-source agentic IDE that creates and orchestrates agents with live previews and git workflows. Bring your own key. | 6,836 | 2026-11-04 |
| [tuios](https://github.com/Gaurav-Gosain/tuios) | Terminal multiplexer and window manager with daemon-backed persistent sessions that tracks coding agents across panes and surfaces what they need in a unified inbox. `Backends: Claude Code, Codex` | 6,764 | 2026-11-22 |
| [Emdash](https://github.com/generalaction/emdash) | Agentic dev environment running multiple agents in parallel worktrees, locally or over SSH. `Backends: Claude Code, Codex, Cursor, OpenCode, Amp, Devin, Droid, Copilot` | 6,294 | 2026-11-20 |
| [bb](https://github.com/get-bb/bb) | Self-controlling agentic IDE that orchestrates agents in live threads from desktop, web, CLI, or HTTP API. | 5,909 | 2026-11-22 |
| [1Code](https://github.com/21st-dev/1code) | Archived desktop client for running Claude Code and Codex sessions with git-worktree isolation and a live diff view. `Backends: Claude Code, Codex` `⚠️ unmaintained` | 5,568 | 2026-02-24 |
| [Agent of Empires](https://github.com/agent-of-empires/agent-of-empires) | Session manager that runs many agents in parallel across branches, watched from a TUI or browser, with optional worktree or container isolation. Backed by Mozilla.ai. `Backends: Claude Code, OpenCode, Mistral Vibe, Codex, Gemini CLI, Copilot CLI, Pi, Droid` | 4,728 | 2026-11-23 |
| [CodexMonitor](https://github.com/Dimillian/CodexMonitor) | Native macOS app for monitoring and driving many Codex sessions. `Backends: Codex` `⚠️ unmaintained` | 4,373 | 2026-03-26 |
| [MonoCode](https://github.com/hardbeat920/monocode) | Desktop UI unifying ten coding-agent CLIs in one tabbed app, with an operator mode agents can use to manage their own sessions. `Backends: Claude Code, Codex, Cursor, Grok Build, OpenCode, Antigravity, Pi, and more` | 4,123 | 2026-11-12 |
| [golutra](https://github.com/golutra/golutra) | Desktop app to run and monitor a fleet of agents in parallel with long-running workflows. Source-available under BSL. `Backends: Codex, Claude Code, OpenClaw` `⚠️ unmaintained` | 3,879 | 2026-11-19 |
| [Zeron](https://github.com/zeronsh/zeron) | Cross-device control plane that syncs sessions through an always-on daemon. Formerly comet. `Backends: Claude Code, Codex, Cursor, Devin, and others` | 3,736 | 2026-11-23 |
| [CCB (claude_codex_bridge)](https://github.com/SeemSeam/claude_codex_bridge) | Multi-agent TUI that coordinates 16 CLI agent families in visible, take-over-able workflows, with a mobile companion. `Backends: Codex, Claude Code, Gemini, Kimi, Qwen, Cursor, and more` | 3,633 | 2026-11-23 |
| [Maestro](https://github.com/RunMaestro/Maestro) | Desktop conductor for running and monitoring many agent sessions. | 3,624 | 2026-11-22 |
| [Toad](https://github.com/batrachianai/toad) | Unified terminal interface for running several CLI agents. | 3,510 | 2026-05-26 |
| [Omnara](https://github.com/omnara-ai/omnara) | Open-source alternative to Claude Managed Agents: a command centre across web, mobile, and terminal with permission prompts routed to you. | 3,439 | 2026-11-20 |
| [automaker](https://github.com/AutoMaker-Org/automaker) | Kanban board that turns tickets into working code, each card in its own worktree with tests run and committed automatically. `⚠️ unmaintained` | 3,226 | 2026-05-22 |
| [Crystal](https://github.com/stravu/crystal) | Desktop app for parallel Codex and Claude Code sessions in worktrees. Renamed to Nimbalyst, now open source. `⚠️ unmaintained` | 3,128 | 2026-02-26 |
| [Collaborator](https://github.com/collabs-inc/collab-public) | Native desktop app that arranges terminals, editors, and files for agent work on an infinite canvas. | 3,074 | 2026-06-16 |
| [CodeNomad](https://github.com/NeuralNomadsAI/CodeNomad) | Desktop and web command centre wrapping OpenCode sessions with projects, worktrees, and git integration. | 2,680 | 2026-11-23 |
| [Supacode](https://github.com/supabitapp/supacode) | Native macOS command centre running coding agents in parallel git worktrees, with a session daemon that survives restarts and SSH disconnects. | 2,400 | 2026-11-22 |
| [Cate](https://github.com/0-AI-UG/cate) | Desktop app that runs terminals, agent panels, editors, and browsers on an infinite zoomable canvas. | 2,252 | 2026-11-22 |
| [Nimbalyst](https://github.com/nimbalyst/nimbalyst) | Visual workspace for running agents in parallel with visual diff editing. The successor to Crystal, now open source under MIT. `Backends: Claude Code, Codex, OpenCode` | 2,100 | 2026-11-21 |
| [Xum](https://github.com/coder/xum) | Coder's desktop app for isolated parallel agentic work across local, worktree, and SSH workspaces. Formerly Mux. `Backends: Claude, GPT, Grok, Ollama, OpenRouter` | 2,081 | 2026-11-22 |
| [dmux](https://github.com/standardagents/dmux) | Dev-agent multiplexer that runs agents in isolated worktrees over tmux. | 1,821 | 2026-08-16 |
| [agent-flow](https://github.com/patoles/agent-flow) | Live node-graph view of Claude Code and Codex sessions branching, calling tools, and returning, as a VS Code extension or standalone web app. `Backends: Claude Code, Codex` | 1,808 | 2026-11-20 |
| [Traycer](https://github.com/traycerai/traycer) | Bring-your-own-agent workspace with shared context across models, agent-to-agent messaging, and shareable boards. | 1,774 | 2026-11-23 |
| [Ghostex](https://github.com/maddada/Ghostex) | Native macOS workspace with low-RAM Ghostty terminals, embedded browser and editor, kanban, and mobile access. | 1,726 | 2026-11-22 |
| [ai-devkit](https://github.com/codeaholicguy/ai-devkit) | CLI control plane over managed tmux with shared local memory, verification skills, and lifecycle workflows. `Backends: Claude Code, Pi, and more` | 1,673 | 2026-11-21 |
| [CLI Agent Orchestrator](https://github.com/awslabs/cli-agent-orchestrator) | AWS Labs supervisor that coordinates multiple coding CLIs in isolated tmux sessions. `Backends: Kiro, Claude Code, Codex, Antigravity, Copilot, OpenCode, Cursor, and more` | 1,641 | 2026-11-23 |
| [Agor](https://github.com/preset-io/agor) | Team command centre for coding agents. By Preset. | 1,495 | 2026-11-19 |
| [Concord MCP](https://github.com/Get-Concord-AI/concord-mcp) | Live messaging so agents on the same repo see which files each other has claimed before editing. `Backends: Claude Code, Codex, Cursor, Gemini CLI, Grok Build` | 1,491 | 2026-11-18 |
| [Jean](https://github.com/coollabsio/jean) | Tauri desktop dev environment for running several coding-agent CLIs across projects and worktrees, locally or headless. `Backends: Claude Code, Codex, Cursor, OpenCode, Pi, Grok, Kimi` | 1,430 | 2026-11-23 |
| [Vibeyard](https://github.com/elirantutia/vibeyard) | Desktop workspace for AI coding agents with a widget dashboard, per-project kanban, and swarm mode for running several sessions at once. `Backends: Claude Code, Codex, Gemini CLI` | 1,393 | 2026-11-21 |
| [Kanban](https://github.com/cline/kanban) | Cline's local web app for running many coding-agent sessions in parallel, each task in its own git worktree with integrated diff review. `Backends: any CLI agent` | 1,393 | 2026-11-06 |
| [CCCC](https://github.com/ChesterRa/cccc) | Local-first group chat where several coding-agent sessions share tasks, context, and message history to collaborate on the same codebase. `Backends: Claude Code, Codex, Grok Build, OpenCode, Copilot, Cursor, Devin, Kiro, Antigravity, and more` | 1,344 | 2026-11-23 |
| [Agent Deck](https://github.com/asheshgoplani/agent-deck) | One TUI for tracking and switching between many agent sessions. `Backends: Claude Code, Gemini CLI, OpenCode, Codex, Copilot, Crush, Cursor` | 1,294 | 2026-11-22 |
| [ccmanager](https://github.com/kbwo/ccmanager) | CLI and TUI session manager across worktrees with auto-approval of safe prompts and devcontainer support. `Backends: Claude Code, Gemini CLI, Codex, Cursor Agent, Copilot CLI, Cline, OpenCode` | 1,280 | 2026-10-27 |
| [Alethe](https://github.com/Kc1t/alethe-agents) | Local-first desktop workspace that runs several coding agents side by side, each in its own PTY pane with persistent history. `Backends: Claude Code, Codex, Copilot, and more` | 1,226 | 2026-11-08 |
| [KanDev](https://github.com/kdlbs/kandev) | Self-hostable kanban dev environment that orchestrates agents, reviews changes, and opens PRs. `Backends: any ACP agent` | 1,169 | 2026-11-23 |
| [Cezar](https://github.com/open-mercato/cezar) | Local cockpit that runs many agents at once in isolated worktrees, queues overflow, and streams live activity to a browser UI. `Backends: Claude Code, Codex, OpenCode` | 1,138 | 2026-11-23 |
| [Berd](https://github.com/block/berd) | Block's open-source desktop app for working with any model-backed coding agent, built on a Goose backend sidecar. | 1,061 | 2026-11-12 |
| [takopi](https://github.com/banteg/takopi) | Telegram bridge for coding agents that manages projects and git worktrees, runs agent sessions in parallel with a per-session queue, and lets you resume sessions from chat or the terminal. `Backends: Codex, Claude Code, OpenCode, Pi` | 1,060 | 2026-05-25 |
| [IM.codes](https://github.com/im4codes/imcodes) | Messaging layer connecting agents to each other and to your machines: shared memory, multi-agent review, and remote control from any device. `Backends: Claude Code, Codex, Gemini, and more` | 965 | 2026-11-17 |
| [Claude Code Agent Farm](https://github.com/Dicklesworthstone/claude_code_agent_farm) | Runs 20+ Claude Code agents in parallel for bug-fixing sweeps with lock-based coordination. `Backends: Claude Code` | 925 | 2026-09-21 |
| [OpenSwarm](https://github.com/Intrect-io/OpenSwarm) | Autonomous "AI dev team" orchestrator with Discord control and Linear integration. `Backends: Claude Code` | 869 | 2026-11-21 |
| [ai-maestro](https://github.com/23blocks-OS/ai-maestro) | Dashboard and peer mesh for coordinating agents across machines, with agent-to-agent messaging and persistent memory. `Backends: Claude Code, Codex, Aider, Cursor` | 857 | 2026-11-22 |
| [Arbor](https://github.com/penso/arbor) | Minimalist native desktop app built around worktrees, terminals, and diffs. | 849 | 2026-10-27 |
| [agterm](https://github.com/umputun/agterm) | Native macOS terminal with named workspaces and a control API that lets an agent script the terminal itself. | 767 | 2026-11-23 |
| [agent-manager](https://github.com/wainmann/agent-manager) | Go TUI that runs several coding-agent CLIs side by side in persistent tmux sessions, with worktrees and a diff-review pane. `Backends: Claude Code, OpenCode, Codex, Grok, Gemini CLI, and more` | 704 | 2026-11-23 |
| [Prowl](https://github.com/onevcat/Prowl) | Native macOS terminal with a canvas view of several live agent sessions and worktree-based tabs. `Backends: Claude Code, Codex` | 679 | 2026-11-23 |
| [Pane](https://github.com/greenfield-inc/Pane) | Terminal-first desktop app that gives each feature its own git worktree, branch, and port range, with a diff viewer, file explorer, and a CLI the agents themselves can use. `Backends: Claude Code, Codex, Cursor Agent, Aider, Goose, and any CLI agent` | 675 | 2026-11-23 |
| [hcom](https://github.com/aannoo/hcom) | Lets Claude Code, Codex, and other CLI agents message, watch, and spawn each other across terminals, with a live dashboard. | 667 | 2026-10-21 |
| [Kanbots](https://github.com/leodavinci1/kanbots) | Local-first kanban board that runs 11 agent CLIs in parallel, each task in its own worktree, with local or GitHub-synced issues. `Backends: Claude Code, Codex, Gemini, Cursor, Copilot, and more` | 621 | 2026-05-25 |
| [claw-orchestrator](https://github.com/Enderfga/claw-orchestrator) | Runs five agent CLIs as one runtime with persistent sessions, multi-agent "councils," an OpenAI-compatible endpoint, and an MCP server. `Backends: Claude Code, Codex, Antigravity, Cursor Agent, OpenCode` | 617 | 2026-11-21 |
| [cmux (craigsc)](https://github.com/craigsc/cmux) | Bash tool that runs a fleet of Claude Code agents on the same repo, one worktree each. `Backends: Claude Code` | 606 | 2026-06-16 |
| [uzi](https://github.com/devflowinc/uzi) | CLI for running large numbers of agents in parallel worktrees. `⚠️ unmaintained` | 584 | 2025-06-04 |
| [amux (mixpeek)](https://github.com/mixpeek/amux) | Control plane for an "AI engineering team": shared board, atomic tasks, schedules, self-healing recovery, single Rust binary. | 570 | 2026-11-23 |
| [tmux-ide](https://github.com/wavyrai/tmux-ide) | Visual app shell over ordinary tmux sessions, adding agent-status indicators while tmux keeps handling processes and persistence. | 570 | 2026-11-19 |
| [omg.dev](https://github.com/BennyKok/omg.dev) | Parallel-agent harness with a mobile client. | 561 | 2026-11-23 |
| [Runner](https://github.com/yicheng47/runner) | Native desktop app that spawns a "crew" of coding agents at once, each in its own terminal pane, with a shared event feed. `Backends: Claude Code, Codex, TRAE CLI` | 551 | 2026-11-23 |
| [Vicoa](https://github.com/vicoa-ai/vicoa) | Self-hostable agentic IDE for running a team of coding agents from desktop, mobile, or a VPS, each on its own worktree. `Backends: Claude Code, Codex, OpenCode, Gemini, Cursor, Copilot, and more` | 546 | 2026-11-23 |
| [async-code](https://github.com/ObservedObserver/async-code) | Codex-style web UI for running Claude Code and Codex on multiple tasks in parallel. `⚠️ unmaintained` | 534 | 2025-08-04 |
| [Claudexor](https://github.com/razzant/claudexor) | Local control plane that rotates quota across your Claude and Codex subscriptions and runs best-of-N cross-model review. `Backends: Claude Code, Codex, Cursor, OpenCode` | 526 | 2026-11-23 |
| [Termany](https://github.com/thinkany-ai/termany) | Agent-native terminal that runs five or more coding-agent sessions at once with status tags, cost tracking, and per-pane SSH. `Backends: Claude, Codex, Gemini, and more` | 512 | 2026-11-20 |
| [Conductor (Microsoft)](https://github.com/microsoft/conductor) | CLI for defining and running multi-agent workflows on the Copilot SDK and Anthropic Agent SDK. `Backends: Copilot, OpenAI, Claude` | 506 | 2026-11-20 |
| [agent-kanban](https://github.com/saltbo/agent-kanban) | Agent-first task board and mission control. | 506 | 2026-11-12 |
| [diri](https://github.com/cristicretu/diri) | Native workspace that runs Claude Code, Codex, Cursor, and Gemini in parallel worktrees, with diff review and PR checks in place. `Backends: Claude Code, Codex, Cursor, Gemini` | 501 | 2026-11-19 |
| [Hive](https://github.com/morapelker/hive) | Project and worktree manager built for multitasking with agents. | 477 | 2026-11-19 |
| [Intent](https://github.com/intent-hq/intent) | Monorepo for a desktop app, with daemon and iOS components, for coordinating multiple coding agents. | 465 | 2026-11-23 |
| [NTM](https://github.com/Dicklesworthstone/ntm) | Named Tmux Manager: spawns and tiles Claude, Codex, and Gemini agents across tmux panes with a command palette. | 465 | 2026-11-23 |
| [wmux](https://github.com/openwong2kim/wmux) | Desktop app for running fleets of AI coding agents side by side, each in its own pane, with a background daemon keeping sessions alive. | 459 | 2026-11-23 |
| [AgentBridge](https://github.com/raysonmeng/agent-bridge) | Keeps Claude Code and Codex as live peers in one session for mid-turn review and task splitting. `Backends: Claude Code, Codex` | 436 | 2026-09-12 |
| [FleetCode](https://github.com/built-by-as/FleetCode) | Lightweight control pane for running CLI coding agents in parallel. `Backends: Claude Code, Codex` `⚠️ unmaintained` | 426 | 2026-03-17 |
| [Calyx](https://github.com/yuuichieguchi/Calyx) | Native macOS terminal app built on Ghostty for running and supervising multiple coding agents, with an approval inbox and code-review view. `Backends: Claude Code, Codex, OpenCode, Hermes, Grok, Pi` | 367 | 2026-10-23 |
| [codex-orchestrator](https://github.com/kingbootoshi/codex-orchestrator) | Delegates tasks to Codex agents over tmux, driven by a Claude Code orchestrator. `Backends: Codex, Claude Code` | 361 | 2026-05-28 |
| [Dorothy](https://github.com/Charlie85270/Dorothy) | Desktop app combining orchestration with automations, kanban, and MCP servers. | 357 | 2026-10-23 |
| [Kanban Code](https://github.com/langwatch/kanban-code) | Native macOS and Windows kanban board for running several Claude Code sessions in parallel, each in its own git worktree with tmux terminals and PR tracking. `Backends: Claude Code` | 342 | 2026-11-22 |
| [Termic](https://github.com/simion/termic) | Open-source Conductor alternative that spawns real CLI binaries, one worktree per agent. | 337 | 2026-11-23 |
| [dev-3.0](https://github.com/h0x91b/dev-3.0) | "Mission control for the one-person studio." Kanban, worktrees, and a tmux fleet runner. `Backends: Claude Code, Codex, Gemini CLI, OpenCode` | 336 | 2026-11-22 |
| [shipyard](https://github.com/cosscom/shipyard) | Desktop app that runs coding agents on your own dev boxes, each in its own worktree, with an agent dashboard and prompt/wait/check/loop orchestration. `Backends: Claude Code, Codex, Gemini CLI, OpenCode, Cursor Agent, Pi` | 334 | 2026-11-02 |
| [Kander](https://github.com/dualface/kander) | Kanban board for coordinating several coding agents, each task in its own git worktree with an independent reviewer agent before merge. | 333 | 2026-11-23 |
| [Roamgate](https://github.com/powerfooI/roamgate) | Browser-based client for the Herdr terminal server that lets you control terminals, monitor coding agents, and review files and diffs from desktop or mobile. | 329 | 2026-11-18 |
| [Aizen](https://github.com/vivy-company/aizen) | macOS workspace for parallel development that gives each project or branch its own terminal, files, browser, agent session, and git state. | 312 | 2026-07-25 |
| [Sculptor](https://github.com/imbue-ai/sculptor) | Desktop app that runs agents in parallel Docker containers with a pairing mode to sync work into your IDE. By Imbue. `Backends: Claude Code, Pi, any terminal agent` | 285 | 2026-11-20 |
| [Repowire](https://github.com/prassanna-ravishankar/repowire) | Local control layer that lets running coding agents discover each other and message across projects, with a browser, Telegram, or Slack dashboard. `Backends: Claude Code, Codex, OpenCode, Pi` | 277 | 2026-11-20 |
| [MulmoTerminal](https://github.com/receptron/mulmoterminal) | Browser-based terminal grid for parallel agent sessions, color-coded by status, with tmux persistence and one-click PR creation. `Backends: Claude Code, Codex, Antigravity, Grok, Copilot CLI, Cursor CLI` | 276 | 2026-11-23 |
| [Terragon OSS](https://github.com/terragon-labs/terragon-oss) | Source of the remote background-agent orchestrator, released when the company shut down in February 2026. `⚠️ unmaintained` | 261 | 2026-02-10 |
| [ccmux](https://github.com/epilande/ccmux) | tmux-based manager for coding-agent sessions: live status, spawn into worktrees, and hand work between agents. `Backends: Claude Code, Codex, Cursor, OpenCode, Pi, Copilot, Gemini CLI, Antigravity` | 248 | 2026-11-22 |
| [Pi Herdsman](https://github.com/boadij/pi-herdsman) | Orchestration layer for Pi where a main session delegates bounded tasks to background agents through a Chief, Manager, Lead, and Agent supervision hierarchy. `Backends: Pi` | 241 | 2026-11-23 |
| [clodfarm](https://github.com/matank001/clodfarm) | Container farm of Claude Code agents that splits a mission into sub-agents on worktrees, merges only when tests pass, and paces itself on each account's usage limits. `Backends: Claude Code` | 224 | 2026-10-20 |
| [Claude Command Center (CCC)](https://github.com/amirfish1/claude-command-center) | Local dashboard that spawns and monitors sessions across eight agent engines with cost tracking. `Backends: Claude Code, Codex, Cursor, Antigravity, Kimi, Grok, Devin, Droid` | 221 | 2026-11-23 |
| [Constellagent](https://github.com/owengretzinger/constellagent) | macOS app giving each agent its own terminal, editor, and isolated git worktree in one window. `⚠️ unmaintained` | 217 | 2026-05-05 |
| [Operator](https://github.com/iishyfishyy/operator-oss) | Run many sessions in parallel across every project from one screen, local-first and worktree-isolated. `Backends: Claude Code, Codex` | 211 | 2026-10-12 |
| [claudectl](https://github.com/mercurialsolo/claudectl) | Swarm orchestration for Claude Code with a local "brain" that steers agents from your stated preferences. `Backends: Claude Code` | 205 | 2026-11-02 |
| [Ivy Tendril](https://github.com/Ivy-Interactive/Ivy-Tendril) | Plan-based agent lifecycle with verification gates and self-improving memory. | 204 | 2026-11-23 |
| [Tempest](https://github.com/tempestai-dev/tempest) | Runs several CLI agents in parallel worktrees, sharing a local code-knowledge graph to cut token and tool-call overhead. `Backends: Claude Code, Aider, Cline, and others` | 200 | 2026-11-06 |
| [Rove](https://github.com/Sma1lboy/rove) | Terminal-based workspace that runs several coding agents in parallel, giving each task its own git worktree and branch, with a scriptable API and plugin system. `Backends: Claude Code, Codex, Copilot` | 189 | 2026-11-22 |
| [Ouijit](https://github.com/ouijit/ouijit) | Kanban board and terminals wired by lifecycle hooks, per-task worktrees, and optional VM sandboxing. | 184 | 2026-11-22 |
| [Hermes Virtual Office](https://github.com/JuniorXcoder/hermes-virtual-office) | 3D virtual office that visualizes a fleet of Hermes coding agents at their desks, syncs a Kanban board to Hermes tasks, and lets you peek at an agent's terminal or chat with it live. `Backends: Hermes` | 172 | 2026-10-09 |
| [amux (andyrewlee)](https://github.com/andyrewlee/amux) | Wrapper-free TUI for parallel agents with worktree support. | 170 | 2026-11-05 |
| [CliDeck](https://github.com/rustykuntz/clideck) | Local workspace that runs several CLI coding agents in one browser window, grouped into projects with resumable sessions and cross-session messaging. `Backends: Claude Code, Codex, Gemini CLI, OpenCode, Pi` | 162 | 2026-10-30 |
| [ccswarm](https://github.com/nwiizo/ccswarm) | Rust workflow engine that runs plan, consensus, implement, review, fix, with worktree isolation and audit trails. `Backends: Claude Code, Codex` | 157 | 2026-11-07 |
| [OpenKanban](https://github.com/TechDufus/openkanban) | Terminal kanban board for orchestrating agents. | 155 | 2026-06-12 |
| [Kangentic](https://github.com/Kangentic/kangentic) | Desktop kanban where dragging a card starts and tracks an agent. `Backends: Claude Code, Codex, Gemini CLI, Antigravity, OpenCode, Droid, Cursor, Copilot, Aider, Ollama` | 151 | 2026-11-23 |
| [KanVibe](https://github.com/rookedsysc/kanvibe) | Keyboard-first desktop kanban with embedded terminals, worktrees, and hook-driven task tracking. | 151 | 2026-11-23 |
| [ADE](https://github.com/arul28/ADE) | Real-time session sync across macOS, Windows, iOS, web, and terminal. `Backends: Claude Code, Codex, Cursor, Droid, OpenCode` | 146 | 2026-11-23 |
| [Dray](https://github.com/monorepo-labs/dray) | Desktop app that wraps CLI coding agents in a native chat interface, giving each session its own git worktree, diff view, and PR/issue panels, with a CLI for agents to message other sessions. `Backends: Claude Code, Codex, Pi` | 145 | 2026-11-23 |
| [Clodex](https://github.com/avirtual/clodex) | Session manager for fleets of Claude Code, Codex, and Muse agents running as real terminals, with agent-to-agent messaging and ticket-driven worktree teams across Mac and Linux. `Backends: Claude Code, Codex, Muse` | 139 | 2026-11-23 |
| [frankenterm](https://github.com/Dicklesworthstone/frankenterm) | Terminal hypervisor for agent swarms: real-time WezTerm pane capture, state-machine pattern detection, and a JSON API to coordinate fleets. | 129 | 2026-11-23 |
| [ADHDev](https://github.com/vilmire/adhdev) | Self-hosted daemon and dashboard. "Repo Mesh" claims tasks into isolated worktrees and a "Refinery" gates finished branches before fast-forwarding to main. | 123 | 2026-11-22 |
| [TaskTrooper](https://github.com/makifbaysal/tasktrooper) | Local-first desktop kanban where role agents (PM, architect, backend, frontend, mobile, QA) pick up cards and drive them through your own agent CLI end to end. `Backends: Claude Code, Cursor CLI, Antigravity, OpenCode` | 123 | 2026-11-19 |
| [tlbx](https://github.com/tlbx-ai/tlbx) | Self-hosted terminal and browser multiplexer for persistent shells and coding agents across Windows, macOS, and Linux. | 119 | 2026-11-21 |
| [Code Conductor](https://github.com/ryanmac/code-conductor) | GitHub-native orchestration for parallel Claude Code sub-agents without merge conflicts. `Backends: Claude Code` `⚠️ unmaintained` | 116 | 2026-03-30 |
| [Overseer](https://github.com/mmnavarr/overseer) | Plugin for the Tern terminal that gives every branch in progress one panel showing its worktree, agent, GitHub pull request, and Linear ticket. `Backends: Claude Code, Codex, Gemini, Aider` | 114 | 2026-11-20 |
| [Canopy](https://github.com/juliensimon/canopy) | Native macOS app that runs several Claude Code sessions in parallel tabs, each in its own git worktree and sandbox, with collision detection and one-click merge. `Backends: Claude Code` | 112 | 2026-10-20 |
| [ReevesAgents](https://github.com/mertkayacs/reevesagents) | Local tmux-based workspace for running multiple AI coding CLIs side by side, controllable via CLI, TUI, web UI, or an MCP server that lets one agent spawn and steer others. `Backends: Claude Code, Codex, OpenCode, Hermes, Kimi` | 108 | 2026-11-20 |
| [Executive](https://github.com/ncr5012/executive) | Real-time dashboard for orchestrating many Claude Code sessions. `Backends: Claude Code` `⚠️ unmaintained` | 107 | 2026-02-02 |
| [ness](https://github.com/ness-dev/ness) | IDE for coding with agents where each git worktree is a tab, with status icons for working, waiting, and blocked. | 105 | 2026-11-23 |
| [Agent Orchestration Standard (AOS-1)](https://github.com/tomtomsatnav/agent-orchestration-standard) | Read-only dashboard, terminal view, and MCP server that graphs Claude Code sessions, tokens, cost, and file conflicts; it never starts, stops, or steers agents itself. `Backends: Claude Code` | 104 | 2026-11-17 |
| [Sugar](https://github.com/roboticforce/sugar) | Local-first mission control board for a fleet of coding agents: a durable SQLite task queue with claims and leases, live monitoring, cost attribution, and shared memory over MCP. `Backends: Claude Code, Codex, Cursor, Goose, OpenCode, and any MCP harness` | 103 | 2026-11-20 |
| [harness (majiayu000)](https://github.com/majiayu000/harness) | Rust control plane for fleets of parallel agents with policy, cross-agent review, and observability. `Backends: Claude Code, Codex` | 92 | 2026-11-19 |
| [ultraswarm](https://github.com/fubak/ultraswarm) | Multi-CLI swarm orchestrated by Claude Code: external CLIs code in isolated worktrees, Claude verifies and merges. `Backends: Claude Code and others` | 83 | 2026-07-03 |
| [ai-agent-board](https://github.com/DanWahlin/ai-agent-board) | Drag-and-drop kanban that assigns tasks to agents with streaming output and worktree isolation. | 74 | 2026-08-25 |
| [Codealong](https://github.com/codealong/codealong) | Desktop app for macOS and Linux that finds every coding agent session on your machine, wherever it started, and shows them on one board by repo, worktree, branch and PR, with approvals and replies from a floating bar. `Backends: Claude Code, Codex, OpenCode, Antigravity, Cursor` | 73 | 2026-11-23 |
| [YYLO](https://github.com/yylo-dev/yylo) | Command-line orchestrator that runs each coding-agent task in its own branch and worktree, keeps the kanban board in a git-native ledger, and reviews changes by risk in a merge queue before merging. `Backends: Pi, Codex` | 69 | 2026-10-15 |
| [ai-fleet](https://github.com/nachoal/ai-fleet) | Simple fleet manager for parallel agents over tmux. `Backends: Claude Code, Codex` `⚠️ unmaintained` | 68 | 2025-06-06 |
| [factory-factory](https://github.com/purplefish-ai/factory-factory) | Workspace-based environment for running multiple Claude Code and Codex sessions in parallel. `Backends: Claude Code, Codex` | 54 | 2026-11-23 |
| [Kaban](https://github.com/kaban-board/kaban) | Minimal terminal kanban for coding agents. `⚠️ unmaintained` | 50 | 2026-01-31 |
| [Wit](https://github.com/amaar-mc/wit) | Coordination protocol that declares intent, locks the functions being touched via Tree-sitter, and detects conflicts before code is written. `⚠️ unmaintained` | 46 | 2026-03-27 |
| [SuperAgent](https://github.com/pungme/superagent-desktop) | macOS desktop where each chat is its own agent session in its own git worktree, with a real browser the agent drives on your existing logins, a per-chat iOS Simulator, scheduled routines, and an iPhone companion for remote approvals. `Backends: Claude Code, Codex` | 37 | 2026-11-23 |
| [Volt](https://github.com/LeulAria/volt) | Open-source agentic editor on the VS Code core that runs agent CLIs over ACP with subagents, Git worktrees, checkpoints, and hunk-level review. `Backends: Claude Code, Codex, Grok, Ollama` | 34 | 2026-11-19 |
| [agi-cli](https://github.com/phnx-labs/agi-cli) | "A meta-harness for building agent factories." Installs, pins, and runs several agent harnesses with shared skills and SSH fleet dispatch. | 27 | 2026-11-16 |
| [Camelot](https://github.com/T0ha/camelot) | Kanban-based coding agent orchestrator in Elixir, built on KISS. | 23 | 2026-11-19 |
| [Althar](https://github.com/AltharIDE/althar) | Desktop IDE where a coordinator assigns coding agents to tasks and another model reviews their work. `Backends: Claude Code, Codex, OpenCode, GitHub Copilot, Junie` | 22 | 2026-11-22 |
| [Squad (bradygaster)](https://github.com/bradygaster/squad) | Copilot-based lead, frontend, backend, and tester agents that live in the repo as files, with knowledge compounding through committed decisions. `Backends: Copilot` | 9 | 2026-11-05 |
| [Sqwakie](https://sqwakie.si) | One live dashboard and peer-to-peer messaging for the Claude Code and Codex agents running across a team's machines, with project kanbans whose cards agents can start, review, and finish. Free for 2 people, paid plans per person, FSL-1.1-ALv2 license. `Backends: Claude Code, Codex` `💰` | — | — |

## Isolation: worktrees and sandboxes

Give each agent its own branch, container, or VM so many can work at once safely.

| Name | Description | Stars | Last commit |
| --- | --- | ---: | --- |
| [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell) | Policy-driven sandbox enforcing filesystem, syscall, and network constraints at the kernel level. `Backends: Claude Code, Codex, Cursor, OpenCode` | 21,882 | 2026-11-23 |
| [OpenSandbox](https://github.com/opensandbox-group/OpenSandbox) | Alibaba's sandbox platform with multi-language SDKs, unified Docker and Kubernetes APIs, and pluggable gVisor, Kata, or Firecracker isolation. | 17,819 | 2026-11-23 |
| [E2B](https://github.com/e2b-dev/e2b) | Open-source Firecracker microVM sandboxes that start in under 200ms. Framework-agnostic. | 14,978 | 2026-11-18 |
| [Agent Executor (ax)](https://github.com/google/ax) | Google's open-source distributed agent runtime. | 14,858 | 2026-11-23 |
| [Worktrunk](https://github.com/max-sixty/worktrunk) | Makes worktrees as easy as branches, built for running agents in parallel. `Backends: anything you can launch from a shell` | 12,703 | 2026-11-23 |
| [Sandcastle](https://github.com/mattpocock/sandcastle) | TypeScript library for orchestrating agents inside Docker, Podman, or Vercel sandboxes. | 9,238 | 2026-11-16 |
| [Microsandbox](https://github.com/superradcompany/microsandbox) | Local-first microVM runtime with hardware isolation and fast pause and resume. `Backends: Claude Code, Cursor, Codex, Gemini CLI, Copilot` | 9,180 | 2026-11-22 |
| [Sandbox Runtime (srt)](https://github.com/anthropics/sandbox-runtime) | Anthropic's container-free OS-level sandboxing (Seatbelt on macOS, bubblewrap on Linux) for Claude Code and MCP servers. | 7,236 | 2026-11-12 |
| [smolvm](https://github.com/smol-machines/smolvm) | Portable libkrun microVM with deny-by-default egress and brokered secrets. | 7,186 | 2026-11-23 |
| [AIO Sandbox](https://github.com/agent-infra/sandbox) | All-in-one Docker sandbox with browser, shell, filesystem, MCP, and VS Code Server. | 6,380 | 2026-09-14 |
| [Sandstorm](https://github.com/deeplethe/sandstorm) | Runs thousands of AI agent sandboxes on inexpensive machines by pausing and checkpointing idle gVisor containers. Formerly forkd, which used Firecracker microVMs. | 6,103 | 2026-11-20 |
| [Kubernetes Agent Sandbox](https://github.com/kubernetes-sigs/agent-sandbox) | Official Kubernetes SIG custom resource for declarative isolated agent runtimes, backed by gVisor or Kata. | 4,689 | 2026-11-21 |
| [ArcBox](https://github.com/arcboxlabs/arcbox) | Rust container and VM runtime for macOS whose sandbox tier boots a separate, kernel-isolated disposable microVM for each AI agent or untrusted job. | 4,228 | 2026-11-05 |
| [Container Use](https://github.com/dagger/container-use) | Each agent gets its own container and git branch. By Dagger. `Backends: any MCP agent` | 4,105 | 2026-08-12 |
| [workmux](https://github.com/raine/workmux) | Pairs git worktrees with tmux, kitty, WezTerm, or Zellij windows for parallel agent work. | 3,081 | 2026-11-21 |
| [BoxLite](https://github.com/boxlite-ai/boxlite) | MicroVM light enough to embed on a laptop and elastic enough for a cloud of agents. | 2,683 | 2026-11-23 |
| [Gondolin](https://github.com/earendil-works/gondolin) | Linux microVM sandbox with a TypeScript control plane that enforces host-side network, filesystem, and secret policy over what an agent can reach. | 2,470 | 2026-11-13 |
| [Landrun](https://github.com/Zouuup/landrun) | Runs any Linux process in an unprivileged Landlock sandbox, kernel-native. | 2,351 | 2026-11-21 |
| [Treehouse](https://github.com/kunchenguid/treehouse) | Keeps a reusable pool of isolated git worktrees, or Jujutsu workspaces, so parallel agent sessions get a clean environment instantly without losing installed dependencies or build caches. | 1,958 | 2026-11-18 |
| [Celesto](https://github.com/CelestoAI/celesto) | Persistent secure computer for long-running agents on Firecracker and QEMU. Formerly SmolVM (Celesto), unrelated to smolvm above. | 1,882 | 2026-11-22 |
| [Git Worktree Runner (gtr)](https://github.com/coderabbitai/git-worktree-runner) | Portable worktree CLI that automates per-branch setup with AI tool integration. | 1,816 | 2026-11-17 |
| [Overalls](https://github.com/ghuntley/overalls) | Geoffrey Huntley's self-hosted platform of persistent Firecracker microVMs for development machines, with Claude Code and Codex preinstalled and a built-in agent that keeps working after you close your laptop. Formerly loom. Research preview, launching November 2026. | 1,668 | 2026-11-23 |
| [Sandbox Agent](https://github.com/rivet-dev/agents) | Server that runs inside a sandbox and lets you control a coding agent remotely over HTTP with a normalized event stream. `Backends: Claude Code, Codex, OpenCode, Cursor, Amp, Pi` | 1,653 | 2026-11-20 |
| [Cloudflare Sandbox SDK](https://github.com/cloudflare/sandbox-sdk) | Sandboxed containers on Cloudflare's edge for isolating agent execution. | 1,167 | 2026-11-02 |
| [LLM Sandbox](https://github.com/vndee/llm-sandbox) | Python library for running LLM-generated code in isolation, with an MCP server. | 1,146 | 2026-11-17 |
| [Parallel Code](https://github.com/johannesjo/parallel-code) | Dispatches agents in parallel, one worktree and branch each. `Backends: Claude Code, Codex, Gemini CLI, Copilot CLI, Antigravity CLI` | 1,105 | 2026-11-21 |
| [clawk](https://github.com/clawkwork/clawk) | Gives each coding agent a disposable Linux microVM instead of your laptop, with restricted networking. `Backends: Claude Code, Codex, Pi, OpenCode` | 1,049 | 2026-08-13 |
| [Fence](https://github.com/fencesandbox/fence) | Container-free sandbox that restricts network and filesystem for commands. | 1,025 | 2026-09-10 |
| [Shuru](https://github.com/superhq-ai/shuru) | Local-first microVM sandbox for running AI agents on macOS and Linux, with checkpoints, network allowlists, and host-side secret injection so real keys never reach the VM. | 902 | 2026-11-15 |
| [Arrakis](https://github.com/abshkbh/arrakis) | Self-hosted sandbox for AI agent code execution and computer use, with a REST API, Python SDK, automatic port forwarding, and MicroVM isolation that supports backtracking. `⚠️ unmaintained` | 897 | 2025-06-02 |
| [NVX](https://github.com/microsoft/nvx) | Microsoft's ultra-light micro-VM sandbox, built on OpenVMM, for running untrusted agentic coding workloads with hardware-enforced isolation. | 861 | 2026-11-23 |
| [Katakate (k7)](https://github.com/Katakate/k7) | Self-hosted VM sandbox infrastructure with CLI, API, and Python SDK. | 827 | 2026-10-18 |
| [Coi (code-on-incus)](https://github.com/coipond/coi) | Gives each agent its own Incus system container with root, systemd, and Docker. | 792 | 2026-11-23 |
| [yolobox](https://github.com/finbarr/yolobox) | Container wrapper that grants full sudo inside while keeping the host home directory out of reach. | 657 | 2026-11-01 |
| [Leash](https://github.com/strongdm/leash) | StrongDM's container wrapper that enforces Cedar policies on agent activity. `⚠️ unmaintained` | 600 | 2026-04-06 |
| [agentbox](https://github.com/madarco/agentbox) | Runs multiple coding agents in parallel sandboxed VMs with one command, on your own machine or in the cloud. | 585 | 2026-11-21 |
| [Warren](https://github.com/jayminwest/warren) | Runs Pi and Claude Code sessions as isolated, observable workloads on local, Docker, or Kubernetes runtimes, with spend limits, live intervention, and automatic git delivery. `Backends: Pi, Claude Code` | 521 | 2026-11-14 |
| [gwq](https://github.com/d-kuro/gwq) | Fuzzy-finder git worktree CLI with a status dashboard and tmux integration, built with running parallel AI coding agents as a primary use case. | 484 | 2026-10-02 |
| [Coasts](https://github.com/coast-guard/coasts) | Runs N isolated instances of a full dev environment, one per git worktree, booting from your existing Docker Compose file. `⚠️ unmaintained` | 435 | 2026-04-28 |
| [Nehemiah](https://github.com/boringcomputers/nehemiah) | On-demand Firecracker microVMs with a browser, terminal, and coding agents inside, driven by an AI that can operate the machine itself. `Backends: Claude, Codex, Cursor, Pi` | 348 | 2026-08-11 |
| [agent-worktree](https://github.com/nekocode/agent-worktree) | Git worktree workflow tool for isolated, parallel agent environments. | 282 | 2026-10-20 |
| [brig](https://github.com/brig-sh/brig) | Go CLI and session daemon that run a coding agent inside a microVM sandbox, mounting only the target project directory. | 273 | 2026-11-22 |
| [VibeTree](https://github.com/sahithvibudhi/vibe-tree) | Runs every coding agent in its own git worktree and branch, as desktop app, web UI, or CLI. `Backends: Claude Code, Codex, Gemini, Aider` | 273 | 2026-07-25 |
| [Vercel Sandbox](https://github.com/vercel/sandbox) | Vercel's ephemeral compute primitive for untrusted or agent-generated code. | 229 | 2026-11-23 |
| [agent-sandbox](https://github.com/mattolson/agent-sandbox) | Local environment with minimal filesystem access, a network firewall, and secret injection for agents. `Backends: Claude Code, Codex, Gemini, OpenCode, Copilot` | 215 | 2026-10-21 |
| [packnplay](https://github.com/obra/packnplay) | Launches Claude Code, Codex, or Gemini in per-worktree Docker containers with dev-container management. By Jesse Vincent. `Backends: Claude Code, Codex, Gemini CLI` `⚠️ unmaintained` | 175 | 2026-03-21 |
| [pi pod](https://github.com/pi-pod/pipod) | Self-hostable server and CLI that runs Pi coding-agent sessions in isolated remote sandboxes on a machine you control. `Backends: Pi` | 168 | 2026-11-20 |
| [gwm-cli](https://github.com/kbrdn1/gwm-cli) | Rust CLI and TUI git worktree manager that bootstraps project setup, links issues, and shows which AI agent is working where. | 156 | 2026-10-27 |
| [yume](https://github.com/aofp/yume) | Native desktop UI for Claude Code with session orchestration, streaming output, and background-agent management across several providers. `Backends: Claude Code` | 155 | 2026-11-22 |
| [Pullrun](https://github.com/pullrun/pullrun) | Boots the same OCI image as a Linux container, a Firecracker microVM, or an Apple Silicon VM, with an MCP server for OpenCode, Claude Code, and Cursor. | 135 | 2026-11-23 |
| [coop](https://github.com/AndrewDryga/coop) | Runs agents in isolated workspaces with controlled access to repos and credentials, for interactive and unattended work. | 104 | 2026-11-21 |
| [Background Agents (Daytona)](https://github.com/jamesmurdza/background-agents) | Building-block packages for running coding agents in isolated Daytona sandboxes: terminal, git, jobs, credentials, skills. | 93 | 2026-11-23 |
| [Moru](https://github.com/moru-ai/moru) | Runs each agent session in its own Firecracker microVM in the cloud. `⚠️ unmaintained` | 78 | 2026-02-07 |
| [Cleanroom](https://github.com/buildkite/cleanroom) | Buildkite's policy-controlled Firecracker microVM with deny-default egress and brokered secrets. | 71 | 2026-10-04 |
| [claudebox](https://github.com/numtide/claudebox) | "Responsible Claude Code YOLO": a sandboxed environment for running Claude Code with permissions off. | 62 | 2026-10-13 |
| [Tracekit-box](https://github.com/Cygnux-Labs/Tracekit-box) | Runs each agent job in a networkless Firecracker microVM and routes every network call, secret, model call, and file change through host-side checkpoints that a separate signer records in a verifiable bundle. | 36 | 2026-11-05 |
| [agentree](https://github.com/AryaLabsHQ/agentree) | Create and manage isolated git worktrees for coding agents. Single purpose. `⚠️ unmaintained` | 36 | 2025-06-11 |
| [code-airlock](https://github.com/Trivo25/code-airlock) | Runs an agent unattended inside a disposable microVM, with its work committed to git so you review from the host. | 23 | 2026-07-11 |
| [parallel-worktrees](https://github.com/SpillwaveSolutions/parallel-worktrees) | Claude Code skill for parallel worktree workflows. `Backends: Claude Code` `⚠️ unmaintained` | 16 | 2025-12-29 |

## Backlog and spec layer

What feeds the factory: issue trackers built for agents, PRD-to-task tools, and spec-driven methods.

| Name | Description | Stars | Last commit |
| --- | --- | ---: | --- |
| [Superpowers](https://github.com/obra/superpowers) | Skills framework and methodology for Claude Code: brainstorm, write plan, execute plan, TDD, systematic debugging. `Backends: Claude Code` | 324,533 | 2026-11-03 |
| [spec-kit](https://github.com/github/spec-kit) | GitHub's toolkit for spec-driven development: spec, plan, tasks, code, with a project constitution. Works across 30+ agents. | 151,080 | 2026-11-20 |
| [OpenSpec](https://github.com/Fission-AI/OpenSpec) | Splits `specs/` (current truth) from `changes/` (proposals), each change with its own proposal, design, and tasks. | 75,518 | 2026-11-19 |
| [Get Shit Done (GSD)](https://github.com/gsd-build/get-shit-done) | Discuss, plan, execute, verify per phase, each in a fresh context window with atomic commits. Archived, replaced by GSD Core below. `⚠️ unmaintained` | 64,115 | 2026-05-31 |
| [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | Planning agents (analyst, PM, architect) write PRDs and architecture docs, then a scrum master agent turns them into detailed stories for implementation agents. | 55,641 | 2026-11-12 |
| [Beads](https://github.com/gastownhall/beads) | Git-backed, dependency-aware issue tracker built as agent memory. The work queue behind Gas Town. By Steve Yegge. `Backends: any CLI agent` | 28,940 | 2026-11-20 |
| [Claude Task Master](https://github.com/eyaltoledano/claude-task-master) | Parses a PRD into a dependency-aware task graph and exposes next-task tools for agents to work through. `⚠️ unmaintained` | 28,527 | 2026-04-23 |
| [Compound Engineering Plugin](https://github.com/EveryInc/compound-engineering-plugin) | Every's plugin. The `/lfg` command runs plan, execute, simplify, review, browser-test, commit, PR, and watch CI with a bounded repair loop. `Backends: Claude Code, Codex, Cursor` | 26,203 | 2026-11-20 |
| [Archon](https://github.com/coleam00/Archon) | "The first open-source harness builder for AI coding." Combines agent steps with scripts, validation gates, approvals, and isolated worktrees. By Cole Medin. | 23,982 | 2026-11-23 |
| [GSD Core](https://github.com/open-gsd/gsd-core) | Successor to GSD. Context-engineering, spec-driven framework that cycles agents through discuss, plan, execute in parallel waves, verify, and ship. `Backends: Claude Code, OpenCode, Cursor, Copilot, and others` | 11,781 | 2026-11-23 |
| [Backlog.md](https://github.com/MrLesk/Backlog.md) | Stores the backlog as markdown task files in the repo with a CLI and terminal kanban shared by humans and agents. `Backends: Claude Code, Codex, Gemini CLI, Kiro, Cursor` | 7,471 | 2026-11-22 |
| [AI-DLC Workflows](https://github.com/awslabs/aidlc-workflows) | AWS Labs' workflow-steering rules for an AI-driven development life cycle. `Backends: Kiro, Cursor, Cline, Claude Code` | 6,215 | 2026-11-23 |
| [Agent OS](https://github.com/buildermethods/agent-os) | Injects your codebase standards into spec writing so different agents produce consistent code. By Builder Methods. | 5,634 | 2026-10-07 |
| [Vibe-Skills](https://github.com/foryourhealth111-pixel/Vibe-Skills) | Governed Codex skill harness that routes skills through requirement freeze, plan approval, execution, and verification evidence. `Backends: Codex` | 3,841 | 2026-11-09 |
| [Conductor (gemini-cli-extensions)](https://github.com/gemini-cli-extensions/conductor) | Turns the agent into a project manager that moves every task through context, spec and plan, then implementation, before it writes code. `Backends: Antigravity, Claude Code` | 3,801 | 2026-09-01 |
| [cc-sdd](https://github.com/gotalab/cc-sdd) | Kiro-style spec-driven harness (requirements, design, tasks, steering) for eight agent platforms. `Backends: Claude Code, Codex, Cursor, Copilot, Windsurf, OpenCode, Gemini CLI, Antigravity` | 3,775 | 2026-09-23 |
| [spec-kitty](https://github.com/spec-kitty/spec-kitty) | CLI that turns a PRD into specs, plans, and tasks, then runs each work package in its own git worktree with review and acceptance gates before merge. `Backends: Claude Code, Cursor, Copilot, Gemini, Windsurf, OpenCode, Qwen, Codex` | 1,738 | 2026-11-23 |
| [MoAI-ADK](https://github.com/modu-ai/moai-adk) | Harness that wraps Claude Code with spec-driven plan, implement, and verify cycles, independent plan and sync audits, and optional cost routing to GLM models. `Backends: Claude Code, GLM` | 1,259 | 2026-11-13 |
| [Roast](https://github.com/Shopify/roast) | Shopify's Ruby DSL for structured AI workflows that interleave deterministic steps with agentic ones. `Backends: Claude Code, Pi` | 1,258 | 2026-11-13 |
| [Spec-Driven Develop](https://github.com/zhu1090093659/spec_driven_develop) | Markdown skills that take an agent through architecture-first planning, task breakdown, GitHub issue and PR tracking, and findings-first review, for any Markdown-capable coding agent. `Backends: Claude Code, Codex, Cursor` | 992 | 2026-07-26 |
| [Citadel](https://github.com/SethGammon/Citadel) | Operating layer for Claude Code and Codex that adds persistent project memory, intent routing, safety hooks with approval boundaries, cost telemetry, and isolated worktrees across sessions. `Backends: Claude Code, Codex` | 938 | 2026-11-04 |
| [Spectra](https://github.com/kaochenlong/spectra-app) | Desktop app, CLI, and agent skills for planning, implementing, and archiving spec-driven changes. `Backends: Claude Code, Codex, Cursor, Copilot, Antigravity, Junie` | 778 | 2026-11-17 |
| [Shotgun](https://github.com/shotgun-sh/shotgun) | Indexes your codebase and turns feature requests into staged, file-level specs so coding agents stay on task. `Backends: Claude Code, Codex, Cursor, Antigravity` `⚠️ unmaintained` | 687 | 2026-04-14 |
| [statewright](https://github.com/statewright/statewright) | State machine guardrails that constrain which tools an agent can call in each workflow phase. | 511 | 2026-11-18 |
| [Agent Kernel](https://github.com/oguzbilgic/agent-kernel) | A minimal kernel of markdown files that makes any coding agent stateful across sessions. `⚠️ unmaintained` | 337 | 2026-03-25 |
| [Spexcode](https://github.com/shuxueshuxue/Spexcode) | Keeps a versioned spec tree in git linked to the code it governs, detects drift, and dispatches agents into isolated worktrees to fix it. `Backends: Claude Code, Codex, OpenCode, Pi` | 330 | 2026-11-02 |
| [guild](https://github.com/mathomhaus/guild) | Single Go binary giving several coding agents shared context, memory, and a task board with atomic locks, backed by local SQLite. | 297 | 2026-10-10 |
| [issue-graph](https://github.com/vercel-labs/issue-graph) | Traces related issues, competing changes, and unresolved follow-ups across a backlog so an agent does not duplicate work already done, with scoring and HTML dashboards. | 198 | 2026-11-20 |
| [perles](https://github.com/zjrosen/perles) | Query language, dependency views, and multi-view kanban TUI for Beads, doubling as a multi-agent control plane. | 195 | 2026-11-17 |
| [adlc-team-skills](https://github.com/tikalk/adlc-team-skills) | Agent skills that inject team context and decision records (PDRs, ADRs, CDRs) into coding agents at session start so they work with team knowledge instead of as strangers. `Backends: Claude Code, Codex, OpenCode, Cursor, Copilot, and more` | 146 | 2026-11-23 |
| [fspec](https://github.com/sengac/fspec) | Spec-driven multi-agent harness built explicitly as infrastructure for the dark factory model. | 107 | 2026-11-09 |
| [Buildomator](https://github.com/buildomator/buildomator) | Claude Code-native successor to GSD with MCP-backed project state, cross-session memory, and drift detection. `Backends: Claude Code` | 104 | 2026-11-04 |
| [AgentSPEX](https://github.com/ScaleML/AgentSPEX) | UIUC's declarative YAML spec language for agent workflows with typed steps, branching, loops, and a Docker sandbox with checkpointing. | 101 | 2026-06-11 |
| [beadboard](https://github.com/jordanhindo/beadboard) | Multi-agent orchestration and communication built on Beads. | 72 | 2026-07-26 |
| [Tessl SDD tile](https://github.com/tesslio/spec-driven-development-tile) | Open methodology tile that makes an agent interview you, write specs, wait for approval, then implement against them. `⚠️ unmaintained` | 59 | 2026-03-30 |
| [fab-kit](https://github.com/sahil87/fab-kit) | Structured, spec-driven workflow for coding agents. Go. | 35 | 2026-11-20 |
| [linear-beads](https://github.com/nikvdp/linear-beads) | A simpler alternative to Beads that uses Linear itself as the storage backend. | 33 | 2026-09-24 |
| [autonomous-coding quickstart](https://github.com/anthropics/claude-quickstarts/tree/main/autonomous-coding) | Anthropic's demo of the initializer-plus-coding-agent harness: session one writes a feature list, later sessions make incremental progress via files and git. `Backends: Claude Agent SDK` | — | — |

## Review and merge gates

What checks agent output before it ships.

| Name | Description | Stars | Last commit |
| --- | --- | ---: | --- |
| [open-code-review](https://github.com/alibaba/open-code-review) | Alibaba's review CLI: deterministic rule pipelines plus an LLM agent, with line-level comments. | 55,553 | 2026-11-22 |
| [PR-Agent](https://github.com/The-PR-Agent/pr-agent) | The original open-source PR reviewer, now community-run after Qodo's commercial pivot. Review, suggestions, and Q&A. | 16,581 | 2026-11-23 |
| [Codex Security](https://github.com/openai/codex-security) | OpenAI's CLI and SDK that runs Codex to find, validate, and fix security vulnerabilities. | 14,290 | 2026-11-22 |
| [reviewdog](https://github.com/reviewdog/reviewdog) | Posts any linter's output as inline PR comments. Not AI itself, but a common gate layer in factories. | 9,759 | 2026-11-23 |
| [deepsec](https://github.com/vercel-labs/deepsec) | Vercel Labs' security harness where agents find and validate vulnerabilities before code ships. | 8,574 | 2026-11-19 |
| [claude-code-security-review](https://github.com/anthropics/claude-code-security-review) | Anthropic's semantic security-review GitHub Action for diffs, with false-positive filtering. `⚠️ unmaintained` | 7,062 | 2026-02-11 |
| [sentrux](https://github.com/sentrux/sentrux) | Architectural sensor that scores structural health and exposes a CI-friendly gate to catch regression. `⚠️ unmaintained` | 3,343 | 2026-03-19 |
| [Harmonist](https://github.com/GammaLabTechnologies/harmonist) | Protocol enforcement as a mechanical gate: hooks check every code-changing turn for required reviewers, memory updates, and supply-chain integrity before it completes. | 2,100 | 2026-06-09 |
| [Kodus](https://github.com/kodustech/kodus-ai) | Self-hosted, model-agnostic code review agent with plain-English review guidelines. Bring your own key. | 1,647 | 2026-11-22 |
| [oh-my-agent](https://github.com/first-fluke/oh-my-agent) | Mechanical verification for coding agents: stop-hook gates, artifact checks, and independent judges that re-verify completion claims instead of trusting the agent's narration. `Backends: Claude Code, Cursor, Codex, and more` | 1,473 | 2026-11-20 |
| [OrcaReplay](https://github.com/Continuum-AI-Corp/OrcaReplay) | Records a coding agent's run and replays it offline with no model calls, or forks it from a checkpoint onto a different model to compare. `Backends: Claude Code, Codex, and more` | 1,141 | 2026-10-01 |
| [Foreman (thruwire)](https://github.com/thruwire/foreman) | Supervisor that watches a coding agent's work and judges, independently of the agent, whether requirements are met and tests suffice. `Backends: Codex, OpenCode, Hermes` | 833 | 2026-10-15 |
| [aislop](https://github.com/scanaislop/aislop) | Deterministic scanner, no LLM at runtime, that catches dead code, unsafe casts, swallowed errors, and other issues AI coding agents leave behind, as a CLI, CI check, or GitHub Action gate. | 772 | 2026-11-22 |
| [Chainloop](https://github.com/chainloop-dev/chainloop) | Records coding-agent sessions, pull requests, builds, and scans as signed, policy-checked evidence in git, so a failing check prints the violation for the next agent or person to fix. `Backends: Claude Code, OpenCode, Codex, Cursor` | 616 | 2026-11-22 |
| [foremerge](https://github.com/naw103/foremerge) | Agents declare which functions they intend to touch before writing code; conflicting declarations are flagged before they become merge conflicts. `Backends: Claude Code, Codex, Cursor` | 411 | 2026-11-12 |
| [adamsreview](https://github.com/adamjgmiller/adamsreview) | Multi-lens review pipeline for Claude Code: deep review by Claude or Codex, auto-fix loop, interactive walkthrough. `Backends: Claude Code, Codex` `⚠️ unmaintained` | 245 | 2026-05-17 |
| [Turbo Flow (rig-lite)](https://github.com/marcuspat/turbo-flow) | Bash-only governance layer that requires a reviewer from a different model family to return a parseable approve-or-revise verdict on a diff, and refuses to merge otherwise. `Backends: Claude Code, Codex, Gemini, Grok, ZCode (GLM)` | 185 | 2026-11-21 |
| [Bottleneck](https://github.com/areibman/bottleneck) | Native desktop app for reviewing pull requests from many parallel background coding agents at once, with faster diff navigation than the GitHub web UI. `⚠️ unmaintained` | 158 | 2025-12-04 |
| [claude-code-merge-queue](https://github.com/funador/claude-code-merge-queue) | Local, zero-cost FIFO merge queue that serializes landings from parallel Claude Code worktrees so agents don't collide on pushes, builds, or shared test state. `Backends: Claude Code` | 132 | 2026-08-24 |
| [OpenCode++](https://github.com/whut09/opencode-plusplus) | Reliability harness for OpenCode that adds edit boundaries, command-evidence checks, verification gates, and repair loops before a change counts as done. `Backends: OpenCode` | 114 | 2026-09-09 |
| [AgentCheck](https://github.com/devlyai/AgentCheck) | Five-reviewer (logic, security, style, guidelines, product) review subagent for Claude Code. `⚠️ unmaintained` | 48 | 2025-08-28 |
| [software-factory-reliability](https://github.com/sjarmak/software-factory-reliability) | Executable reliability patterns and fault-injection drills for factories. Companion to "Software Factories Are Distributed Systems." | 7 | 2026-08-29 |
| [Cage](https://github.com/vitalik1921/cage) | Gates TypeScript coding-agent work on contract compatibility, invariant-linked tests, and fresh review records. `Backends: Claude Code, Codex` | 6 | 2026-11-04 |
| [Jig Harness](https://github.com/jig-harness/jig) | Vendor-agnostic skills, quality gates, and documentation governance that scaffold a repository for AI agents, plus an auditor that scores how far a repo has adopted them. | 2 | 2026-11-23 |
| [agent-qa](https://vostride.com) | Tests web, Android and iOS apps for coding agents through CLI/MCP, with persistent memidex memory, validated self-improvement and reviewable run evidence. | — | — |
| [UI Verify](https://uiverify.ai) | Visual check for agent-written UI: screenshots the Storybook, Playwright or Vitest tests a change touches, compares them with the approved baseline, and lets the agent review the diffs over MCP. `Backends: Claude Code, Cursor` `💰` | — | — |

## Multi-agent coding frameworks

Frameworks that model a software team as a set of agents. Older than the factory term, but the same idea.

| Name | Description | Stars | Last commit |
| --- | --- | ---: | --- |
| [paperclip](https://github.com/paperclipai/paperclip) | Orchestration for "zero-human companies": agents wake on heartbeats, claim tickets, and are governed by org charts, budgets, and approval gates. | 116,121 | 2026-11-23 |
| [DeerFlow](https://github.com/bytedance/deer-flow) | ByteDance's long-horizon agent harness on LangGraph with isolated sub-agent contexts, persistent memory, and sandboxed execution. | 85,643 | 2026-11-23 |
| [Claude Flow (Ruflo)](https://github.com/ruvnet/ruflo) | Runs Claude Code and other CLIs as coordinated swarms with shared memory and task routing. | 82,305 | 2026-11-23 |
| [MetaGPT](https://github.com/FoundationAgents/MetaGPT) | Gives agents PM, architect, engineer, and QA roles following SOPs to turn a one-line requirement into a project. `⚠️ unmaintained` | 71,428 | 2026-01-21 |
| [AutoGen](https://github.com/microsoft/autogen) | Microsoft's multi-agent framework. In maintenance mode, new work goes to Agent Framework. `⚠️ unmaintained` | 61,965 | 2026-11-12 |
| [CrewAI](https://github.com/crewAIInc/crewAI) | Role-playing agent crews plus event-driven flows for deterministic steps. | 61,191 | 2026-11-23 |
| [GPT-Engineer](https://github.com/AntonOsika/gpt-engineer) | Spec to code from the CLI. The precursor to Lovable. Archived. `⚠️ unmaintained` | 54,946 | 2024-11-17 |
| [buzz](https://github.com/block/buzz) | Block's agents as first-class members of shared channels with their own keys and audit trails, over a Nostr relay you own. `Backends: Claude Code, Codex, Goose` | 37,681 | 2026-11-23 |
| [ChatDev](https://github.com/OpenBMB/ChatDev) | Simulates a software company where CEO, CTO, programmer, and tester agents design, code, test, and document. | 34,852 | 2026-10-30 |
| [GPT-Pilot](https://github.com/Pythagora-io/gpt-pilot) | Builds an app through spec writer, architect, developer, reviewer, and debugger agents. The README reports malicious code was found in the repo between August 2025 and June 2026; rotate credentials if you ran it then. `⚠️ unmaintained` | 33,639 | 2026-06-12 |
| [OpenAI Swarm](https://github.com/openai/swarm) | Educational agents-and-handoffs framework, superseded by the Agents SDK. `⚠️ unmaintained` | 22,156 | 2026-04-15 |
| [SWE-agent](https://github.com/SWE-agent/SWE-agent) | Takes a GitHub issue and tries to fix it with the model of your choice. From Princeton and Stanford. | 20,856 | 2026-07-16 |
| [Devika](https://github.com/stitionai/devika) | Open Devin alternative that breaks instructions into steps, researches, and writes code. `⚠️ unmaintained` | 19,546 | 2025-09-25 |
| [DeepCode](https://github.com/HKUDS/DeepCode) | HKU's local coding agent that splits work across sub-agents in separate git worktrees, with an optional independent reviewer gating completion against your requirements. | 16,859 | 2026-11-23 |
| [Hive (Aden)](https://github.com/aden-hive/hive) | Compiles multi-agent objectives into deterministic execution DAGs with crash recovery, cost enforcement, and human-in-the-loop. | 11,167 | 2026-11-17 |
| [Orkas](https://github.com/Orkas-AI/Orkas) | A commander agent decomposes goals and dispatches specialists with isolated skills and memory. | 9,552 | 2026-11-23 |
| [OpenRig](https://github.com/mvschwarz/openrig) | YAML-defined declarative topologies turn Claude Code and Codex sessions into a coordinated team, built on tmux. `Backends: Claude Code, Codex` | 8,953 | 2026-11-23 |
| [Swarms](https://github.com/kyegomez/swarms) | Sequential, concurrent, and hierarchical multi-agent orchestration. | 7,392 | 2026-11-22 |
| [Open Multi-Agent](https://github.com/open-multi-agent/open-multi-agent) | Decomposes a goal into a task DAG, parallelises independent nodes, and gates consequential actions on approval. | 7,071 | 2026-11-22 |
| [ClawTeam](https://github.com/HKUDS/ClawTeam) | Agents spawn and manage their own teammates, coordinating over file-based or P2P inboxes across tmux worktrees. `⚠️ unmaintained` | 5,551 | 2026-05-09 |
| [Agency Swarm](https://github.com/VRSEN/agency-swarm) | Role-based agent teams with defined communication flows on the OpenAI Agents SDK. | 4,641 | 2026-11-16 |
| [Claude Octopus](https://github.com/nyldn/claude-octopus) | Runs multiple AI models against the same research, design, or coding task and gates on consensus to surface disagreements before you ship. `Backends: Claude Code, Codex, Antigravity CLI, Cursor CLI, OpenCode, Qwen, Ollama, Grok, Kimi Code, OpenRouter` | 4,489 | 2026-11-23 |
| [HarnessRouter](https://github.com/HarnessRouter/harnessrouter) | Self-hosted unified API for running several harnesses through one control plane. `Backends: Codex, Claude Code, Hermes, Pi, DeepSeek Harness` | 4,421 | 2026-11-22 |
| [Agent Teams](https://github.com/777genius/agent-teams-ai) | Desktop app that gives high-level commands to coding-agent teams across 75+ providers, with inter-agent messaging and built-in review. | 2,535 | 2026-11-23 |
| [Antfarm](https://github.com/snarktank/antfarm) | Installs a team of specialist agents (planner, developer, verifier, tester, reviewer) into OpenClaw with one command, with automatic retries and an independent verifier checking each story against acceptance criteria. `Backends: OpenClaw` `⚠️ unmaintained` | 2,495 | 2026-02-26 |
| [Agentic Project Management (APM)](https://github.com/sdi2200262/agentic-project-management) | Installable CLI that runs a Planner/Manager/Worker workflow of shared spec, tracker, and memory files, with you relaying assignments between AI coding assistants. `Backends: Claude Code, Codex, Cursor, GitHub Copilot` | 2,455 | 2026-10-29 |
| [scion](https://github.com/GoogleCloudPlatform/scion) | Google Cloud's orchestration testbed that runs agents in parallel isolated containers with dynamic coordination. | 2,133 | 2026-11-23 |
| [multi-agent-shogun](https://github.com/yohey-w/multi-agent-shogun) | A shogun, karo, and ashigaru hierarchy running up to 10 agents over tmux. | 1,420 | 2026-08-06 |
| [Agentlas OS](https://github.com/agentlas-ai/Agentlas-OS) | Keeps specialist agents in a hub and spins up a temporary orchestrator per task, with routing cards and permission contracts that survive between sessions. `Backends: Claude Code, Codex, Gemini, and others` | 1,401 | 2026-11-21 |
| [Agent Swarm](https://github.com/desplega-ai/agent-swarm) | Self-hosted platform where a lead agent delegates work to worker coding agents running in isolated Docker containers, with shared memory and review gates. `Backends: Claude Code, Codex` | 1,104 | 2026-11-23 |
| [Sno Station](https://github.com/sno-ai/sno-station) | Puts the Codex, Claude Code, Cursor, Hermes Agent and OpenClaw sessions you already run on one squad, so when one hits its usage limit another picks the task up from shared memory, and every review goes to a different agent than the author. `Backends: Claude Code, Codex, Cursor, Hermes Agent, OpenClaw` | 1,027 | 2026-11-21 |
| [Codex on Crack](https://github.com/ethanplusai/codex-on-crack) | Codex plugin where the lead Codex model plans a task and delegates pieces to other models to implement, then reviews their results. Formerly Astra Flash Orchestrator. `Backends: Codex, Claude Code (via adapter), DeepSeek (via Codex Router)` | 810 | 2026-10-03 |
| [Fusion Harness](https://github.com/disler/fusion-harness) | Fuses 2-5 frontier models into one architect/builder pipeline with debate and merged plans, instead of racing them separately. `Backends: Pi` | 610 | 2026-08-23 |
| [OpenCode Swarm](https://github.com/ZaxbyHub/opencode-swarm) | OpenCode plugin that runs an architect-led team of coder, reviewer, and test-engineer agents in a hub-and-spoke model, with parallel coder lanes in isolated worktrees gated by review and test approval. `Backends: OpenCode` | 541 | 2026-11-23 |
| [metaswarm](https://github.com/dsifry/metaswarm) | Nine-phase pipeline that takes an issue through research, planning, decomposition, orchestrated implementation with adversarial review, and PR shepherding. `Backends: Claude Code, Gemini CLI, Codex` | 438 | 2026-11-12 |
| [SAFe Agentic Workflow (SAW)](https://github.com/bybren-llc/safe-agentic-workflow) | Maps SAFe (Scaled Agile) roles onto multi-agent teams: 11 agent profiles, quality gates, and evidence-based delivery. `Backends: Claude Code, Gemini CLI, Codex CLI, Cursor IDE` | 432 | 2026-07-20 |
| [Rovai](https://github.com/murray17/rovai-ai) | Desktop and web workspace where teams of AI coding agents share conversations, divide up tasks, and keep collaborative memory. | 277 | 2026-11-23 |
| [Markus](https://github.com/markus-global/markus) | Self-hostable, Apache-2.0 platform that turns a plain-language goal into a coordinated team of AI coding agents. | 219 | 2026-11-15 |
| [ordewell](https://github.com/ordewell/ordewell) | Turns one goal into an ordered plan of tasks, each with its own runner, model, and mode, then executes and verifies completion through output markers rather than model self-assessment. `Backends: Claude Code, Codex, OpenCode, and 25+ API providers` | 212 | 2026-11-23 |
| [OtoDock](https://github.com/OtoDock/oto-dock) | Self-hosted "company OS" where agents work in departments and delegate to each other unwatched. Source-available. | 203 | 2026-11-21 |
| [outsourcerer](https://github.com/alexgreensh/outsourcerer) | Routes coding jobs across several agent platforms by capability and cost, carrying your skills and MCP servers with the job. `Backends: Claude, Codex, Cursor, Devin, Gemini, OpenRouter` | 203 | 2026-11-20 |
| [ORCH](https://github.com/oxgeneral/ORCH) | CLI runtime that manages agents as typed teams with an explicit state machine. | 182 | 2026-11-18 |
| [Alethe Orchestrate](https://github.com/Kc1t/alethe-orchestrate-skill) | Agent skill that runs Codex, Claude Code, Antigravity, Kimi, and custom CLI workers through cost-tracked playbooks and reports what each run did and cost. `Backends: Codex, Claude Code, Antigravity, Kimi` | 173 | 2026-11-04 |
| [NXTG-Forge Orchestrator](https://github.com/nxtg-ai/forge-orchestrator) | Research, plan, delegate, adversarially verify, deploy across Claude Code, Codex, and Gemini CLI on one repo, with file locking and drift detection. | 168 | 2026-11-21 |
| [GraphCode](https://github.com/scgopi/GraphCode) | macOS app and background daemon for running, connecting, and steering several live coding-agent sessions as a graph of loops. | 159 | 2026-11-19 |
| [kodo](https://github.com/ikamensh/kodo) | Directs agents through work cycles where a separate agent independently verifies each result. | 139 | 2026-09-26 |
| [tutti](https://github.com/nutthouse/tutti) | Config-driven workflows that pass typed artifacts between agents, each in its own worktree. | 133 | 2026-07-20 |
| [wippaAGENT](https://github.com/wippa-studios/wippaAGENT) | Installs an OpenCode agent fleet where one primary orchestrator delegates work to twelve specialists, and every change passes audit and review gates under a bounded verify tool. `Backends: OpenCode` | 1 | 2026-11-02 |

## Hosted and commercial factories

Products you pay for or cannot self-host. `💰` throughout.

### Factory products

| Name | Description |
| --- | --- |
| [8090 Software Factory](https://8090.inc) | Governed workspace where people and agents run the full SDLC, sold as an "SDLC control plane" for regulated enterprises. EY adopted it in March 2026. `💰` |
| [Amika](https://amika.dev) | A sandboxed cloud computer for every agent, plus automated or human-in-the-loop workflows. Open core at [gofixpoint/amika](https://github.com/gofixpoint/amika). `💰` |
| [Atlassian Rovo Dev](https://www.atlassian.com/software/rovo) | Agent that plans, writes, and reviews code from a CLI and inside Bitbucket and GitHub, bundled with Jira context. `💰` |
| [Augment Cosmos](https://www.augmentcode.com/blog/cosmos-now-in-public-preview) | Coordinates agents across a whole engineering team from spec to verification. Public preview June 2026. Auggie CLI is open source. `💰` |
| [Autoheal](https://autoheal.ai) | Evaluator and Healer agents that watch an enterprise's coding and ops agents, catch regressions, and open fixes for incidents, vulnerabilities, and cost control. `💰` |
| [Blitzy](https://blitzy.com) | Enterprise factory that orchestrates thousands of agents over multi-hour runs to generate most of an implementation from a repo and spec. `💰` |
| [CodeAgentSwarm](https://codeagentswarm.com) | macOS and Windows workspace running six agent CLIs side by side with an MCP-updated kanban board. Closed source. `💰` |
| [defract](https://defract.dev) | macOS harness for Claude Code that drives story, design, architecture, implementation, and review with visual review gates. Free, closed source. |
| [Factory.ai](https://factory.ai) | Specialized "droids" (code, review, docs, test, knowledge) coordinated by a dispatcher across the SDLC. The company that put "software factory" on the map. `💰` |
| [GitLab Duo Agent Platform](https://about.gitlab.com/blog/introduction-to-gitlab-duo-agent-platform/) | Agents with access to an org's full GitLab context (issues, MRs, pipelines, security findings) that can open MRs under guardrails. GA January 2026. `💰` |
| [Hoplite](https://hoplite.sh) | Moves your local agent setup (sessions, MCP servers, CLIs) to the cloud for parallel runs. `💰` |
| [JetBrains Air](https://www.infoworld.com/article/4142675/jetbrains-launches-air-and-junie-cli-for-ai-assisted-development.html) | Workspace for running Junie, Claude Agent, Codex, and Gemini CLI in parallel, each in its own container or worktree. Announced March 2026. `💰` |
| [LightSprint](https://lightsprint.ai) | "Software factory for product teams." Non-engineers run parallel cloud agents with PR preview environments. `💰` |
| [Linear coding sessions](https://linear.app/changelog/2026-06-11-coding-sessions) | Delegate an issue to Linear Agent and it runs Claude Code or Codex in a managed sandbox, drafting a PR on the issue. June 2026. `💰` |
| [Meta Muse Code](https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/) | Terminal agent for large repos that spins up sub-agents in isolated worktrees, with persistent background agents that report back. Beta August 2026. `💰` |
| [Tembo](https://tembo.io) | Connects repos, issues, and observability tools, then runs agents in isolated cloud environments to turn issues and alerts into PRs. Pivoted from Postgres hosting. `💰` |
| [Unpeel](https://unpeel.com) | Native macOS app for remote-controlling multiple CLI agent sessions with worktree isolation and iPhone control. `💰` |
| [Warp Factories](https://warp.dev/factories) | Prebuilt factory covering triage, spec, implementation, review, and verification. Early access August 2026. `💰` |
| [Warp Oz](https://warp.dev) | Orchestration platform running hundreds of sandboxed agents in parallel with audit trails and scheduled workflows. `💰` |

### Cloud coding agents

| Name | Description |
| --- | --- |
| [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview) | Anthropic's hosted harness (sandbox, tools, session state, MCP) for long-running agent tasks. `💰` |
| [Codex cloud](https://chatgpt.com/codex) | OpenAI's cloud agent clones your repo into a sandbox, writes code, runs tests, and returns a PR. `💰` |
| [Cursor Cloud Agents](https://cursor.com/cloud) | Agents on dedicated cloud VMs, reachable from web, Slack, Teams, Linear, and Jira. Formerly Background Agents. `💰` |
| [Devin](https://devin.ai) | Cognition's autonomous engineer. A manager Devin can delegate to up to ten worker Devins in parallel. Windsurf was folded into it in 2026. `💰` |
| [GitHub Copilot coding agent](https://github.com/features/copilot) | Assign it an issue and it works async in the cloud and opens a PR with a self-review. `💰` |
| [Google Antigravity](https://antigravity.google) | Agent-first IDE with a "manager surface" where autonomous agents plan, execute, and verify. `💰` |
| [Google Jules](https://jules.google) | Clones a repo to a cloud VM, plans and writes code with Gemini, and opens a PR. `💰` |
| [Kiro](https://kiro.dev) | AWS's spec-driven agentic IDE. Successor to Amazon Q Developer. `💰` |
| [Mistral Vibe](https://mistral.ai/products/vibe/code/) | Mistral's coding agent that plans, asks for sign-off, then executes across terminal, IDE, and web. `💰` |
| [Ona](https://ona.com) | Formerly Gitpod. Sandboxed environments for background agents, acquired by OpenAI in June 2026. `💰` |
| [Replit Agent](https://replit.com/agent) | Builds full apps with parallel task execution and kanban tracking. `💰` |
| [Sourcegraph Amp](https://ampcode.com) | Agentic coding tool with shareable threads. `💰` |
| [Zencoder](https://zencoder.ai) | Routes work across Claude, Gemini, and Codex with parallel agent development. `💰` |

### Infrastructure

| Name | Description |
| --- | --- |
| [Buddy Sandboxes](https://buddy.works/docs/sandboxes/introduction) | Persistent Ubuntu machines in the Buddy.Works cloud for running coding agents, with snapshots, public endpoints, SSH, and Claude Code preinstalled. `💰` |
| [Coder](https://coder.com/solutions/agents) | Self-hosted platform that runs agents inside enterprise-controlled dev environments with spend controls and audit logs. Core is open source. `💰` |
| [Daytona](https://daytona.io) | Fast-starting sandboxes for agent code. Went closed source in June 2026. `💰` |
| [DigitalOcean Managed Agents](https://www.digitalocean.com/products/managed-agents) | Runs agent sessions in per-session Firecracker microVMs with governed access to 16,000+ tools through a managed MCP endpoint. `Backends: Claude Code, Codex, OpenCode, and more` `💰` |
| [Kilo](https://kilo.ai) | Open-source, model-agnostic coding agent with a cloud service. Acquired by Anaconda in July 2026. |
| [Modal](https://modal.com/solutions/coding-agents) | Serverless gVisor sandboxes for agent workloads at 50,000+ concurrency. `💰` |

### Discontinued

Listed so you do not chase dead links elsewhere.

- **Amazon Q Developer** - No new signups since May 2026, end of support April 2027. Use Kiro.
- **Charlie Labs** - Shut down October 2026.
- **Codegen** - Acquired by ClickUp in late 2025.
- **Conductor** - Acquired by Meta in November 2026. Conductor Cloud shuts down November 20, 2026; the desktop app gets updates only into early 2027.
- **Continue Mission Control** - Acquired by Cursor and shut down June 2026.
- **OpenAI AgentKit / Agent Builder** - Shutting down November 2026.
- **Terragon** - Shut down February 2026. Code released as Terragon OSS above.
- **Windsurf** - Acquired by Cognition and merged into Devin.

## Field reports

First-hand accounts from teams that built and ran a factory.

| Name | Description |
| --- | --- |
| [Announcing Mastra Factory Beta](https://mastra.ai/blog/announcing-mastra-factory-beta) | Sam Bhagwat, Mastra, September 2026. The factory writes 25-35% of Mastra's PRs and closes 50-60% of its issues. |
| [Beyond AI Coding Agents: How We Built Augment's Software Factory](https://www.augmentcode.com/blog/beyond-ai-coding-agents-how-we-built-augments-software-factory) | Akshay Utture, Augment Code, September 2026. Deployed agents at each SDLC bottleneck across 17,200 merged PRs, cutting median time to merge from 11.2 hours to 3.1 hours and the 14-day revert rate by 79%. |
| [Building a C compiler with a team of parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler) | Anthropic. Parallel agents build a compiler end to end. |
| [Building a software factory for AI SDK](https://vercel.com/blog/building-a-software-factory-for-ai-sdk) | Lars Grammel and Eric Dodds, Vercel, August 2026. After four weeks the factory authored 25-35% of merged PRs. |
| [Building a software factory on our scariest code](https://launchdarkly.com/blog/building-a-software-factory-on-our-scariest-code/) | Alexis Georges, LaunchDarkly, August 2026. Rewrote 66,000 lines of legacy React in six weeks with agents behind feature flags. |
| [Building an (almost) fully self-hosted, sandboxed, agentic software factory](https://blog.jakesaunders.dev/building-an-almost-fully-self-hosted-sandboxed-agentic-software-factory/) | Jake Saunders, 2026. Production-verification loop for a self-hosted factory. |
| [Context engineering with Dex Horthy](https://newsletter.pragmaticengineer.com/p/context-engineering-with-dex-horthy) | Gergely Orosz, July 2026. Horthy's lights-off factory ran for three months in 2025 before the codebase degraded so badly he shut it down. |
| [Experiments in Building an Automatic Software Factory](https://curiousagents.substack.com/p/experiments-in-building-an-automatic) | Tim Johnson, Curious Agents, February 2026. Built cc-pipeline, an open-source Claude Code SDLC automation tool, across several real projects. |
| [How to Build an AI Software Factory with AI Agents in TypeScript](https://mastra.ai/blog/software-factory) | Sam Bhagwat, Mastra, July 2026. Six agents handle triage, code, validation, release, docs, and monitoring. |
| [How to Build Your Own Software Factory](https://web.navan.dev/posts/2026-05-06-how-to-build-your-own-software-factory.html) | Navan Chauhan, May 2026. Argues a factory should start as one narrow, validated workflow with a first-class no-op outcome, not a bought product, drawing on his work on the StrongDM Software Factory. |
| [How we built a software factory to drive Astro's GitHub issue count to zero](https://blog.cloudflare.com/astro-issue-triage/) | Cloudflare, August 2026. Isolated subagents in GitHub Actions reproduced, diagnosed, and patched bugs, cutting open issues from 200 to about 30. |
| [I'm Building a Software Factory That Turns My Issues into Merged Code](https://fatihkoc.net/posts/software-factory-side-projects/) | Fatih Koc, 2026. A personal factory for side projects. |
| [Inching towards a software factory](https://useautumn.com/blog/inching-towards-a-software-factory) | John, Autumn, September 2026. Built internal testing tools and isolated cloud environments so agents can validate billing changes in parallel, cutting integration test time from about an hour to roughly ten minutes. |
| [Inside OpenAI's agentic software factory](https://newsletter.pragmaticengineer.com/p/openai-software-factory) | Gergely Orosz, The Pragmatic Engineer, September 2026. Based on interviews with OpenAI engineering leaders, describes Codex-driven code generation and review, a "Perf Factory" for performance regressions, and "Sevbot" incident response handling a 10x rise in pull requests. |
| [Introducing Xirp](https://portal.spotify.com/blog/introducing-xirp) | Tyson Singer, Spotify, August 2026. Vendor-neutral platform for running multiple AI coding agents at once in isolated worktrees, preserving context across sessions and tools; over 1,300 Spotify engineers use it. |
| [Minions: Stripe's one-shot, end-to-end coding agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) | Alistair Gray, Stripe, February 2026. A blueprint of deterministic and agentic nodes ships over 1,300 PRs a week with no human-written code. Engineers still review. |
| [My agents had their own branches. They did not have their own time.](https://dev.to/witekth/my-agents-had-their-own-branches-they-did-not-have-their-own-time-5bnj) | Witek ten Hove, DEV Community, August 2026. Build log of a Gemini-based multi-agent factory, with lessons on dependency graphs, guardrails, and true versus apparent concurrency. |
| [Owning the software factory](https://madewithlove.com/blog/owning-the-software-factory/) | Peter Eysermans, madewithlove, October 2026. A GitHub issue runs implement, review, and fix agent sessions in sequence to produce a pull request; two earlier attempts flooded the team with unwanted PRs, and it only worked once the team owned the pipeline and encoded its own engineering standards into it. |
| [Running a Software Factory Efficiently at Uber Scale](https://www.uber.com/us/en/blog/efficient-software-factory/) | Uday Kiran Medisetty, Uber, August 2026. AI tools on 70% of PRs, with a 34% cost cut from model routing and context work. |
| [Shining Some Light in Dark Agentic Software Factories](https://xebia.com/articles/shining-some-light-in-dark-agentic-software-factories/) | Noah Blauensteiner, Xebia, August 2026. First-hand account of setting up Sandcastle's plan/implement/review agent trio, with model-selection and monitoring lessons. |
| [Software Factories And The Agentic Moment](https://factory.strongdm.ai/) | Justin McCarthy, StrongDM, February 2026. Agents write and validate code from specs and scenarios, with a "Digital Twin Universe" of cloned third-party services for testing. No human coding or review. |
| [Software Factories in September 2026](https://igoro.com/archive/software-factories/) | Igor Ostrovsky, September 2026. Survey of the public factory write-ups above and what they have in common. |
| [The Dark Factory Harness: From Autonomous Hill-Climbing to Autonomous Research](https://sotaverified.org/blog/improving-autoresearch-dark-factory-harness) | SOTA Verified, 2026. Combines Karpathy's autoresearch idea with harness engineering. |
| [The self-driving codebase: Building Horizon at WorkOS](https://workos.com/blog/project-horizon) | Matt Dzwonczyk and Jason Barry, WorkOS, May 2026. Webhook-driven agents in cloud sandboxes with humans keeping review. |
| [Trying the software factory pattern](https://lethain.com/software-factory-experiment/) | Will Larson, September 2026. An agent-driven loop at Imprint that audits a Linear project's goals against RFCs and dashboards, works unblocked tasks, and re-runs when goals drift. |
| [Under the River](https://shopify.engineering/under-the-river) | Javier Moreno and River, Shopify, May 2026. River is a Slack-native agent that writes code, runs tests, and co-authors one in eight merged Shopify PRs. |
| [WarpBench: How we reduced our cost-per-PR 75%](https://warp.dev/factories/benchmarks/warpbench) | Zach Lloyd, Warp, September 2026. Built an internal benchmark from Warp's own tasks to compare factory configurations; switching the default model cut cost per completed PR from about $80 to $30 with no drop in merge rate. |
| [We built a software factory in 10 days](https://ona.com/stories/software-factory-what-we-learned) | Zacharias Malguitou and Lou Bichard, Ona, April 2026. Built a note-taking app entirely through background agents. |
| [We're building a software factory you can buy](https://sandeep.dev/blog/software-factory-you-can-buy) | Sandeep Panda, July 2026. First-hand account of building FactoryKit, a cloud dev platform that has shipped about 25 of its own features. |
| [What a software factory costs to build: the real bill](https://sandeep.dev/blog/what-a-software-factory-costs) | Sandeep Panda, July 2026. Follow-up with real cost numbers: two engineers, 23 days, 403 commits, 95 written by the factory itself. |
| [What we learned at the Background Agents summit](https://ona.com/stories/background-agents-summit) | Siddhant Khare and Benjamin Stark, Ona, May 2026. Recap of 13 sessions (Stripe, Uber, Monzo, and others) finding that teams arrived separately at five shared primitives: sandboxes, context, triggers, fleet orchestration, and governance. |
| [Why We Built Our Own Background Agent](https://engineering.ramp.com/post/why-we-built-our-background-agent) | Ramp Engineering, 2026. Inspect verifies its own work with tests, telemetry, and screenshots on Modal sandboxes and grew to over half of merged PRs. |

## Essays

### Defining the terms

| Name | Description |
| --- | --- |
| [Agentic Software Factories: The Future Of Programming?](https://marmelab.com/blog/2026/05/22/software-factories-the-future-of-programming.html) | Marmelab, May 2026. |
| [Building Software Factories: The Blueprint for AI-Native Delivery](https://re-cinq.com/blog/building-agent-factories) | Michael Mueller, re:cinq, March 2026. Six capabilities orgs need: orchestration, isolated environments, context and memory, security and governance, validation, and learning loops. |
| [Built by Agents, Tested by Agents, Trusted by Whom?](https://law.stanford.edu/2026/02/08/built-by-agents-tested-by-agents-trusted-by-whom/) | Stanford Law CodeX, February 2026. |
| [Can software factories actually work?](https://newsletter.posthog.com/p/software-factories) | Jina Yoon, PostHog, 2026. |
| [Entering the AI Software Factory Era](https://launchdarkly.com/blog/entering-the-ai-software-factory-era/) | Jonathan Nolen, LaunchDarkly, July 2026. Argues code review, not code writing, is now the bottleneck, and that specification-driven development with strong runtime controls is the fix. |
| [Everyone building a software factory wants the same proof](https://devinterrupted.substack.com/p/everyone-building-a-software-factory) | Andrew Zigler and Ben Lloyd Pearson, Dev Interrupted, August 2026. Interviews leaders at HumanLayer, Warp, AWS, and Asana and finds factories show throughput numbers but no evidence yet of long-term maintainability or ROI. |
| [Highlights from my conversation about agentic engineering on Lenny's Podcast](https://simonwillison.net/2026/Apr/2/lennys-podcast/) | Simon Willison, April 2026. Includes StrongDM's "nobody reads the code" policy. |
| [How StrongDM's AI team build serious software without even looking at the code](https://simonwillison.net/2026/feb/7/software-factory/) | Simon Willison, February 2026. |
| [How to build a software factory](https://executivesummary.gather.dev/p/how-to-build-a-software-factory) | Peter Bell, March 2026. |
| [How to see in the dark factory](https://devinterrupted.substack.com/p/how-to-see-in-the-dark-factory-launchdarklys) | Andrew Zigler with LaunchDarkly CTO Cameron Etezadi, Dev Interrupted, July 2026. |
| [How Uber built an AI software factory for agentic coding](https://newsletter.port.io/p/how-uber-built-a-software-factory) | Zohar Einy, Autonomous Engineering, August 2026. Synthesizes an Uber conference talk into a six-component breakdown of its factory architecture. |
| [Inside a Software Factory](https://www.oreilly.com/radar/inside-a-software-factory/) | Paul Iusztin, O'Reilly Radar, September 2026. Factories still need humans for brainstorming, planning, and final review. |
| [Nobody Has Actually Built a Software Factory](https://medium.com/@NMitchem/nobody-has-actually-built-a-software-factory-77ffdc0c3efc) | Noah Mitchem, August 2026. Reviewed 21 company write-ups and argues all of them are parallel agents on the process the company already had. |
| [Reflections on the Software Dark Factory Q&A](https://commoncog.com/reflections-on-the-software-dark-factory-q-a/) | Cedric Chin, Commoncog, June 2026. Applies Gary Klein's sensemaking theory to a demo by two former StrongDM engineers, holding the "dark factory" frame without yet accepting that quality software can ship without anyone reading the code. |
| [Rise of the Software Factory](https://www.terezatizkova.com/blog/rise-of-the-software-factory) | Tereza Tizkova, June 2026. Companion to her AI Engineer World's Fair talk. |
| [Software Factories, Light and Dark](https://addyosmani.com/blog/software-factories/) | Addy Osmani, July 2026. Light factories keep judgment upstream; dark factories ship code nobody read and accumulate "comprehension debt." |
| [Software Factory: The End Goal of Agentic Engineering](https://www.mager.co/blog/2026-03-19-software-factory/) | Mager, March 2026. |
| [The Agentic Software Factory](https://www.bcgplatinion.com/insights/the-agentic-software-factory) | BCG Platinion, March 2026. The consulting view: operating model and governance matter more than tooling. |
| [The Agentic Software Factory, Explained](https://www.truefoundry.com/blog/software-factory-agentic-enterprise-guide) | Boyu Wang, TrueFoundry, August 2026. Infrastructure, credentials, observability, and cost controls matter as much as agent capability. |
| [The dark factory is real, most developers are getting slower, and your org chart is the bottleneck](https://natesnewsletter.substack.com/p/the-5-level-framework-that-explains) | Nate's Newsletter, February 2026. |
| [The Dark Factory pattern](https://aipatternbook.com/dark-factory) | Encyclopedia of Agentic Coding Patterns. |
| [The engineer's guide to building a software factory](https://leaddev.com/software-quality/the-engineers-guide-to-building-a-software-factory) | Chris Kelly, LeadDev, September 2026. Describes three factory "production lines" (PR to merge, ticket to PR, alert to resolution), with a case study of 728 PRs in two weeks. |
| [The Factory Model: How Coding Agents Changed Software Engineering](https://addyosmani.com/blog/factory-model/) | Addy Osmani, February 2026. Managing a fleet of coding agents depends more on spec quality, architectural understanding, and verification than on typing speed. |
| [The Five Levels](https://simonwillison.net/2026/Jan/28/the-five-levels/) | Simon Willison, January 2026. Notes on Shapiro's scale. |
| [The Five Levels: from Spicy Autocomplete to the Dark Factory](https://danshapiro.com/blog/2026/01/the-five-levels-from-spicy-autocomplete-to-the-software-factory/) | Dan Shapiro, January 2026. Coined "dark factory" for AI coding as level 5 of a five-level scale. |
| [The Software Factory: Why Your Team Will Never Work the Same Again](https://alexop.dev/posts/the-software-factory/) | Alexander Opalic, March 2026. |
| [We are now factory engineers, not product engineers](https://www.warp.dev/blog/we-are-now-factory-engineers-not-product-engineers) | Zach Lloyd, Warp, June 2026. Argues the engineer's job is shifting from writing code to building and operating a cloud software factory. |
| [When I see people build a software factory](https://levels.io/when-i-see-software-factory) | Pieter Levels, September 2026. Argues factories are over-engineering. |
| [Why Software Factories Fail](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/wsff.md) | Dex Horthy, HumanLayer, July 2026. Argues no amount of harness engineering makes lights-off factories work, because training rewards passing tests and never penalises lost maintainability. |
| [Your Software Factory Is Not a Factory](https://sawinyh.com/blog/software-factory-is-not-a-factory) | Nick Sawinyh, August 2026. Traces the term to 1960s GE and Japanese software factories and argues today's agent pipelines are mostly rejection gates, not throughput machines. |

### Gas Town and Beads

| Name | Description |
| --- | --- |
| [A Day in Gas Town](https://www.dolthub.com/blog/2026-01-15-a-day-in-gas-town/) | DoltHub, January 2026. |
| [Fences, not Sandboxes](https://yegge.ai/essays/fences-not-sandboxes/) | Steve Yegge, August 2026. Describes Wheelhouse, a software factory built to develop his game Wyvern, that grew its own constitutional governance in place of technical sandboxes. |
| [Gas Town: from Clown Show to v1.0](https://steve-yegge.medium.com/gas-town-from-clown-show-to-v1-0-c239d9a407ec) | Steve Yegge, 2026. |
| [Gas Town's Agent Patterns, Design Bottlenecks, and Vibecoding at Scale](https://maggieappleton.com/gastown) | Maggie Appleton, 2026. |
| [Introducing Beads: A coding agent memory system](https://steve-yegge.medium.com/introducing-beads-a-coding-agent-memory-system-637d7d92514a) | Steve Yegge, 2025. |
| [The Death of the Stubborn Developer](https://steve-yegge.medium.com/the-death-of-the-stubborn-developer-b5e8f78d326b) | Steve Yegge, December 2024. |
| [The Future of Coding Agents](https://steve-yegge.medium.com/the-future-of-coding-agents-e9451a84207c) | Steve Yegge, January 2026. |
| [Welcome to Gas City](https://steve-yegge.medium.com/welcome-to-gas-city-57f564bb3607) | Steve Yegge, April 2026. Announces Gas City v1.0, Gas Town rewritten from scratch as an SDK of composable packs for building your own dark factories. |
| [Welcome to Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) | Steve Yegge, January 2026. |
| [Welcome to the Wasteland: A Thousand Gas Towns](https://steve-yegge.medium.com/welcome-to-the-wasteland-a-thousand-gas-towns-a5eb9bc8dc1f) | Steve Yegge, 2026. |

### Loops and harnesses

| Name | Description |
| --- | --- |
| [Agent Harness Engineering](https://addyosmani.com/blog/agent-harness-engineering/) | Addy Osmani, April 2026. |
| [An open-source spec for Codex orchestration: Symphony](https://openai.com/index/open-source-codex-orchestration-symphony/) | OpenAI, 2026. |
| [Designing Software for Software Factories](https://blog.sshh.io/p/designing-software-for-software-factories) | Shrivu Shankar, June 2026. Argues the real engineering effort belongs in markdown contracts and tiered test harnesses, not the features themselves, so failures feed back into better specs and prompts. |
| [don't waste your back pressure](https://ghuntley.com/pressure/) | Geoffrey Huntley. |
| [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) | Anthropic, November 2025. |
| [Engineering a Context-Driven Software Factory](https://tessl.io/blog/engineering-a-context-driven-software-factory) | Patrick Debois, Tessl, October 2026. Argues agents need explicit boundaries, evidence-checked work, and guards against bad context compounding before they can safely handle judgment calls a fixed workflow can't cover. |
| [everything is a ralph loop](https://ghuntley.com/loop/) | Geoffrey Huntley, January 2026. |
| [Factory 2.0: From coding agents to software factories](https://factory.ai/news/software-factory) | Factory.ai, 2026. |
| [Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps) | Anthropic, March 2026. |
| [How Anthropic teams use Claude Code](https://claude.com/blog/how-anthropic-teams-use-claude-code) | Anthropic, July 2025. |
| [Long-running Agents](https://addyosmani.com/blog/long-running-agents/) | Addy Osmani. |
| [Practical Loop Engineering](https://addyo.substack.com/p/practical-loop-engineering) | Addy Osmani, August 2026. |
| [Ralph Wiggum as a "software engineer"](https://ghuntley.com/ralph/) | Geoffrey Huntley, July 2025. The post that named the loop. |
| [Scaling Managed Agents: decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents) | Anthropic, 2026. |
| [Software factories are a workflow, not a product](https://nx.dev/blog/software-factory-workflow-not-product) | Victor Savkin, Nx, August 2026. Argues factories work as custom workflows glued from existing tools rather than as bought products. |

### Working with parallel agents

| Name | Description |
| --- | --- |
| [A Year Of Vibes](https://lucumr.pocoo.org/2025/12/22/a-year-of-vibes/) | Armin Ronacher, December 2025. |
| [Agent Design Is Still Hard](https://lucumr.pocoo.org/2025/11/21/agents-are-hard/) | Armin Ronacher, November 2025. |
| [Agentic Coding Recommendations](https://lucumr.pocoo.org/2025/6/12/agentic-coding/) | Armin Ronacher, June 2025. |
| [Agentic Coding Things That Didn't Work](https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/) | Armin Ronacher, July 2025. |
| [Compound Engineering Gets an Upgrade](https://every.to/guides/compound-engineering-gets-an-upgrade) | Kieran Klaassen, 2026. |
| [Compound Engineering: How Every Codes With Agents](https://every.to/source-code/compound-engineering-how-every-codes-with-agents) | Dan Shipper and Kieran Klaassen, December 2025. |
| [Embracing the parallel coding agent lifestyle](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/) | Simon Willison, October 2025. |
| [How to Build an Agent](https://ampcode.com/notes/how-to-build-an-agent) | Thorsten Ball, April 2025. |
| [Just Talk To It: the no-bs way of agentic engineering](https://steipete.me/posts/just-talk-to-it) | Peter Steinberger, October 2025. |
| [Mitchell Hashimoto's new way of writing code](https://newsletter.pragmaticengineer.com/p/mitchell-hashimoto) | Gergely Orosz, February 2026. |
| [My AI Adoption Journey](https://mitchellh.com/writing/my-ai-adoption-journey) | Mitchell Hashimoto, February 2026. |
| [New trend: programming by kicking off parallel AI agents](https://blog.pragmaticengineer.com/new-trend-programming-by-kicking-off-parallel-ai-agents/) | Gergely Orosz, October 2025. |
| [The Code Agent Orchestra](https://addyosmani.com/blog/code-agent-orchestra/) | Addy Osmani, March 2026. Argues verification, not code generation, is now the bottleneck when coordinating teams of agents, and covers subagents, Agent Teams, and a shared AGENTS.md file as coordination patterns. |
| [The future of agentic coding: conductors to orchestrators](https://addyosmani.com/blog/future-agentic-coding/) | Addy Osmani, January 2026. Distinguishes single-agent "conductors" from parallel, asynchronous "orchestrators," and argues the engineer's job is shifting toward managing fleets of agents. |

## Talks and podcasts

| Name | Description |
| --- | --- |
| [1049: WTF is a Software Factory?](https://syntax.fm/show/1049) | Wes Bos and Scott Tolinski with guest Adam Jacob of Swamp Club, Syntax, October 2026. Covers what makes a software factory, black-box testing, domain-driven design, and adversarial accessibility review as ways to build trust in AI-generated code. |
| [850 PRs a Week: How Tessl Runs a Software Factory](https://tessl.io/podcast/121) | Dru Knox, The AI Native Dev, September 2026. Tessl's factory peaked at 850 PRs in one week with 85-90% handled end to end by agents, and the changes that mattered most were not the speed gains the team expected. |
| [An AI state of the union: dark factories are coming](https://www.lennysnewsletter.com/p/an-ai-state-of-the-union) | Lenny's Newsletter, with Simon Willison. |
| [Building Claude Code with Boris Cherny](https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny) | The Pragmatic Engineer, March 2026. |
| [Building your own software factory](https://ai.engineer/talks/building-your-own-software-factory) | Eric Zakariasson, Cursor, AI Engineer Europe 2026. Covers agent-first workflows, guardrails, and verifiable outputs using Dan Shapiro's autonomy framework. |
| [Code with Claude 2026 opening keynote](https://www.youtube.com/watch?v=GMIWm5y90xA) | Anthropic, May 2026. |
| [Every Repo Is a Software Factory Now](https://tessl.io/podcast/119) | Don Syme, The AI Native Dev, August 2026. Covers continuous AI and GitHub Agentic Workflows: bounded context, quality gates before human review, and cost control. |
| [Factory.ai: The A-SWE Droid Army](https://www.latent.space/p/factory) | Latent Space. |
| [Gas Town, Beads, and the Rise of Agentic Development with Steve Yegge](https://softwareengineeringdaily.com/podcasts/gas-town-beads-and-the-rise-of-agentic-development-with-steve-yegge/) | Software Engineering Daily. |
| [Harness Engineering is not Enough: Why Software Factories Fail](https://www.youtube.com/watch?v=Ib5GBkD555M) | Dex Horthy, AI Engineer World's Fair, July 2026. Argues lights-off factories fail because models cannot yet judge codebase maintainability, and recommends heavier upfront planning with humans still reading the code. |
| [Head of Claude Code: What happens after coding is solved](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens) | Lenny's Podcast, with Boris Cherny. |
| [How Forward Deployed Engineering is done at Factory](https://ai.engineer/talks/how-forward-deployed-engineering-is-done-at-factory) | Eno Reyes, Factory, AI Engineer World's Fair 2026. How forward-deployed engineers turn customer workflows into product features, with deterministic validation as the foundation for autonomous development. |
| [How Mastra turned its issue backlog into a software factory](https://workos.com/blog/agent-night-mastra-software-factory-demo-recap) | Abhi Aiyer at WorkOS Agent Night, recap by Zack Proser, August 2026. |
| [How Stripe built minions, AI coding agents that ship 1,300 PRs weekly from Slack reactions](https://podcasts.apple.com/us/podcast/how-stripe-built-minions-ai-coding-agents-that-ship/id1809663079?i=1000757255000) | How I AI podcast with Steve Kaliski, March 2026. |
| [How Warp ships 2,000 PRs a month with AI factories](https://www.lennysnewsletter.com/p/how-warp-ships-2000-prs-a-month-with) | Lenny's Podcast, with Zach Lloyd, September 2026. Warp's "Wilson" factory turns Slack, Linear, and GitHub requests into tested PRs, scored by an LLM judge that surfaces failure modes and improves the system over time. |
| [Inside Steve Yegge's Software Factory](https://re-cinq.com/podcast/steve-yegge-software-factory) | Benedikt Stemmildt interviews Steve Yegge, re:cinq's Rethink Engineering podcast, September 2026. Running a 50-agent factory and cutting 40% of it after its agents stalled. |
| [Inside the Dark Factory: AI That Ships Code Solo](https://tessl.io/podcast/116) | Rob Willoughby, The AI Native Dev, July 2026. Tessl's own AI engineering lead describes how its internal Dark Factory ships code through entire weekends and how the team built enough trust to let it run unattended. |
| [Mastra Factory overview](https://youtu.be/iMA-Xkhj7fU) | Mastra, 2026. |
| [Notion's Token Town: 5 Rebuilds, 100+ Tools, MCP vs CLIs and the Software Factory Future](https://www.latent.space/p/notion) | Latent Space, with Simon Last and Sarah Sachs. |
| [Shopify's AI Phase Transition](https://www.latent.space/p/shopify) | Latent Space with Shopify CTO Mikhail Parakhin, April 2026. |
| [Simon Willison: Engineering practices that make coding agents work](https://www.youtube.com/watch?v=owmJyKVu5f8) | The Pragmatic Summit. |
| [Software Factories: Hands on with Real Builders](https://boundaryml.com/podcast/2026-09-08-hands-on-software-factories) | Vaibhav Gupta and Dex Horthy, "ai that works" podcast, September 2026. Practitioners share real background-agent factories they have built. |
| [Software Factory Debate](https://boundaryml.com/podcast/2026-10-20-software-factory-debate) | Vaibhav Gupta moderates a debate between Dex Horthy and Warp CTO Zach Lloyd, "ai that works" podcast, October 2026. |
| [Software Factory Design Patterns](https://boundaryml.com/podcast/2026-08-25-software-factory-design-patterns) | Vaibhav Gupta and Dex Horthy, "ai that works" podcast, August 2026. A four-layer software-factory architecture (compute, dev environment, harness, orchestration) and buy-vs-build tradeoffs. |
| [Software Factory for Agent Tools](https://boundaryml.com/podcast/2026-06-23-software-factory-for-agent-tools) | Vaibhav Gupta and Dhilan, "ai that works" podcast, June 2026. A nightly agent loop tests new BAML language features, files tickets on failures, and opens pull requests. |
| [The battle to replace GitHub: building assembly lines for software, and why no one finishes projects anymore](https://linearb.io/dev-interrupted/podcast/github-outages-software-factories-agentic-assembly-lines) | Ben Lloyd Pearson and Andrew Zigler, Dev Interrupted, August 2026. Argues agentic PRs now pile up faster than review can clear them, and previews a roundtable on measuring whether a software factory actually works. |
| [The Era of Compound Engineering](https://www.youtube.com/watch?v=_ehJyfHg1Vk) | Kieran Klaassen, AI Engineer. |
| [The Future of Software Development: Embracing AI and Quality](https://verygood.ventures/podcasts/chris-sells-ai-and-software-quality/) | Jorge Coca interviews Chris Sells of Gas City, Very Good Engineering podcast, July 2026. Running about 100 agents across 23 repos, and why engineering standards need to be written down for agents to follow. |
| [The Limits of Lights-Out Coding with Dexter Horthy](https://www.heavybit.com/library/podcasts/high-leverage/ep-12-the-limits-of-lights-out-coding-with-dexter-horthy) | Heavybit High Leverage, episode 12. |
| [The Missing Primitive for Agent Swarms](https://ai.engineer/talks/5Sui_OnSRlY-missing-primitive-agent-swarms) | Lou Bichard, Ona, AI Engineer Europe 2026. Argues software factories need a coordination layer of state machines, gates, and a CLI so agents preserve context and advance only after checks pass. |
| [The rise of software factories, the fall of first drafts, and the hidden tax holding back your agents](https://linearb.io/dev-interrupted/podcast/dark-software-factories-orchestrators-tax-agentic-compute) | Ben Lloyd Pearson and Andrew Zigler, Dev Interrupted, July 2026. Sets the view that only 20-30% of issues can be automated against the case for maintainability and the orchestrator's "context pollution" tax. |
| [The Software Factory: Dex Horthy on Shipping Fast Without AI Slop](https://mastra.ai/podcasts/the-software-factory-dex-horthy-on-shipping-fast-without-ai-slop) | Mastra. |
| [This solo builder runs 24/7 local AI on his own hardware](https://www.lennysnewsletter.com/p/this-solo-builder-runs-247-local) | Claire Vo interviews Alex Finn, How I AI podcast, July 2026. A personal Claude Code factory, idea to Slack-approved merge, running continuously on his own hardware. |
| [Warp CEO Zach Lloyd on why software factories are the next phase of coding](https://www.latent.space/p/software-factories) | Richard MacManus, Latent Space, July 2026. |
| [WF2026: Software Factories and Keynotes](https://www.youtube.com/watch?v=htM02KMNZnk) | AI Engineer World's Fair 2026 recording of the Software Factories track, including Jason Liu of OpenAI on getting the most out of Codex and Tereza Tizkova's "Rise of the Software Factory." |
| [Why software factories fail without humans](https://linearb.io/dev-interrupted/podcast/why-software-factories-fail-humanlayer-warp-linearb) | Dev Interrupted roundtable with Dex Horthy, Aloke Desai, and Dan Lines, September 2026. Covers who owns PRs, measuring cost per effective merged PR and rework, and incident response as the last frontier. |

## Books

| Name | Description |
| --- | --- |
| [Vibe Coding: Building Production-Grade Software With GenAI, Chat, Agents, and Beyond](https://itrevolution.com/product/vibe-coding-book/) | Gene Kim and Steve Yegge, IT Revolution, October 2025. |

## Benchmarks

How to measure whether a factory works.

| Name | Description | Stars | Last commit |
| --- | --- | ---: | --- |
| [Aider polyglot benchmark](https://github.com/Aider-AI/polyglot-benchmark) | 225 Exercism problems across six languages. `⚠️ unmaintained` | 229 | 2024-12-22 |
| [The Agent Sandbox Taxonomy](https://github.com/kajogo777/the-agent-sandbox-taxonomy) | Open taxonomy and scoring framework that rates 27 agent sandboxes, including several used to isolate coding agents, across seven defense layers and seven threat categories. | 111 | 2026-06-10 |
| [(When) Should a Software Factory be Lights-off? Benchmarking Code Review Agents on Bug Detection](https://arxiv.org/abs/2610.13668) | Yang, He, Cheng, Butler, Murphy-Hill, Badea, Bird, October 2026. CRBugBench: open-source and proprietary bug-tagged PR review tasks testing whether AI review agents can safely gate a lights-off factory. | — | — |
| [Long-Horizon Terminal-Bench](https://arxiv.org/abs/2607.08964) | The strongest model scores 15.2% at the strict threshold. | — | — |
| [METR time horizons](https://metr.org/time-horizons/) | The length of task an agent can complete at 50% success, doubling roughly every seven months. See [the original paper](https://arxiv.org/abs/2503.14499). | — | — |
| [SWE-bench](https://www.swebench.com) | Real GitHub issue resolution. The Verified subset is human-checked. | — | — |
| [SWE-bench Pro](https://arxiv.org/abs/2509.16941) | Long-horizon software engineering tasks. | — | — |
| [SWE-Marathon](https://arxiv.org/abs/2606.07682) | Can agents complete ultra-long-horizon software work? | — | — |
| [Terminal-Bench](https://www.tbench.ai) | Agent tasks in a real terminal. | — | — |

## Related lists

| Name | Description | Stars | Last commit |
| --- | --- | ---: | --- |
| [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | MCP servers. | 98,405 | 2026-11-23 |
| [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | Skills, agents, plugins, and tooling for Claude Code. | 58,638 | 2026-11-23 |
| [awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) | Autonomous agents in general. | 31,036 | 2026-08-21 |
| [awesome-vibe-coding](https://github.com/filipecalegario/awesome-vibe-coding) | Vibe coding references. `⚠️ unmaintained` | 5,458 | 2026-04-16 |
| [awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering) | Harness patterns, evals, memory, permissions, and orchestration. | 5,227 | 2026-11-23 |
| [awesome-agent-orchestrators](https://github.com/andyrewlee/awesome-agent-orchestrators) | Orchestrators and session managers for coding agents. | 2,478 | 2026-11-20 |
| [awesome-cli-coding-agents](https://github.com/bradAGI/awesome-cli-coding-agents) | Terminal-native coding agents and harnesses. | 1,493 | 2026-11-20 |
| [awesome-ralph](https://github.com/snwfdhmp/awesome-ralph) | Everything about the Ralph loop. | 939 | 2026-11-08 |

## Contributing

Contributions welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) first. The short version: a project belongs here if it runs, orchestrates, loops, or feeds AI coding agents. A single agent or a prompt collection does not.

## License

[CC0 1.0](LICENSE). Public domain.
