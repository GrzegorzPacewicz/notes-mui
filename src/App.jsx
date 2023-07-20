import { HashRouter, Route, Routes } from "react-router-dom";
import CreateNote from "./pages/CreateNote/CreateNote.jsx";
import Notes from "./pages/Notes/Notes.jsx";
import Layout from "./components/Layout/Layout.jsx";
import NewLayout from "./components/Layout/NewLayout.jsx";

function App() {
    return (
        <HashRouter>
            <NewLayout>
                <Routes>
                    <Route exact path="/*" element={<Notes/>}/>
                    <Route path="/create/" element={<CreateNote/>}/>
                </Routes>
            </NewLayout>
        </HashRouter>
    )
}

export default App
