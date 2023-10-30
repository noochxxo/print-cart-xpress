import { printful } from "./printful-client";


const fetchAllPrintfulSyncProducts = async ( query = '' ) => {
  try {
    const url = `${ process.env.PRINTFUL_URL }/${ query }`
    const { result: productIds } = await printful.get( url )
    
    return productIds
  } catch (error) {
    throw error
  }
}

export { fetchAllPrintfulSyncProducts }

