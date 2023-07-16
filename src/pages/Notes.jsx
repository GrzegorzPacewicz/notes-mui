import { Button, Container, styled, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Notes = () => {
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

            <Button
                onClick={() => console.log('Clicked!')}
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit
            </Button>
        </Container>
    );
};

export default Notes;
