import { useRef, useState } from "react";

export default function NicknameInput() {
  const [nickname, setNickname] = useState("");
  const nicknameRef = useRef(null);

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="nickname"
        style={{ display: "inline-block", width: "80px" }}
      >
        닉네임
      </label>
      <input
        type="text"
        id="nickname"
        value={nickname}
        onChange={onChangeNickname}
        ref={nicknameRef}
      />
      {errors.nicknameError && (
        <div style={{ color: "red" }}>{errors.nicknameError}</div>
      )}
    </div>
  );
}
