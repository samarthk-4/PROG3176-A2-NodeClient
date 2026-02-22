const axios = require("axios");

const API_URL = "https://prog3176-fcmobile-a0b9hvb4bndfdtey.canadacentral-01.azurewebsites.net/api/Players";

async function callApi() {
    try {
        const response = await axios.get(API_URL);
        console.log("Players from Azure API:");
        console.log(response.data);
    } catch (error) {
        console.error("Error calling API:", error.message);
    }
}

callApi();