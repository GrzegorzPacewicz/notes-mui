import { Avatar, Card, CardContent, CardHeader, IconButton, styled, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import PropTypes from 'prop-types';
import { green, red, yellow } from "@mui/material/colors";

const StyledCard = styled(Card)(({theme, note}) => ({
    border:
        note.category === 'work' ? `1px solid ${theme.palette.primary.main}`
        : note.category === 'reminders' ? `1px solid ${red[500]}`
        : note.category === 'money' ? `1px solid ${green[500]}`
        : note.category === 'todos' ? `1px solid ${yellow[600]}`
        : 'none',
    transition: 'transform 0.5s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const StyledAvatar = styled(Avatar)(({theme, note}) => ({
    backgroundColor:
        note.category === 'work' ? `${theme.palette.primary.main}`
        : note.category === 'reminders' ? red[600]
        : note.category === 'money' ? green[500]
        : note.category === 'todos' ? yellow[600]
        : 'none',
   }));

const NoteCard = ({note, handleDelete}) => {
    return (
        <div>
            <StyledCard elevation={1} note={note}>
                <CardHeader
                    avatar={<StyledAvatar note={note} >{note.category[0].toUpperCase()}</StyledAvatar>}
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
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    }).isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default NoteCard;
