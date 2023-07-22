import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { StyledFormControl, StyledTextField } from "../../pages/CreateNote/styled.jsx";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const EditNote = () => {
    const {id} = useParams();
    const [note, setNote] = useState(null);
    const navigate = useNavigate();

    const fetchNoteById = useCallback(() => {
        try {
            const notes = JSON.parse(localStorage.getItem("notes")) || [];
            const foundNote = notes.find((note) => note.id === id);
            if (foundNote) {
                setNote(foundNote);
            } else {
                console.log("Note not found.");
            }
        } catch (error) {
            console.error("Error fetching note:", error);
        }
    }, [id]);

    useEffect(() => {
        fetchNoteById();
    }, [fetchNoteById]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNote({
            ...note,
            [name]: value,
        });
    };

    const handleEdit = (event) => {
        event.preventDefault();

        try {
            const notes = JSON.parse(localStorage.getItem("notes")) || [];
            const noteIndex = notes.findIndex((note) => note.id === id);
            if (noteIndex !== -1) {
                notes[noteIndex] = note;
                localStorage.setItem("notes", JSON.stringify(notes));
                navigate("/");
            } else {
                console.log("Note not found.");
            }
        } catch (error) {
            console.error("Error updating note:", error);
        }
    };

    const handleDelete = () => {
        try {
            let notes = JSON.parse(localStorage.getItem("notes")) || [];
            notes = notes.filter((note) => note.id !== id);
            localStorage.setItem("notes", JSON.stringify(notes));
            navigate("/");
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    return (
        <div>
            {note ? (
                <Container>
                    <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
                        Edit the Note
                    </Typography>

                    <form noValidate autoComplete="off" onSubmit={handleEdit}>
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
                        />

                        <StyledFormControl>
                            <FormLabel>Note Category</FormLabel>
                            <RadioGroup
                                value={note.category}
                                onChange={handleChange}
                                color="primary"
                                name="category"
                            >
                                <FormControlLabel value="money" control={<Radio/>} label="Money"/>
                                <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
                                <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
                                <FormControlLabel value="work" control={<Radio/>} label="Work"/>
                            </RadioGroup>
                        </StyledFormControl>

                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            endIcon={<KeyboardArrowRightIcon/>}
                        >
                            Submit
                        </Button>
                        <Button
                            color="warning"
                            variant="contained"
                            onClick={handleDelete}
                            style={{marginLeft: "1rem"}}
                            endIcon={<DeleteOutlinedIcon />}
                        >
                            Delete
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
