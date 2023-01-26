import { FileTypes } from "./fileTypes";
import findExtension, { EXTENSIONS } from "./findExtension";




const {
    IMAGE,
    AUDIO, 
    VIDEO,
    EXEC, 
    TEXT, 
}=FileTypes

const{
    IMAGE_EXTESIONS, 
    AUDIO_EXTENSIONS, 
    VIDEO_EXTENSIONS , 
    EXEC_EXTENSION , 
    TEXT_EXTENSIONS, 
}=EXTENSIONS




const fileExtension=(fileName='')=>{
    const lastIndex=fileName.lastIndexOf('.'); 
    if(lastIndex===-1) return TEXT ; 
    const extension=fileName.slice(lastIndex+1).toLocaleLowerCase(); 

    switch(extension){
        case findExtension(extension,IMAGE_EXTESIONS): 
            return IMAGE ; 
        case findExtension(extension,AUDIO_EXTENSIONS):
            return AUDIO; 
        case findExtension(extension,VIDEO_EXTENSIONS):
            return VIDEO; 
        case findExtension(extension,EXEC_EXTENSION):
            return EXEC; 
        case findExtension(extension,TEXT_EXTENSIONS):
            return TEXT; 
        default : 
            return TEXT;
    }
}

export default fileExtension ; 