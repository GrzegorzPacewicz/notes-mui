import { Box, Drawer, Paper, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import PropTypes from 'prop-types';

const drawerWidth = 240;

const StyledBox = styled(Box)({
    background: grey[100],
    width: "100%",
});

const StyledDrawer = styled(Drawer)({
    width: drawerWidth,
});

const StyledPaper = styled(Paper)({
    width: drawerWidth
})

const WrapperBox = styled(Box)({
    display: 'flex',
})

const Layout = ({children}) => {
    return (
        <>
            <WrapperBox>
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
                </StyledDrawer>

                <StyledBox>
                    {children}
                </StyledBox>
            </WrapperBox>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
