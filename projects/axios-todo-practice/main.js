
getData();

document.getElementById("getButton").addEventListener("click", getData);
document.setForm.addEventListener("submit", postData);

function getData(){
    
    axios.get("https://api.vschool.io/carloscolon/todo").then(response => {
        console.log("axios get");
        printData(response.data);
    }).catch(error => {
        console.log(error);
    });
}

function putData(obj, id){
    axios.put("https://api.vschool.io/carloscolon/todo/" + id, obj).then(response => {
        console.log("axios put");
        console.log(response.data);
        getData();
    }).catch(error => console.log(error));
}

function postData(error){
    error.preventDefault();
    if(document.setForm.titleInput.value !== "" && !isNaN(document.setForm.priceInput.value)){
        axios.post("https://api.vschool.io/carloscolon/todo", {
            title: document.setForm.titleInput.value,
            price: document.setForm.priceInput.value,
            description: document.setForm.descriptionInput.value,
            imgUrl: document.setForm.imageUrlInput.value
        }).then(response => {
            console.log("axios post");
            console.log(response.data);
            getData();
        }).catch(error => {
            console.log(error);
        });

        document.setForm.titleInput.value = "";
        document.setForm.priceInput.value = "";
        document.setForm.descriptionInput.value = "";
        document.setForm.imageUrlInput.value = "";
    } else {
        alert("Title is required\nPrice has to be a number");
    }
}

function printData(arr){
    document.getElementById("containerDiv").innerHTML = "";
    for(let i = 0; i < arr.length; i++) {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const img = document.createElement("img");
        const checkbox = document.createElement("input");
        const delButton = document.createElement("button");
        const editButton = document.createElement("button");
        checkbox.type = "checkbox";
        checkbox.id = arr[i]._id;
        if(arr[i].completed) {
            checkbox.checked = true;
            h1.classList.add("checked");
            h1.classList.remove("unchecked");
        }
        checkbox.addEventListener("change", () => {
            if(checkbox.checked) {
                h1.classList.add("checked");
                h1.classList.remove("unchecked");
                axios.put("https://api.vschool.io/carloscolon/todo/" + arr[i]._id,{completed: true}).then(result => {
                    console.log("axios put");
                    console.log(result.data);
                }).catch(error => {
                    console.log(error);
                });
            }
            else {
                h1.classList.add("unchecked");
                h1.classList.remove("checked");
                axios.put("https://api.vschool.io/carloscolon/todo/" + arr[i]._id,{completed: false}).then(result => {
                    console.log("axios put");
                    console.log(result.data);
                }).catch(error => {
                    console.log(error);
                });
            }
        })
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
                console.log("axios delete");
                console.log(response.data);
                getData();
        }).catch(error => {
            console.log(error);
            });
        });
        editButton.addEventListener("click", e => {
            console.log(e)
            let form = document.setForm;
            const todoItemToEdit = {title: arr[i].title, price: arr[i].price, description: arr[i].description, imgUrl: arr[i].imgUrl, completed: arr[i].completed};
            const todoItemToEditId = arr[i]._id; 

            if(editButton.textContent === "Save") {
                console.log("save id: " + arr[i]._id);
                todoItemToEdit.title = form.titleInput.value;
                todoItemToEdit.price = form.priceInput.value;
                todoItemToEdit.description = form.descriptionInput.value;
                todoItemToEdit.imgUrl = form.imageUrlInput.value;
                todoItemToEdit.completed = document.getElementById(arr[i]._id).checked;
                putData(todoItemToEdit, todoItemToEditId);
                editButton.textContent = "Edit";
                form.titleInput.value = "";
                form.priceInput.value = "";
                form.descriptionInput.value = "";
                form.imageUrlInput.value = "";
            } else if(editButton.textContent === "Edit") {
                console.log("edit id: " + arr[i]._id);
                editButton.textContent = "Save";
                form.titleInput.value= arr[i].title;
                form.priceInput.value = arr[i].price;
                form.descriptionInput.value = arr[i].description;
                form.imageUrlInput.value = arr[i].imgUrl;
                document.getElementById(arr[i]._id).checked = arr[i].completed;
            }
        });
        div.appendChild(h1);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(img);
        div.appendChild(checkbox);
        div.appendChild(editButton);
        div.appendChild(delButton);
        document.getElementById("containerDiv").appendChild(div);
        console.log(arr[i]);
    } 
}



