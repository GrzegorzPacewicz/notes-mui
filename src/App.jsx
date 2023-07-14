import { BrowserRouter, HashRouter, MemoryRouter, Route, Router, Routes } from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import Create from "./pages/Create.jsx";
import { StaticRouter } from "react-router-dom/server.js";

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Notes/>}/>
                <Route path="/creat/" element={<Create/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App
