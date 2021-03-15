import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
// const products = [
//     {id: 1,name: 'Running shoes', description: 'Running Shoes', price:'$50', image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fnike-top-10-best-selling-sneakers-list-2019-01.jpg?quality=95&w=1170&cbr=1&q=90&fit=max"},
//     {id: 2,name: 'Asus', description: 'Gaming Laptop', price:'$2000', image: "https://cdn.vox-cdn.com/thumbor/x9vRajkwRwEObA7s6kHTZBO98os=/0x0:5000x5000/1200x800/filters:focal(2100x2100:2900x2900)/cdn.vox-cdn.com/uploads/chorus_image/image/66591602/GX550_C04_v6_Light.0.png"}
// ];

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
       {products.map((product) => (
           <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
               <Product product={product} onAddToCart={onAddToCart} />
           </Grid>
       ))}
   
        </Grid>
    </main>
    )
}

export default Products;