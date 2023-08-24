import React, {useEffect, useState, useRef} from 'react';
import User from './User'

function UserList (){
    const [results, setResults] = useState(0)
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        const endpoint = `https://randomuser.me/api/?results=${results}`
        console.log("Componente se montó")
        const fetchApi = async (endpoint) => {
            const response = await fetch(endpoint);
            const data = await response.json();

            setUsers(await data.results)
        }
        fetchApi(endpoint)
    }, [results])

    const quantityInput = useRef(null);
    

    const handleGenerate = () => {
        console.log('El botón fue clickeado')
        console.log(quantityInput.current.value)
        setResults(quantityInput.current.value)
    }


    return(
        <>
        <h1>Este es el listado de componentes</h1>
        <input ref={quantityInput} placeholder="Ingrese un número" type='number' max={50}/>
        < br />
        < br />
        <button onClick={handleGenerate}>Generar usuarios</button>
        {
            users?.length > 0 &&
            users.map(user => (
                <User 
                    profilePic = {user.picture.large}
                    firstName = {user.name.first}
                    lastName = {user.name.last}
                />
            ))
        }
        
        </>
        )
}

export default UserList;