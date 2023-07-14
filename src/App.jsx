import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import Create from "./pages/Create.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Notes/>}/>
                <Route path="/create" element={<Create/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
