
getData();

document.getElementById("getButton").addEventListener("click", getData);
document.setForm.addEventListener("submit", postData);
let todoItemToEdit;
let todoItemToEditId;

function putData(){
    console.log('put running')
                //todo idi = arr[i]._id;
            //update url = https://api.vschool.io/carloscolon/todo/+ar[i]._id
            //create form inside div containing todo
            //update todo based on data entered
            //axios.put("https://api.vschool.io/carloscolon/todo/"+ar[i]._id, )

    axios.put("https://api.vschool.io/carloscolon/todo/" + todoItemToEditId, todoItemToEdit).then(response => {
        console.log(response.data);
        getData();
    }).catch(error => console.log(error));
}

function getData(){
    
    axios.get("https://api.vschool.io/carloscolon/todo").then(response => {
        printData(response.data);
    }).catch(error => {

    });
}

function printData(arr){
    document.getElementById("containerDiv").innerHTML = "";
    for(let i = 0; i < arr.length; i++) {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const img = document.createElement("img");
        const delButton = document.createElement("button");
        const editButton = document.createElement("button");
        delButton.textContent = "Delete";
        editButton.textContent = "Edit";
        img.style.width = "300px";
        h1.textContent = arr[i].title;
        p1.textContent= "Cost: $" + arr[i].price;
        p2.textContent = "Description: " + arr[i].description;
        img.src = arr[i].imgUrl;
        div.classList.add("container");
        delButton.addEventListener("click", () => {
            axios.delete("https://api.vschool.io/carloscolon/todo/" + arr[i]._id).then(response => {
                console.log(response);
                getData();
        }).catch(error => {
            console.log("error");
            });
        });
        editButton.addEventListener("click", (e) => {
            console.log(e)
            console.log(arr[i]._id);
            let form = document.setForm;
            form.titleInput.value= arr[i].title;
            form.priceInput.value = arr[i].price;
            form.descriptionInput.value = arr[i].description;
            form.imageUrlInput.value = arr[i].imgUrl;
            const updateButton = document.getElementById("setButton");
            updateButton.textContent = "Save";
            todoItemToEdit = {title: arr[i].title, price: arr[i].price, description: arr[i].description, imgUrl: arr[i].imgUrl};
            todoItemToEditId = arr[i]._id;            
        });
        div.appendChild(h1);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(img);
        div.appendChild(editButton);
        div.appendChild(delButton);
        document.getElementById("containerDiv").appendChild(div);
    } 
}

function postData(error){
    error.preventDefault();
    if(document.getElementById("setButton").textContent === "Save") {
        putData();
        document.getElementById("setButton").textContent = "Post";
    }
    else if(document.setForm.titleInput.value !== "" && !isNaN(document.setForm.priceInput.value)){
        axios.post("https://api.vschool.io/carloscolon/todo", {
            title: document.setForm.titleInput.value,
            price: document.setForm.priceInput.value,
            description: document.setForm.descriptionInput.value,
            imgUrl: document.setForm.imageUrlInput.value
        }).then(response => {
            console.log(response.data);
            getData();
        }).catch(error => {
            console.log(error)
        });

        document.setForm.titleInput.value = "";
        document.setForm.priceInput.value = "";
        document.setForm.descriptionInput.value = "";
        document.setForm.imageUrlInput.value = "";
    } else {
        alert("Title is required\nPrice has to be a number");
    }
}

