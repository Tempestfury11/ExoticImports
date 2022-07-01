let car = JSON.parse(localStorage.getItem('car'))


function tableData(){
    let tb = document.getElementById('table-body');
    tb.innerHTML = '';
    car.forEach((td,index) => {
        tb.innerHTML += `
            <tr>
                <td>${td.id}</td>
                <td><img src="${td.url}" alt="" width="100px" height="80px"></td>
                <td>${td.type}</td>
                <td>${td.location}</td>
                <td>${td.bed}</td>
                <td>${td.toilet}</td>
                <td>${td.price}</td>
                <td><i class="bi bi-pencil-square" onclick="edit(${td.id})"></i></td>
                <td><i class="bi bi-trash" onclick="remove(${index})"></i></td>
                </tr>
        `
    })
}
tableData();

function edit(id){
    const newProp = prompt('What would u change')
    const task = car.find((car) => car.id === id);
    task.type = newProp
    localStorage.setItem('car',JSON.stringify(car));
    tableData();
};

function remove(id) {
    if (id > -1) {
      car.splice(id, 1);
      // Apply the change
      localStorage.setItem('car', JSON.stringify(car));
    }
    for(i=0;i<car.length;i++){
        car[i].id = i+1;
    }
    tableData();
};