import "./Sidebar.css";

const Sidebar = ({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) => {

  //const sortedNotes とし、modDateを使いソート順にする。降順（新しい順）

  return(
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        { notes.map((note) =>(
          // クリツクされたactiveクラスが表示されるようにsetActiveNoteとする。
          <div className={`app-sidebar-note ${ note.id === activeNote && "active"}`}
            key={note.id}
            onClick={()=>setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={()=>onDeleteNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>最後の修正日:{new Date(note.modDate).toLocaleDateString("ja-JP",{
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default Sidebar;