import React, {useRef, useState, useEffect} from 'react'
import '../ui/footer.styles.css'

// export const Footer = () => {
//   return (
//     <footer className="footer">
//       <p className="footer-text">Copyright &copy; {new Date().getFullYear()} GifHub</p>
//     </footer>
//   )
// }
 export const Footer = () => {
  const [height, setHeight] = useState(0);
  const footerRef = useRef(null);

  useEffect(() => {
    setHeight(footerRef.current.offsetHeight);
  }, [footerRef]);

  return (
    <div
      ref={footerRef}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
       <footer className="footer">
      <p className="footer-text">Copyright &copy; {new Date().getFullYear()} GifHub</p>
   </footer>
    </div>
  );
};

