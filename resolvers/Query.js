// const { products, categories } = require('../db');

exports.Query = {
    hello: (parent, args, context) => {
        return "world!";
    },

    products: (parent, args, { products }) => {
        return products
    },

    product: (parent, args, {products}) => {
        // console.log(args);
        const productId = args.id;
        return products.find(product => productId===product.id);

        // console.log(product);

        // if(product){
        //     return product;
        // }else{
        //     return null;
        // }
    },

    categories: (parent, args, {categories}) => categories,

    category: (parent, args, {categories}) => {
        const { id } = args;
        return categories.find(category => category.id === id);
    }
};