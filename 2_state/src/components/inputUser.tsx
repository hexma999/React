import React, { useState, useRef } from "react";

function InputUser() {
  const [inputs, setInputs] = useState({
    userid: "",
    password: "",
  });

  const { userid, password } = inputs;

  /*
    useRef
     - 리액트 컴포넌트 안에서 값을 기억해두는 상자
     - 값을 바꿔도 리렌더링이 일어나지 않으며 컴퍼넌트가 다시 렌더링되어도 상자의 값을 계속 재사용할 수 있음

     useState : 리렌더링 발생, 화면에 보여줄 상태, state(리액트 상태)
     useRef : 리렌더링 발생하지 않음, 내부적으로 기억할 값, ref.current 라는 필드
  */

  const idInput = useRef();

  const onReset = () => {
    setInputs({
      userid: "",
      password: "",
    });

    idInput.current.focus();
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        name="userid"
        placeholder="아이디를 입력하세요"
        value={userid}
        onChange={onChange}
        ref={idInput}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={onChange}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          값: {userid}({password})
        </b>
      </div>
    </div>
  );
}

export default InputUser;
