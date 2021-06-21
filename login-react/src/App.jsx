import React, { useState } from "react";
import "./login.css";
import "./reset.css";
import logoimg from "./Google.jpg";
// import Fetch from "./Fetch.js";

const App = () => {
  var [inputEmail, setInputEmail] = useState("");
  const handleInputChange = (e) => {
    setInputEmail(e.target.value);
    console.log(e.target.value);
  };
  var [inputPassword, setInputPassword] = useState("");
  const handleInputPassWord = (n) => {
    // console.log(n.target.value);
    setInputPassword(n.target.value);
    console.log(inputPassword);
    console.log({ inputPassword });
  };
  var [pressButton, setPressButton] = useState(false);
  const handlePressButton = () => {
    setPressButton(true);
    console.log(pressButton);
  };

  const handleSubmit = () => {
    const uri = "https://falcon-api-staging.tkkpt.com/api/accounts/login";
    let body = {
      email: inputEmail,
      password: inputPassword,
    };
    body = JSON.stringify(body);
    return fetch(uri, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log("登入成功");
        console.log(result);
      })
      .catch((e) => {
        console.log("登入失敗，帳號或密碼錯誤！");
      });
  };

  const renderFields = () => {
    if (inputEmail !== "" && pressButton != false) {
      return (
        <React.Fragment>
          <input
            className={"passwordInput"}
            key={"password"}
            onChange={handleInputPassWord}
            // placeholder={"密碼"}
            required
            type={"password"}
          ></input>
          <label className={whichName()} htmlFor="password">
            請輸入密碼
          </label>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <input
            className={"emailInput"}
            key={"email"}
            // id={"emailInfo"}
            onChange={handleInputChange}
            // placeholder={"電子郵件地址或電話號碼"}
            required
            type={"email"}
          ></input>
          <label className={whichName()} htmlFor="email">
            電子郵件地址或電話號碼
          </label>
        </React.Fragment>
      );
    }
  };

  const pressButtonAndSubmit = () => {
    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (inputEmail !== "" && inputPassword == "" && pressButton == true) {
      alert("請輸入密碼");
    } else if (inputEmail.search(emailRule) === -1) {
      alert("Email格式不符");
      return inputEmail == "";
    } else if (inputEmail !== "" && inputPassword == "") {
      handlePressButton();
    } else if (inputEmail !== "" && inputPassword !== "") {
      handleSubmit();
    } else {
      alert("請輸入郵件地址或電話號碼");
    }
  };

  const whichName = () => {
    if (inputEmail !== "" && inputPassword === "" && pressButton == true) {
      return "";
    } else if (inputEmail !== "" || inputPassword !== "") {
      return "active";
    } else {
      return "";
    }
  };

  // const labelFloat = () => {
  //   if (pressButton === true && inputPassword !== "") {
  //     return (
  //       <label className={whichName()} htmlFor="password">
  //         請輸入密碼
  //       </label>
  //     );
  //   } else {
  //     return (
  //       <label className={whichName()} htmlFor="email">
  //         電子郵件地址或電話號碼
  //       </label>
  //     );
  //   }
  // };

  // return (
  //   <React.Fragment>
  //     <input
  //       className={"emailInput"}
  //       onChange={handleInputChange}
  //       placeholder={"電子郵件地址或電話號碼"}
  //       required
  //       type={"text"}
  //     ></input>
  //     <input
  //       className={"passwordInput"}
  //       onChange={handleInputPassWord}
  //       placeholder={"密碼"}
  //       required
  //       type={"text"}
  //     ></input>
  //   </React.Fragment>
  // );

  return (
    <div className={"container"}>
      <div className={"loginArea"}>
        <div className={"logo"}>
          <img src={logoimg} alt={"Google Logo"} />
        </div>
        <div className={"string"}>
          <h2> 登入 </h2>
          <h3> 使用您的Google帳戶 </h3>
        </div>
        <div className={"float"}>
          {/* <form className={"formInfo"}> */}
          {renderFields()}
          {/* {labelFloat()} */}
          {/* <label className={WhichName()} htmlFor="email">
            電子郵件地址或電話號碼
          </label>
          <label className={WhichName()} htmlFor="password">
            密碼
          </label> */}
          {/* </form> */}
        </div>
        <br />
        <a href={"https://www.google.com/"} className={"forget"}>
          忘記電子郵件地址？
        </a>
        <p className={"string2"}>
          如果這不是你的電腦， 請使用訪客模式以私密方式登入。
          <a
            href={"https://support.google.com/chrome/answer/6130773?hl=zh-Hant"}
            className={"know"}
          >
            暸解詳情
          </a>
        </p>
        <div className={"click1"}>
          <a href={"https://www.google.com/"} className={"create"}>
            建立帳戶
          </a>
          <button
            className={"continue"}
            onClick={pressButtonAndSubmit}
            type={"button"}
          >
            繼續
          </button>
          {/* <button className={"continue"} onClick={handleSubmit} type={"button"}>
            送出
          </button> */}
        </div>
      </div>
      <div className={"click2"}>
        <div className={"language"}>
          <select className={"list"}>
            <option value="">繁體中文</option>
            <option> 英文 </option>
          </select>
        </div>
        <div className={"btn"}>
          <a
            href={
              "https://support.google.com/accounts/?hl=zh-Hant#topic=3382296"
            }
          >
            說明
          </a>
          <a href={"https://policies.google.com/privacy?gl=TW&hl=zh-TW"}>
            隱私權
          </a>
          <a href={"https://policies.google.com/terms?gl=TW&hl=zh-TW"}>條款</a>
          {/* <button
            onClick={
              "location.href='https://support.google.com/accounts/?hl=zh-Hant#topic=3382296'"
            }
          >
            說明
          </button>
          <button> 隱私權 </button>
          <button> 條款 </button> */}
        </div>
      </div>
    </div>
  );
};

export default App;
