import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import PropTypes from 'prop-types';

const NoteCard = ({ note, handleDelete }) => {
    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
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
            </Card>
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
