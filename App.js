// App.js
import React, { useState } from 'react';
import NoteCard from './NoteCard';
import NavigationBar from './NavigationBar';
import NoteEditor from './NoteEditor';

const App = () => {
  const [notes, setNotes] = useState([]);

  // Function to add a new note to the state
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  // Function to delete a note from the state based on its index
  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="container mx-auto mt-4">
      <NavigationBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render Note Cards */}
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            title={note.title}
            content={note.content}
            onDelete={() => deleteNote(index)}
            onEdit={() => console.log(`Edit note at index ${index}`)} // Replace with your edit functionality
          />
        ))}
      </div>
      <NoteEditor onSave={addNote} />
    </div>
  );
};

export default App;
