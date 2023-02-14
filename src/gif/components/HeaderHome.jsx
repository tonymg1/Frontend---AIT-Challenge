import axios from 'axios'
import '../ui/headerHome.styles.css'
import { ToastContainer, toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';
export const HeaderHome = ({gifs}) => {
 

  const showGifs = () => (
    <>
      {gifs.map((gif) => showGif(gif))}
    </>
  )



  const showGif = ({content, title, _id}) => {
    const {data} = content
    const imgSrc = generateSrc(data)
  
    const handleDelete = (id)=>{
    
      axios.delete(`http://localhost:4000/api/gif/${id}`)
      .then(res => {
        if (res.status === 200) {
          window.location.reload(false);
        }
      })
      .catch(err => {
        console.log(err)
        toast.error('Ocurrió un error al intentar eliminar la imagen', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
        
    }

    return(
      <>
      <div className='image-container'>
      <img src={imgSrc} className="images"/>
      <p className="image-title">{title}</p>
      <button onClick={()=>handleDelete(_id)}> <FaTrash /></button>
     
      </div>
      </>
      
    )
  }

  const noResult = () => {
    return (
      <p>No results</p>
     
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
