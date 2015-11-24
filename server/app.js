var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var bodyParser = require('body-parser');
var app = express();
var request = require('superagent');
app.set('port', (process.env.PORT || 5000));
var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/api', function(req, res) {
  request.get('http://www.biobiochile.cl/est/data_portada.json')
    .set('Accept', 'application/json')
    .end(function(rq , rs) {
      if(rs.body) {
        res.json( rs.body );
      }
    });
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './../public/index.html'));
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
