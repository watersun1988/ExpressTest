/**
 * Created by SP on 2016/11/22.
 */
var express = require('express');
var router = express.Router();

var output = {
    reason:"success",
    result:{
        data:[
            {
                id:'1',
                product:'glod',
                price:'123',
                increase:'1%'
            },
            {
                id:'2',
                product:'cn glod',
                price:'272',
                increase:'0.1%'
            },
        ]
    },
    error_code:'0'
};

router.get('/',function (req, res, next) {
    console.log("route:main");
    res.json(output);
});

module.exports = router;