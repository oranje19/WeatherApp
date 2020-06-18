/* Global Variables */
let baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
let apiKey = ',us&units=imperial&appid=e82d63e77368095deb1786caebcca6dc';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// console.log(newDate);

document.getElementById('generate').addEventListener('click', callbackAction);

function callbackAction (e) {
    const zipCode = document.getElementById('zip').value;
    const userResponse = document.getElementById('feelings').value;
    getWeather(baseURL,zipCode,apiKey)
    .then (function(data) {
        
        console.log(data);
        postWeather('/addWeather', {temperature1: data.main.temp, date1: newDate, userResponse1: userResponse});
    })
    .then ({
        updateUI()
    })
}

const getWeather = async (url, zip, key) => {
    const res = await fetch (url + zip + key);
    // console.log(res);
    try {
        const data = await res.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

const postWeather = async (url = '', data = {}) => {
    const response = await fetch (url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        // console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

const updateUI = async () => {
    const request = await fetch ('/all');
    try {
        const allData = await request.json();
        const lastIndex = allData.length - 1;
        // console.log(allData);
        document.getElementById('temp').innerHTML = allData[lastIndex].temperature1;
        document.getElementById('date').innerHTML = allData[lastIndex].date;
        document.getElementById('content').innerHTML = allData[lastIndex].userResponse;
    } catch (error) {
        console.log("error", error);
    }
}