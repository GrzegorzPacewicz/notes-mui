import { HashRouter, Route, Routes } from "react-router-dom";
import CreateNote from "./pages/CreateNote/CreateNote.jsx";
import Notes from "./pages/Notes/Notes.jsx";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/*" element={<Notes/>}/>
                <Route path="/create/" element={<CreateNote/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App
