import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

function FileSelector({onChange}) {
  return (
    <>
      <input type='file'  id='choose_file'className="modal-toggle" onChange={onChange}/>
      <label htmlFor='choose_file'>
        <InsertPhotoIcon   fontSize='medium' className='cursor-pointer'></InsertPhotoIcon> 
      </label>
    </>
  )
}

export default FileSelector