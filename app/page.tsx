import { connectToPrintfulAPI, fetchAllPrintfulProducts } from "@/lib/actions";
import { ItemGrid } from '@/components/ItemGrid'

export default function Home() {

  // TODO: Fetch all products
  

const token: string  = process.env.PRINTFUL_API_KEY || ''

  async function getAllProducts() {
    try {
      const apiConnection = await connectToPrintfulAPI(token);
      
      const data = await fetchAllPrintfulProducts(apiConnection, "sync/products", { limit: 10 });
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

getAllProducts();

  return (
    <main className="auto">
      <h1>Print Cart Xpress</h1>
      
      <ItemGrid />
      
    </main>
  )
}
