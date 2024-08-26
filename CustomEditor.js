// src/components/CustomEditor.js
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CustomEditor.css';

const CustomEditor = ({ onSave }) => {
  const handleSave = () => {
    onSave();
  };

  return (
    <div className="editor-container">
      <ReactQuill 
        className="custom-editor" 
        theme="snow" 
        modules={CustomEditor.modules}
      />
      <div className="editor-controls">
        <button onClick={handleSave} className="save-button">Save</button>
        <button className="variables-button">Variables</button>
      </div>
    </div>
  );
};

// Define custom modules for ReactQuill (if needed)
CustomEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, { 'header': '2' }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline'],
    ['link'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['clean']
  ]
};

export default CustomEditor;
