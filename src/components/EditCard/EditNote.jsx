import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { StyledFormControl, StyledTextField } from "../../pages/CreateNote/styled.jsx";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";
import { nanoid } from "nanoid";

const EditNote = () => {
    const {id} = useParams(); // Access the note ID from the URL params
    const [note, setNote] = useState(null); // State to hold the note data

    // Effect to fetch the note data from local storage when the component mounts
    useEffect(() => {
        fetchNoteById(id);
    }, [id]);

    // Function to fetch the note data by ID from local storage
    const fetchNoteById = () => {
        try {
            // Retrieve the notes data from local storage
            const notes = JSON.parse(localStorage.getItem("notes")) || [];

            // Find the note with the matching ID
            const foundNote = notes.find((n) => n.id === id);

            if (foundNote) {
                setNote(foundNote); // Update the state with the found note data
            } else {
                // Handle the case when the note with the provided ID is not found
                console.log("Note not found.");
            }
        } catch (error) {
            // Handle errors if any
            console.error("Error fetching note:", error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if (title.trim() === '') {
            setTitleError(true);
        }

        if (details.trim() === '') {
            setDetailsError(true);
        }

        if (title.trim() && details.trim()) {
            const newNote = {
                id: nanoid(),
                title: title.trim(),
                details: details.trim(),
                category,
            };

            const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
            const updatedNotes = [...existingNotes, newNote];
            localStorage.setItem('notes', JSON.stringify(updatedNotes));

            setTitle('');
            setDetails('');
            navigate('/');
        }
    };


    return (
        <div>
            {note ? (
                <Container>
                    <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
                        Edit the Note
                    </Typography>

                    <form
                        noValidate autoComplete="off"
                        // onSubmit={handleSubmit}
                    >
                        <StyledTextField
                            value={note.title}
                            variant="outlined"
                            label="Note Title"
                            color="primary"
                            fullWidth
                            required
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
                        >
                        </StyledTextField>
                        <StyledFormControl>
                            <FormLabel>Note Category</FormLabel>
                            <RadioGroup value={note.category}
                                        // onChange={(event) => setCategory(event.target.value)}
                                color="primary">
                                <FormControlLabel value="money" control={<Radio />} label="Money" />
                                <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                                <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                                <FormControlLabel value="work" control={<Radio />} label="Work" />
                            </RadioGroup>
                        </StyledFormControl>

                        <Button type="submit" color="primary" variant="contained" endIcon={<KeyboardArrowRightIcon/>}>
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
