import { useEffect,useState } from 'react'
import { CreateBlob } from './FileFormat/fileformat.jsx';
import downloadFile from './functions/downloadFile.jsx';
import sendFile from './functions/sendFile.jsx';


/**
 * 
 * @param useFile 
 * @param {file}  file : Buffer of the file / {type:"Buffer",data:[....]}
 * @param {execute}  execute : the execute function from useRequestFn that send the request with data object 
 * @returns {src} src : binary data of the file of a file , used for download 
 * @returns {url} url : valid url of the file to be used in the src  , used in the src attribut 
 * @remarque the Buffer type is what is used to transform to a blob 
 * @remarque when sending a file to a rest api / sockets we pass it as a Buffer type , 
 * , but when retrieving it from the sockets it will be still be in Buffer but in a  
 * rest api it will return as a json object containin the data that's an  array of Values  and the type so we 
 * need to convert it first to a Buffer. 
 * @note : in the backend you should save the result of the file that comes in the req.body 
 *  that is an Array of buffer that looks like this : {type:'Buffer',data:[...]}
 *  so to save it in the database you need to convert it to a buffer , like this : Buffer.from(file)
 *  the same thing in the backend you should send the file in res.jsonin this format :
 *  res.json({file:Buffer.from(fileFromDb)})
 */

    
function useFile({file,fileName,execute}) {
    const [src,setSrc]=useState('')
    const [url,setUrl]=useState('');

    useEffect(()=>{
        if(file){
            const blob=CreateBlob({file})
            const reader=new FileReader()
            reader.readAsDataURL(blob);
            reader.onloadend=()=>{
                setSrc(reader.result)
                setUrl(URL.createObjectURL(blob));
            }
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[file]);


    return {
        src,url,
        downloadFile:()=>downloadFile({url,fileName:fileName}),
        sendFile:()=>sendFile({execute,file})
    }
}

export default useFile