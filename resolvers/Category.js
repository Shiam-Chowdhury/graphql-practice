// const { products } = require('../db');

exports.Category = {
    products: (parent, args, {products}) => {
        // console.log(parent);
        const categoryId = parent.id;
        return products.filter(product => product.categoryId === categoryId);
    }
}