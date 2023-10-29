import { Item } from '@/components/Item'
import { PrintfulProduct } from "@/constants"

type Props = {
  products: PrintfulProduct[]
}

export const ItemGrid = (  products: Props ) => {

  // products[0].map(item => console.log(item))
  console.log(products)

  return (
    <div className='grid grid-flow-row-dense grid-cols-3 gap-4 justify-items-center'>
      <Item />
    </div>
  )
}
