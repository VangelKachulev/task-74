import { useMemo, useState } from "react";
import "./App.css";



function App({ value }) {
  const [text, setText] = useState(value);
  const isValid = useMemo(() => {
    return /^\d+$/.test(text);
  }, [text]);
  const onChange = (ev) => setText(ev.target.value);
  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text} onChange={onChange}
        />
        <span className="icon is-small is-right">
          <i className={`${isValid ? 'fas fa-check' : 'fas fa-times'}`}  />
        </span>
      </div>
    </div>
  );
}

export default App;
