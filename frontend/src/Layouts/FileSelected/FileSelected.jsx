import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useFile } from '../../Hooks/hooks';
import { fileExtension } from '../../utils/utils';
import { FileTypes } from '../../utils/functions/content/fileTypes';

const {
    IMAGE
}=FileTypes
function FileSelected({file,setFile}) {
    const blob=new Blob([file],{type:'file'})
    const {src}=useFile({blob})
    return (
        <div className='flex flex-row justify-between gap-[5px] absolute left-1 top-0 border border-gray-500 bg-gray-500 rounded  text-[12px]'>
            {/* case if it's an image show the image otherwise just show it's a file  */}
            {
                fileExtension(file.name)===IMAGE?(
                    <img src={src} alt={file.name} className='h-[40px] w-[40px]' />
                ):(

                    file.name
                )
            }
            <div className="flex flex-1 flex-row items-start justify-start relative">

                <HighlightOffIcon onClick={e=>setFile(null)} fontSize='small' className='cursor-pointer absolute -top-2 -right-2 text-zinc-800' />
            </div>

        </div>
    )
}

export default FileSelected