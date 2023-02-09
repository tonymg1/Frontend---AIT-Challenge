import React from 'react';
import '../ui/navbar.styles.css'

export const Navbar = ({ categories, searchText, setSearchText }) => {
  const onInputChange = (event) => {
    setSearchText(event.target.value)
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav navbar-left">
        {categories.map((category) => (
          <li className="nav-item" key={category}>
            <a className="nav-link" href="#" onClick={() => setSearchText(category) }>{category}</a>
          </li>  
        ))}
      </ul>
      <input className="form-control mr-sm-2" type="text" placeholder="Search..." aria-label="Search" value={searchText} onChange={onInputChange} />
      <div className="navbar-right">
        <h1 className="navbar-username">User</h1>
        <button className="btn btn-outline-light navbar-logout">Logout</button>
      </div>
    </nav>
  );
}