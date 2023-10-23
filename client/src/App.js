import React from "react";
import {Container, Grow, Grid} from '@mui/material';
import memories from './images/memories.png';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import {StyledAppBar, StyledHeading, StyledImage} from "./styles";

const App = () => {

    return (
        <Container maxwidth='lg'>
            <StyledAppBar position="static" color="inherit">
                <StyledHeading variant="h2" align="center">Memories</StyledHeading>
                <StyledImage src={memories} alt="memories" height="60" width="60"/>
            </StyledAppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                            <div>hello</div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>
        </Container>
    );

};
export default App;