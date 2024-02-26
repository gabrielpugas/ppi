const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

//Servidor e porta
const porta = 3005;
var path = require('path');
const app = express();

var usuarioSenha = 'admin';

app.use(session({secret:'Programação para Internet'}));
app.use(bodyParser.urlencoded({extended:true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/', (req, res) => {

    if(req.body.usuario == usuarioSenha && req.body.senha == usuarioSenha){
        req.session.login = usuarioSenha;
        res.render('home');
    }else
        res.render('login');
})

app.get('/', (req, res) => {
    if(req.session.login){
        res.render('home')
    }
    else {
        res.render('login')
    }
})

app.get('/home', (req, res) => {
    if(req.session.login){
        res.render('home')
    }
    else {
        res.redirect('/')
    }
})

app.get('/1', (req, res) => {
    if(req.session.login){
        res.render('1')
    }
    else {
        res.redirect('/')
    }
})

app.get('/2', (req, res) => {
    if(req.session.login){
        res.render('2')
    }
    else {
        res.redirect('/')
    }
})

app.get('/3', (req, res) => {
    if(req.session.login){
        res.render('3')
    }
    else {
        res.redirect('/')
    }
})

app.get('/sair', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/') // will always fire after session is destroyed
      })
})

app.listen(porta, () => {
    console.log('Servidor escutando em ' + porta);
});