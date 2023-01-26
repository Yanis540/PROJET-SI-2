import {Select} from 'flowbite-react'
function SelectInput({input,onChange}) {
    return (
        <div id="select">
        
            <Select id={input.name} name={input.name} onChange={onChange} value={input.value}>
            {
                input?.values?.map(value=>(
                    <option key={value} >
                        {value}
                    </option>
                ))
            }
            </Select>
        </div>
    )
}

export default SelectInput