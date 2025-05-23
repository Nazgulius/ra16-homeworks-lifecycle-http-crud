
interface NotesRenderProps {
  id: number;
  text: string;
  onRemove: (id: number) => void;
}

const NotesRender: React.FC<NotesRenderProps> = ({ id, text, onRemove }) => {
  console.log(id);
  console.log(text);
  return (
    <div className="notes">
      <p className="notes-text">{text}</p>
      <button 
        className="notes-btn"
        onClick={() => onRemove(id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#EA3323"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
      </button>
    </div>
  );
}

export default NotesRender;