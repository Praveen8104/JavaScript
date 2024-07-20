function fun() {
    display_table();
    change_text();
    var c = 0;
    var add1 = document.getElementById('add_btn')
    add1.onclick = function () {
        c++;
        if (c >= 1) {
            take_input();
        }
    };
}
function display_table() {
    document.getElementById("table_div").style.display = "block";
}
function change_text() {
    document.getElementById("add_btn").innerHTML = "Add Data";
}
function take_input() {

    let name = prompt("Enter Name :");
    let roll = prompt("Enter roll id :");
    let branch = prompt("Enter branch :");
    let college = prompt("Enter college :");

    let table = document.getElementById("table_tag");
    let nr = table.insertRow(table.rows.length);

    nr.insertCell(0).innerHTML = name;
    nr.insertCell(1).innerHTML = roll;
    nr.insertCell(2).innerHTML = branch;
    nr.insertCell(3).innerHTML = college;
    nr.insertCell(4).innerHTML = '<button onclick="UpdateData(this)" id="update_btn">Edit</button>';
    nr.insertCell(5).innerHTML = '<button onclick="DeleteRow(this)" id="delete_btn">Delete</button>';

    console.log();
}
function Update_html_Data() {
    let btn = document.getElementById("html_update");
    let row = btn.parentNode.parentNode;
    let nameCell = row.cells[0];
    let rollCell = row.cells[1];
    let branchCell = row.cells[2];
    let collegeCell = row.cells[3];

    let name_input = prompt("Enter the updated name:", nameCell.innerHTML);
    let roll_input = prompt("Enter the updated roll details:", rollCell.innerHTML);
    let branch_input = prompt("Enter the updated brancj:", branchCell.innerHTML);
    let clg_input = prompt("Enter the updated college:", collegeCell.innerHTML);

    nameCell.innerHTML = name_input;
    rollCell.innerHTML = roll_input;
    branchCell.innerHTML = branch_input;
    collegeCell.innerHTML = clg_input;

    console.log(nameCell, rollCell, branchCell, collegeCell);
}
function UpdateData(button) {
    let row = button.parentNode.parentNode;
    let nameCell = row.cells[0];
    let rollCell = row.cells[1];
    let branchCell = row.cells[2];
    let collegeCell = row.cells[3];

    let name_input = prompt("Enter the updated name:", nameCell.innerHTML);
    let roll_input = prompt("Enter the updated roll details:", rollCell.innerHTML);
    let branch_input = prompt("Enter the updated brancj:", branchCell.innerHTML);
    let clg_input = prompt("Enter the updated college:", collegeCell.innerHTML);

    nameCell.innerHTML = name_input;
    rollCell.innerHTML = roll_input;
    branchCell.innerHTML = branch_input;
    collegeCell.innerHTML = clg_input;

    console.log(nameCell, rollCell, branchCell, collegeCell);
}

function Delete_html_Row(button) {
    document.getElementById("table_tag").deleteRow(1);
}

function DeleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}