const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const multiPart = require('connect-multiparty');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const corsOptions = {
    origin: '*',
    optionsSucessStatus: 200,
}

app.use(cors(corsOptions))

const multiPartMiddleWare = multiPart({uploadDir: './uploads'});
app.post('/upload',multiPartMiddleWare, (req, res) => {
    const files = req.files;
    console.log(files);
    req.json({message: files})
})

app.use((err,req, res, next) => {
    res.json({erromensage: err+' Tesss'})
})
app.listen(8000, () => {
    console.log('Servidor porta 8000');
})