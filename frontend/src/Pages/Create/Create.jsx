import { CREATE_TYPES } from "./Types/CreateTypes"
import CreateActe from "./components/Acte/CreateActe"
import CreateMenu from "./components/Menu/CreateMenu"
import CreateRegistre from "./components/Registre/CreateRegistre"

const {
  ACTE,
  REGISTRE,

}=CREATE_TYPES
function Create({type}) {
  const Choose=()=>{
    switch(type){
      case ACTE: 
        return <CreateActe /> 
      case REGISTRE : 
        return <CreateRegistre /> 
      default : 
        return <CreateMenu /> 
    }
  }
  return (
    <>
    {
      Choose()
    }
    </>
  )
}

export default Create