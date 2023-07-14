import { HashRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import Create from "./pages/Create.jsx";

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route exact path="/*" element={<Notes/>}/>
                <Route path="/create/" element={<Create/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App
