var products = require('./products.json');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({
        products : products	
    });
});


router.get('/:name', function(req, res, next) {
    const product = products[req.params.name];

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
});


router.get('/instock/:qt', function(req, res, next) {
    const qt = parseInt(req.params.qt);
    var inStockProducts = [];
    
    const productList = Object.entries(products)
    productList.map((product)=>{
        if (product[1].stock >= qt )  {
            inStockProducts.push(product[1])
        }
    })
    res.json(inStockProducts)
});



router.get('/:name/:qt', function(req, res, next) {
    const product = products[req.params.name];
    const qt = parseInt(req.params.qt);

    if (product) {
        res.json({
            id:req.params.name,
            qt:qt,
            prixUni: product.price,
            totale_price: product.price * qt,
        });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
});



module.exports = router;
