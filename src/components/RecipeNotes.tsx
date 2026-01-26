"use client";

import { useState, useRef, useEffect } from "react";
import { addNote, updateNote, deleteNote } from "@/app/recipes/actions";

type Note = {
  id: number;
  content: string;
};

type Props = {
  cookbookId: number;
  initialNotes: Note[];
};

export default function RecipeNotes({ cookbookId, initialNotes }: Props) {
  const [notes, setNotes] = useState<Note[]>(initialNotes || []);
  const [newNote, setNewNote] = useState("");
  const newNoteRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textareas
  const autoResize = (el: HTMLTextAreaElement | null) => {
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  useEffect(() => {
    autoResize(newNoteRef.current);
  }, [newNote]);

  const handleAdd = async () => {
    if (!newNote.trim()) return;

    await addNote(cookbookId, newNote);
    setNotes([{ id: Date.now(), content: newNote }, ...notes]);
    setNewNote("");
  };

  const handleUpdate = async (id: number, content: string) => {
    await updateNote(id, content);
    setNotes(notes.map(n => (n.id === id ? { ...n, content } : n)));
  };

  const handleDelete = async (id: number) => {
    await deleteNote(id);
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-md border border-gray-200 space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Notes</h2>

      {/* Add Note */}
      <div className="flex gap-4 items-start">
        <textarea
          ref={newNoteRef}
          value={newNote}
          onChange={e => setNewNote(e.target.value)}
          onInput={e => autoResize(e.currentTarget)}
          placeholder="Write a note..."
          className="flex-1 p-4 rounded-2xl border border-gray-300 resize-none text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          onClick={handleAdd}
          className="w-12 h-12 rounded-xl bg-orange-500 text-white font-bold flex items-center justify-center hover:bg-orange-600 transition"
        >
          Add
        </button>
      </div>

      {/* List Notes */}
      <ul className="space-y-4">
        {notes.map((note, index) => (
          <li
            key={note.id}
            className="flex gap-4 items-start p-4 rounded-2xl bg-white shadow-sm"
          >
            {/* Number */}
            <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold flex items-center justify-center shadow">
              {index + 1}
            </span>

            {/* Note Content */}
            <textarea
              value={note.content}
              onChange={e => handleUpdate(note.id, e.target.value)}
              onInput={e => autoResize(e.currentTarget)}
              className="flex-1 bg-transparent text-lg text-gray-800 resize-none overflow-hidden focus:outline-none"
            />

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(note.id)}
              className="ml-2 w-10 h-10 rounded-xl text-red-500 font-bold flex items-center justify-center hover:text-red-700 transition"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
