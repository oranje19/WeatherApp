// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// TODO-Routes

app.get('/all', function (req, res) {
    res.send(projectData);
});

app.post('/addWeather', addData);

function addData (req, res) {
    newEntry = {
        temperature1: req.body.temperature1,
        date: req.body.date1,
        userResponse: req.body.userResponse1
    }
    console.log(newEntry);
    projectData.push(newEntry);
}

// console.log(projectData);
// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening () {
    console.log("server is running");
    console.log(`server is running on localhost: ${port}`);
}