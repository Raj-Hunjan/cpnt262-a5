// Accept command line input
const inputValue = process.argv[2]

// Array
const cars = [
    // item 1
    {
        id: 1,
        title: "black mustang",
        description: "a black car in parking area",
        imageURL: "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        imagecredit: "https://unsplash.com/photos/N9Pf2J656aQ",
        authorcredit: "https://unsplash.com/@lance_asper",
    },
    // item 2
    {
        id: 2,
        title: "white bugatti",
        description: "white car parked",
        imageURL: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80",
        imagecredit: "https://unsplash.com/photos/esvWH-owWug",
        authorcredit: "https://unsplash.com/@davidleveque",
    },
    // item 3
    {
        id: 3,
        title: "black audi r8",
        description: "black car parked beside road",
        imageURL: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        imagecredit: "https://unsplash.com/photos/aiwuLjLPFnU",
        authorcredit: "https://unsplash.com/@ev25",
    },
    // item 4
    {
        id: 4,
        title: "green toyota",
        description: "green coupe inside parking area",
        imageURL: "https://images.unsplash.com/photo-1490641815614-b45106d6dd04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        imagecredit: "https://unsplash.com/photos/1K9-TbJWs2U",
        authorcredit: "https://unsplash.com/@serge_k",
    },
    // item 5
    {
        id: 5,
        title: "red mclaren",
        description: "red supercar",
        imageURL: "https://images.unsplash.com/photo-1508974239320-0a029497e820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        imagecredit: "https://unsplash.com/photos/tmAynVA_ihE",
        authorcredit: "https://unsplash.com/@yxvi",
    },
    // item 6
    {
        id: 6,
        title: "silver porsche",
        description: "silver car parked inside building",
        imageURL: "https://images.unsplash.com/photo-1558992658-08a063bb01af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        imagecredit: "https://unsplash.com/photos/keRubFoQix8",
        authorcredit: "https://unsplash.com/@yxvi",
    },
]

module.exports = cars