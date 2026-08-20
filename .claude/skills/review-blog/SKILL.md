---
name: review-blog
description: Review blog posts for grammar, vocabulary, technical terms, and readability
---

# Review Blog

Reviews an MDX blog post for grammar, vocabulary, clarity, and technical term handling. Target audience is **developers, students, and beginners** — keep language simple and approachable.

## Steps

1. Read the MDX file to review (from `content/blogs/`).

2. Run through each review dimension below and collect findings.

3. Present findings as a numbered list grouped by category.

4. Apply fixes if the user confirms, or let them pick which to fix.

## Review Dimensions

### 1. Grammar & Spelling
- Fix typos, subject-verb agreement, and punctuation
- Correct capitalization in headings and sentences
- Fix inconsistent tense (stick to one tense per section)
- Remove filler words: "actually", "basically", "really", "just"

### 2. Vocabulary & Simplicity
- Replace complex words with simpler alternatives when possible:

| Avoid | Use instead |
|-------|-------------|
| utilize | use |
| implement | build / set up |
| subsequently | then / after that |
| facilitate | help / allow |
| utilize | use |
| ascertain | find out / check |
| aforementioned | this / that |
| commence | start / begin |
| endeavor | try |
| furthermore | also / plus |

- Keep sentences short (aim for under 25 words per sentence)
- Use active voice over passive voice
- Break long paragraphs into smaller chunks

### 3. Technical Terms
When a technical term appears for the first time in a post, always apply **bold** or *italic* to make it stand out.

**Bold — for tools, frameworks, libraries, and proper nouns:**
```mdx
We use **Next.js** for routing and **Tailwind CSS** for styling.
```

**Italic — for concepts, processes, and abstract terms:**
```mdx
The *hydration* process syncs the server-rendered HTML with React.
```

**Tooltip — for acronyms or terms that need a short explanation:**
Use a `<span>` with a `title` attribute so the reader sees a definition on hover:
```mdx
<span title="Server-Side Rendering: pages rendered on the server before being sent to the browser">SSR</span>
```

Pick the style that fits the term:
- Tools/frameworks/libraries → **bold** (e.g., **React**, **Next.js**, **Tailwind CSS**)
- Concepts/processes → *italic* (e.g., *hydration*, *rendering*, *component lifecycle*)
- Acronyms → tooltip with bold (e.g., <span title="...">**SSR**</span>)
- Well-known terms (API, component, props) → bold only, no tooltip needed

### 4. Links & Formatting
- All links must have visible underline styling — check for bare URLs without markdown link syntax
- Use descriptive link text, not "click here" or "this link"
- Code blocks must have language tags: ` ```tsx `, ` ```css `, etc.
- Bold key terms on first mention in a section
- Use bullet lists for 3+ items instead of burying them in a paragraph

### 5. Structure & Flow
- Each section should have a clear purpose
- Add a short intro sentence after each heading
- End with a "What's Next" or summary section
- Total reading time should stay under 5 minutes (aim for 600–900 words)

## Output Format

Present findings like this:

```
### Grammar
1. Line X: "i havent" → "I haven't"
2. Line Y: missing period at end of sentence

### Vocabulary
3. Line X: "utilize" → "use"
4. Line X: sentence is 40 words — split into two

### Technical Terms
5. Line X: "Next.js" should be **bold** on first mention
6. Line Y: "hydration" should be *italic* on first mention
7. Line Z: "SSR" not defined on first mention — add tooltip

### Links & Formatting
7. Line X: bare URL — wrap in markdown link
8. Line Y: code block missing language tag
```

## Conventions

- Blog posts live in `content/blogs/<slug>.mdx`
- Target audience: developers, students, beginners
- Tone: friendly, casual, but clear — like explaining to a friend
- Prefer short sentences and simple words
- Always explain acronyms and jargon on first use
