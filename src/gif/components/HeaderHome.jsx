import React from 'react'
import '../ui/headerHome.styles.css'


export const HeaderHome = ({gifs}) => {


  const showGifs = () => (
    <>
      {gifs.map((gif) => showGif(gif))}
    </>
  )



  const showGif = ({content, title}) => {
    const {data} = content
    const imgSrc = generateSrc(data)
  

    return(
      <>
      <div className='image-container'>
      <img src={imgSrc} className="images"/>
      <p className="image-title">{title}</p>
      </div>
    
  
      </>
      
    )
  }

  const noResult = () => {
    return (
      <p>No results found for that search</p>
     
    )
  }

  const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

  // data.img.data.data
  const generateSrc = (data) => {
    const base64Flag = 'data:image/gif;base64,';
    const gifStr = arrayBufferToBase64(data);

    return base64Flag + gifStr
  }

  return (
<div className="header-home-container">
  {gifs === undefined }
  {gifs?.length === 0 && noResult()}
  {gifs?.length > 0 && showGifs()}
</div>
  )
}
