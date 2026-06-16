# Email Workflow Skill

emailworkflowskill.com

Turn messy lifecycle logic into a map an agent can inspect.

A domain skill for agents that need to read workflow intent, compare trigger paths, and return operator-ready handoffs without touching live sends.

## Install

```bash
npx skills add emailworkflowskill
```

## Operating Data

- **27**: workflow objects to inspect
- **9**: handoff checkpoints
- **4**: approval tiers

## Lifecycle routing ledger

1. Entry trigger
2. Eligibility rules
3. Branch decision
4. Message handoff
5. Exit condition

## Scenarios

### Lifecycle map audit

Trace welcome, activation, expansion, and winback paths before a teammate changes logic.

### Trigger logic review

Ask the agent to compare event names, filters, delays, and exit rules.

### Sequence handoff plan

Return a clean build brief with owner, inputs, risks, and approval state.

## Operating Proof

- **Best for**: Teams with journeys spread across docs, builders, and analytics
- **Primary artifact**: Trigger map with gaps, collisions, and next actions
- **Stop condition**: Any edit that changes production audience flow

## Agent Resources

- Markdown index: /index.md
- Skill discovery JSON: /.well-known/skills/index.json
- Raw SKILL.md: /skills/emailworkflowskill/SKILL.md
- Articles: /articles/
