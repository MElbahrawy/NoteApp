import { createContext, useContext, useEffect, useState } from "react";
import notesData from "../data/Notes.data";

const context = createContext();

export const useNotesContext = () => useContext(context);

const AppContext = ({ children }) => {
    const [notes, setNotes] = useState(notesData);
    const [tags, setTags] = useState();
    const [active, setActive] = useState(false);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(data);
    }, []);
    useEffect(() => {
        let Newtags = notes.map((note) => note.tags).flat();
        setTags([...new Set(Newtags)]);
    }, [notes]);

    const addNote = (note) => {
        let newNotes = [...notes, { ...note, id: Number(notes.length) + 1 }];
        localStorage.setItem("notes", JSON.stringify(newNotes));
        setNotes(newNotes);
        setTags([...new Set(newNotes.tags)]);
    };
    const deleteNote = (id) => {
        let newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        localStorage.setItem("notes", JSON.stringify(newNotes));
    };
    const filterNotes = (tag) => {
        if (active) {
            setNotes(JSON.parse(localStorage.getItem("notes")));
            setActive(false);
        } else {
            setNotes(notes.filter((note) => note.tags.includes(tag)));
            setActive(true);
            setTags([]);
        }
    };
    return (
        <context.Provider
            value={{ notes, tags, addNote, deleteNote, filterNotes }}
        >
            {children}
        </context.Provider>
    );
};

export { AppContext };
