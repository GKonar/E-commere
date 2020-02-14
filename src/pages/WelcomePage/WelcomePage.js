import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import BigDescription from '../../components/BigDescription';

import Navbar from '../../components/Navbar';
import handcraftedImage from '../../assets/images/handcrafted.jpeg';

const Container = styled.div`
  background-image: url(${handcraftedImage});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
`

const ProductContainer = styled.div`
  padding-top: 10px;
  border-radius: 0;
  position: relative;
  overflow: hidden;
`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "0 1rem",
    margin: '0'
  },
}));


function WelcomePage() {
  const classes = useStyles();

  return (
    <Container>
      <Navbar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <ProductContainer>
              <Image src="https://images.unsplash.com/photo-1581388223946-3015f5ecab0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="my-img" />
              <BigDescription
                header="Awesome toys"
                description="For small and big"
              />
            </ProductContainer>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProductContainer>
              <Image src="https://images.unsplash.com/photo-1550171839-27415be90690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="my-img" />
              <BigDescription
                right="150px"
                top="45%"
                header="Rusty style"
                description="Rusty charm for Your garden"
                setBackground
              />
            </ProductContainer>
          </Grid>
        </Grid>
      </div>
            // <Grid item xs={12} sm={4}>
            //   <ProductContainer>
            //     <ImageContainer>
            //       <SmallDescritpion>Hello</SmallDescritpion>
            //       <Image src={woodenshelves} alt="my-img" />
            //     </ImageContainer>
            //   </ProductContainer>
            // </Grid>
            // <Grid item xs={12} sm={4}>
            //   <ProductContainer>
            //     <ImageContainer>
            //       <SmallDescritpion>Hello</SmallDescritpion>
            //       <Image src={sweater} alt="my-img" />
            //     </ImageContainer>
            //   </ProductContainer>
            // </Grid>
            // <Grid item xs={12} sm={4}>
            //   <ProductContainer>
            //     <ImageContainer>
            //       <SmallDescritpion>Hello</SmallDescritpion>
            //       <Image src={trumpet_man} alt="my-img" />
            //     </ImageContainer>
            //   </ProductContainer>
            // </Grid>
            // <Grid item xs={12} sm={4}>
            //   <ProductContainer>
            //     <ImageContainer>
            //       <SmallDescritpion>Hello</SmallDescritpion>
            //       <Image src={octopus_toys} alt="my-img" />
            //     </ImageContainer>
            //   </ProductContainer>
            // </Grid>
            // <Grid item xs={12} sm={4}>
            //   <ProductContainer>
            //     <ImageContainer>
            //       <SmallDescritpion>Hello</SmallDescritpion>
            //       <Image src={zootoys} alt="my-img" />
            //     </ImageContainer>
            //   </ProductContainer>
            // </Grid>
            // <Grid item xs={12} sm={4}>
            //   <ProductContainer>
            //     <ImageContainer> <SmallDescritpion>Hello</SmallDescritpion>
            //       <Image src={wallet} alt="my-img" />
            //     </ImageContainer>
            //   </ProductContainer>
            // </Grid>
          }

        </Grid>
      </NewestProducts>
    </Container>
  )
}

export default WelcomePage;


{
  /*
         
  */
  // <ImageContainer>
  //   <Image src={beads} alt="my-img" />
  // </ImageContainer>
  //   <ImageContainer>
  //     <Image src={mask} alt="my-img" />
  //   </ImageContainer>
  //   <ImageContainer>
  //     <Image src={purse} alt="my-img" />
  //   </ImageContainer>
  //   <ImageContainer>
  //     <Image src={sweater} alt="my-img" />
  //   </ImageContainer>
  //   <ImageContainer>
  //     <Image src={woodenshelves} alt="my-img" />
  //   </ImageContainer>
  //   <ImageContainer>
  //     <Image src={trumpet_man} alt="my-img" />
  //   </ImageContainer>
  //   <ImageContainer>
  //     <Image src={octopus_toys} alt="my-img" />
  //   </ImageContainer>
  //   <ImageContainer>
  //     <Image src={zootoys} alt="my-img" />
  //   </ImageContainer>
  //   <ImageContainer>
  //     <Image src={wallet} alt="my-img" />
  //   </ImageContainer>


  // <div className={classes.root}>
  //         <Grid container spacing={3}>
  //           {
  //             // LOOP HERE 
  //             // DATA FROM FIREBASE
  //           }
  //           <Grid item xs={12} sm={4}>
  //             <ProductContainer>
  //               <Image src={beads} alt="my-img" />
  //             </ProductContainer>
  //           </Grid>
  //           <Grid item xs={12} sm={4}>
  //             <ProductContainer>
  //               <Image src={mask} alt="my-img" />
  //             </ProductContainer>
  //           </Grid>
  //           <Grid item xs={12} sm={4}>
  //             <ProductContainer>
  //               <Image src={purse} alt="my-img" />
  //             </ProductContainer>
  //           </Grid>
  //           <Grid item xs={12} sm={4}>
  //             <ProductContainer>
  //               <Image src={sweater} alt="my-img" />
  //             </ProductContainer>
  //           </Grid>
  //           <Grid item xs={12} sm={4}>
  //             <ProductContainer>
  //               <Image src={woodenshelves} alt="my-img" />
  //             </ProductContainer>
  //           </Grid>
  //           <Grid item xs={12} sm={4}>
  //             <ProductContainer>
  //               <Image src={trumpet_man} alt="my-img" />
  //             </ProductContainer>
  //           </Grid>
  //           <Grid item xs={12} sm={4}>
  //             <ProductContainer>
  //               <Image src={octopus_toys} alt="my-img" />
  //             </ProductContainer>
  //           </Grid>
  //           <Grid item xs={12} sm={4}>
  //             <ProductContainer>
  //               <Image src={wallet} alt="my-img" />
  //             </ProductContainer>
  //           </Grid>
  //           <Grid item xs={12} sm={4}>
  //             <ProductContainer>
  //               <Image src={zootoys} alt="my-img" />
  //             </ProductContainer>
  //           </Grid>
  //         </Grid>
  //       </div>
}