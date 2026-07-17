---
name: commit
description: Stage changes and create a git commit following project naming conventions
---

# Commit

Stage all changes and create a commit message following the project's conventional commit format.

## Commit Convention

This project uses conventional commits with these prefixes:

| Prefix | When to use |
|--------|-------------|
| `feat:` | New feature or component |
| `fix:` | Bug fix |
| `update:` | Enhancement to existing feature (not a fix, not new) |
| `refactor:` | Code restructuring without behavior change |
| `style:` | CSS/styling changes only |
| `chore:` | Dependencies, config, tooling |
| `docs:` | Documentation changes |

## Rules

- Prefix is lowercase, followed by `: ` (colon + space)
- Description is lowercase, imperative mood, no period at end
- Max 72 characters for the subject line
- Use `git diff --staged` to understand what changed before writing the message
- Group related changes into one commit — don't split a single logical change across multiple commits
- If changes span multiple categories, pick the most significant prefix

## Examples

```
feat: add project detail modal with screenshot gallery
fix: correct email typo in footer social links
update: redesign skill cards with category filtering
refactor: extract section header into reusable component
style: adjust dark mode border colors for better contrast
chore: remove unused zustand dependency
```

## Steps

1. Run `git diff --staged` to review what will be committed. If nothing is staged, run `git add -A` first.
2. Analyze the changes and determine the correct prefix.
3. Write the commit message following the convention above.
4. Run `git commit` with the formatted message.
