import './login.css';
import logoimg from './Google.jpg';


function App() {
  return (
<div className="container">
  <div className="loginArea">
  <div className="logo">
            <img src={logoimg}/>
        </div>
  <div className="string">
    <h2>登入</h2>
    <h3>使用您的Google帳戶</h3>
  </div>

<input className="emailInput"  
placeHolder="電子郵件地址或電話號碼" 
required  type="text">
</input>
<br></br>
<a href="#" className="forget">忘記電子郵件地址？</a>

<p className="string2">如果這不是你的電腦，請使用訪客模式以私密方式登入。<a href="#" className="know">暸解詳情</a></p>


<div className="click1">
        <a href="#" className="create">建立帳戶</a>
        <button className="continue" type="button">繼續</button>
</div>
</div>

    <div className="click2">
        <div className="language">
          <select className="list">
            <option value="" selected >繁體中文</option>
            <option>英文</option>
          </select>
       </div>
    
    <div className="btn">
    <button>說明</button>
    <button>隱私</button>
    <button>條款</button>
    </div>

   </div>



</div>
  );
}

export default App;
