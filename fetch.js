//https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

function getRequest(id=null) {
    let url = "http://127.0.0.1:5000/api/pokemon";
    if (id){
        url = url+`/${id}`;
    }
    
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    });
}

function postRequest() {
    const url = 'http://127.0.0.1:5000/api/pokemon'
    const body = {
        name: "Zapdos",
        type_id: 1
    };

    fetch(url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err)
    });
}

function putRequest(id) {
    const url = `http://127.0.0.1:5000/api/pokemon/${id}`;
    const body = {
        name: "Flareon",
        type_id: 2
    };

    fetch(url, {
        method: 'put',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err)
    });
}

// getRequest(3);
// postRequest();
// putRequest(9);
  
