var size = window.prompt("Size:(1-10) ");
var index = parseInt(size);

var table_row, table_column;
var Table = document.createElement("table");
for (let i = 0; i < index; i++) {
    table_row = document.createElement("tr");
    for (let j = 0; j < index; j++) {
        table_column = document.createElement("td");
        table_row.appendChild(table_column);
    }
    Table.appendChild(table_row);
}
document.body.appendChild(Table)

var cell = Table.rows[0].cells[0];
var image = document.createElement("img");
cell.classList.add("image")
image.src = "https://cdn1.iconfinder.com/data/icons/chess-bzzricon-outline/512/07_Queen-512.png";
image.width = 50;
image.height = 50;
cell.appendChild(image);

var div = document.createElement("div");
div.classList.add("btn_div");
document.body.appendChild(div);

var top_btn = document.createElement("button");
top_btn.classList.add("top");
top_btn.innerHTML = "TOP";
div.appendChild(top_btn);

var right_btn = document.createElement("button");
right_btn.classList.add("right");
right_btn.innerHTML = "RIGHT";
div.appendChild(right_btn);

var bottom_btn = document.createElement("button");
bottom_btn.classList.add("bottom");
bottom_btn.innerHTML = "BOTTOM";
div.appendChild(bottom_btn);

var left_btn = document.createElement("button");
left_btn.classList.add("left");
left_btn.innerHTML = "LEFT";
div.appendChild(left_btn);

var pos = { x: 0, y: 0 };

top_btn.onclick = function () {
    if ((pos.x) == 0) {
        pos.x = index-1;
        cell = Table.rows[pos.x].cells[pos.y];
        cell.appendChild(image);
    }
    else {
        (pos.x) -= 1;
        cell = Table.rows[pos.x].cells[pos.y];
        cell.appendChild(image);
    }
}

bottom_btn.onclick = function () {
    if ((pos.x) == index-1) {
        pos.x = 0;
        cell = Table.rows[pos.x].cells[pos.y];
        cell.appendChild(image);
    }
    else {
        (pos.x) += 1;
        cell = Table.rows[pos.x].cells[pos.y];
        cell.appendChild(image);
    }
}

right_btn.onclick = function () {
    if ((pos.y) == index-1) {
        pos.y = 0;
        cell = Table.rows[pos.x].cells[pos.y];
        cell.appendChild(image);
    }
    else {
        (pos.y) += 1;
        cell = Table.rows[pos.x].cells[pos.y];
        cell.appendChild(image);
    }
}

left_btn.onclick = function () {
    if ((pos.y) == 0) {
        pos.y = index-1;
        cell = Table.rows[pos.x].cells[pos.y];
        cell.appendChild(image);
    }
    else {
        (pos.y) -= 1;
        cell = Table.rows[pos.x].cells[pos.y];
        cell.appendChild(image);
    }
}