// const { products } = require('../db');

exports.Category = {
    products: (parent, { filter }, {db}) => {
        // console.log(parent);
        const categoryId = parent.id;
        const categoryProducts = db.products.filter(product => product.categoryId === categoryId);
        let filteredCategoryProducts = categoryProducts;

        if(filter){
            if(filter.onSale){
                filteredCategoryProducts = filteredCategoryProducts.filter(product => {
                    return product.onSale;
                })
            }
        }

        return filteredCategoryProducts;
    }
}