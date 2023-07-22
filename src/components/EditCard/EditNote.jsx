import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { StyledFormControl, StyledTextField } from "../../pages/CreateNote/styled.jsx";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";

const EditNote = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchNoteById(id);
    }, [id]);

    const fetchNoteById = () => {
        try {
            // Retrieve the notes data from local storage
            const notes = JSON.parse(localStorage.getItem("notes")) || [];

            // Find the note with the matching ID
            const foundNote = notes.find((note) => note.id === id);

            if (foundNote) {
                setNote(foundNote);
            } else {
                // Handle the case when the note with the provided ID is not found
                console.log("Note not found.");
            }
        } catch (error) {
            // Handle errors if any
            console.error("Error fetching note:", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote({
            ...note,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            // Retrieve the notes data from local storage
            const notes = JSON.parse(localStorage.getItem("notes")) || [];

            // Find the index of the note with the matching ID
            const noteIndex = notes.findIndex((note) => note.id === id);

            if (noteIndex !== -1) {
                // Update the note in the notes array
                notes[noteIndex] = note;

                // Save the updated notes array back to local storage
                localStorage.setItem("notes", JSON.stringify(notes));

                // Navigate back to the notes list page after successful update
                navigate("/");
            } else {
                // If the note with the provided ID is not found
                console.log("Note not found.");
            }
        } catch (error) {
            // Handle errors if any
            console.error("Error updating note:", error);
        }
    };

    return (
        <div>
            {note ? (
                <Container>
                    <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
                        Edit the Note
                    </Typography>

                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <StyledTextField
                            value={note.title}
                            variant="outlined"
                            label="Note Title"
                            color="primary"
                            fullWidth
                            required
                            onChange={handleChange}
                            name="title"
                        />

                        <StyledTextField
                            value={note.details}
                            variant="outlined"
                            label="Details"
                            color="primary"
                            multiline
                            rows={4}
                            fullWidth
                            required
                            onChange={handleChange}
                            name="details"
                        >
                        </StyledTextField>
                        <StyledFormControl>
                            <FormLabel>Note Category</FormLabel>
                            <RadioGroup value={note.category} onChange={handleChange} color="primary" name="category">
                                <FormControlLabel value="money" control={<Radio />} label="Money" />
                                <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                                <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                                <FormControlLabel value="work" control={<Radio />} label="Work" />
                            </RadioGroup>
                        </StyledFormControl>

                        <Button type="submit" color="primary" variant="contained" endIcon={<KeyboardArrowRightIcon />}>
                            Submit
                        </Button>
                    </form>
                </Container>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EditNote;
