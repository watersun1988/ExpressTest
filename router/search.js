/**
 * Created by SP on 2016/11/22.
 */
var express = require('express');
var router = express.Router();

var output = {
    reason:'success',
    result:{
        data:[
            {
                id:'2',
                product:'cn glod',
                price:'272',
                increase:'0.1%'
            },
        ]
    },
    error_code:'0'
}

router.get('/:id',function (req,res,next) {
    console.log('search id:'+req.params.id);
    res.json(output);
});
module.exports=router;