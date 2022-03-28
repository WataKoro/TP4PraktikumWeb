function getData(){
    let name = document.getElementById("name").value;
    let birthdate = document.getElementById("birthdate").value;
    let gender = document.querySelector('input[name ="gender"]:checked').value;
    let hobi = [];
    let checkbox = document.querySelectorAll('input[type = "checkbox"]:checked');
    for(let i=0; i<checkbox.length; i++){
        hobi.push(checkbox[i].value);
    }
    let agama = document.getElementById("agama").value;
    let pesan = document.getElementById("pesan").value;
    let table = document.getElementsByTagName('table')[0];
    printData(name, birthdate, gender, agama, pesan, hobi, table);
}

function printData(name, birthdate, gender, agama, pesan, hobi, table){
    var newrow = table.insertRow(1);
    let cel1 = newrow.insertCell(0);
    cel1.innerHTML = "Nama".bold();
    let cel2 = newrow.insertCell(1);
    cel2.innerHTML = name;

    newrow = table.insertRow(2);
    cel1 = newrow.insertCell(0);
    cel1.innerHTML = "Tanggal Lahir".bold();
    cel2 = newrow.insertCell(1);
    cel2.innerHTML = birthdate;

    newrow = table.insertRow(3);
    cel1 = newrow.insertCell(0);
    cel1.innerHTML = "Jenis Kelamin".bold();
    cel2 = newrow.insertCell(1);
    cel2.innerHTML = gender;

    newrow = table.insertRow(4);
    cel1 = newrow.insertCell(0);
    cel2 = newrow.insertCell(1);
    cel1.innerHTML = "Hobi".bold();
    for(i=0; i< hobi.length; i++){
        if(i < hobi.length-1){
            cel2.innerHTML += `${hobi[i]}, `;
        }
        else{
            cel2.innerHTML += `${hobi[i]}`;
        }
    }

    newrow = table.insertRow(5);
    cel1 = newrow.insertCell(0);
    cel1.innerHTML = "Agama".bold();
    cel2 = newrow.insertCell(1);
    cel2.innerHTML = agama;

    newrow = table.insertRow(6);
    cel1 = newrow.insertCell(0);
    cel1.innerHTML = "Pesan".bold();
    cel2 = newrow.insertCell(1);
    cel2.innerHTML = pesan;
}