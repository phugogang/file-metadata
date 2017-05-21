var express = require('express');
var app = express();
var path = require('path');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/upload', upload.single('file'), (req, res, next) => {   
    var file =  req.file;
    res.status(200).json({"name": file.originalname,
                            "size": file.size,
                            "type": file.mimetype})
});


app.listen(process.env.PORT || 8000, ()=> {
    console.log('App listening on ' + process.env.PORT || 8000);
})