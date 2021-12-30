import { useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchSentences, setHtml } from "./redux/sentenceSlice";

function App() {
  const [paras, setParas] = useState(2);


  const dispatch = useDispatch();

  const sentences = useSelector((state) => state.sentences.items)
  const status = useSelector(state => state.sentences.status)
  const html = useSelector(state => state.sentences.html)

  console.log(html)

  useEffect(() => {
    if(status === "idle" || status === "succeeded") {
      dispatch(fetchSentences({paras, html}))
    }
  }, [paras, html])

  return (
    <div className="App">
      <h3 className="header">React sample text generator app</h3>

      <hr className="hr" />

      <div className="content">
        <div className="item">
          <p className="label">Paragraphs</p>
          <input
            type="number"
            value={paras}
            onChange={(e) => setParas(e.target.value)}
            className="inputBox"
          />
        </div>
        <div className="item">
          <p className="label">Include HTML</p>
          <select
            onChange={(e) => dispatch(setHtml(e.target.value))}
            className="selectBox"
          >
            <option value="text">no</option>
            <option value="html">
              yes
            </option>
            
          </select>
          <br />
        </div>
      </div>

      <div className="text">
        {sentences}
      </div>
    </div>
  );
}

export default App;
