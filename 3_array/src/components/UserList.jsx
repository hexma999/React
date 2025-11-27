import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  /*
     useEffect
     - 렌더링 이후에 실행되어야 하는 부가 작업을 등록
     - 언제 실행할지를 의존성 배열로 조절
     - 필요한 경우 정리도 함께 처리
     - 로그인 유저 변경, 웹소켓 이벤트 연결 관리, API 요청 대상 변경
  */

  /*
    1.컴퍼넌트가 처음 화면에 나타날 때(초기 mount)
        user 설정 : user 값

    2. user 값이 변경되었을 때   
    3. 컴포넌트가 화면에서 완전히 사라질 대(unmount)

    초기 렌더링 
        user 설정: A
    user 변경
        user 바뀌기전 : A
        user 설정 : B
    user 다시 변경
        user 바뀌기전 : B
        user 설정 : C
    컴포넌트 제거
        usre 바뀌기전 :C
  */
  useEffect(() => {
    //console.log("컴퍼넌트가 화면에 나타남");
    console.log("user 설정:", user);

    return () => {
      console.log("user 바뀌기전:", user);
    };
  }, [user]);

  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "deeppink" : "black" }}
        onClick={() => onToggle(user.id)}
      >
        {user.userid}
      </b>{" "}
      <span>
        ({user.name} / {user.email})
      </span>{" "}
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
