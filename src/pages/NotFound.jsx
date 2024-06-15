import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
   <main>
     <div className='p-8'>
      <h1 className='font-bold'>Page Was NotFound</h1>
      <p className='border-l-yellow'>Sorry The Page You Were Looking Was Not Found.Return to <Link to="/" className='hover:underline text-blue font-bold'>homepage</Link></p>
    </div>
   </main>
  )
}
// Displayed when a user navigates to a non-existent page.