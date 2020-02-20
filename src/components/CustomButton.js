import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default styled(Button)`
  && {
    color: ${({ theme }) => theme.color.main};;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid #F59486;
    padding: 1rem;
    width: 100%;
    margin: 0;

    &:hover {
      background-color: ${({ theme }) => theme.color.main};
      color: ${({ theme }) => theme.textColor.secondary};
    }
  }
`;

// https://medium.com/sipios/use-styled-components-with-material-ui-react-e0759f9a15ce