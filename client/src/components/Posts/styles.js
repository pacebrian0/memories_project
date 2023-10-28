import { styled } from "@mui/system";
import {Container} from '@mui/material';
import { Grid, CircularProgress } from '@mui/material';

export const StyledMainContainer = styled(Grid)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
}));

export const StyledSmMargin = styled('div')(({theme}) => ({
    margin: theme.spacing(1),
}));

export const StyledActionDiv = styled('div')(({theme}) => ({
    textAlign: 'center',
}));
