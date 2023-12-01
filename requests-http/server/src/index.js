const express = require('express');
// const cors = require('cors');
const bodyparser = require('body-parser');
const multiPart = require('connect-multiparty');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// const corsOptions = {
//     origin: '*',
//     optionsSucessStatus: 200,
// }

// app.use(cors(corsOptions))

const multiPartMiddleWare = multiPart({uploadDir: './uploads'});
app.post('/upload',multiPartMiddleWare, (req, res) => {
    const files = req.files;
    console.log(files);
    res.json({message: files})
})

app.get('/downloadExcel', (req, res) =>{
    res.set('Access-Control-Allow-Origin', '*');                   //PROBLEMA AQUI
    res.download('./uploads/Angular-Forms-main.zip');      //PROBLEMA AQUI
});                                                        //PROBLEMA AQUI
app.get('/downloadPdf', (req, res) =>{
    res.set('Access-Control-Allow-Origin', '*');                  //PROBLEMA AQUI
    res.download('./uploads/twitter.png');                 //PROBLEMA AQUI
});

app.use((err,req, res, next) => {
    res.json({erromensage: err.message})
})
app.listen(8000, () => {
    console.log('Servidor porta 8000');
})