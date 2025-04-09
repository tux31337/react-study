import { useRef, useState } from "react";
import EmailInput from "./components/EmailInput";
import NicknameInput from "./components/NicknameInput";
import Input from "./components/Input";

function Signup() {
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [phone, setPhone] = useState("");
  const phoneRef = useRef(null);
  const [id, setId] = useState("");
  const idRef = useRef(null); // 화면을 바꾸지 않는 데이터 , 값이 바뀌어도 리랜더링이 일어나지 않는다.
  const [domain, setDomain] = useState("naver.com");
  const domains = ["naver.com", "gmail.com", "hanmail.net"];
  const [errors, setErrors] = useState({});
  const [nickname, setNickname] = useState("");
  const nicknameRef = useRef(null);

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeEmail = (e) => {
    setId(e.target.value);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onLogin = () => {
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

    if (!nickname?.trim()) {
      setErrors({ nicknameError: "닉네임을 입력해주세요" });
      nicknameRef.current.focus();
      return;
    }

    setErrors({});
  };

  return (
    <div style={{ textAlign: "left" }}>
      <EmailInput
        errors={errors}
        domains={domains}
        domain={domain}
        idRef={idRef}
        id={id}
        onChangeEmail={onChangeEmail}
        onChangeDomain={onChangeDomain}
      />
      <Input
        id="password"
        text="비밀번호"
        ref={passwordRef}
        onChange={onChangePassword}
        value={password}
        error={errors.password}
        type="password"
      />

      <Input
        id="nickname"
        text="닉네임임"
        ref={nicknameRef}
        onChange={onChangeNickname}
        value={nickname}
        error={errors.nicknameError}
      />
      <Input
        id="phone"
        text="휴대폰번호"
        ref={phoneRef}
        onChange={onChangePhone}
        value={phone}
        error={errors.phoneError}
      />
      <button onClick={onLogin}>회원가입</button>
    </div>
  );
}

export default Signup;
