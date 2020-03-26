import React from 'react';
import styled from 'styled-components';

const Redirect = styled.p`
  font-size: ${({ theme }) => theme.textSize.readable};
  margin: ${({ theme }) => theme.margin.default};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor.main};
    font-weight: 600;
  }
`

function RedirectParagraph({ children }) {
  return (
    <Redirect>{children}</Redirect>
  )
}

export default RedirectParagraph;
