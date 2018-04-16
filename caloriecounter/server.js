var express = require("express");
var app = express();

const port = process.env.PORT;
const ip = process.env.IP;

app.use(express.static('dist'));
app.get('/', (req, res) => {
  res.sendFile('index.html', {root : './dist'});
});

app.listen(port, ip, 0, ()=> {
    console.log('listening at ' + ip + ':' + port);
})