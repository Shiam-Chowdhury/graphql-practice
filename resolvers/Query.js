// const { products, categories } = require('../db');

const { reviews } = require("../db");

exports.Query = {
    hello: (parent, args, context) => {
        return "world!";
    },

    products: (parent, { filter }, { db }) => {
        let filteredProducts = db.products;

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
                    db.reviews.forEach(review => {
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

            if(filter.name){
                filteredProducts = filteredProducts.filter(product => {
                    return product.name === filter.name;
                });
            }
        }
        return filteredProducts;
    },

    product: (parent, args, {db}) => {
        // console.log(args);
        const productId = args.id;
        return db.products.find(product => productId===product.id);
    },

    categories: (parent, args, {db}) => db.categories,

    category: (parent, args, {db}) => {
        const { id } = args;
        return db.categories.find(category => category.id === id);
    }
};