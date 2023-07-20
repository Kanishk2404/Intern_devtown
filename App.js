// App.js
import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NoteCard from './notecard';
import NavigationBar from './nav';
import NoteEditor from './editor';
import './App.css';
const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

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

  // Function to handle editing a note
  const handleEditNote = (index, updatedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
    setEditingIndex(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavigationBar />
      <div className="container mx-auto my-4">
        <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Render Note Cards with Animation */}
          {notes.map((note, index) => (
            <CSSTransition key={index} timeout={300} classNames="note-item">
              <NoteCard
                title={note.title}
                content={note.content}
                onDelete={() => deleteNote(index)}
                onEdit={() => setEditingIndex(index)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <NoteEditor
        notes={notes}
        onSave={addNote}
        editIndex={editingIndex}
        onEditNote={handleEditNote}
      />
      <Footer />
    </div>
  );
};

// Footer component to fill empty space at the bottom
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-gray-400">
      &copy; {new Date().getFullYear()} Notes App. All rights reserved.
    </footer>
  );
};

export default App;
