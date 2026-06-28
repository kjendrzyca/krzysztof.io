---
title: 'Software Engineering with AI Agents - end-to-end workshop'
createdAt: '2026-06-28'
updatedAt: '2026-06-28'
published: true
description: 'A workshop on setting up your repository, architecture, tools, process, and organization for repeatable work with AI coding agents.'
banner: './banner.png'
bannerAlt: 'Claude Code standardizing agent work in a monorepo'
language: 'en'
translations:
  pl: 'ai-engineering'
---

How to set up the whole software delivery cycle - repository, architecture, tools, process, and organization - so that work with AI coding agents becomes repeatable, controlled, and produces code your team can maintain. The workshop helps a team move gradually toward AI-first engineering: from diagnosing the current setup to spreading working practices across the organization.

Most engineering teams already have access to AI tools, but the work is still ad hoc: someone chats with a browser tool, someone else runs an agent in a terminal, and no one has agreed how to do this together, repeatedly, and safely. The problem is rarely the license. More often it is missing workflow, missing repository standards, and uneven know-how across the team.

The workshop covers the full cycle: diagnosis, repository standardization, architecture for agents, tool selection, daily work with agents, quality process, gradual adoption, and internal propagation. The focus is setup and process, not prompt tricks. The goal is repeatable, maintainable engineering with AI, not one-off vibecoding that works until the first larger change.

The approach is minimal: we start with the smallest thing that removes your current bottleneck, then extend the setup only when it pays off - without building a large framework upfront. Humans remain responsible for engineering decisions and for what goes to production.

## Who this is for

- Engineering teams that already use AI tools, but want to move from "we have tool licenses" to "we have a workflow".
- Tech leads, staff/principal engineers, and engineering managers responsible for adopting AI coding agents across several teams.
- Regulated or security-sensitive environments where agents should be productive, but controlled.
- Individual engineers and small teams that want to move beyond "chat and autocomplete" into repository-level agent work in a lighter format.

## What your team gets out of it

- A clear picture of where you are today and what a mature 2026 setup looks like, including your position on the maturity ladder.
- A tool and model strategy that can survive pricing changes and weaker model periods: explicit model choice, a fallback path, and your own set of reference tasks for comparison.
- A plan for a "gold standard repository" where an agent can work: standards plus architecture.
- Daily work patterns: task slicing, plan-first loops, isolated repository copies, several agents running in parallel, and permission boundaries.
- A review and quality process that scales with agent output instead of becoming the bottleneck.
- Security and governance guardrails matched to your risk profile.
- A plan for the first weeks and the following months, with owners and a clear "do not touch yet" list.
- Starting materials: the public repo-harness starter, a tool evaluation list including review bots, and sources for tracking the market.
- Shared team language that reduces know-how gaps.

## Program

Nine modules. The order, weight, and depth are adjusted to your stack and maturity.

### 1. Current state and diagnosis

What a mature setup with AI coding agents looks like in 2026, and how vibecoding differs from deliberate engineering with AI. Where teams get stuck - usually not on tools, but on missing shared workflow, missing repository standards, and large know-how gaps. We name your position on the maturity ladder, from browser chat, through IDE and terminal agents, to subagents and cloud agents, so the rest of the program has a clear reference point.

### 2. Tools and vendor independence

A review of current tools (Claude Code, Cursor, Copilot, Codex, Gemini CLI, Windsurf, and others) and how to choose between them without becoming dependent on one vendor or one model's good period. Pricing models and their traps (per-request vs per-token, Pro vs Enterprise), explicit model choice instead of "auto" mode (which hides the model, cost, and comparability of results), and a 6-12 month fallback strategy.

### 3. Project-level standardization

How to turn a repository into a place where an agent can work. `AGENTS.md` / `CLAUDE.md` as the repository map and the place for hard rules, how to separate company, project, and personal instructions without duplication, what skills are and when they make sense, MCP vs CLI vs commands, and documentation patterns that make an agent follow steps instead of guessing. We also cover the conventions that need to be written down before you let AI generate code.

### 4. Architecture for agents

Why clear layers, module isolation, and shared contracts matter even more when an agent writes code. How to enforce rules in several layers (types, tests, CI), not with one large linter, what a linter can and cannot cover, when good naming is enough, and when documentation has to make the boundary explicit. We also cover semantic tooling (LSP, symbol search, safe refactors) that helps agents avoid getting lost in a large codebase.

### 5. Working with agents

Daily patterns: how to slice tasks so an agent can handle them well, plan-first loops, working in a worktree (an isolated repository copy for parallel work), several agents running at once, and when to let an agent act independently vs when it should ask a human. Browser automation and runtime access (for example read-only access to databases or logs) as normal parts of the workflow, plus context management so the agent does not drown in irrelevant information.

### 6. Process and quality

How to review AI-generated code without becoming the bottleneck - because review and QA do not scale linearly with agent throughput. Layered review and shift-left practices, where review bots help and where they do not, catching drift in documentation, conventions, structure, and CI, and recognizing whether AI is improving the codebase or making it worse.

### 7. Gradual AI-first adoption

How to reach a setup where agents generate code most of the time without overinvesting upfront. Where agent-guiding knowledge should live, what a maturity model and harness look like (environment plus knowledge that guide the agent), the audit-update-maintain loop, the "just enough documentation" rule, and anti-patterns that make agents lose context while making the repository harder for humans to navigate: one giant instruction file, empty docs folders created "for the future", and heavy policy sets without pilots and data.

### 8. Propagation across the organization

How to move this from one team to many. How a leading team can set the example without becoming the bottleneck, how to reduce know-how gaps (from people using chat to people running autonomous agents), what to standardize centrally, what to leave to teams, and how to manage shared artifacts: skills, commands, MCP registries, and evaluation packs.

### 9. Leaving the workshop with concrete next steps

You leave with an implementation plan: what to do in the first 2-4 weeks, what to do in the following 2-3 months, and what not to touch yet. This includes ownership for the gold standard repository, standards, costs, and usage; success and failure signals; and clear criteria for expanding the rollout, pausing it, or rolling it back.

## Security, compliance, and governance

This thread runs through modules 2-6 and is especially important in regulated environments: data classification (code, secrets, PII, production data), trusted directories, allow/deny rules for tools and paths, branch protections and safe write boundaries (for example draft PR only, no agent merge), network egress, auditability, prompt injection from external systems (issue trackers, documents, MCP), MCP governance, and read-only runtime access.

## Format and organization

- Format: remote or on-site, as a focused workshop split into several sessions, or as longer hands-on support.
- Variants: team workshop, deep dive into 2-3 selected modules, or ongoing adoption support (office hours, paired coding sessions, migration consulting).
- For individual engineers and small teams: a condensed version focused on tools, project standards, and practical agent workflows.
- Scope, depth, timeline, and pricing are decided after a short scoping call, once I understand your team size, stack, and goals.

## How I tailor the program

The same program can look different in two companies because I start by mapping your current "as is" state: what types of repositories and systems are involved, which ones are business-critical, which ones are safe pilot candidates, where time, money, and attention are currently being wasted, and which workflows repeat often enough to justify automation. That map leads to the choice of first pilot projects and the weight of each module. Some teams need the most time on standardization and architecture; others need more work on process, quality, and governance.

I am most useful when you have one repository and a concrete task to work on. That lets me speed up diagnosis and help design the first repeatable way of working. Ownership of standards, exceptions, and long-term maintenance stays on your side.

## Next step

If this sounds relevant, let's schedule a short scoping call (30-45 min). We will map your setup and goals. Based on that, I will come back with a proposal: module weighting, format, timeline, and pricing.
