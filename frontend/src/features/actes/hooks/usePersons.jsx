import {useState} from 'react'
import uuid from 'react-uuid';
function usePersons({type}) {
    const [persons,setPersons]=useState([]);
    const addPerson=()=>{
        setPersons((prev)=>([
            ...prev,
            {
                id:uuid(),
                NIN:'',
                name:`${type}_${persons.length+1}`,
                type:"number",
                label:`NIN ${type} ${persons.length+1}`},
        ]))
    };
    const removePerson=(e,id)=>{
        setPersons((prev)=>{
            const index=prev?.map(person=>person.id)?.indexOf(id);
            if(isNaN(index)||index===-1) return prev;
            prev.splice(id,1);
            const newArray=prev.map((person,index)=>(
                {
                    ...person,
                    id:person.id,
                    NIN:person.NIN,
                    name:`${type}_${index+1}`,
                    label:`NIN ${type} ${index+1}`
                })
            );
            return newArray;
        })
    }
    const onChangePerson=(e,id)=>{
        setPersons((prev)=>{
            const index=prev?.map(person=>person.id)?.indexOf(id);
            prev[index]={...prev[index],NIN:e.target.value};
            return prev;
        })
    }
    const removeAllpersons=()=>{
        setPersons([])
    }
    return {
        persons,
        addPerson,
        removePerson,
        removeAllpersons,
        onChangePerson
    }
}

export default usePersons