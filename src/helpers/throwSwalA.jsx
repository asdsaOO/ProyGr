import Swal from "sweetalert2"
function callSwal(resp,next,message){
    Swal.fire({
      title:resp[0].oboolean?'Se realizo correctamente':'ERROR',
      text: resp[0].oboolean?message:resp[0].omessage,
      icon: resp[0].oboolean?'success':'error',
      confirmButtonText:'aceptar',
      confirmButtonColor: 'red'
    }).then((result)=>{
      if(result.isConfirmed){
        next();
      }
    })
}
function callInputPassSwal(action,input){
  input.preventDefault();
  Swal.fire({
    title: "Ingresa tu contraseña",
    input: "password",  // Cambiar a "password"
    inputAttributes: {
      autocapitalize: "off",
      autocomplete: "new-password",  // Mejor para contraseñas
    },
    showCancelButton: true,
    confirmButtonText: "Enviar",
    confirmButtonColor: 'red',
    showLoaderOnConfirm: true,
    preConfirm: async (password) => {
      await action(input,password);
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      
    }
  });
}
export{callSwal,callInputPassSwal}