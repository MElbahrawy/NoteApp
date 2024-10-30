import "./App.css";
import AddNote from "./components/AddNote";
import NotesContainer from "./components/NotesContainer";
import Tags from "./components/Tags";
import { useNotesContext } from "./context/Context";

function App() {
    const { tags, filterNotes } = useNotesContext();
    return (
        <>
            <div className="bg-gray-300 min-h-screen pb-10">
                <h1 className="text-3xl font-bold mx-auto py-10 text-center lg:mb-20 md:mb-10 sm:mb-5 bg-purple-500 text-white">
                    Keep Your Notes
                </h1>
                <div className="container mx-auto flex justify-center lg:mb-20 md:mb-10 sm:mb-5">
                    <Tags tags={tags} fn={filterNotes} />
                </div>
                <NotesContainer />
                <AddNote />
            </div>
            <footer>
                <p className="text-md text-center text-white bg-purple-500 p-3">
                    &copy; 2024{" "}
                    <a
                        href="https://mohamedelbahrawy.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-purple-700 underline font-bold transition"
                    >
                        MB-Dev
                    </a>{" "}
                    All rights reserved.
                </p>
            </footer>
        </>
    );
}

export default App;
