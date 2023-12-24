import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import Link from 'next/link'
import { MdFacebook } from 'react-icons/md'
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="mt-16 text-sm bg-slate-700 text-slate-200">
      <Container>
        <div className='flex flex-col justify-between pt-16 pb-8 md:flex-row'>
          <FooterList>
          <h3 className='mb-2 text-base font-bold'>Shop Categories</h3>
          <Link href='/'>Phone</Link>
          <Link href='/'>Laptops</Link>
          <Link href='/'>Desktops</Link>
          <Link href='/'>Tvs</Link>
          <Link href='/'>Watches</Link>
          <Link href='/'>Accessories</Link>
          </FooterList>
          <FooterList>
          <h3 className='text-base font-bold'>Service</h3>
          <Link href='/'>Contact Us</Link>
          <Link href='/'>Shipping Policy</Link>
          <Link href='/'>Return & Exchanges</Link>
          <Link href='/'>FAQ</Link>
          </FooterList>
          <div className='w-full mb-6 md-w-1/3 md:mb-0'>
          <h3 className='mb-2 text-base font-bold'>About US</h3>
          <p className='mb-2'>
            At our electronics store, we are dedicated to provding the latest and greatest devices and accessories to our customers, 
            with a wide selection og phones, laptops, desktops, tvs, watches, and accessories, we are sure to have what you are looking for.
          </p>
          <p>&copy; {new Date().getFullYear()} E~HubVista. All rights reserved!</p>
          </div>
          <FooterList>
          <h3 className='mb-2 text-base font-bold'>Follow US</h3>
          <div className="flex gap-2">
          <Link href='/'><MdFacebook size={24} /></Link>
          <Link href='/'><AiFillTwitterCircle size={24} /></Link>
          <Link href='/'><AiFillInstagram size={24} /></Link>
          <Link href='/'><AiFillYoutube size={24} /></Link>
          <Link href='/'><AiFillLinkedin size={24} /></Link>
            
          </div>
          </FooterList>     
          </div>
      </Container>
    </footer>
  )
}

export default Footer