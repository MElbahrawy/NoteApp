import React from "react";
import NoteCard from "./NoteCard";
import { useNotesContext } from "../context/Context";

export default function NotesContainer() {
    const { notes, deleteNote } = useNotesContext();

    return (
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {notes.length > 0 ? (
                notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        deleteNote={deleteNote}
                    />
                ))
            ) : (
                <h3 className="text-2xl font-bold text-center">
                    No Notes to Show...
                </h3>
            )}
        </div>
    );
}
