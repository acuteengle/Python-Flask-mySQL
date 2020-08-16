//https://www.npmjs.com/package/axios
// const axios = require('axios');

function getRequest(id = null, onSuccess = null, onError = null) {
    let url = "http://127.0.0.1:5000/api/pokemon";
    if (id) {
        url = url + `/${id}`;
    }
    axios.get(url, {
        params: {

        }
    })
        .then(function (response) {
            console.log(response.data);
            if (onSuccess != null) {
                onSuccess(response.data);
            }
        })
        .catch(function (error) {
            console.log(error);
            if (onError != null) {
                onError(error);
            }
        })
        .finally(function () {
            // always executed
        });
}

function postRequest(post_data, onSuccess = null, onError = null) {
    const url = 'http://127.0.0.1:5000/api/pokemon'
    axios.post(url, post_data)
        .then(function (response) {
            console.log(response.data);
            if (onSuccess != null) {
                onSuccess(response.data);
            }
        })
        .catch(function (error) {
            console.log(error);
            if (onError != null) {
                onError(error);
            }
        })
        .finally(function () {
            // always executed
        });
}



function putRequest(id, put_data, onSuccess = null, onError = null) {
    const url = `http://127.0.0.1:5000/api/pokemon/${id}`;
    axios.put(url, put_data)
        .then(function (response) {
            console.log(response.data);
            if (onSuccess != null) {
                onSuccess(response.data);
            }
        })
        .catch(function (error) {
            console.log(error);
            if (onError != null) {
                onError(error);
            }
        })
        .finally(function () {
            // always executed
        });
}

// getRequest(3);
// const post_data = {
//     name: "Charizard",
//     type_id: 2
// };
// postRequest(post_data);
// const put_data = {
//     name: "Chansey",
//     type_id: 3
// };
// putRequest(9, put_data);

