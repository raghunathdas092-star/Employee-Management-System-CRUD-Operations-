let employees =
JSON.parse(localStorage.getItem("employees"))
|| [];

displayEmployees();

function saveEmployees() {

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );
}

function addEmployee() {

    const name =
    document.getElementById("name").value.trim();

    const designation =
    document.getElementById("designation").value.trim();

    if (!name || !designation) {

        alert("Please fill all fields");

        return;
    }

    const employee = {

        id: Date.now(),

        name: name,

        designation: designation
    };

    employees.push(employee);

    saveEmployees();

    displayEmployees();

    document.getElementById("name").value = "";

    document.getElementById("designation").value = "";
}

function displayEmployees() {

    const employeeList =
    document.getElementById("employeeList");

    employeeList.innerHTML = "";

    employees.forEach((employee, index) => {

        employeeList.innerHTML += `

        <tr>

            <td>${employee.id}</td>

            <td>${employee.name}</td>

            <td>${employee.designation}</td>

            <td>

                <button
                onclick="editEmployee(${index})">
                Edit
                </button>

                <button
                onclick="deleteEmployee(${index})">
                Delete
                </button>

            </td>

        </tr>
        `;
    });

    document.getElementById(
        "totalEmployees"
    ).textContent = employees.length;
}

function deleteEmployee(index) {

    if(confirm("Delete Employee?")) {

        employees.splice(index, 1);

        saveEmployees();

        displayEmployees();
    }
}

function editEmployee(index) {

    const newName = prompt(
        "Enter New Name",
        employees[index].name
    );

    const newDesignation = prompt(
        "Enter New Designation",
        employees[index].designation
    );

    if(newName && newDesignation) {

        employees[index].name =
        newName;

        employees[index].designation =
        newDesignation;

        saveEmployees();

        displayEmployees();
    }
}

function clearEmployees() {

    if(confirm("Delete All Employees?")) {

        employees = [];

        saveEmployees();

        displayEmployees();
    }
}

function searchEmployee() {

    const searchText =
    document
    .getElementById("search")
    .value
    .toLowerCase();

    const rows =
    document.querySelectorAll(
        "#employeeList tr"
    );

    rows.forEach(row => {

        const rowText =
        row.innerText.toLowerCase();

        row.style.display =
        rowText.includes(searchText)
        ? ""
        : "none";
    });
}