import fs from "fs";
import path from "path";
import katex from "katex";

const notesDirectory = path.join(process.cwd(), "content", "field-notes");

function createSlug(fileName) {
  return fileName
    .replace(/\.md$/i, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

function parseFrontmatter(fileContent) {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    return { metadata: {}, content: fileContent };
  }

  const metadata = {};
  match[1].split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      return;
    }

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();

    metadata[key] = rawValue
      .replace(/^["']|["']$/g, "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);

    if (metadata[key].length === 1 && !rawValue.includes(",")) {
      metadata[key] = metadata[key][0];
    }
  });

  return { metadata, content: match[2].trim() };
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function basicInlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
}

function renderMath(value, displayMode) {
  return katex.renderToString(value, {
    displayMode,
    throwOnError: false,
    strict: false,
  });
}

function inlineMarkdown(value) {
  return value
    .split(/(\$[^$\n]+\$)/g)
    .map((part) => {
      if (part.startsWith("$") && part.endsWith("$")) {
        return renderMath(part.slice(1, -1), false);
      }

      return basicInlineMarkdown(part);
    })
    .join("");
}

export function markdownToHtml(markdown) {
  const lines = markdown.split("\n");
  const html = [];
  let listItems = [];
  let mathLines = null;

  const flushList = () => {
    if (listItems.length > 0) {
      html.push(`<ul>${listItems.join("")}</ul>`);
      listItems = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (mathLines !== null) {
      if (trimmed === "$$" || trimmed === "\\]") {
        html.push(renderMath(mathLines.join("\n"), true));
        mathLines = null;
      } else {
        mathLines.push(line);
      }
      return;
    }

    if (trimmed === "$$" || trimmed === "\\[") {
      flushList();
      mathLines = [];
      return;
    }

    if (!trimmed) {
      flushList();
      return;
    }

    const taskItem = trimmed.match(/^[*-] \[([ xX])\]\s+(.*)$/);

    if (taskItem) {
      const checked = taskItem[1].toLowerCase() === "x";
      listItems.push(
        `<li class="task-list-item"><input type="checkbox" disabled${checked ? " checked" : ""} aria-hidden="true">${inlineMarkdown(taskItem[2])}</li>`
      );
      return;
    }

    if (/^[*-] /.test(trimmed)) {
      listItems.push(`<li>${inlineMarkdown(trimmed.slice(2))}</li>`);
      return;
    }

    flushList();

    if (trimmed.startsWith("### ")) {
      html.push(`<h3>${inlineMarkdown(trimmed.slice(4))}</h3>`);
    } else if (trimmed.startsWith("## ")) {
      html.push(`<h2>${inlineMarkdown(trimmed.slice(3))}</h2>`);
    } else {
      html.push(`<p>${inlineMarkdown(trimmed)}</p>`);
    }
  });

  flushList();

  if (mathLines !== null) {
    html.push(`<p>${inlineMarkdown(mathLines.join(" "))}</p>`);
  }

  return html.join("\n");
}

export function getAllNotes() {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(notesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = createSlug(fileName);
      const fullPath = path.join(notesDirectory, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { metadata, content } = parseFrontmatter(fileContent);

      return {
        slug,
        content,
        title: metadata.title || slug,
        date: metadata.date || "",
        category: metadata.category || "Reflections",
        type: metadata.type || "Learning Note",
        tags: Array.isArray(metadata.tags) ? metadata.tags : [],
        excerpt: metadata.excerpt || "",
        coverImage: metadata.coverImage || null,
        coverAlt: metadata.coverAlt || "",
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getNoteBySlug(slug) {
  const normalizedSlug = slug.trim().toLowerCase().replace(/\s+/g, "-");
  return getAllNotes().find((note) => note.slug === normalizedSlug);
}

export function getRelatedNotes(note, limit = 3) {
  return getAllNotes()
    .filter((candidate) => candidate.slug !== note.slug)
    .filter(
      (candidate) =>
        candidate.category === note.category ||
        candidate.tags.some((tag) => note.tags.includes(tag))
    )
    .slice(0, limit);
}
