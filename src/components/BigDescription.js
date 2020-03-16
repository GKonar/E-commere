import React from 'react'
import styled from 'styled-components';

import { sizes } from '../helpers/sizes';

const Description = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.textColor.secondary};
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.2);
  top: 1rem;
  left: 1rem;

  ${sizes.laptopM} {
    padding: 1.5rem;
    top: 10px;
    left: 10px;
  }
  
`
const DescriptionHeadaer = styled.h1`
  font-size: ${({ theme }) => theme.textSize.huge};
  font-weight: 700;
  margin: 0;

  ${sizes.laptopM} {
    font-size: ${({ theme }) => theme.textSize.bigger};
  }
  
  ${sizes.mobileL} {
    font-size: ${({ theme }) => theme.textSize.big};
  }
`
const DescriptionParagraph = styled.p`
  font-size: ${({ theme }) => theme.textSize.readable};
  font-weight: 600;
  margin: 0;

  ${sizes.laptopM} {
    font-size: ${({ theme }) => theme.textSize.secondary};
  }
`

function BigDescription({
  header,
  description,
  background,
  setBackground
}) {
  setBackground ?
    background = 'rgba(0, 0, 0, 0.3)' :
    background = 'transparent';

  return (
    <Description
      style={{ background }}>
      <DescriptionHeadaer>{header}</DescriptionHeadaer>
      <DescriptionParagraph>{description}</DescriptionParagraph>
    </Description>
  )
}

export default BigDescription
