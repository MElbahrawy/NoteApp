import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppContext } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
    <AppContext>
        <App />
    </AppContext>
);
