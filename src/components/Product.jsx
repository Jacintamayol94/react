import { useParams, Link } from 'react-router-dom';


const productList = [
    {
        id: 1,
        name: 'Tv',
        price: 123
    },
    {
        id: 2,
        name: 'Secadora',
        price: 123
    },
    {
        id: 3,
        name: 'Lavarropas',
        price: 123
    }
];

function Product(props) {

    const { id } = useParams(); 

    let idproducto = Number(id)
    let product = productList.find(oneProduct => oneProduct.id === idproducto)

    console.log(idproducto)
    console.log(product)

  /*const product = productList.find((item) => item.id.toString() === id);*/

  /*if (!product) {
    return <div>Producto no encontrado</div>;
  }*/
    return(
        <div>
            <h2>Soy el componente products</h2>

            <Link to="/products/1">Product 1</Link>
            <Link to="/products/2">Product 2</Link>
            <Link to="/products/3">Product 3</Link>

            {
            product &&
            <>
            <p><b>Id: {product.id}</b></p>
            <p><b>Nombre: {product.name}</b></p>
            <p><b>Precio: {product.price}</b></p>
            </>
            }
            {
                !product && <p>No hay productos con ese id</p>
            }
        </div>
    )
}

export default Product