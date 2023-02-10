import React, { useState, useEffect } from "react";
import axios from "axios";

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
      return alert("Por favor seleccione una categoría");
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
      .then(() => alert("Uploaded!"))
      .catch(() => alert("Something went wrong :("));
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <header>
      <div>
        <input type="file" onChange={handleFileChange} />
        <select onChange={handleCategory} value={category}>
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={handleOnClick}>Upload your gif</button>
      </div>
    </header>
  );
};