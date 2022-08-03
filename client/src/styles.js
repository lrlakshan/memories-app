import { AppBar, Typography, styled} from "@mui/material";

export const AppBarComponent = styled(AppBar)({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Heading = styled(Typography)({
  color: 'rgba(0,183,255, 1)',
});

export const Image = styled('img')({
  marginLeft: '15px',
});