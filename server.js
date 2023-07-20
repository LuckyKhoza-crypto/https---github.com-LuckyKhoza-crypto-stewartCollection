//sk_test_51LtLS2Lc2p624EsnjndeuIj1yyIyPfHDN6qMzx3hdlBZZXjTfBqXLMzxLItTZPNgz4BVZnPPDyRggctaaEFdHUm400Ya5sIceq
//candle1= price_1NQIU9Lc2p624EsnuQHBV0hT
//candle2 = price_1NQIVILc2p624Esn2V2zIWTO
//candle3 = price_1NQIVYLc2p624Esnwsylkapu

const express = require('express');
var cors = require('cors');
const stripe = require('stripe') ('sk_test_51LtLS2Lc2p624EsnjndeuIj1yyIyPfHDN6qMzx3hdlBZZXjTfBqXLMzxLItTZPNgz4BVZnPPDyRggctaaEFdHUm400Ya5sIceq')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.post("/checkout", async (req, res) => {

    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach(item => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        })
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
        billing_address_collection: 'required',
        // shipping_address_collection : {
        //     allowedCountries: ['US', 'CA'], // Specify the allowed countries for shipping
        //   }
          
    })

    res.send(JSON.stringify({ url: session.url }));
});

app.listen(4000, () =>console.log("Server is running on port 4000") );