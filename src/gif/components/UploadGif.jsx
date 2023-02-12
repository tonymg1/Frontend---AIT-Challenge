import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../ui/uploadGif.styles.css'

export const UploadGif = () => {
  const [file, setFile] = useState();
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

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
    } else {
      setFile(undefined);
    }
  };

  const handleOnClick = () => {
    if (!category) {
      return toast("Please, select a category,", {type: "info", position: "top-center"})
    }

    const formData = new FormData();
    formData.append("title", "titi");
    formData.append("category", category);
    formData.append("content", file);
    console.log(category);
    axios({
      method: "post",
      url: "http://localhost:4000/api/gif",
      data: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => toast("Upload successful!", {type: "success", position: "top-center"}))
      .catch(() => toast("Upload failed!", {type: "error", position: "top-center"}))
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <header>
      <div>
        <label>
          <div className="file-input-placeholder">
            Select a file
          </div>
          <input type="file" onChange={handleFileChange} style={{ display: "none" }} />
        </label>

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