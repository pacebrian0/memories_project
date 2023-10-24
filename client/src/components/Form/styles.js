import { styled } from "@mui/system";
import { TextField, Button, Typography, Paper } from "@mui/material";

export const StyledRoot = styled('div')(({theme}) => ({
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
}));

export const StyledPaper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(2),
}));

export const StyledActionDiv = styled('div')(({theme}) => ({
    textAlign: 'center',
}));

export const StyledForm = styled('form')(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
}));

export const StyledFileInput = styled('div')(({theme}) => ({
    width: '97%',
    margin: '10px 0',
}));

export const StyledButtonSubmit = styled(Button)(({theme}) => ({
    marginBottom: 10,
}));


