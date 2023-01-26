export const EXTENSIONS={
    IMAGE_EXTESIONS:[
        'bmp','gif','heif','heic','jpg','jpeg',
        'png','psd','svg','tif'
    ] , 
    AUDIO_EXTENSIONS: [
        'flac','mp3','aac','ogg','wav'
    ] , 
    VIDEO_EXTENSIONS:[
        'avi','flv','mov','mp4'
    ],
    EXEC_EXTENSION:[
        'bat','ssh','exe'
    ],
    TEXT_EXTENSIONS:[
        'pdf','doc', 'odt','md','ppt','rtf','txt','xls'
    ], 
}




const findExtension=(extension='',terms=[])=>{
    const found=terms.some(term=>extension.includes(term)) ; 
    if(found) return extension ; 
}
export default findExtension