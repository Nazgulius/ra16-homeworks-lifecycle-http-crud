import React, { useState, useEffect  } from 'react';
import NotesRender from './NotesRender'

interface Notes {
  id: number;
  text: string;
}

const CRUD: React.FC = () => {
  const [noteses, setNoteses] = useState<Notes[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {  
    fetchNotes();  
  }, []); 

  const fetchNotes = async () => {  
    try {  
      const response = await fetch('https://ra16-homeworks-lifecycle-http-crud-server.onrender.com/notes');  
      const data = await response.json();  
      setNoteses(data);  
    } catch (error) {  
      console.error('Ошибка при получении заметок:', error);  
    }  
  };  

  // добавление Notes
  const addNotes = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) return;  

    try {  
      await fetch('https://ra16-homeworks-lifecycle-http-crud-server.onrender.com/notes', {  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({ id: 0, content: text }), // Отправляем id = 0  
      });  

      fetchNotes(); // Обновляем список заметок после добавления  
    } catch (error) {  
      console.error('Ошибка при добавлении заметки:', error);  
    }  
    setText('');  
  }

  // удаление Notes
  const removeNotes = async (id: number) => {  
    try {  
      await fetch(`https://ra16-homeworks-lifecycle-http-crud-server.onrender.com/notes/${id}`, {  
        method: 'DELETE',  
      });  
      fetchNotes(); // Обновляем список заметок после удаления  
    } catch (error) {  
      console.error('Ошибка при удалении заметки:', error);  
    }  
  }; 

  return (
    <div>
      <div className="container-title">
        <h1 className="title">Notes</h1>
        <button className='btn-refresh' onClick={fetchNotes}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#78A75A"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>
        </button>
      </div>

      {/* плитки с заметками */}
      <div className="content-notes">
        {noteses.map(notes => (
          <NotesRender 
            key={notes.id}
            id={notes.id}
            text={notes.text}
            onRemove={removeNotes}
          />
        ))}
      </div>

      {/* форма с полем для ввода текста, для добавления новой заметки */}
      <form onSubmit={addNotes} className="form">
        <label htmlFor="in-notes" className='new-notes-title'>New Note</label>
        <textarea 
          className="new-notes-text"          
          id="in-notes" 
          cols="30" 
          rows="10"
          value={text}
          onChange={(e) => setText(e.target.value)} // Обновляем состояние при вводе текста
        >
        </textarea>
        <button 
          className='new-notes-add'
          type="submit"
        >
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </form>
    </div>
  );
}

export default CRUD;

