import { Button, Container, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { StyledTextField } from "./styled.jsx";
import { useState } from "react";

const CreateNote = () => {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }

        if (details === '') {
            setDetailsError(true)
        }

        if (title && details) {
            console.log(title, details)
        }
    }

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                color="textSecondary"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <StyledTextField
                    onChange={(event) => setTitle(event.target.value)}
                    variant="outlined"
                    label="Note Title"
                    color="secondary"
                    fullWidth
                    required
                    error={titleError}
                >
                </StyledTextField>
                <StyledTextField
                    onChange={(event) => setDetails(event.target.value)}
                    variant="outlined"
                    label="Details"
                    color="secondary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError}
                >
                </StyledTextField>
                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon/>}
                >
                    Submit
                </Button>
            </form>


        </Container>
    );
};

export default CreateNote;
