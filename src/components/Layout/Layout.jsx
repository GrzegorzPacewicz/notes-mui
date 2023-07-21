import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { Avatar, Container, Paper, styled, useMediaQuery } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { format } from "date-fns";

const drawerWidth = 240;

function Layout(props) {
    const {window, children} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigate = useNavigate();
    const location = useLocation();
    const isXs = useMediaQuery((theme) => theme.breakpoints.down('xs'));


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

    const ActiveListItem = styled(ListItem)(({theme}) => ({
        '& .MuiListItemIcon-root': {
            color: theme.palette.secondary.main,
        },
    }))

    const Page = styled(`div`)(({theme}) => ({
        background: grey[100],
        width: "100%",
        padding: theme.spacing(3),
        minHeight: '100vh'
    }));


    const StyledDate = styled(Typography)({
        flexGrow: 3,
    });

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h5">
                    Notes
                </Typography>
            </Toolbar>

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
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                elevation={0}
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around',}}>
                        <StyledDate variant="h6" sx={{ mr: 2} }>
                            Today is the {format(new Date(), `do MMMM Y`)}
                        </StyledDate>
                        <Typography variant="h6">
                            Grzegorz
                        </Typography>
                        <Avatar src="/icon.png" sx={{ ml: 2 }} />
                    </Box>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Page
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>
                {children}
            </Page>
        </Box>
    );
}

Layout.propTypes = {
    window: PropTypes.func,
    children: PropTypes.node,
};

export default Layout;