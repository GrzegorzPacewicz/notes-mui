import { Link } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard.jsx";

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

        const newNotes = notes.filter(note => note.id != id)
        setNotes(newNotes)
    }

    return (
        <Container sx={{marginTop: "20px"}}>
            <Link
                to="/create"
                cmpomenent="button"
                underline="none"
            >
                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                >
                    Go to Create
                </Button>
            </Link>

            <Grid container spacing={3}>
                {notes.map(note => (
                    <Grid item xs={12} md={6} lg={4} key={note.id}>
                        <NoteCard note={note} handleDelete={handleDelete}/>
                    </Grid>
                ))}
            </Grid>

        </Container>
    );
};

export default Notes;