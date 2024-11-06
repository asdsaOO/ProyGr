import Swal from "sweetalert2"
function callSwal(tittle,resp,next){
    Swal.fire({
      title:tittle,
      text: resp[0].omessage,
      icon: resp[0].oboolean?'success':'error',
      confirmButtonText:'aceptar'
    }).then((result)=>{
      if(result.isConfirmed){
        next();
      }
    })
}

export{callSwal}