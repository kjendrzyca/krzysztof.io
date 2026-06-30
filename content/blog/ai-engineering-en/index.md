---
title: 'Software Engineering with AI Agents - an end-to-end workshop'
createdAt: '2026-06-28'
updatedAt: '2026-06-30'
published: true
description: 'A workshop on setting up your repository, architecture, tooling, process, and organization for repeatable work with AI coding agents.'
hideArticleFooter: true
hideSubscribe: true
banner: './banner.png'
bannerAlt: 'Claude Code standardizing agent work in a monorepo'
language: 'en'
translations:
  pl: 'ai-engineering'
---

This workshop is about setting up the whole software delivery cycle - repository, architecture, tooling, process, and organization - so teams can work with AI coding agents in a repeatable and controlled way, and keep the resulting code maintainable. It helps teams gradually adopt AI-first engineering practices: from diagnosing the current setup to spreading working practices across the organization.

Most engineering teams already have access to AI tools, but the work is still ad hoc: one person uses a browser chat, someone else runs an agent in a terminal, and no one has agreed on how to work this way as a team, safely and repeatedly. The problem is rarely the license. More often, the team lacks a shared workflow, repository standards, and enough shared know-how.

The workshop covers the full cycle: diagnosis, repository standardization, architecture for agents, tool selection, daily work with agents, quality practices, gradual adoption, and internal rollout. The focus is setup and process, not prompt tricks. The goal is repeatable, maintainable engineering with AI - not one-off vibe coding that breaks at the first substantial change.

I keep the approach deliberately lightweight: we start with the smallest thing that removes your current bottleneck, then extend the setup only when it pays off - without building a large framework upfront. Humans remain responsible for engineering decisions and for what goes to production.

## Who this is for

- Engineering teams that already use AI tools, but want to move from "we have tool licenses" to "we have a workflow".
- Tech leads, staff/principal engineers, and engineering managers responsible for rolling out AI coding agents across several teams.
- Regulated or security-sensitive environments where agent use needs to be productive and controlled.
- Individual engineers and small teams that want to move beyond "chat and autocomplete" into repository-level agent work in a condensed format.

## What your team gets out of it

- A clear picture of where you are today and what a mature AI engineering setup looks like in 2026, including your current maturity level.
- A tool and model strategy that can survive pricing changes and periods when a model underperforms: explicit model choice, a fallback path, and your own set of reference tasks for comparison.
- A plan for a "gold standard repository" where agents can work reliably: standards plus architecture.
- Daily work patterns: task slicing, plan-first loops, isolated repository copies, several agents running in parallel, and permission boundaries.
- A review and quality process that scales with agent output instead of becoming the bottleneck.
- Security and governance guardrails matched to your risk profile.
- A plan for the first few weeks and the following months, with owners and a clear "do not touch yet" list.
- Starting materials: the public repo-harness starter, a tool evaluation list including review bots, and sources to track the market.
- Shared team vocabulary that narrows know-how gaps.

## Program

Nine modules. The order, weight, and depth are adjusted to your stack and maturity.

### 1. Current state and diagnosis

What a mature AI coding agent setup looks like in 2026, and how vibe coding differs from deliberate engineering with AI. Where teams get stuck - usually not because of the tools, but because they lack a shared workflow, repository standards, and enough shared know-how. We identify your current maturity level - from browser chat through IDE and terminal agents to subagents and cloud agents - so the rest of the program has a clear reference point.

### 2. Tools and vendor independence

A review of current tools (Claude Code, Cursor, Copilot, Codex, Gemini CLI, Windsurf, and others) and how to choose between them without tying your workflow to a single vendor or to whichever model happens to be strongest at the time. Pricing models and their pitfalls (per-request vs per-token, Pro vs Enterprise), explicit model choice instead of "auto" mode (which hides the model, cost, and comparability of results), and a 6-12 month fallback strategy.

### 3. Project-level standardization

How to prepare a repository for reliable agent work. `AGENTS.md` / `CLAUDE.md` as the repository map and the place for hard rules, how to separate company, project, and personal instructions without duplication, what agent skills are and when they make sense, MCP vs CLI vs commands, and documentation patterns that make an agent follow steps instead of guessing. We also cover the conventions that need to be written down before you let AI write code in the repo.

### 4. Architecture for agents

Why clear layers, module isolation, and shared contracts matter even more when an agent writes code. How to enforce rules in several layers (types, tests, CI), instead of trusting one large linter, what a linter can and cannot cover, where clear naming is enough, and where documentation has to make the boundary explicit. We also cover semantic tooling (LSP, symbol search, safe refactors) that helps agents avoid getting lost in a large codebase.

### 5. Working with agents

Daily patterns: how to slice tasks so an agent can handle them well, plan-first loops, working in a worktree (an isolated repository copy for parallel work), several agents running in parallel, and when to let an agent work independently vs when it should ask a human. The module also covers browser automation and runtime access (for example read-only access to databases or logs) as normal parts of the workflow, plus context management so agents do not get buried in irrelevant information.

### 6. Process and quality

How to review AI-generated code without turning review into the bottleneck - because review and QA do not scale linearly with agent throughput. Layered review and shift-left practices, where review bots help and where they do not, catching drift in documentation, conventions, structure, and CI, and recognizing whether AI is improving the codebase or making it worse.

### 7. Gradual AI-first adoption

How to reach a setup where agents generate code most of the time without overinvesting upfront. Where the knowledge that guides agents should live, what a maturity model and harness look like (the environment and knowledge that guide agents), the audit-update-maintain loop, the "just enough documentation" rule, and anti-patterns that make agents lose context while making the repository harder for humans to navigate: one giant instruction file, empty docs folders created "for the future", and heavy policy sets without pilots or data.

### 8. Rolling this out across the organization

How to move this from one team to many. How a lead team can set an example without becoming the bottleneck, how to reduce know-how gaps (from people using chat to people running autonomous agents), what to standardize centrally, what to leave to teams, and how to manage shared artifacts: skills, commands, MCP registries, and evaluation packs.

### 9. Leaving the workshop with concrete next steps

You leave with an implementation plan: what to do in the first 2-4 weeks, what to do over the following 2-3 months, and what not to touch yet. This includes ownership for the gold standard repository, standards, costs, and usage; success and failure signals; and clear criteria for expanding the rollout, pausing it, or rolling it back.

## Security, compliance, and governance

This topic runs through modules 2-6 and is especially important in regulated environments: data classification (code, secrets, PII, production data), trusted directories, allow/deny rules for tools and paths, branch protections and safe write boundaries (for example draft PRs only, no agent merge), network egress, auditability, prompt injection from external systems (issue trackers, documents, MCP), MCP governance, and read-only runtime access.

## Format and organization

- Format: remote or on-site, as a focused workshop split into several sessions, or as longer hands-on support.
- Variants: team workshop, deep dive into 2-3 selected modules, or ongoing adoption support (office hours, paired coding sessions, migration consulting).
- For individual engineers and small teams: a condensed version focused on tools, project standards, and practical agent workflows.
- Scope, depth, timeline, and pricing are set after a short scoping call, once I understand your team size, stack, and goals.

## How I tailor the program

The same program can look different from one company to another because I start by mapping your current "as-is" state: what types of repositories and systems are involved, which ones are business-critical, which ones are safe pilot candidates, where time, money, and attention are currently being wasted, and which workflows repeat often enough to justify automation. That map shapes the choice of initial pilot projects and the weight of each module. Some teams need the most time on standardization and architecture; others need more work on process, quality, and governance.

The workshop is most effective when we can work with one real repository and a concrete task. That lets me speed up diagnosis and help design the first repeatable way of working. Ownership of standards, exceptions, and long-term maintenance stays with you.

## Next step

If this sounds relevant, reach out on [Instagram](https://instagram.com/kjendrzyca/), [LinkedIn](https://www.linkedin.com/in/kjendrzyca/), or by email at [kontakt@krzysztof.io](mailto:kontakt@krzysztof.io). A short note about your team, stack, and the main bottleneck with AI coding agents is enough.

If there is a fit, we can schedule a short scoping call (30-45 min). We will map your setup and goals. Based on that, I will come back with a proposal covering module weighting, format, timeline, and pricing.
