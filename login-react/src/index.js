import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Word from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
  <div className="string">
    <h2>登入</h2>
    <h3>使用您的Google帳戶</h3>
  </div>

<div>
<input className="emailInput"  
placeHolder="電子郵件地址或電話號碼" 
required  type="text">
</input>

<a href="#" className="forget">忘記電子郵件地址？</a>

<p className="string2">如果這不是你的電腦，請使用訪客模式以私密方式登入。<a href="#" className="know">暸解詳情</a></p>
</div>

<div class="click1">
        <a href="#" class="create">建立帳戶</a>
        <button class="continue" type="button">繼續</button>
</div>

    <div class="click2">
        <div class="language">
          <select class="list">
            <option value="" selected >繁體中文</option>
            <option>英文</option>
          </select>
       </div>
    
    <div class="btn">
    <button>說明</button>
    <button>隱私</button>
    <button>條款</button>
    </div>

   </div>



</div>,
  // <React.StrictMode>
  //   <App />
  //   <Word />
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
