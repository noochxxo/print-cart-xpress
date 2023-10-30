import { fetchAllPrintfulSyncProducts } from "@/lib/actions"
import { ItemGrid } from '@/components/ItemGrid'
import { PrintfulProduct, SyncProduct } from "@/constants"

export default async function Home() {


  const productIds = await fetchAllPrintfulSyncProducts( `?limit=5` ) as SyncProduct[]

  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => await fetchAllPrintfulSyncProducts(`${id}`))
  ) as PrintfulProduct[]

  return (
    <main className="auto">
      <h1>Print Cart Xpress</h1>
      
      <ItemGrid products={ allProducts }/>
      
    </main>
  )
}
