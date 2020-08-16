

document.getElementById("get_submit").addEventListener("click", () => {

    const onSuccess = (data) => {
        document.getElementById("get_result").innerHTML = JSON.stringify(data);
    }

    const id = document.getElementById("get_id").value;
    getRequest(id, onSuccess);
});

document.getElementById("insert_submit").addEventListener("click", () => {

    const onSuccess = (data) => {
        document.getElementById("insert_result").innerHTML = JSON.stringify(data);
    }

    const name = document.getElementById("insert_name").value;
    const type_id = document.getElementById("insert_type_id").value;

    if (name == "" || type_id == "") {
        document.getElementById("insert_result").innerHTML = "All parameters are required";
    }
    else {
        const data = {
            "name": name,
            "type_id": type_id
        };
        postRequest(data, onSuccess);
    }
});

document.getElementById("update_submit").addEventListener("click", () => {

    const onSuccess = (data) => {
        document.getElementById("update_result").innerHTML = JSON.stringify(data);
    }

    const id = document.getElementById("update_id").value;
    const name = document.getElementById("update_name").value;
    const type_id = document.getElementById("update_type_id").value;
    const response = ""
    if (name == "" || type_id == "" || id == "") {
        document.getElementById("update_result").innerHTML = "All parameters are required";
    }
    else {
        const data = {
            "name": name,
            "type_id": type_id
        };
        putRequest(id, data, onSuccess);
    }
});