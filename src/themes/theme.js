import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "red",
        margin: "10px",
        "&:hover": {
          backgroundColor: "green"
        }
      }
    },
    MuiInputLabel: {
      outlined: {
        color: '#2f3542 !important'
      }
    },
    MuiOutlinedInput: {
      root: {
        color: '#2f3542 !important'
      },
    },
    MuiFormLabel: {
      root: {
        color: '#F59486 !important',
      }
    },
    PrivateNotchedOutline: {
      root: {
        borderColor: '#F59486 !important',
      },
    },
    Mui: {
      '&:focused': {
      }
    }
  }
});

// PrivateNotchedOutline-root-124 MuiOutlinedInput-notchedOutline