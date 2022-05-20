const { categories } = require('../db');

exports.Product = {
    category: (parent, args, context) => {
        // console.log(parent);
        const { categoryId } = parent;
        return categories.find(category => category.id === categoryId);
    }
}