import React, { useState } from 'react';


const CRUD: React.FC = () => {

  return (
    <div>
      <div className="container-title">
        <h1 className="title">Notes</h1>
        <button className='btn-refresh'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#78A75A"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>
        </button>
      </div>

      {/* плитка с заметкой */}
      <div className="content-notes">
        <div className="notes">
          <p className="notes-text">много, много текста</p>
          <button className="notes-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#EA3323"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>
      </div>

      {/* форма с полем для ввода текста, для добавления новой заметки */}
      <form action="" className="form">
        <label htmlFor="in-notes" className='new-notes-title'>New Note</label>
        <textarea 
          className='new-notes-text'
          name="" 
          id="in-notes" 
          cols="30" 
          rows="10"
        >
        </textarea>
        <button className='new-notes-add'>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </form>
    </div>
  );
}

export default CRUD;

