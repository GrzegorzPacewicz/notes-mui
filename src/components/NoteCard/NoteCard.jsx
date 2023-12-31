import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { StyledAvatar, StyledCard } from "./styled.jsx";
import { CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";

const NoteCard = ({note, handleDelete}) => {

    const navigate = useNavigate();

    return (
        <div>
            <StyledCard elevation={1} note={note}>
                <CardHeader
                    avatar={<StyledAvatar note={note}>{note.category[0].toUpperCase()}</StyledAvatar>}
                    action={
                        <>
                            <IconButton onClick={() => navigate(`/edit/${note.id}`)}>
                                <EditOutlined/>
                            </IconButton>
                            <IconButton onClick={() => handleDelete(note.id)}>
                                <DeleteOutlined/>
                            </IconButton>
                        </>
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
