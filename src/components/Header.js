import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/Assets/Logo.png'

function Header() {
  return (
    <header className="w-full min-h-[12vh] flex justify-center fixed z-999 bg-white border-b-4 border-solid border-BecoGreen duration-1000 py-5">
      <section className='w-11/12 gap-3 flex flex-wrap justify-between items-center'>
          <section className='flex max-md:w-full max-md:justify-between'>
              <a href="#inicio"><Image src={Logo} alt="logo" className='w-[20vh] h-[8vh] object-contain'/></a>
              {/* <a className={`hidden w-[5vh] h-[5vh] duration-800 max-md:flex ` + (burguerMenu ? "burguerInactive" : "burguerActive")} onClick={(e) => menuTransition(e) }></a> */}
          </section>
          <ul className="flex max-[500px]:flex-col gap-10">
              <li className='flex items-center font-semibold text-BecoGreen duration-500 text-lg'><a href="#inicio">Inicio</a></li>
              <li className='flex items-center font-semibold text-BecoGreen duration-500 text-lg'><a href="#QS">¿Quiénes Somos?</a></li>
              <li className='flex items-center font-semibold text-BecoGreen duration-500 text-lg'><a href="">Proyectos</a></li>
              <li className='flex items-center font-semibold text-BecoGreen duration-500 text-lg'><a href="#Siguenos">Siguenos</a></li>
              <li className='flex items-center font-semibold text-BecoGreen duration-500 text-lg'><a href="#Alianzas">Alianzas</a></li>
          </ul>
      </section>
    </header>
  )
}

export default Header