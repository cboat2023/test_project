"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "../styles/Home.module.css";

const storageKey = "cb-field-desk-ghana";

const starterNote = {
  title: "Ghana Trip Field Note",
  date: "2026-07-10",
  location: "",
  category: "Travel & Reflection",
  type: "Field Note",
  tags: "ghana, travel, reflection, family, faith",
  excerpt: "Notes from the Ghana trip: places, conversations, questions, photos, and lessons from the process.",
  focus: "What do I want to remember from this part of the trip?",
  people: "",
  moment: "",
  learned: "",
  question: "",
  body: "",
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70) || "ghana-trip-field-note";
}

function buildMarkdown(note) {
  const title = note.title || starterNote.title;
  const date = note.date || starterNote.date;
  const locationLine = note.location ? `\n- Location: ${note.location}` : "";

  return `---
title: "${title.replace(/"/g, "'")}"
date: "${date}"
category: "${note.category || starterNote.category}"
type: "${note.type || starterNote.type}"
tags: "${note.tags || starterNote.tags}"
excerpt: "${(note.excerpt || starterNote.excerpt).replace(/"/g, "'")}"
coverImage: ""
coverAlt: ""
---

## Field Focus

${note.focus || starterNote.focus}

## Field Log
${locationLine}
- People: ${note.people || ""}
- Moment I want to remember: ${note.moment || ""}
- One thing I learned: ${note.learned || ""}
- One question I am carrying: ${note.question || ""}

## Notes

${note.body || "Write the scene here. Keep the details concrete: place, sound, food, conversation, weather, prayer, family, feeling."}
`;
}

export default function FieldDesk() {
  const [note, setNote] = useState(starterNote);
  const [savedAt, setSavedAt] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      setNote({ ...starterNote, ...JSON.parse(saved) });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(note));
    setSavedAt(new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
  }, [note]);

  const markdown = useMemo(() => buildMarkdown(note), [note]);
  const fileName = `${slugify(note.title)}.md`;

  function updateNote(field, value) {
    setNote((current) => ({ ...current, [field]: value }));
  }

  function downloadMarkdown() {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function copyMarkdown() {
    await navigator.clipboard.writeText(markdown);
    setSavedAt("copied markdown");
  }

  function resetDraft() {
    setNote(starterNote);
  }

  return (
    <main className={styles.fieldDeskPage}>
      <section className={styles.fieldDeskHeader}>
        <p className={styles.kicker}>Field Desk</p>
        <h1>Ghana trip notes without the Notion friction.</h1>
        <p>
          Capture the trip in small, publishable pieces. This saves in your browser and exports clean markdown for the site.
        </p>
      </section>

      <section className={styles.fieldDeskShell} aria-label="Field note editor">
        <aside className={styles.fieldDeskSidebar}>
          <div>
            <p className={styles.kicker}>Status</p>
            <h2>Autosaved</h2>
            <span>{savedAt || "ready"}</span>
          </div>
          <div>
            <p className={styles.kicker}>Publish Path</p>
            <code>content/field-notes/{fileName}</code>
          </div>
          <div className={styles.fieldDeskActions}>
            <button type="button" onClick={downloadMarkdown}>Export .md</button>
            <button type="button" onClick={copyMarkdown}>Copy markdown</button>
            <button type="button" onClick={resetDraft}>Reset draft</button>
          </div>
        </aside>

        <div className={styles.fieldDeskEditor}>
          <label>
            <span>Title</span>
            <input value={note.title} onChange={(event) => updateNote("title", event.target.value)} />
          </label>

          <div className={styles.fieldDeskGrid}>
            <label>
              <span>Date</span>
              <input type="date" value={note.date} onChange={(event) => updateNote("date", event.target.value)} />
            </label>
            <label>
              <span>Location</span>
              <input value={note.location} onChange={(event) => updateNote("location", event.target.value)} placeholder="Accra, Kumasi, Cape Coast..." />
            </label>
          </div>

          <label>
            <span>Field focus</span>
            <textarea value={note.focus} onChange={(event) => updateNote("focus", event.target.value)} rows={3} />
          </label>

          <div className={styles.fieldDeskGrid}>
            <label>
              <span>People</span>
              <input value={note.people} onChange={(event) => updateNote("people", event.target.value)} />
            </label>
            <label>
              <span>Moment</span>
              <input value={note.moment} onChange={(event) => updateNote("moment", event.target.value)} />
            </label>
          </div>

          <div className={styles.fieldDeskGrid}>
            <label>
              <span>One thing learned</span>
              <input value={note.learned} onChange={(event) => updateNote("learned", event.target.value)} />
            </label>
            <label>
              <span>Question carried</span>
              <input value={note.question} onChange={(event) => updateNote("question", event.target.value)} />
            </label>
          </div>

          <label>
            <span>Notes</span>
            <textarea
              value={note.body}
              onChange={(event) => updateNote("body", event.target.value)}
              rows={14}
              placeholder="Start with the scene. What happened? What did you notice? What changed in you?"
            />
          </label>
        </div>

        <aside className={styles.fieldDeskPreview} aria-label="Markdown preview">
          <p className={styles.kicker}>Markdown Preview</p>
          <pre>{markdown}</pre>
        </aside>
      </section>
    </main>
  );
}
