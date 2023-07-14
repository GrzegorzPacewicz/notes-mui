import { Button, Container, styled, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CustomButton = styled(Button)({
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover':{
        backgroundColor: 'purple'
    }
});

const Notes = () => {
    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                color="textSecondary"
                gutterBottom
                sx={{ textDecoration: 'underline', marginBottom: 2, }}
            >
                Create a New Note
            </Typography>

            <CustomButton
                onClick={() => console.log('Clicked!')}
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit
            </CustomButton>
        </Container>
    );
};

export default Notes;
