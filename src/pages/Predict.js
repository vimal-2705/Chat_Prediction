import React from 'react'

function Predict() {

  const showFile = async (e) => {
    let text = ''
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      text = (e.target.result)
      console.log(text)
      alert(text)
    };
    reader.readAsText(e.target.files[0])
  }

  return (
    <div>
      <input type="file" onChange={(e) => showFile(e)} />
      <button>Submit</button>
    </div>
  )
}

export default  Predict;