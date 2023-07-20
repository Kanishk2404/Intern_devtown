import React from 'react';

const NoteCard = ({ title, content, onDelete, onEdit }) => {
  return (
    <div className="note-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default NoteCard;
