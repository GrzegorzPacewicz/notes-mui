import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

const Notes = () => {
    return (
        <Container>
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
        </Container>
    );
};

export default Notes;