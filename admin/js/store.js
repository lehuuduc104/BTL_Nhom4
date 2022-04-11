id = localStorage.length;
productForm.id.value = id;

function delete_product(obj) {
    row = obj.parentElement.parentElement;
    id = row.firstElementChild.innerHTML;
    localStorage.removeItem(id);
    row.remove();
}

function edit_product(obj) {
    row = obj.parentElement.parentElement.children;
    productForm.id.value = row[0].innerHTML;
    productForm.name.value = row[1].innerHTML;
    productForm.price.value = row[2].innerHTML;
    productForm.description.value = row[3].innerHTML;
}

function update_product() {
    var id = productForm.id.value;
    var name = productForm.name.value;
    var price = productForm.price.value;
    var description = productForm.description.value;
    user = {
        id: id,
        name: name,
        price: price,
        description: description
    };
    localStorage.setItem(id, JSON.stringify(user));
    read_data();
}
function delete_all() {
    localStorage.clear();
    read_data();
}


function create_product() {
    event.preventDefault();
    var name = productForm.name.value;
    var price = productForm.price.value;
    var description = productForm.description.value;

    user = {
        id: id,
        name: name,
        price: price,
        description: description
    };

    tbody = document.getElementById("data");
    row = tbody.insertRow(-1);

    cell0 = row.insertCell(0);
    cell1 = row.insertCell(1);
    cell2 = row.insertCell(2);
    cell3 = row.insertCell(3);
    cell4 = row.insertCell(4);
    cell5 = row.insertCell(5);

    cell0.innerHTML = id;
    cell1.innerHTML = name;
    cell2.innerHTML = price;
    cell3.innerHTML = description;
    cell4.innerHTML = `<span onclick="edit_product(this)"><i class="fas fa-edit"></i><span>`;
    cell5.innerHTML = `<span onclick="delete_product(this)"><i class="fas fa-trash"></i><span>`;

    localStorage.setItem(id, JSON.stringify(user));
    id++;
    productForm.id.value = id;

    productForm.name.value = null;
    productForm.price.value = null;
    productForm.description.value = null;

}


function read_data() {
    tbody = document.getElementById("data");
    tbody.innerHTML = null;



    for (i = 0; i < localStorage.length; i++) {
        row = tbody.insertRow(-1);
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        cell5 = row.insertCell(5);
        user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        cell0.innerHTML = user_data.id;
        cell1.innerHTML = user_data.name;
        cell2.innerHTML = user_data.price;
        cell3.innerHTML = user_data.description;
        cell4.innerHTML = `<span onclick="edit_product(this)"><i class="fas fa-edit"></i><span>`;
        cell5.innerHTML = `<span onclick="delete_product(this)"><i class="fas fa-trash"></i><span>`;

    }



}
