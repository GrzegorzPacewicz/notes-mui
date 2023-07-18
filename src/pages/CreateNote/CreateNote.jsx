import { Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { StyledFormControl, StyledTextField } from "./styled.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('todos');
    const navigate = useNavigate();

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
            // Create a new note object with the provided data
            const newNote = {
                id: Date.now(), // You can use a unique identifier like the current timestamp
                title,
                details,
                category,
            };

            // Get existing notes from local storage or initialize an empty array
            const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

            // Add the new note to the existing notes array
            const updatedNotes = [...existingNotes, newNote];

            // Save the updated notes array to local storage
            localStorage.setItem('notes', JSON.stringify(updatedNotes));

            // Navigate to the home page after saving the note
            navigate('/');
        }
    };

    return (
        <Container>
            <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <StyledTextField
                    onChange={(event) => setTitle(event.target.value)}
                    variant="outlined"
                    label="Note Title"
                    color="primary"
                    fullWidth
                    required
                    error={titleError}
                />

                <StyledTextField
                    onChange={(event) => setDetails(event.target.value)}
                    variant="outlined"
                    label="Details"
                    color="primary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError}
                />

                <StyledFormControl>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        color="primary"
                    >
                        <FormControlLabel value="money" control={<Radio />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                    </RadioGroup>
                </StyledFormControl>

                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default CreateNote;
