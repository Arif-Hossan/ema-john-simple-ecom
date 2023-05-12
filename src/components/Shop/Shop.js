import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
const Shop = () => {
    /*
    //using state and useEffect loading the data
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    */

    const products = useLoaderData();

    const [cart,setCart]=useState([]);
    const handleAddToCart = (selectedProduct)=>{
        // create a copy of cart and push product to the new cart
        let newCart = [];
        const exist =cart.find(product=> selectedProduct.id===product.id);

        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct];
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest,exist];
        }
        // const newCart=[...cart,selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    useEffect(()=>{
        const storedCart=getShoppingCart();
        const savedCart=[];

        for(const id in storedCart){
         const addedProduct = products.find(product=>product.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity= quantity;
                savedCart.push(addedProduct);
            }
            setCart(savedCart);
        }
    },[products])
    return (
        <div className='shop-container'>
            <div className='products-container'>
             {
                products.map(product=><Product
                    key={product.id}
                    product ={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
             }
            </div>

            <div className='cart-container'>
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;