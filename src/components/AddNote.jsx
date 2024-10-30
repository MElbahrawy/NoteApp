import { Label, Modal } from "flowbite-react";
import { useState } from "react";
import Tags from "./Tags";
import { useNotesContext } from "../context/Context";

export default function AddNote() {
    const [openModal, setOpenModal] = useState(false);
    const [newTag, setNewTag] = useState("");
    const [note, setNote] = useState({
        tags: [],
        title: "",
        content: "",
    });
    const { addNote } = useNotesContext();
    let cn =
        "p-2 rounded-lg border text-sm border-gray-300 bg-gray-50 text-gray-900 focus:border-purple-500 focus:ring-purple-500 focus:ring-1";

    function onCloseModal() {
        setOpenModal(false);
        setNote("");
    }

    const handleAddTag = () => {
        setNote({
            ...note,
            tags: [...(note.tags?.length > 0 ? note.tags : []), newTag],
        });
        setNewTag("");
    };
    const handleDeleteTag = (tag, index) => {
        setNote({ ...note, tags: note.tags.filter((_, i) => i !== index) });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!note.content || !note.title) return;
        addNote(note);
        onCloseModal();
    };
    return (
        <>
            <button
                className="fixed bottom-5 right-5 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-xl"
                onClick={() => setOpenModal(true)}
            >
                +
            </button>
            <Modal
                dismissible
                show={openModal}
                size="md"
                onClose={onCloseModal}
                popup
                className="mx-auto"
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold uppercase text-purple-900 dark:text-white text-center">
                            add your note
                        </h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Title" />
                            </div>
                            <input
                                id="title"
                                name="title"
                                className={`block w-full ${cn}`}
                                placeholder="note title"
                                value={note?.title}
                                onChange={(e) =>
                                    setNote({
                                        ...note,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="content" value="Content" />
                            </div>
                            <textarea
                                id="content"
                                name="content"
                                className={`block w-full ${cn}`}
                                placeholder="Write your note here..."
                                value={note?.content}
                                onChange={(e) =>
                                    setNote({
                                        ...note,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="tags" value="tags" />
                            </div>
                            <div className="flex flex-wrap gap-1 justify-between mb-5">
                                <input
                                    id="tags"
                                    className={`inline-block flex-auto ${cn}`}
                                    placeholder="add tag..."
                                    value={newTag}
                                    onChange={(e) => setNewTag(e.target.value)}
                                />
                                <button
                                    className={`"inline-block btn rounded py-1 px-2 text-white uppercase font-bold ${
                                        newTag
                                            ? "bg-purple-500 hover:bg-purple-700"
                                            : "bg-slate-400"
                                    } "`}
                                    onClick={() => handleAddTag()}
                                    disabled={!newTag}
                                >
                                    add
                                </button>
                            </div>
                            <Tags tags={note?.tags} fn={handleDeleteTag} />
                        </div>
                        <div className="w-full ">
                            <button
                                className="mx-auto bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Add note
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
