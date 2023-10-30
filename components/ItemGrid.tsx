import { Item } from '@/components/Item'
import { PrintfulProduct } from "@/constants"

type Props = {
  products: PrintfulProduct[]
}

export const ItemGrid = ( { products }: Props ) => {

  if( products?.length === 0 ) {
    return (
      <p>No Products in the store.</p>
    )
  }

  return ( 
    <div className='grid grid-flow-row-dense grid-cols-3 gap-4 justify-items-center'>

      {
        products?.map( ( product ) => (
          <Item key={ product.id } product={ product } />
        ) )
      }

      
    </div>
  )
}
