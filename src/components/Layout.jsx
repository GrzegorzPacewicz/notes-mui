import { Box, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import PropTypes from 'prop-types';

const StyledBox = styled(Box)({
    background: grey[100],
    width: "100%",
});

const Layout = ({ children }) => {
    return (
        <StyledBox>
            {children}
        </StyledBox>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
