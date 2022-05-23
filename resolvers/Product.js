// const { categories } = require('../db');

exports.Product = {
    category: (parent, args, {categories}) => {
        // console.log(context.sayHello());
        const { categoryId } = parent;
        return categories.find(category => category.id === categoryId);
    },

    reviews: ({id}, args, {reviews}) => {
        // console.log(parent);
        return reviews.filter(review => review.productId === id);
    }
}