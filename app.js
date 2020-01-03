const express=require('express')
const pug=require('pug')

const path=require('path')

const app=new express()

app.set('views', path.join(__dirname, 'views'))
	app.set('view engine','pug')

app.use('/',express.static(path.join(__dirname,'/public')))
app.use('/js/lib',express.static(path.join(__dirname,'/node_modules/jquery/dist')))
app.use('/js/lib',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')))
app.use('/webfonts',express.static(path.join(__dirname,'/node_modules/@fortawesome/fontawesome-free/webfonts')))
app.use('/favicon.ico',express.static(path.join(__dirname,'/public/images/favicon.ico')))

app.get('/',(req,res)=>
{
    return res.status(200).render('home',{
    })
})
app.all('*',(req,res)=>
{
    //redirect to hame page
    res.writeHead(302,{'Location':'https://www.saloras.gr'})
    res.end();
})
app.listen(80)