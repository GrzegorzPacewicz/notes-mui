import { styled } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

export const ActiveListItem = styled(ListItem)(({theme}) => ({
    '& .MuiListItemIcon-root': {
        color: theme.palette.secondary.main,
    },
}))

export  const Page = styled(`div`)(({theme}) => ({
    background: grey[100],
    width: "100%",
    padding: theme.spacing(3),
    minHeight: '100vh'
}));


export  const StyledDate = styled(Typography)({
    flexGrow: 1,
});