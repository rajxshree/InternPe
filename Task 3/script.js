var btn1 = document.getElementById("btn1");
btn1.addEventListener('click', gettask);

function gettask() {
    var input = document.getElementById("input").value;
    document.getElementById("input").value = '';
    if (input !== "") {
        createtask(input);
    }
}

function createtask(input) {
    var task = '<div class="task"><p class="text">'+ input +'</p><button class="update-btn">Update</button><button class="delete-btn">Delete</button></div>';
    displaytask(task);
}

function displaytask(task) {
    var list = document.getElementById("displaytask");
    var div = document.createElement("div");
    div.innerHTML = task;
    list.appendChild(div);
}

function updatetask(event) {
    var taskElement = event.target.parentElement;
    var updatedText = prompt('Enter a new task:');
    if (updatedText != "") {
        var textElement = taskElement.querySelector(".text");
        textElement.textContent = updatedText;
    }
}

function deletetask(event) {
    var taskElement = event.target.parentElement;
    taskElement.remove();
}

var list = document.getElementById("displaytask");
list.addEventListener('click', function(event) {
    if (event.target.classList.contains("update-btn")) {
        updatetask(event);
    } else if (event.target.classList.contains("delete-btn")) {
        deletetask(event);
    }
});