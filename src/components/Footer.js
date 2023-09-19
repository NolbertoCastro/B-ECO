import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/Assets/Logo.png'
import Insta from '@/Assets/Instagram.png'

function Footer() {
  return (
    <footer className="w-full min-h-[14vh] flex justify-center bg-white border-t-4 border-solid border-BecoGreen duration-1000 py-10">
      <section className='flex flex-wrap w-11/12 gap-3 justify-between items-center'>
          <h2 className='text-BecoGreen'>Todos los derechos reservados © B-ECO 2023</h2>
          <section className='flex max-md:w-full max-md:justify-between items-center justify-center'>
                <Link target="_blank" href="https://www.instagram.com/grupoestudiantil_b.eco/" className='flex w-[4vh] h-[4vh]'><Image src={Insta} alt="logo" className='w-[4vhh] h-[4vh] object-contain object-center'/></Link>
                <Link href="/" className='w-[20vh] h-[8vh]'><Image src={Logo} alt="logo" className='flex w-[20vh] h-[8vh] object-contain object-right'/></Link>
                {/* <a className={`hidden w-[5vh] h-[5vh] duration-800 max-md:flex ` + (burguerMenu ? "burguerInactive" : "burguerActive")} onClick={(e) => menuTransition(e) }></a> */}
          </section>
      </section>
    </footer>
  )
}

export default Footer