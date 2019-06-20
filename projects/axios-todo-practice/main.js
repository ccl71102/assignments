
getData();

let isDefaultGet = false;
let isSortAsc = false;
let isSortDesc = false;

document.getElementById("getButton").addEventListener("click", getData);
document.getElementById("sortAscButton").addEventListener("click",getDataSortAsc);
document.getElementById("sortDescButton").addEventListener("click", getDataSortDesc);
document.setForm.addEventListener("submit", postData);

function getData(){
    axios.get("https://api.vschool.io/carloscolon/todo").then(response => {
        console.log("axios get");
        isDefaultGet = true;
        isSortAsc = false;
        isSortDesc = false;
        printData(response.data);
    }).catch(error => {
        console.log(error);
    });
}

function getDataSortAsc(){
    axios.get("https://api.vschool.io/carloscolon/todo").then(response => {
        console.log("axios get");
        isDefaultGet = false;
        isSortAsc = true;
        isSortDesc = false;
        sortAsc(response.data);
    }).catch(error => {
        console.log(error);
    });
}

function getDataSortDesc(){
    axios.get("https://api.vschool.io/carloscolon/todo").then(response => {
        console.log("axios get");
        isDefaultGet = false;
        isSortAsc = false;
        isSortDesc = true;
        sortDesc(response.data);
    }).catch(error => {
        console.log(error);
    });
}

function putData(obj, id){
    axios.put("https://api.vschool.io/carloscolon/todo/" + id, obj).then(response => {
        console.log("axios put " + id);
        console.log(response.data);
        if(isDefaultGet)
                getData();
            if(isSortAsc)
                getDataSortAsc();
            if(isSortDesc)
                getDataSortDesc();
    }).catch(error => {
        console.log(error);
    });
}

function postData(error){
    error.preventDefault();
    if(document.setForm.titleInput.value !== ""){
        axios.post("https://api.vschool.io/carloscolon/todo", {
            title: document.setForm.titleInput.value,
            price: document.setForm.priceInput.value,
            description: document.setForm.descriptionInput.value,
            imgUrl: document.setForm.imageUrlInput.value
        }).then(response => {
            console.log("axios post");
            console.log(response.data);
            if(isDefaultGet)
                getData();
            if(isSortAsc)
                getDataSortAsc();
            if(isSortDesc)
                getDataSortDesc();
        }).catch(error => {
            console.log(error);
        });

        document.setForm.titleInput.value = "";
        document.setForm.priceInput.value = "";
        document.setForm.descriptionInput.value = "";
        document.setForm.imageUrlInput.value = "";
    } else {
        if(document.setForm.titleInput.value === "")
            alert("Title is required");
    }
}

function sortAsc(arr){
    arr.sort((a,b) => {
        if(a.title > b.title)
            return 1;
        else if(a.title < b.title)
            return -1;
        return 0;
    });
    printData(arr);
}

function sortDesc(arr){
    arr.sort((a,b) => {
        if(a.title > b.title)
            return -1;
        else if(a.title < b.title)
            return 1;
        return 0;
    });
    printData(arr);
}

function printData(arr){
    //testing out sort
    
    document.getElementById("containerDiv").innerHTML = "";
    for(let i = 0; i < arr.length; i++) {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const img = document.createElement("img");
        const checkboxText = document.createElement("span");
        const checkbox = document.createElement("input");
        const delButton = document.createElement("button");
        const editButton = document.createElement("button");

        const editDiv = document.createElement("div");
        const titleEdit = document.createElement("input");
        const priceEdit = document.createElement("input");
        const descriptionEdit = document.createElement("input");
        const imageUrlEdit = document.createElement("input");

        editDiv.width = "600px";
        editDiv.minWidth = "600px";
        editDiv.maxWidth = "600px";

        titleEdit.type = "text";
        titleEdit.placeholder = "Title";
        titleEdit.classList.add(arr[i]._id);
        titleEdit.name = "titleEdit";
        titleEdit.style.display = "none";
        titleEdit.style.margin = "5px 2px";

        priceEdit.type = "number";
        priceEdit.name = "priceEdit";
        priceEdit.classList.add(arr[i]._id);
        priceEdit.style.display = "none";
        priceEdit.placeholder = "Price";
        priceEdit.style.margin = "5px 2px";

        descriptionEdit.type = "text";
        descriptionEdit.name = "descriptionEdit";
        descriptionEdit.style.display = "none";
        descriptionEdit.classList.add(arr[i]._id);
        descriptionEdit.placeholder = "Description";
        descriptionEdit.style.margin = "5px 2px";

        imageUrlEdit.type = "text";
        imageUrlEdit.name = "imageUrlEdit";
        imageUrlEdit.style.display = "none";
        imageUrlEdit.classList.add(arr[i]._id);
        imageUrlEdit.placeholder = "Image URL";
        imageUrlEdit.style.margin = "5px 2px";


        checkboxText.textContent = "Completed: ";
        checkboxText.style.fontSize = "12px";
        checkbox.style.display = "inline-block";
        checkbox.type = "checkbox";
        checkbox.style.margin = "0px 5px";
        checkbox.id = arr[i]._id;
        if(arr[i].completed) {
            checkbox.checked = true;
            h1.classList.add("checked");
            h1.classList.remove("unchecked");
        }
        checkbox.addEventListener("change", e => {
            console.log(e);
            if(checkbox.checked) {
                h1.classList.add("checked");
                h1.classList.remove("unchecked");
                axios.put("https://api.vschool.io/carloscolon/todo/" + arr[i]._id,{completed: true}).then(result => {
                    console.log("axios put " + arr[i]._id);
                    console.log(result.data);
                }).catch(error => {
                    console.log(error);
                });
            }
            else {
                h1.classList.add("unchecked");
                h1.classList.remove("checked");
                axios.put("https://api.vschool.io/carloscolon/todo/" + arr[i]._id,{completed: false}).then(result => {
                    console.log("axios put " + arr[i]._id);
                    console.log(result.data);
                }).catch(error => {
                    console.log(error);
                });
            }
        })

        delButton.textContent = "Delete";
        delButton.style.margin = "0px 5px";
        editButton.textContent = "Edit";
        editButton.margin = "0px 5px";
        img.style.width = "300px";
        img.style.display = "block";
        img.style.border = "1px solid black";
        img.style.boxShadow = "2px 2px gray";
        img.style.margin = "10px 0px";
        h1.textContent = arr[i].title;
        h1.style.margin = "0px 0px 6px";
        p1.textContent= "Cost: $" + arr[i].price;
        p2.textContent = "Description: " + arr[i].description;
        img.src = arr[i].imgUrl;
        div.classList.add("container");
        div.style.minWidth = "600px";
        div.style.maxWidth = "600px";
        delButton.addEventListener("click", e => {
            console.log(e);
            axios.delete("https://api.vschool.io/carloscolon/todo/" + arr[i]._id).then(response => {
                console.log("axios delete " + arr[i]._id);
                console.log(response.data);
                getData();
        }).catch(error => {
            console.log(error);
            });
        });
        editButton.addEventListener("click", e => {
            //console.log(e);
            const editArr = document.getElementsByClassName(arr[i]._id);
            const titleToEdit= editArr[0];
            const priceToEdit = editArr[1];
            const descriptionToEdit = editArr[2];
            const imageUrlToEdit = editArr[3];

            const todoItemToEdit = {title: arr[i].title, price: arr[i].price, description: arr[i].description, imgUrl: arr[i].imgUrl, completed: arr[i].completed};
            const todoItemToEditId = arr[i]._id; 

            if(editButton.textContent === "Save") {
                //console.log("save id: " + arr[i]._id);
                todoItemToEdit.title = titleToEdit.value;
                todoItemToEdit.price = priceToEdit.value;
                todoItemToEdit.description = descriptionToEdit.value;
                todoItemToEdit.imgUrl = imageUrlToEdit.value;
                todoItemToEdit.completed = document.getElementById(arr[i]._id).checked;

                putData(todoItemToEdit, todoItemToEditId);

                editButton.textContent = "Edit";
                titleToEdit.style.display = "none";
                titleToEdit.value = "";
                priceToEdit.value = "";
                priceToEdit.style.display = "none";
                descriptionToEdit.value = "";
                descriptionToEdit.style.display = "none";
                imageUrlToEdit.value = "";
                imageUrlToEdit.style.display = "none";
            } else if(editButton.textContent === "Edit") {
                //console.log("edit id: " + arr[i]._id);
                editButton.textContent = "Save";
                titleToEdit.value= arr[i].title;
                titleToEdit.style.display = "inline";
                priceToEdit.value = arr[i].price;
                priceToEdit.style.display = "inline";
                descriptionToEdit.value = arr[i].description;
                descriptionToEdit.style.display = "inline";
                imageUrlToEdit.value = arr[i].imgUrl;
                imageUrlEdit.style.display = "inline";
                document.getElementById(arr[i]._id).checked = arr[i].completed;
            }
        });
        editDiv.appendChild(titleEdit);
        editDiv.appendChild(priceEdit);
        editDiv.appendChild(descriptionEdit);
        editDiv.appendChild(imageUrlEdit);
        div.appendChild(h1);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(img);
        div.appendChild(checkboxText);
        div.appendChild(checkbox);
        div.appendChild(editButton);
        div.appendChild(delButton);
        div.appendChild(editDiv);
        
        document.getElementById("containerDiv").appendChild(div);
        console.log(arr[i]);
    } 
}



