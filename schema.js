const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query{
        hello: String,
        products(filter: ProductsFilterInput): [Product!]!,
        product(id: ID!): Product,
        categories: [Category!]!,
        category(id: ID!): Category
    }

    type Mutation{
        addCategory(input: addCategoryInput!) : Category!,
        addProduct(input: addProductInput!) : Product!,
        addReview(input: addReviewInput!) : Review,
        deleteCategory(id: ID!) : Boolean,
        deleteProduct(id: ID!) : Boolean
    }

    type Product{
        id: ID!,
        name: String!,
        description: String!,
        quantity: Int!,
        price: Float!,
        onSale: Boolean!,
        category: Category,
        reviews: [Review!]!
    }

    type Category{
        id: ID!,
        name: String!,
        products(filter: ProductsFilterInput): [Product!]!
    }

    type Review{
        id: ID!,
        date: String,
        title: String,
        comment: String,
        rating: Int
    }

    input ProductsFilterInput{
        onSale: Boolean,
        avgRating: Int,
        name: String
    }

    input addCategoryInput{
        name: String!
    }

    input addProductInput{
      name: String,
      description: String,
      quantity: Int,
      price: Int,
      image: String,
      onSale: Boolean,
      categoryId: ID!,
    }

    input addReviewInput{
        date: String!,
        title: String!,
        comment: String!,
        rating: Int!,
        productId: ID!,
    }
`;
