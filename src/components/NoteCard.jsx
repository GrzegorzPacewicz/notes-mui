import { Card, CardContent, CardHeader, IconButton, styled, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import PropTypes from 'prop-types';

const StyledCard = styled(Card)(({theme, note}) => ({
    border:
        note.category === 'work' ? `1px solid ${theme.palette.error.main}`
        : note.category === 'reminders' ? `1px solid blue`
        : note.category === 'money' ? `1px solid green`
        : 'none',
    transition: 'transform 0.5s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },

}));

// instead the theme you can use it red for example;

const NoteCard = ({note, handleDelete}) => {
    return (
        <div>
            <StyledCard elevation={1} note={note}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </StyledCard>
        </div>
    );
};

NoteCard.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    }).isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default NoteCard;
