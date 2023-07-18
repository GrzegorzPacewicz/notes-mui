import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard.jsx";

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Read data from local storage on component mount
        const storedNotes = JSON.parse(localStorage.getItem("notes"));
        if (storedNotes) {
            setNotes(storedNotes);
        } else {
            // If no data in local storage, initialize with empty array
            setNotes([]);
        }
    }, []);

    const handleDelete = (id) => {
        // Filter out the deleted note and update local storage
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        localStorage.setItem("notes", JSON.stringify(newNotes));
    };

    return (
        <Container sx={{ marginTop: "20px" }}>
            <Grid container spacing={3}>
                {notes.map((note) => (
                    <Grid item xs={12} md={6} lg={4} key={note.id}>
                        <NoteCard note={note} handleDelete={() => handleDelete(note.id)} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Notes;
