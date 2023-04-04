import React from 'react'

export default function Navbar({username}) {
  return (
    <nav className='navbar bg-body-tertiary'>
        <div className="container-fluid">
            <a href="/" className='navbar-brand'> {username}'s To-Do List</a>
        </div>

    </nav>
  )
}
