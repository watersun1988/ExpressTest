/**
 * Created by SP on 2016/11/22.
 */
var http = require('http');
var cluster = require('cluster');
var cpus = require('os').cpus().length;
var express = require('express');
var bodyparser = require('body-parser');
var main = require('./router/main');
var product = require('./router/product');
var search = require('./router/search');
var app = express();

app.use(express.static('public'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/main',main);
app.use('/product',product);
app.use('/search',search);

if(cluster.isMaster){
    for(var i=0;i<cpus;i++){
        cluster.fork();
    }
}
else{
    var server = http.createServer(app);
    server.listen(3000);
}