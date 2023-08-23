import { useState, useEffect, useRef } from 'react'


function RickyMortyFn () {
    const [personajes, setPersonajes] = useState([]);
    const [pagina, setPagina] = useState(1);

    const subtitle = useRef()

    console.log(subtitle)

    useEffect(() => {
        console.log('Se montó el componente');
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setPersonajes(
                    data.results
                )
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log('Se actualizó el componente')
    }, [personajes])

    useEffect(() => {
        return () => console.log('Se desmontó el componente')
    }, [])


    const cargarMas = async () => {
        const nuevaPagina= pagina + 1
        console.log(nuevaPagina)
        console.log(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        try{
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        const data = await response.json()
        setPersonajes(data.results);
        setPagina(nuevaPagina)
            
        } catch(error) {console.log(error)}
    }

    const cambiarH1 = () => {
        subtitle.current.style.color= 'pink';
        subtitle.current.innerText= 'Soy Jacinta'
    }

    return (
        <div>
        <h1 ref={subtitle}>Somos Rick & Morty Function</h1>
        <button onClick={cambiarH1}>Cambiar al h1</button>
        <ul>
            {personajes.length === 0 && <p>Cargando...</p>}
            {
                personajes.map((personaje, i) => {
                    return (
                        <li key={i}>
                            <h3>{personaje.name}</h3>
                            <img src={personaje.image} alt="avatar" width="150" />
                        </li>
                    )
                })
            }
        <button onClick={cargarMas}>Siguiente Página</button>
        </ul>
        </div>
    )
}

export default RickyMortyFn