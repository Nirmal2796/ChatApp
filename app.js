const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController=require('./controllers/error404')

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contactus');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))


app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);

app.use(errorController.error404Page);


app.listen(3000);


            
            
        


 

