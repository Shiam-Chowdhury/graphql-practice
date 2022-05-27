import React from 'react';
import useProducts from '../hooks/useProducts';



const ProductList = () => {
    const { error, data, loading } = useProducts();
    
    if(loading){
        return (
            <div>
                <h1>Loading</h1>
            </div>
        ); 
    }
    if(data){
        console.log(data);
    }
    if(error){
        return (
            <div>
                <h1>error</h1>
            </div>
        ); 
    }
    
    return (
        <div>
            {data && data.products.map(product => {
                return <div>
                    <h2>{product.name}</h2>
                    <h2>{product.price}</h2>
                </div>
            })}
        </div>
    );
};

export default ProductList;