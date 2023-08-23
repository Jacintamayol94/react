import {useState} from 'react';

function FrutasFuncion() {
    const [listadoDeFrutas, setListadoDeFrutas] = useState(["Manzana", "Pera", "Banana"]);

    const agregarFruta = e => {
        e.preventDefault();
        let nuevaFruta = e.target.nuevaFruta.value;
        setListadoDeFrutas([
                ...listadoDeFrutas,
                nuevaFruta
            ]
        );
        e.target.nuevaFruta.value = '';
    }

    return (
        <div>
            <h1>Soy una fruta función</h1>
            <ul>
                {listadoDeFrutas.map((fruta, i) => {
                        return <li key={i}>{fruta}</li>
                    })
                }
            </ul>
            <form onSubmit={agregarFruta}>
                <input name="nuevaFruta" type="text" /> <br/>
                <button>Añadir nueva fruta</button>
            </form>
        </div>
    )
}

export default FrutasFuncion