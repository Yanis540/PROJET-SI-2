import ContenuActeNaissance from "./components/ContenuActeNaissance";
import DescriptionActe from "../Components/Description/DescriptionActe";

function Naissance({acte,file}) {
  const {commune,acte_naissance}=acte;
  const {ville}=commune;
  
  return (
    <div className="border-gray-900 dark mt-5 mx-auto w-full flex flex-col items-center">
      <DescriptionActe acte={acte} commune={commune} ville={ville} file={file} /> 
      <ContenuActeNaissance acte={acte} acte_naissance={acte_naissance} /> 
    </div>

  )
}

export default Naissance