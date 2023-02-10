import React from 'react'
import '../ui/headerHome.styles.css'


export const HeaderHome = ({gifs}) => {


  const showGifs = () => (
    <>
      {gifs.map((gif) => showGif(gif))}
    </>
  )

  const showGif = (gif) => {
    const {data} = gif.content
    const imgSrc = generateSrc(data)

    return(
      <img src={imgSrc} style={{
        maxWidth: '200px',
        height: 'fit-content'
      }}/>
    )
  }

  const noResult = () => {
    return (
      <p>No result found for that search</p>
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
    <div style={{
      width: '100%',
      minHeight: '75vh',
      display: 'flex',
      padding: '1rem'
    }}>
      {gifs === undefined }
      {gifs?.length === 0 && noResult()}
      {gifs?.length > 0 && showGifs()}
    </div>
  )
}
