// Site
export const NavLinks = [
  { href: '/', key: 'Print Cart Xpress', text: 'Print Cart Xpress' },
  { href: '/', key: 'Shop', text: 'Shop' },
  { href: '/', key: 'About', text: 'About' },
  { href: '/', key: 'Contact', text: 'Contact' },
]

export const CategoryFilters = [
  'men',
  'women',
  'slip-on'
]

// Printful
export interface SyncProduct {
      id: number,
      external_id: string,
      name: string,
      variants: number,
      synced: number,
      thumbnail_url: string,
      is_ignored: boolean
}



export interface Product {
      variant_id: number,
      product_id: number,
      image: string,
      name: string
    }

export interface PrintfulVariants {
    id: number,
    external_id: string,
    sync_product_id: number,
    name: string,
    synced: boolean,
    variant_id: number,
    main_category_id: number,
    warehouse_product_variant_id: number,
    retail_price: string,
    sku: string,
    currency: string,
    product: Product,
    files: Array<object>,
    options: [],
    is_ignored: boolean,
    size: string,
    color: string,
    availability_status: string
}

export interface PrintfulProduct {
  sync_product: SyncProduct,
  sync_variants: PrintfulVariants[]
}