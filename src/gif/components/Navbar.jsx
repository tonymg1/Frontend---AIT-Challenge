import React from 'react';
import '../ui/navbar.styles.css'
import{ LogoutButton} from "../../auth/components"
import { useAuth0 } from '@auth0/auth0-react';

export const Navbar = ({ categories, searchText, setSearchText }) => {
  const onInputChange = (event) => {
    setSearchText(event.target.value)
  };
  const {user} = useAuth0()
 const userName = user?.given_name || ""


  return (
    <nav className="navbar">
      <ul className="navbar-nav navbar-left">
        {categories.map((category) => (
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setSearchText(category)} style={{color: "#2762BE"}}>{category}</a>
          </li>  
        ))}
      </ul>
      <input className="form-control mr-sm-2" type="text" placeholder="category..." aria-label="Search" value={searchText} onChange={onInputChange} />
      <div className="navbar-right">
        <h1 className="navbar-username">{userName}</h1>
        <LogoutButton />
      </div>
    </nav>
  );
}