import { useRef, useState } from "react";

export default function EmailInput({
  errors,
  domain,
  domains,
  idRef,
  id,
  onChangeEmail,
  onChangeDomain,
}) {
  return (
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
  );
}
