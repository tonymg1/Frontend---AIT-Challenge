import React from 'react';
import { useState } from 'react';
import '../ui/navbar.styles.css'


export const Navbar = () => {
  const [searchText, setSearchText] = useState('');

  const onSearchSubmit =(event)=>{
    event.preventDefault()
    if (!searchText) {
      alert("No hay texto de búsqueda");
    } else {
      console.log(searchText)
    }
  }
  const onInputChange = (event) => {
    
    setSearchText(event.target.value);
  };


  return (
    <nav className="navbar">
      <ul className="navbar-nav navbar-left">
        <li className="nav-item">
          <a className="nav-link" href="#">Cats</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Anime</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gamer</a>
        </li>
      </ul>
      <form className="form-inline navbar-center" onSubmit={onSearchSubmit}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" value={searchText} onChange={onInputChange} />
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Give me more</button>
      </form>
      <div className="navbar-right">
        <h1 className="navbar-username">User</h1>
        <button className="btn btn-outline-light navbar-logout">Logout</button>
      </div>
    </nav>
  );
}