import { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";
import InputUser from "./components/InputUser";
import Userlist from "./components/Userlist";

function App() {
  return (
    <>
      <Avatar
        image="https://i.namu.wiki/i/rPNAvRVte-5GBR8LG7KlFB5_rGR31zj-qMcEbDDbslRtA9ZMirjDsLvaqa0ELLU1cuPj62SsF9XjhW5TJ4Mzsw.webp"
        isNew={true}
      />
      <Avatar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_5kWGsM6TMInbWdpTva3YVdQEq8xBNdY6dIpJ38rvsvBlSvOIFaoflRvvku32ZuR0pk&usqp=CAU"
        isNew={false}
      />
      <Profile
        image="https://image.news1.kr/system/photos/2025/10/15/7543698/high.jpg"
        name="오렌지"
        title="백엔드 개발자"
        isNew={true}
      />
      <Profile
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzp-nzTffPHCpQ2IZYs5axCsjarwXO-cWbzgSaj0tftC3lIWcpxuB23-xxKK_mkBkrlE&usqp=CAU"
        name="반하나"
        title="AI 개발자"
        isNew={false}
      />
      <hr />
      <InputUser />
      <hr />
      <Userlist />
      <hr />
    </>
  );
}

export default App;
