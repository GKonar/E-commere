import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default styled(Button)`
  && {
    color: ${({ theme }) => theme.textColor.primary};
    background-color: ${({ theme }) => theme.textColor.secondary};
    padding: 1rem;
    width: 100%;
    margin: 0;

    &:hover {
      background-color: #F59486;
      color: ${({ theme }) => theme.textColor.secondary};
    }
  }
`;

// https://medium.com/sipios/use-styled-components-with-material-ui-react-e0759f9a15ce