import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <input type="text" />
        <span>@</span>
        <select>
          <option value="naver.com">naver.com</option>
          <option value="gmail.com">gmail.com</option>
          <option value="hanmail.net">hanmail.net</option>
          <option value="">직접입력</option>
        </select>
      </div>
      <input type="password" name="" id="" />
      <button>로그인</button>
    </div>
  );
}

export default App;
