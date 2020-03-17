import React from 'react'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import dotGrid from '../assets/images/dot-grid.png';

const Container = styled.div`
  width: 100%; 
  padding-bottom: ${({ theme }) => theme.padding.medium};
  a {
    color: inherit;
  } 
`
const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${dotGrid})`,
    minHeight: 'calc(100vh - 90px)',
    flexGrow: 1,
    padding: "0rem 1rem",
    marginTop: '',
  },
}));

function PageContainer({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default PageContainer
