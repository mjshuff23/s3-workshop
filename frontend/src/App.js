import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Grab the file extension for our key
    const fileName = file.name.split('.');
    const fileExtension = fileName[fileName.length - 1];

    // get secure url from server
    const res = await fetch('http://localhost:8080/s3Url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileExtension }),
    });

    if (res.ok) {
      const { url } = await res.json();

      // post directly to the s3 bucket
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: file,
      });

      // Grab the URL for our image
      const imageUrl = url.split('?')[0];
      // console.log(imageUrl);

      // Append our new image to the page
      const img = document.createElement('img');
      img.src = imageUrl;
      document.body.appendChild(img);
    }
  };

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
