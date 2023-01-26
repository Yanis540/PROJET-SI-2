import DescriptionActe from "../Components/Description/DescriptionActe";
import ContenuActeMariage from "./components/ContenuActeMariage";

function Mariage({acte}) {
  const {commune,acte_mariage}=acte;
  const {ville}=commune
  return (
    <div className="border-gray-900 dark mt-5 mx-auto w-full">
      <DescriptionActe acte={acte} commune={commune} ville={ville} /> 
      <ContenuActeMariage acte={acte} acte_mariage={acte_mariage} /> 
    </div>
  )
}

export default Mariage