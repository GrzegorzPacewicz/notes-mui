import { HashRouter, Route, Routes } from "react-router-dom";
import CreateNote from "./pages/CreateNote/CreateNote.jsx";
import Notes from "./pages/Notes/Notes.jsx";
import Layout from "./components/Layout.jsx";

function App() {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route exact path="/*" element={<Notes/>}/>
                    <Route path="/create/" element={<CreateNote/>}/>
                </Routes>
            </Layout>
        </HashRouter>
    )
}

export default App
