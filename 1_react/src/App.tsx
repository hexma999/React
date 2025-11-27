import React from "react";
import Hello from "./Hello.tsx";
import Hi from "./Hi.tsx";
import Counter from "./Counter.tsx";
import "./App.css";

function App() {
  const style = {
    backgroundColor: "black",
    color: "deeppink",
    fontSize: 30,
    padding: "1rem",
  };

  // 로직
  const name = "김사과";
  const students = ["김사과", "반하나", "오렌지", "이메론"];

  // UI
  return (
    <>
      {/* JSX에서 주석 달기 */}
      <Hello />
      <div style={style}>{name}</div>
      <div className="box"></div>
      <ul>
        {students.map((student) => (
          <li>{student}</li>
        ))}
      </ul>
      <img
        style={{ width: "300px", height: "200px" }}
        src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSS7R8lX2ALGaZy0M4-bF46jE7oWpwjzAeV2FSNFLaIo_0fBcTwW-qJNJC6owL7lBDcP1fbiuLbu_UalhK6II7BPyZ3l3yMbNmRNvkmn1DB5MxJzrOjsKWqO21RAhrhweutz0s03WJyAnU&s=19"
        alt="원희"
      />
      <Hi />
      <Hi name="김사과" />
      <Hi name="김사과" color="deeppink" />
      <Counter />
    </>
  );
}

export default App;
