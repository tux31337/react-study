import { useRef, useState } from "react";

import "./App.css";

function App() {
  const [id, setId] = useState("");
  const idRef = useRef(null); // 화면을 바꾸지 않는 데이터 , 값이 바뀌어도 리랜더링이 일어나지 않는다.
  const passwordRef = useRef(null);
  const [domain, setDomain] = useState("naver.com");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [count, setCount] = useState(0);

  const domains = ["naver.com", "gmail.com", "hanmail.net"];

  const onChangeEmail = (e) => {
    console.log("beforeChange", id);
    setId(e.target.value);
    console.log("afterChange", id);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const fullDomain = `${id}@${domain}`;

  const onLogin = () => {
    setCount(count + 2); // 2
    setCount(count + 4); // 4
    setCount(count + 5); // 5
    setCount(count + 3); // 3
    // setCount여러번쓰면 [(prev) => prev + 2, (prev) => prev + 3, (prev) => 4] prev를 무시하고 4로바꿔버림
    setCount((prev) => prev + 2); // 이전값 + 2 전부다 실행됨./
    setCount((prev) => prev + 3);
    setCount((prev) => {
      console.log("count", count);
      console.log("prev", prev);
      return prev + 4;
    });
    setCount(4);

    if (!id?.trim()) {
      setErrors({ idError: "아이디를 입력해주세요" });
      idRef.current.focus();
      return;
    }

    if (!password?.trim()) {
      setErrors({ passwordError: "비밀번호를 입력해주세요" });
      passwordRef.current.focus();
      return;
    }

    setErrors({});
    console.log(fullDomain, password);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <div>
        <label htmlFor="id" style={{ display: "inline-block", width: "80px" }}>
          아이디
        </label>
        <input
          type="text"
          id="id"
          value={id}
          ref={(node) => {
            idRef.current = node;
          }}
          onChange={onChangeEmail}
        />
        {domain === "" ? null : <span>@</span>}
        <select value={domain} onChange={onChangeDomain}>
          {domains.map((d) => {
            return (
              <option key={d} value={d}>
                {d}
              </option>
            );
            <option vlaue="">직접입력</option>;
          })}
        </select>

        {errors.idError && <div style={{ color: "red" }}>{errors.idError}</div>}
      </div>
      <label
        htmlFor="password"
        style={{ display: "inline-block", width: "80px" }}
      >
        패스워드
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onChangePassword}
        ref={passwordRef}
      />
      {errors.passwordError && (
        <div style={{ color: "red" }}>{errors.passwordError}</div>
      )}
      <button onClick={onLogin}>로그인</button>
      {count}
    </div>
  );
}

export default App;
