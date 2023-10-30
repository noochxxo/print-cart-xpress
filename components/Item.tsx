import { PrintfulProduct } from '@/constants'
import Image from 'next/image'
import VariantPicker from './VariantPicker'

type Props = {
  product: PrintfulProduct
}

export const Item = ( { product }: Props ) => {
  return (
    <div className='card card-compact w-96 bg-neutral/50 shadow-xl'>
      <figure>
        <Image
          src={ product.sync_product.thumbnail_url }
          width='928'
          height='548'
          alt={ product.sync_product.name } />
      </figure>

      <div className='card-body'>
        <h2 className='card-title'>
          { product.sync_product.name }
          <span className='badge badge-secondary'>New</span>
        </h2>
        <p>
          {/* The price assumes all product variants are the same price */}
          ${product.sync_variants[0].retail_price} {product.sync_variants[0].currency}
        </p>

        <VariantPicker key={product?.sync_product?.id} variants={ product.sync_variants } />

        <div className='card-actions justify-center'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}
