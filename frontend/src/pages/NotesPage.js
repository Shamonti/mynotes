import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NotesPage = ({ match }) => {
  let { id: noteId } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  const getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  return (
    <div>
      <p>{note?.body}</p>
    </div>
  );
};

export default NotesPage;
