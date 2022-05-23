// const { products } = require('../db');

exports.Category = {
    products: (parent, { filter }, {products}) => {
        // console.log(parent);
        const categoryId = parent.id;
        const categoryProducts = products.filter(product => product.categoryId === categoryId);
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