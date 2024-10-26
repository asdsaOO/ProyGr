import axios from "axios";
const url="http://localhost:3000/api/account";

async function listarRoles (){
  const response =(await axios.get(url+'/listarRoles')).data;
  return response;
}
async function autenticarUsuario (data){
  const response = (await (axios.post(url+'/authUser',data, { withCredentials: true }))).data;
  return response;

}

export{listarRoles,autenticarUsuario}