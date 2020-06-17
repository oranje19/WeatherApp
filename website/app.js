/* Global Variables */
let baseURL = `api.openweathermap.org/data/2.5/weather?zip=`
let apiKey = ',us&appid=e82d63e77368095deb1786caebcca6dc'
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


const getWeather = async (baseURL, zip, key) => {
    const res = await fetch (baseURL + zip + key);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
}