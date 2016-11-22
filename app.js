/**
 * Created by SP on 2016/11/22.
 */
var http = require('http');
var cluster = require('cluster');
var cpus = require('os').cpus().length;
var express = require('express');
var bodyparser = require('body-parser');
var main = require('./router/main');
var app = express();

app.use(express.static('public'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/main',main);

if(cluster.isMaster){
    for(var i=0;i<cpus;i++){
        cluster.fork();
    }
}
else{
    var server = http.createServer(app);
    server.listen(3000);
}