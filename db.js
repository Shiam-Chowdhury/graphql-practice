const products = [
    {
        id: "00001",
        name: "Nescafe",
        description: "coffee powder",
        quantity: 5,
        price: 250,
        onSale: false,
        categoryId: "10002"
    },
    {
        id: "00002",
        name: "Fresh Actifit",
        description: "drinking water",
        quantity: 3,
        price: 15,
        onSale: false,
        categoryId: "10003"
    },
    {
        id: "00003",
        name: "A4tech Mouse",
        description: "computer hardware",
        quantity: 7,
        price: 450,
        onSale: true,
        categoryId: "10001"
    },
    {
        id: "00004",
        name: "Keyboard",
        description: "multimedia keyboard",
        quantity: 3,
        price: 550,
        onSale: true,
        categoryId: "10001"
    }
];

const categories = [
    {
        id: "10001",
        name: "computer hardware"
    },
    {
        id: "10002",
        name: "hot drinks"
    },
    {
        id: "10003",
        name: "drinking water"
    }
]

module.exports = {
    products,
    categories
}