/**
 * Created by SP on 2016/11/22.
 */
var express = require('express');
var router = express.Router();
var request = require('superagent');

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
    //res.json(output);
    getGlodData(req,res,next);
});

function getGlodData(req, res, next) {
    var url = 'http://web.juhe.cn:8080/finance/gold/shgold?key=e30d145761730d9cd75946e671360e5f&v=1'
    var cookie = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36' };
    var output = {
        reason:'',
        result:{
            data:[]
        },
        error_code:''
    }

    request.get(url).set(cookie).end(function (err, response) {
        var body={};
        if(response&&response.text){
            body = response.text;
        }
        else if(response && response.body){
            body = response.body;
        }
        if(typeof body === 'string'){
            try{
                body = JSON.parse(body);
            }
            catch (e){
                console.log(e);
            }
        }
        var items = body.result[0];
        for(var id in items){
            var tmpItem = {};
            tmpItem.id = id;
            tmpItem.product = items[id].variety;
            tmpItem.price = items[id].latestpri;
            tmpItem.increase = items[id].limit;
            output.result.data.push(tmpItem);
        }
        output.reason = body.reason;
        return res.json(output);
    });
}

module.exports = router;