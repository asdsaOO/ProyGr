import Swal from "sweetalert2"
function callSwal(resp,next,message){
    Swal.fire({
      title:resp[0].oboolean?'Se realizo correctamente':'ERROR',
      text: resp[0].oboolean?message:resp[0].omessage,
      icon: resp[0].oboolean?'success':'error',
      confirmButtonText:'aceptar'
    }).then((result)=>{
      if(result.isConfirmed){
        next();
      }
    })
}

export{callSwal}