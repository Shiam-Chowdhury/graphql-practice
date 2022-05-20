// const { categories } = require('../db');

exports.Product = {
    category: (parent, args, {categories}) => {
        // console.log(context.sayHello());
        const { categoryId } = parent;
        return categories.find(category => category.id === categoryId);
    }
}