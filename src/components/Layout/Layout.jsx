import {
    AppBar, Avatar,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import PropTypes from 'prop-types';
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { format } from "date-fns";

const drawerWidth = 240;

const Root = styled(`div`)({
    display: 'flex',
})

const Page = styled(`div`)(({theme}) => ({
    background: grey[100],
    width: "100%",
    padding: theme.spacing(3),
    minHeight: '100vh'
}));

const StyledDrawer = styled(Drawer)(({theme}) => ({
    width: drawerWidth,
    padding: theme.spacing(0),
}));

const StyledPaper = styled(Paper)({
    width: drawerWidth,
})

const ActiveListItem = styled(ListItem)(({theme}) => ({
    '& .MuiListItemIcon-root': {
        color: theme.palette.secondary.main,
    },
}))

const StyledAppBar = styled(AppBar)({
    width: `calc(100% - ${drawerWidth}px)`
});

const Offset = styled('div')(({theme}) => theme.mixins.toolbar);

const Title = styled(Typography)(({theme}) => ({
    padding: theme.spacing(2)
}));

const StyledDate = styled(Typography)({
    flexGrow: 1,
});


const Layout = ({children}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlined/>,
            path: '/create'
        }
    ];

    return (
        <>
            <Root>

                <StyledAppBar elevation={0}>
                    <Toolbar>
                        <StyledDate variant="h5">
                            Today is the {format(new Date(), `do MMMM Y`)}
                        </StyledDate>
                        <Typography variant="h5">
                            Grzegorz
                        </Typography>
                        <Avatar  sx={{ marginLeft: '16px' }}  src="/icon.png"/>
                    </Toolbar>
                </StyledAppBar>

                <StyledDrawer
                    variant="permanent"
                    anchor="left"
                >

                    <StyledPaper/>

                    <Title variant="h5">
                        Notes
                    </Title>

                    <List>
                        {menuItems.map(item => (
                            <ActiveListItem
                                button
                                key={item.text}
                                onClick={() => navigate(item.path)}
                                selected={location.pathname === item.path}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText secondary={item.text}/>
                            </ActiveListItem>
                        ))}
                    </List>

                </StyledDrawer>

                <Page>
                    <Offset/>
                    {children}
                </Page>

            </Root>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
