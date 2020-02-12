import React from 'react'
import styled from 'styled-components';

const Description = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.textColor.secondary};
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.2);
`
const DescriptionHeadaer = styled.h1`
  font-size: ${({ theme }) => theme.textSize.huge};
  font-weight: 700;
  margin: 0;
`
const DescriptionParagraph = styled.p`
  font-size: ${({ theme }) => theme.textSize.readable};
  font-weight: 600;
  margin: 0;
`

function BigDescription({
  header,
  description,
  top = '5%',
  right = '100px',
  left,
  bottom,
  background,
  setBackground
}) {
  setBackground ?
    background = 'rgba(0, 0, 0, 0.3)' :
    background = 'transparent';

  return (
    <Description
      style={{ top, right, left, bottom, background }}>
      <DescriptionHeadaer>{header}</DescriptionHeadaer>
      <DescriptionParagraph>{description}</DescriptionParagraph>
    </Description>
  )
}

export default BigDescription
