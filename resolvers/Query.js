const { products, categories } = require('../db');

exports.Query = {
    hello: (parent, args, context) => {
        return "world!";
    },

    products: (parent, args, context) => {
        return products
    },

    product: (parent, args, context) => {
        // console.log(args);
        const productId = args.id;
        const product = products.find(product => productId===product.id);

        console.log(product);

        if(product){
            return product;
        }else{
            return null;
        }
    },

    categories: (parent, args, context) => categories,

    category: (parent, args, context) => {
        const { id } = args;
        return categories.find(category => category.id === id);
    }
};