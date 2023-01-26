import SearchIcon from '@mui/icons-material/Search';
function SearchInput({input,setInput,type,placeholder,name,form}) {
    return (
        <div className='flex flex-row flex-1 items-center justify-between bg-gray-700 border-gray-600 px-4 py-1 rounded-lg border'>
            <SearchIcon className='text-white font-white' /> 
            
            <input 
                name={name}
                className='
                    flex-1
                    w-full  disabled:cursor-not-allowed 
                    bg-transparent
                    border-0
                    border-transparent
                    outline-0
                    outline-transparent
                    focus:outline-0
                    focus:outline-transparent
                    focus:border-0
                    text-white
                    placeholder-gray-400 
                    rounded-lg px-2 py-1 text-sm
                ' 
                type={type??'text'}
                value={input} 
                placeholder={placeholder??"Search"}
                onChange={e=>!form?
                    setInput(e.target.value):
                    setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
                }  
            />
        </div>
    )
}

export default SearchInput