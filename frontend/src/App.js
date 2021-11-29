import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
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
