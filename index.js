import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: "Remera Oversize Negra",
    price: "$12.000",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/remera.jpg",
    description: "Remera oversize negra con logo bordado y confección premium.",
  },
  {
    id: 2,
    name: "Buzo Beige Bordado",
    price: "$18.000",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/buzo.jpg",
    description: "Buzo beige con bordado frontal y calce relajado.",
  },
  {
    id: 3,
    name: "Pantalón Jogger Negro",
    price: "$15.000",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/jogger.jpg",
    description: "Jogger negro urbano con bolsillos laterales.",
  }
]

export default function Home() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div>
      <Head>
        <title>Neri Club</title>
      </Head>
      <header style={{padding: 20, background: '#111', color: '#fff'}}>
        <h1>Neri Club</h1>
      </header>
      <main style={{padding: 20}}>
        <h2>Productos</h2>
        <div style={{display: 'flex', gap: 20}}>
          {products.map(product => (
            <div key={product.id} style={{border: '1px solid #ccc', padding: 10, width: 250}}>
              <img src={product.image} alt={product.name} style={{width: '100%'}} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link href={`/product?id=${product.id}`}>Ver más</Link>
              <br />
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}