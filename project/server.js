const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/map', function(요청, 응답){
    응답.sendFile(__dirname + '/map.html')
})

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/home.html');
})