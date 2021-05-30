
const tableContents = document.querySelector('#table-contents');
const modifModal = document.querySelector('#modifModal');
const modalForm = document.querySelector("#myForm");
const modalForm2 = document.querySelector("#myForm2");
const biopsias = JSON.parse(localStorage.getItem('biopsias')) || [];
// función para crear y actualizar lista

const listarBiopsias = () => {
    tableContents.innerHTML = '';
    biopsias.forEach(function (caso, index) {
        tableContents.innerHTML += `
            <tr>
                <th scope="row">${caso.num}</th>
                <td>${caso.apellido}</td>
                <td>${caso.inmuno}</td>
                <td>${caso.estado}</td>
                <td>${caso.notas}</td>
                <td class="text-right"><button type="button" class="btn btn-info" data-toggle="modal" data-target="#modalEditarCaso" onclick= "addDataAttr(${index});">
                Editar</button></td>
                <td class="text-right"><button type="button" class="btn btn-secondary" onclick="borrarCaso();">Eliminar</button></td>
            </tr>
        `
      
    })
}
const addDataAttr = (index) => {
    modifModal.setAttribute('onclick', `modificarCaso(${index})`);
    //aqui borro el form del modal editar, para que no quede grabado
    modalForm2.reset();
}
const agregarCaso = () => {
    const num = document.querySelector('#num').value;
    const apellido = document.querySelector('#apellido').value;
    const inmuno = document.querySelector('#inmuno').value;
    const estado = document.querySelector('#estado').value;
    const notas = document.querySelector('#notas').value;

    biopsias.push({
        num: num,
        apellido: apellido,
        inmuno: inmuno,
        estado: estado,
        notas: notas
    });

    localStorage.setItem('biopsias', JSON.stringify(biopsias)) 
    listarBiopsias();
    //aqui borro el form del modal editar, para que no quede grabado
    modalForm.reset();
}

const borrarCaso = (position) => {
    biopsias.splice(position, 1);
    localStorage.setItem('biopsias', JSON.stringify(biopsias))
    listarBiopsias();
}

const modificarCaso = (indexMod) => {
    const numM = document.querySelector('#numM').value;
    const apellidoM = document.querySelector('#apellidoM').value;
    const inmunoM = document.querySelector('#inmunoM').value;
    const estadoM = document.querySelector('#estadoM').value;
    const notasM = document.querySelector('#notasM').value;
    
    biopsias[indexMod] = {
        num: numM,
        apellido: apellidoM,
        inmuno: inmunoM,
        estado: estadoM,
        notas: notasM
    };
    localStorage.setItem('biopsias', JSON.stringify(biopsias));
    listarBiopsias();
}
listarBiopsias();