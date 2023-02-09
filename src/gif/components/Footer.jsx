import React, {useRef, useState, useEffect} from 'react'
import '../ui/footer.styles.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Copyright &copy; {new Date().getFullYear()} GifHub</p>
    </footer>
  );
};

