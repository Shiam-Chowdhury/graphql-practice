// const { categories } = require('../db');

exports.Product = {
    category: (parent, args, {db}) => {
        // console.log(context.sayHello());
        const { categoryId } = parent;
        return db.categories.find(category => category.id === categoryId);
    },

    reviews: ({id}, args, {db}) => {
        // console.log(parent);
        return db.reviews.filter(review => review.productId === id);
    }
}