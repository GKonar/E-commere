import React from 'react';
import styled from 'styled-components';
import H4 from '../H4';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { sizes } from '../../helpers/sizes';

const Shop = styled.div``

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.textSize.secondary};

  ${sizes.tablet} {
    font-size: ${({ theme }) => theme.textSize.readable};
  }
`

const Email = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: ${({ theme }) => theme.textSize.secondary};
  transition: .1s;
  font-weight: 500;
  letter-spacing: 1px;

  &:hover {
    color: ${({ theme }) => theme.textColor.main}
  }

  ${sizes.tablet} {
    font-size: ${({ theme }) => theme.textSize.readable};
  }
`

function ExpansionShopsList() {
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <H4>ONLINE SHOP</H4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Shop>
            <Paragraph>Customer Service</Paragraph>
            <Paragraph>Mon - Fr 9:00-16:00</Paragraph>
            <Paragraph>Tel: 123 456 987</Paragraph>
            <Email href="mailto:orders@handcrafted.com">orders@handcrafted.com</Email>
          </Shop>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <H4>WROCŁAW</H4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Shop>
            <Paragraph>ul. Wrocławska 12/32</Paragraph>
            <Paragraph>Mon - Fr 11:00-19:00</Paragraph>
            <Paragraph>Sat 11:00-18:00</Paragraph>
            <Paragraph>Sun 12:00-16:00</Paragraph>
            <Paragraph>Tel: 13 432 64 54</Paragraph>
            <Email href="mailto:wroclaw@handcrafted.com">wroclaw@handcrafted.com</Email>
          </Shop>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <H4>KRAKÒW</H4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Shop>
            <Paragraph>ul. Krakowska 54/43</Paragraph>
            <Paragraph>Mon - Sat 11:00-19:00</Paragraph>
            <Paragraph>Tel: 78 161 41 12</Paragraph>
            <Email href="krakow@handcrafted.com">krakow@handcrafted.com</Email>
          </Shop>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <H4>ŚCINAWA</H4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Shop>
            <Paragraph>ul. Lubinńska 21/69</Paragraph>
            <Paragraph>Mon - Wed 11:00-19:00</Paragraph>
            <Paragraph>Tel: 92 227 18 12</Paragraph>
            <Email href="mailto:scinawa@handcrafted.com">scinawa@handcrafted.com</Email>
          </Shop>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  )
}

export default ExpansionShopsList
