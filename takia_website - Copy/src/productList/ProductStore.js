//sk_test_51LtLS2Lc2p624EsnjndeuIj1yyIyPfHDN6qMzx3hdlBZZXjTfBqXLMzxLItTZPNgz4BVZnPPDyRggctaaEFdHUm400Ya5sIceq
//candle1= price_1NQIU9Lc2p624EsnuQHBV0hT
//candle2 = price_1NQIVILc2p624Esn2V2zIWTO
//candle3 = price_1NQIVYLc2p624Esnwsylkapu
import candle1 from "../Images/image4.jpeg";
import candle2 from "../Images/image1.jpeg";
import candle3 from "../Images/image2.jpeg";

const productsArray = [
    {
        id: "price_1NQIU9Lc2p624EsnuQHBV0hT",
        title: "Candle 1",
        price: 4.99,
        image: candle1
    },
    {
        id: "price_1NQIVILc2p624Esn2V2zIWTO",
        title: "Candle 2",
        price: 10.99,
        image: candle2
    },
    {
        id: "price_1NQIVYLc2p624Esnwsylkapu",
        title: "Candle 3",
        price: 15.88,
        image: candle3
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined){
        console.log("Product not found for the ID: " + id);
        return undefined;
    }
    return productData;
}


export { productsArray, getProductData};