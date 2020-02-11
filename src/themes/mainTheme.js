import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  padding: {
    small: '8px',
    default: '16px',
    medium: '32px',
    large: '48px',
    xlarge: '64px',
  },

  margin: {
    small: '8px',
    default: '16px',
    medium: '32px',
    large: '48px',
    xlarge: '64px',
  },

  borderRadius: {
    small: '3px',
    default: '5px'
  },
  indentation: 50,

  color: {
    primary: '#009432',
    secondary: '#f1f2f6',
    // transparent: `rgba(242, 242, 242, 0.67)`,
    delete: '#FF4242',
    offDelete: '#FF7575',
    warning: '#FFCA44',
    success: '#00D591',
    textOnly: 'transparent',
    section: '#F1F1F1',
    white: '#FFFFFF',
    black: '#1f1f1f',
  },

  textColor: {
    primary: '#192a56',
    secondary: '#009432',
    white: '#FFFFFF',
  },

  textSize: {
    readable: '14px',
    secondary: '12px',
    tiny: '10px',
  },

  input: {
    border: '1px solid #dedede',
    borderRadius: '4px',
  },
});

export default theme;