var express=require('express');
var app=express();
var bp=require('body-parser');
var urlep=bp.urlencoded({extended:false});

app.set('view engine','ejs');
app.use('/css',express.static('assets'));//'/assets' is the pre-url
app.get('/',function(req,res)
{
	res.render('index');
});
app.get('/contact',function(req,res)
{
	res.render('contact',{contact:req.query});
});
app.get('/profile/:name',function(req,res)
{
	var data={age:20,intern:'Walmart',hobbies:['sleeping','dancing']};
	res.render('profile',{person:req.params.name,data:data});

});
app.post('/contact',urlep,function(req,res)
{
	res.render('contact_succeed',{body:req.body});
});
app.listen(3000);