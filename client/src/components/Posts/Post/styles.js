import { makeStyles } from '@material-ui/core/styles';

export const StyledMedia = styled('div')(({theme}) => ({
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
}));

export const StyledBorder = styled('div')(({theme}) => ({
    border: 'solid',
}));

export const StyledFullHeightCard = styled('div')(({theme}) => ({
    height: '100%',
}));

export const StyledCard = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
}));

export const StyledOverlay = styled('div')(({theme}) => ({
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
}));

export const StyledOverlay2 = styled('div')(({theme}) => ({
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
}));

export const StyledGrid = styled('div')(({theme}) => ({
    display: 'flex',
}));

export const StyledDetails = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
}));

export const StyledTitle = styled('div')(({theme}) => ({
    padding: '0 16px',
}));

export const StyledCardActions = styled('div')(({theme}) => ({
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
}));
