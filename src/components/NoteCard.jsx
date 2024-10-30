import Tags from "./Tags";
export default function NoteCard({ note, deleteNote }) {
    const { id, tags, title, content } = note;

    return (
        <div
            className="bg-white card shadow-2xl rounded-xl hover:-translate-y-0.5 p-2 opacity-75 hover:opacity-100 transition mx-2 flex flex-col"
            id={id}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {title}
                </h3>
                <button
                    className="text-xs  border border-purple-500 text-slate-700 hover:bg-purple-500 hover:text-white font-bold py-1 px-2 rounded transition"
                    onClick={() => deleteNote(id)}
                >
                    X
                </button>
            </div>
            <p className="border-y py-2 flex-grow ">{content}</p>
            <Tags tags={tags} />
        </div>
    );
}
