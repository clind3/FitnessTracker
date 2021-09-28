const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3021;

const app = express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('DB Connected!!');
});

//routes
app.use('/', require("./routes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});