import { useState } from 'react'
import ImageViewer from './ImageViewer.js'

function App() {
  const [name_text, set_text_field] = useState('')
  const [response_text, set_response_text] = useState('')
  const [file_path, set_file_path] = useState('')
  const [age, set_age] = useState(0)
  const [image_ip, set_image_ip] = useState('')

  function submitData() {
    console.log("Submitting data: " + name_text)
    fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name_text,
        age: age,
        file_path: file_path
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        set_response_text(data)
      })
      .catch((error) => console.error('Error:', error));
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Name</p>
      <textarea value={name_text} onChange={e => set_text_field(e.target.value)}></textarea>
      <p>Age</p>
      <textarea value={age} onChange={e => set_age(e.target.value)}></textarea>
      <p>File Path</p>
      <textarea value={file_path} onChange={e => set_file_path(e.target.value)}></textarea>
      <br></br>
      <button onClick={() => { submitData() }}>Submit</button>
      <p>Reponse Text: {response_text}</p>
      <p>Image Button</p>
      <button onClick={()=>{set_image_ip('http://127.0.0.1:8000/basic_image')}}>Get Image</button>
      <ImageViewer imageUrl={image_ip} />
      
    </div>
  );
}

export default App;



fetch('http:')