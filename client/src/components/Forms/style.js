import { Paper, Button, styled, createTheme, TextField} from "@mui/material";

const theme = createTheme();

export const PaperComponent = styled(Paper)({
  padding: theme.spacing(1)
});

export const FormComponent = styled("form")({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const TextFiledComponent = styled(TextField)({
  padding: theme.spacing(1)
});

export const FileImportComponent = styled("div")({
  width: '97%',
  margin: '10px 0',
});

export const ButtonComponent = styled(Button)({
  marginBottom: 10,
});