import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center">
        <li className="my-8 mx-8 w-1/4">
          <Link href="/" passHref>
            <div className="block hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-lpurple shadow-lg shadow-indigo-500/50 text-white text-center cursor-pointer">
              Inicio
            </div>
          </Link>
        </li>
        <li className="my-8 mx-8 w-1/4">
          <Link href="/products" passHref>
            <div className="block hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-lpurple shadow-lg shadow-indigo-500/50 text-white text-center cursor-pointer">
              Productos
            </div>
          </Link>
        </li>
        <li className="my-8 mx-8 w-1/4">
          <Link href="/contact" passHref>
            <div className="block hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-lpurple shadow-lg shadow-indigo-500/50 text-white text-center cursor-pointer">
              Contacto
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
