import Link from 'next/link'

import { NavLinks } from '@/constants';

export const Navbar = () => {
  return (
    <nav className='navbar bg-neutral py-4'>
      <div className='navbar-start'>
        {/* MOBILE: Navigation */}
        <div className='dropdown'>
          
          <label tabIndex={ 0 } className='btn btn-ghost lg:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <ul tabIndex={ 0 } className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52'>
            {
              NavLinks.map( ( link ) => (
                <li key={ link.key }>
                  <Link href={ link.href }>{ link.text }</Link>
                </li>
              ) )
            }
          </ul>

        </div>
        <Link href={ NavLinks[0].href } 
        className='btn btn-ghost normal-case text-xl'>
          {/* TODO: Logo goes here */}
          { NavLinks[0].text }
        </Link>
      </div>

      <div className='navbar-center hidden lg:flex'>
        {/* BROWSER: Navigation */}
        <ul className='menu menu-horizontal px-1'>
            {
              NavLinks.map( ( link ) => (
                <li key={ link.key }>
                  <Link href={ link.href }>{ link.text }</Link>
                </li>
              ) )
            }
          </ul>
      </div>

      <div className='navbar-end pr-5'>

        {/* TODO: Wishlist */}

        <div className='indicator'>
          {/* Shopping cart */}
          <div className='btn btn-circle'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
