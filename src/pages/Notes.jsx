import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";

const Notes = () => {

    const [notes, setNotes] = useState([])

    // json-server --watch data/db.json --port 8000

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))

    }, [])

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
            {notes.map(note => (
                <p key={note.id}>{note.title}</p>

            ))}

        </Container>
    );
};

export default Notes;