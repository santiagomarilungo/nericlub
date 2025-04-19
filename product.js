import { useRouter } from 'next/router'

const productData = {
  1: {
    name: "Remera Oversize Negra",
    price: "$12.000",
    sizes: ["S", "M", "L", "XL"],
    description: "Remera oversize negra con logo bordado y confección premium.",
  },
  2: {
    name: "Buzo Beige Bordado",
    price: "$18.000",
    sizes: ["S", "M", "L", "XL"],
    description: "Buzo beige con bordado frontal y calce relajado.",
  },
  3: {
    name: "Pantalón Jogger Negro",
    price: "$15.000",
    sizes: ["S", "M", "L", "XL"],
    description: "Jogger negro urbano con bolsillos laterales.",
  }
}

export default function Product() {
  const router = useRouter()
  const { id } = router.query
  const product = productData[id]

  if (!product) return <p>Producto no encontrado</p>

  return (
    <div style={{padding: 20}}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <p>Talles: {product.sizes.join(', ')}</p>
    </div>
  )
}