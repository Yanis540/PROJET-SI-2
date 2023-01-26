import DescriptionActe from "../Components/Description/DescriptionActe";
import ContenuActeDeces from "./components/ContenuActeDeces";
function Deces({acte}) {
  const {commune,acte_deces}=acte;
  const {ville}=commune;
  return (
    <div className="border-gray-900 dark mt-5 mx-auto w-full">
      <DescriptionActe acte={acte} commune={commune} ville={ville} />
      <ContenuActeDeces acte={acte} acte_deces={acte_deces} /> 
    </div>
  )
}

export default Deces