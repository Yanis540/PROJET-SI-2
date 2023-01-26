import { Buffer } from 'buffer';


/**
 * 
 * @param {*} file : the file to choose 
 * @returns the correct file format in Buffer 
 * @does if the file is from the DB than it must have been stored in an array called data  
 */
const ChooseFileBuffer=({file})=>{
    return file?.data?Buffer.from(file.data): file
}
export default ChooseFileBuffer;