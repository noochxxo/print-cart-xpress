import { connectToPrintfulAPI, fetchAllPrintfulProducts } from "@/lib/actions"
import { ItemGrid } from '@/components/ItemGrid'
import { PrintfulProduct } from "@/constants"

export default async function Home() {

  // TODO: Fetch all products
  

const token: string  = process.env.PRINTFUL_API_KEY || ''

  async function getAllProducts() {
    try {
      const apiConnection = await connectToPrintfulAPI(token)
      
      const allProducts = await fetchAllPrintfulProducts(apiConnection, "sync/products", { limit: 6 })
      
      const pageProducts =  await allProducts.result.map( (product: PrintfulProduct) => product )
  
      
      return pageProducts

    } catch (error) {
      console.error("Error:", error)
    }
  }

  const products: PrintfulProduct[] =  await getAllProducts();
  

  return (
    <main className="auto">
      <h1>Print Cart Xpress</h1>
      
      <ItemGrid products={ products }/>
      
    </main>
  )
}
