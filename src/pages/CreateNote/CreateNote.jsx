import { Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { StyledFormControl, StyledTextField } from "./styled.jsx";
import { useState } from "react";

const CreateNote = () => {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('todos');

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
            console.log(title, details, category)
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

                <StyledFormControl>
                    <FormLabel color="secondary">Note Category</FormLabel>
                    <RadioGroup
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        color="secondary"
                    >
                        <FormControlLabel value="money" control={<Radio color="secondary"  />} label="Money"/>
                        <FormControlLabel value="todos" control={<Radio color="secondary"/>} label="Todos"/>
                        <FormControlLabel value="reminders" control={<Radio color="secondary"/>} label="Reminders"/>
                        <FormControlLabel value="work" control={<Radio color="secondary"/>} label="Work"/>
                    </RadioGroup>
                </StyledFormControl>

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
