//https://www.npmjs.com/package/axios
const axios = require('axios');

function getRequest(id=null) {
    let url = "http://127.0.0.1:5000/api/pokemon";
    if (id){
        url = url+`/${id}`;
    }
    axios.get(url, {
    params: {

        }
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

function postRequest() {
    const url = 'http://127.0.0.1:5000/api/pokemon'
    axios.post(url, {
        name: "Charizard",
        type_id: 2
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

function putRequest(id) {
    const url = `http://127.0.0.1:5000/api/pokemon/${id}`;
    axios.put(url, {
        name: "Chansey",
        type_id: 3
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

// getRequest(3);
// postRequest();
// putRequest(9);
  
