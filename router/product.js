/**
 * Created by SP on 2016/11/22.
 */
var express = require('express');
var router = express.Router();

var output={
    reason:"success",
    result:{
        id:'1',
        product:'glod',
        price:'123',
        increase:'1%',
        data:[
            {
                time:'30',
                price:'200'
            },
            {
                time:'60',
                price:'20'
            },
            {
                time:'90',
                price:'100'
            },
            {
                time:'120',
                price:'300'
            },
            {
                time:'150',
                price:'500'
            },
        ]
    },
    error_code:'0'
};

router.get('/:id',function (req, res, next) {
    console.log("id：",req.params.id);
    res.json(output);
});

module.exports=router;