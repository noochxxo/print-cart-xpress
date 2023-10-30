import { PrintfulVariants } from "@/constants"
import extractShoeSize from "@/lib/extract-size"


type Props = {
  variants: PrintfulVariants[]
}

const VariantPicker = async ( { variants }: Props ) => {


  return (
    <div>
      <select className='select select-primary w-full'>
          
          <option disabled>Shoe Size</option>
          {
            variants.map( ( variant ) => (
              <option key={variant.external_id} value={variant.external_id}>
                Shoe size: {extractShoeSize(variant.name)}
              </option>
            ) )
          }
        </select>
     </div>
  )
}

export default VariantPicker