const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

let employees = [];

// CREATE
app.post("/api/employees", (req, res) => {
    const employee = req.body;
    employees.push(employee);

    res.json({
        message: "Employee Added",
        employee
    });
});

// READ
app.get("/api/employees", (req, res) => {
    res.json(employees);
});

// UPDATE
app.put("/api/employees/:id", (req, res) => {
    const id = req.params.id;

    employees[id] = req.body;

    res.json({
        message: "Employee Updated"
    });
});

// DELETE
app.delete("/api/employees/:id", (req, res) => {
    const id = req.params.id;

    employees.splice(id, 1);

    res.json({
        message: "Employee Deleted"
    });
});

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});