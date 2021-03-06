require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const path = require("path");
const { seedDb } = require("./models/seedDb");

// Database setup
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chatdb", {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, err => {
  if (err) console.log(err);
});

// Middlewares setup
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Error Handling Goes Here
app.use(routes, (req, res) => {
    // No matching route for URL Found
    // res.sendFile(path.join(__dirname, "../client/build/404.html"));
    res.status(404).json({
        error: '404: Resource Not Found.'
    })
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))

seedDb();