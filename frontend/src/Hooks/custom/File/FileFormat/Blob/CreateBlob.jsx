import ChooseFileBuffer from "./ChooseFileBuffer.jsx";

/**
 * 
 * @param {*} file :  the file to choose
 * @returns blob of the file 
 */
const CreateBlob=({file})=>{
    const fileInBuffer = ChooseFileBuffer({file})
    const blob=file?new Blob([fileInBuffer],{type:'file'}):null; 
    return blob ; 
}
export default CreateBlob;
