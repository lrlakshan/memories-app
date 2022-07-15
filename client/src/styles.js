import { AppBar, Typography, styled} from "@mui/material";

const AppBarComponent = styled(AppBar)({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const Heading = styled(Typography)({
  color: 'rgba(0,183,255, 1)',
});

const Image = styled('img')({
  marginLeft: '15px',
});

export {AppBarComponent, Heading, Image};