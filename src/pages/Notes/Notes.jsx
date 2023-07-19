import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard.jsx";
import Masonry from '@mui/lab/Masonry';

const Notes = () => {

    const [notes, setNotes] = useState([])

    // json-server --watch data/db.json --port 8000

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })

        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }

    return (
        <Container sx={{marginTop: "20px"}}>

            <Masonry spacing={3} columns={{ xs: 1, md: 2, lg: 3 }}>
                    {notes.map(note => (
                        <div key={note.id}>
                            <NoteCard note={note} handleDelete={handleDelete}/>
                        </div>
                    ))}
            </Masonry>

        </Container>
    );
};

export default Notes;