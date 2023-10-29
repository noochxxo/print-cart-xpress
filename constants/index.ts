export const NavLinks = [
  { href: '/', key: 'Print Cart Xpress', text: 'Print Cart Xpress' },
  { href: '/', key: 'Shop', text: 'Shop' },
  { href: '/', key: 'About', text: 'About' },
  { href: '/', key: 'Contact', text: 'Contact' },
]

export interface PrintfulProduct {
      id: number,
      external_id: string,
      name: string,
      variants: number,
      synced: number,
      thumbnail_url: string,
      is_ignored: boolean
}