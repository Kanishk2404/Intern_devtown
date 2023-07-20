// NoteEditor.js
import React, { useState, useEffect } from 'react';

const NoteEditor = ({ notes, onSave, editIndex, onEditNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // When editIndex changes, update the input fields with the corresponding note data
  useEffect(() => {
    if (editIndex !== null) {
      const { title: editTitle, content: editContent } = notes[editIndex];
      setTitle(editTitle);
      setContent(editContent);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editIndex, notes]);

  const handleSave = () => {
    if (editIndex !== null) {
      // Edit existing note
      onEditNote(editIndex, { title, content });
    } else {
      // Add new note
      onSave({ title, content });
    }
    setTitle('');
    setContent('');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 mb-2 rounded w-full text-blue-800 placeholder-blue-200"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add your note here..."
        className="border p-2 rounded w-full h-32 text-blue-800 placeholder-blue-200"
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 float-right"
      >
        {editIndex !== null ? 'Save Edit' : 'Save Note'}
      </button>
    </div>
  );
};

export default NoteEditor;
