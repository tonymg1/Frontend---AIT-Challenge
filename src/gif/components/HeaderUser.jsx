import React, { useState } from 'react'

export const HeaderUser = () => {
  const [file, setFile] = useState()

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files) {
      setFile(files[0])
    } else {
      setFile(undefined)
    }
  }

  const handleOnClick = () => {
    const formData = new FormData();
    formData.append('title', "titi");
    formData.append('category', "cats");
    formData.append( 'content', file);

    fetch("localhost:4000/api/gif", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: formData // body data type must match "Content-Type" header
    });
  }

  return (
    <header>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleOnClick}>Upload your gifs</button>
      </div>
    </header>
  )
}
