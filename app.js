const inputName = document.getElementById("inputName");
const inputAge = document.getElementById("inputAge");
const inputNumber = document.getElementById("inputNumber");
const addButton = document.getElementById("addButton");
const editButton = document.getElementById("editButton");
const deleteButton = document.getElementById("deleteButton");
const tbody = document.getElementById("tbody");
const error = document.getElementById("error");
const startButton = document.getElementById("startButton");
const right = document.getElementById("right");
const renameButton = document.getElementById("renameButton");
renameButton.style.display = "none";
right.style.display = "none";
let STUDENTid = 0;

function start() {
  right.style.display = "block";
}

function clearValues() {
  inputName.value = "";
  inputAge.value = "";
  inputNumber.value = "";
}

const data = [
  {
    id: 1,
    name: "John",
    age: 20,
    number: 1234567890,
  },
  {
    id: 2,
    name: "Doe",
    age: 21,
    number: 1234567890,
  },
];

render();
function render() {
  tbody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    tbody.innerHTML += `
        <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>${data[i].number}</td>
        <td>
            <button type="button" onclick="edit(${data[i].id})" id="editButton">
                <img src="pencil.png" alt="" />
            </button>
            <button type="button" onclick="deleteRow(${data[i].id})" id="deleteButton">
                <img src="x-button.png" alt="" />
            </button>
        </td>
    </tr>
        `;
  }
}

function addStudent() {
  if (
    inputName.value === "" ||
    inputAge.value === "" ||
    inputNumber.value === ""
  ) {
    error.textContent = "All fields are required";
    error.style.color = "red";
    error.style.margin = "10px 0";
  } else if (inputAge.value < 18 || inputAge.value === String) {
    error.textContent = "This is University to study  18 year olds";
    error.style.color = "red";
    error.style.margin = "10px 0";
  } else {
    data.push({
      id: data.length + 1,
      name: inputName.value,
      age: inputAge.value,
      number: inputNumber.value,
    });
    error.textContent = "Successfully added";
    error.style.color = "green";
    error.style.margin = "10px 0";
    error.style.textAlign = "center";
    setTimeout(() => {
      error.textContent = "";
    }, 1000);
    render();
    clearValues();
    console.log(data);
  }
}

function edit(id) {
  STUDENTid = id;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      inputName.value = data[i].name;
      inputAge.value = data[i].age;
      inputNumber.value = data[i].number;
      break;
    }
  }
  addButton.style.display = "none";
  renameButton.style.display = "block";
}

function editStudent() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === STUDENTid) {
      if (
        inputName.value === "" ||
        inputAge.value === "" ||
        inputNumber.value === ""
      ) {
        error.textContent = "All fields are required";
        error.style.color = "red";
        error.style.margin = "10px 0";
      } else {
        data[i].name = inputName.value;
        data[i].age = inputAge.value;
        data[i].number = inputNumber.value;
        error.textContent = "Successfully edited";
        error.style.color = "green";
        error.style.margin = "10px 0";
        error.style.textAlign = "center";
        setTimeout(() => {
          error.textContent = "";
        }, 500);
        addButton.style.display = "block";
        renameButton.style.display = "none";
        break;
      }
    }
  }
  render();
  clearValues();
}

function deleteRow(id) {
  const index = data.findIndex((student) => student.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    error.textContent = "Successfully deleted";
    error.style.color = "green";
    error.style.margin = "10px 0";
    error.style.textAlign = "center";
    setTimeout(() => {
      error.textContent = "";
    }, 500);
    render();
  }
}
