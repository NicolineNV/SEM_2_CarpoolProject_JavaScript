document.getElementById("bookForm").addEventListener("submit",  function(event) {

    event.preventDefault();

    let tilFra = document.getElementById("til_fra").value;
    let by = document.getElementById("select_by").value;
    let dato = document.getElementById("date").value;
    let tid = document.getElementById("time").value;

    let tabel = document.getElementById("bookTabel").getElementsByTagName("tbody")[0];

    let newRow = tabel.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.innerHTML = tilFra;
    cell2.innerHTML = by;
    cell3.innerHTML = tid;
    cell4.innerHTML = dato;

    cell5.innerHTML =
        '<button class="book-btn book">Book</button> '
});
