import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { FaUpload } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import '../ui/uploadGif.styles.css';
import '../ui/popup.styles.css'
import { Button } from 'react-bootstrap';

export const UploadGif = () => {
  const [file, setFile] = useState();
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/gif/categories")
      .then(({ data }) => {
        setCategories(data);
      });
  }, []);

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files) {
      setFile(files[0]);
      setTitle(files[0].name.split('.').slice(0, -1).join('.'));
    } else {
      setFile(undefined);
    }
  };

  const handleOnClick = () => {
    if (!category) {
      return toast("Please, select a category.", {type: "info", position: "top-center"})
    }
    if (!title) {
      return toast("Please, insert a title.", {type: "info", position: "top-center"})
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("content", file);

    axios({
      method: "post",
      url: "http://localhost:4000/api/gif",
      data: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => {
        window.location.reload(true);
        setShowPopup(false);
        resetValues();
      })
      .catch(() => toast("Upload failed!", {type: "error", position: "top-center"}));
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const resetValues = () => {
    setFile(undefined);
    setCategory("");
    setTitle("");
  };

  return (
    <header>
    <Button variant="primary" onClick={() => setShowPopup(true)} style={{color: "blue"}}>
      <FaUpload />
    </Button>
    {showPopup && (
      <div style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        padding: '20px',
        borderRadius: '10px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div className="form-group">
       
            <select
              className="form-control"
              id="category"
              onChange={handleCategory}
              value={category}
            >
              <option value="" >Category</option>
              {categories.map((category) => (
                <option key={category} value={category} >
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
          <label htmlFor="content" style={{ position: "relative" }}>
  <input
    type="file"
    className="form-control-file"
    id="content"
    onChange={handleFileChange}
    style={{ visibility: "hidden", width:"50%"}}
  />
  <button
    type="button"
    style={{ position: "absolute", top: 0, left: "25%", width: "50%" }}
  >
   File
  </button>
  <span style={{ position: "absolute", top: 0, left: 0, opacity: 0 }}>
    Select a file
  </span>
</label>
          </div>
          <div className="form-group">
        
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title of gif"
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={handleOnClick}
              style={{ backgroundColor: '#378CCD', marginTop: '20px' }}
            >
              Upload
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setShowPopup(false)}
              style={{ backgroundColor: 'red', marginTop: '20px' }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )}
    <ToastContainer />
  </header>
     
);
};