---
name: blog-creation
description: Create a new blog post as an MDX file following project conventions
---

# Blog Creation

Creates a new blog post in `content/blogs/` following the project's MDX blog conventions.

## Steps

1. Ask for the blog **title**. Derive the slug from it (lowercase, kebab-case, e.g., "How I Built This Portfolio" → `how-i-built-this-portfolio.mdx`).

2. Ask for the **tags** (array of lowercase strings, e.g., `["nextjs", "portfolio"]`).

3. Ask for a short **description** (one sentence, used in the frontmatter and meta).

4. Create the MDX file at `content/blogs/<slug>.mdx` with this frontmatter structure:

```mdx
---
title: "Title Here"
description: "Short description here."
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
thumbnail: "/blogs/<slug>/thumbnail.png"
---

## Section Heading

Blog content goes here. Use markdown and JSX as needed.
```

5. Ask if the user wants to write the content themselves or if they want a draft based on a brief description.

6. If drafting, follow these content guidelines:
   - Use `##` for section headings (not `#` — reserve that for the title)
   - Use **bold** for emphasis on key terms
   - Keep paragraphs short and scannable
   - Use bullet lists for multiple points
   - Add code blocks with language tags when showing code (e.g., ` ```tsx `)
   - End with a "What's Next" or closing section

7. Remind the user to add a thumbnail image at `public/blogs/<slug>/thumbnail.png`.

## MDX Content Rules

- Wrap the MDX content in a `<div className="prose-blog">` is handled by the blog detail page — do NOT add it manually
- Tables are supported and styled via `.prose-blog` CSS classes
- Use `remark-gfm` for GitHub Flavored Markdown (tables, strikethrough, etc.)
- Code blocks are syntax-highlighted via `rehype-pretty-code` with `github-dark` theme

## Conventions

- File location: `content/blogs/<slug>.mdx`
- Thumbnail location: `public/blogs/<slug>/thumbnail.png`
- Date format: `YYYY-MM-DD` in frontmatter
- Tags: lowercase, no spaces, use kebab-case for multi-word (e.g., `"machine-learning"`)
- Slug: derived from title, lowercase, kebab-case, no special characters
