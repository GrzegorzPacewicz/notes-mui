import { List, ListItemIcon, ListItemText } from "@mui/material";
import PropTypes from 'prop-types';
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { LayoutStyles } from "./LayoutStyles.jsx";

const {Root, Page, StyledDrawer, StyledPaper, ActiveListItem, Title} = LayoutStyles();

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
