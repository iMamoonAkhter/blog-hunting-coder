import React from 'react'
import navbar from "@/styles/Navbar.module.css"
import { routers } from '@/routes/routes'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
     <nav className={navbar.mainnav}>
          <ul>
            {routers.map((e)=>(
              <Link href={e.path} key={e.name} >
                <li>{e.name}</li>            
              </Link>
            ))}
          </ul>
    </nav> 
    </>
  )
}

export default Navbar
