import Image from 'next/image'

export const Item = () => {
  return (
    <div className='card card-compact w-96 bg-neutral/50 shadow-xl'>
      <figure>
        <Image
          src='/shoe.jpg'
          width='928'
          height='548'
          alt='Shoes' />
      </figure>

      <div className='card-body'>
        <h2 className='card-title'>
          Shoes
          <span className='badge badge-secondary'>New</span>
        </h2>
        <p>
          $120.00 CAD
        </p>

        <select className='select select-primary w-full max-w-xs'>
          {/* TODO: Create a component */}
          <option disabled>Shoe Size</option>
          <option>8.5</option>
          <option>9.5</option>
          <option>10.5</option>
          <option>11.5
export default ItemGrid</option>
        </select>

        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}
