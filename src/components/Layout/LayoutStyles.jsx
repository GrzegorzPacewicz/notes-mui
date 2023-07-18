// import { Drawer, ListItem, Paper, styled, Typography } from "@mui/material";
// import { grey } from "@mui/material/colors";
//
// export function LayoutStyles() {
//     const drawerWidth = 240;
//
//     const Root = styled(`div`)({
//         display: 'flex',
//     })
//
//     const Page = styled(`div`)(({theme}) => ({
//         background: grey[100],
//         width: "100%",
//         padding: theme.spacing(3)
//     }));
//
//     const StyledDrawer = styled(Drawer)(({theme}) => ({
//         width: drawerWidth,
//         padding: theme.spacing(0),
//     }));
//
//     const StyledPaper = styled(Paper)({
//         width: drawerWidth,
//     })
//
//     const ActiveListItem = styled(ListItem)(({theme}) => ({
//         '& .MuiListItemIcon-root': {
//             color: theme.palette.primary.main,
//         },
//     }));
//
//     const Title = styled(Typography)(({theme}) => ({
//         padding: theme.spacing(2)
//     }));
//
//     return {Root, Page, StyledDrawer, StyledPaper, ActiveListItem, Title};
// }