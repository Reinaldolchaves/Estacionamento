const btnCadastrar = document.querySelector('#btn-cadastrar');

function cadastra(event) {
    
    let data = new Date ();
    let horas = data.getHours();
    let minutos = data.getMinutes();

    event.preventDefault();
    const modelo = document.querySelector('#modelo');
    const placa = document.querySelector('#placa');
    if(modelo.value ==''){
        alerta ('digite o modelo do veiculo');
        return false;
    }
    if(placa.value ==''){
        alerta ('digite o placa do veiculo');
        return false;
    }
    let linha = `
    
    <tr>
          <td>${modelo.value}</td>
          <td>${placa.value}</td>
          <td>${horas}:${minutos}</td>
          <td><button  onclick='deletar (this.parentNode.parentNode)' class="btn btn-danger"><i class="fa fa-close"></i></button>
          </td>

    </tr>
`;

    const lista = document.querySelector('#lista');

    lista.innerHTML = lista.innerHTML + linha;
    modelo.value = '';
    placa.value = '';

}
btnCadastrar.addEventListener('click', cadastra);

function deletar(linha){
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Você não poderá reverter isto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero apagar!'
      }).then((result) => {
        if (result.isConfirmed) {
            linha.remove();
          Swal.fire(
            'Apagado !',
            'Veiculo removido do patio.',
            'OK'
          )
        }
      })



}