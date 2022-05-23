// const { products, categories } = require('../db');

const { reviews } = require("../db");

exports.Query = {
    hello: (parent, args, context) => {
        return "world!";
    },

    products: (parent, { filter }, { products }) => {
        let filteredProducts = products;

        if(filter){
            if(filter.onSale){
                filteredProducts = filteredProducts.filter(product => {
                    return product.onSale;
                });
            }

            if(filter.avgRating){
                filteredProducts = filteredProducts.filter(product => {
                    // return product.rating >= avgRating;
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach(review => {
                        if(review.productId === product.id)
                        {
                            sumRating += review.rating
                            numberOfReviews++;
                        }
                    });
                    const avarageRating = sumRating/numberOfReviews;
                    return avarageRating >= filter.avgRating;
                    // console.log(product.name + ': ' + avarageRating);
                    // console.log(numberOfReviews)
                });
            }
        }
        return filteredProducts;
    },

    product: (parent, args, {products}) => {
        // console.log(args);
        const productId = args.id;
        return products.find(product => productId===product.id);
    },

    categories: (parent, args, {categories}) => categories,

    category: (parent, args, {categories}) => {
        const { id } = args;
        return categories.find(category => category.id === id);
    }
};