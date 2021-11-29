import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get secure url from server
    const res = await fetch('http://localhost:8080/s3Url');
    if (res.ok) {
      console.log(res);
      const { url } = await res.json();
      console.log(url);

      // post directly to the s3 bucket
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: file,
      });

      const imageUrl = url.split('?')[0];
      console.log(imageUrl);

      // post request to my server to store any extra data
      const img = document.createElement('img');
      img.src = imageUrl;
      document.body.appendChild(img);
    }
  };

  // const showFileChange = (e) => {
  //   console.dir(e.target.files[0]);
  // };

  return (
    <form id='imageForm' onSubmit={handleSubmit}>
      <input
        id='imageInput'
        type='file'
        accept='image/*'
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type='submit'>Upload</button>
    </form>
  );
}

export default App;
