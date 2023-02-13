import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { FaUpload } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import '../ui/uploadGif.styles.css'

export const UploadGif = () => {
  const [file, setFile] = useState();
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("")
  const [isUploaded, setIsUpoaded] = useState(false)

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
      return toast("Please, select a category,", {type: "info", position: "top-center"})
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
        setIsUpoaded(true);
        toast("Upload successful!", {type: "success", position: "top-center"});
        resetValues()
      })
      .catch(() => toast("Upload failed!", {type: "error", position: "top-center"}));
    };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const resetValues = ()=>{
    setFile(undefined);
    setCategory("");
    setTitle("");
    setIsUpoaded(false);
  }

  return (
    <header>
      <div>
        <label>
          <div className="file-input-placeholder">
          <FaUpload />
          </div>
          <input type="file" onChange={handleFileChange} style={{ display: "none" }} />
        </label>
        <input
        className="image-title"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select onChange={handleCategory} value={category}>
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      
        <button onClick={handleOnClick}>Upload your gif</button>
        <ToastContainer />
      </div>
    </header>
  );
};