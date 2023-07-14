import { Button, Container, Typography } from "@mui/material";

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
                color="secondary"
                variant="contained"
            >
                Submit
            </Button>

        </Container>
    );
};

export default Notes;