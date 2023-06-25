import "./Main.css";

function Main({ activeNote }) {
  if(!activeNote){
    return (<div className="no-active-note">ノートが選択されていません</div>)
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        {/* valueの値はtitleとする idはtitleとするonChangeはonEditNote関数*/}
        <input type="text" />
        {/* valueの値はcontentとする ,onChangeを使う,onEditNote関数*/}
        <textarea id="" placeholder="ノートの内容を記入"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>
    </div>
  );
}

export default Main;