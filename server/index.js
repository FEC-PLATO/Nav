const express = require('express');
const app = express();
const port = 3005;


app.use(express.static('public'));

//app.get('/', (req,res) => {res.send('okok')})

app.listen(port, () => console.log(`listening on port ${port}`));