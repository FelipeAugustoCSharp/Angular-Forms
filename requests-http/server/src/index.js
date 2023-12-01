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

const multiPartMiddleWare = multiPart({uploadDir: './uploads'});
app.post('/upload',multiPartMiddleWare, (req, res) => {
    const files = req.files;
    console.log(files);
    res.json({message: files})
})





// app.get('/createUser/:nome', (req, res) =>{

//     let nome = req.params.nome;

//     axios.get('http://localhost:3000/cursos/').then(e => {

//         let result = e.data.map(e => e).filter((e) => e.nome == nome )

//         if(result.length != 0){
//           res.json({messageError : "Usuario Existe",data:result})

//         }else{

//           axios.post('http://localhost:3000/cursos',{
//             nome : nome
//           }).then(e => {
//             res.json({message:"Criado Com Sucesso"})
//           }).catch( (e) => res.json({message:e}) )

//         }

//     })
//     .catch( (e) => res.json({nameError :'eeror'}))


//     res.set('Access-Control-Allow-Origin', 'http://localhost:4200');                   //PROBLEMA AQUI

// });














app.get('/downloadExcel', (req, res) =>{
    res.set('Access-Control-Allow-Origin', '*');               //
    res.download('./uploads/Angular-Forms-main.zip');      //
});                                                        //
app.get('/downloadPdf', (req, res) =>{                     //
    res.set('Access-Control-Allow-Origin', '*');           //
    res.download('./uploads/twitter.png');                 //
});

app.use((err,req, res, next) => { 
    res.json({erromensage: err.message})
})
app.listen(8000, () => {
    console.log('Servidor porta 8000');
})