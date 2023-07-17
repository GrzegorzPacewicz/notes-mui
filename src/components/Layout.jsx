import { Drawer, List, ListItem, ListItemIcon, ListItemText, Paper, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import PropTypes from 'prop-types';
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Root = styled(`div`)({
    display: 'flex',
})

const Page = styled(`div`)({
    background: grey[100],
    width: "100%",
});

const StyledDrawer = styled(Drawer)({
    width: drawerWidth,
});

const StyledPaper = styled(Paper)({
    width: drawerWidth
})

const ActiveListItem = styled(ListItem)(({theme}) => ({
    '& .MuiListItemIcon-root': {
        color: theme.palette.primary.main,
    },
}));

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
                <StyledDrawer
                    variant="permanent"
                    anchor="left"
                >
                    <StyledPaper/>
                    <div>
                        <Typography variant="h5">
                            Notes
                        </Typography>
                    </div>

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
