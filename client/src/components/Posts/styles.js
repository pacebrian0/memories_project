import { styled } from "@mui/system";
import {Container} from '@mui/material';

export const StyledMainContainer = styled(Container)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
}));

export const StyledSmMargin = styled('div')(({theme}) => ({
    margin: theme.spacing(1),
}));

export const StyledActionDiv = styled('div')(({theme}) => ({
    textAlign: 'center',
}));
