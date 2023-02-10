import React, { useState } from 'react';
import axios from "axios";

export const UploadGif = () => {
  const [file, setFile] = useState();
  const [category, setCategory] = useState("");

  const categories = ["sports", "animals", "funny", "nature", "music", "movies"];

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files) {
      setFile(files[0]);
    } else {
      setFile(undefined);
    }
  };

  const handleOnClick = () => {
    const formData = new FormData();
    formData.append('title', "titi");
    formData.append('category', category);
    formData.append('content', file);
    console.log(category);
    axios({
      method: "post",
      url: "http://localhost:4000/api/gif",
      data: formData,
      headers: {
        'Accept': 'application/json',
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
        <select onChange={handleCategory}>
          <option value="">Select a category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button onClick={handleOnClick}>Upload your gifs</button>
      </div>
    </header>
  );
};