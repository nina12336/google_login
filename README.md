# Google login

使用React仿造Goole登入畫面。

<img src="https://github.com/nina12336/google_login/blob/main/login-react/readme_photo/google%20login%20%E7%95%AB%E9%9D%A2.png"  width="500px" />

## 關於這個專案

**技術棧**
- React
- HTML
- SCSS
- Fetch

**特殊的元素**
- 點選輸入框時，預設文字會漂浮至輸入框左上角，並且字體及輸入框會變呈現藍色，點選他處則會變回原本狀態。此效果利用CSS中的偽類```:focus-whithin```來實現目的。 
- 點擊“繼續”鈕後會判斷輸入的E-mail是否符合格式，如不符合格式或未輸入資料則會以跳窗形式來警示使用者。此功能使用Javascript正規表達式(Regular Expression)及if...else判斷式。
- 使用Fetch與後端串接資料

## 如何執行

```
yarn start
```
請在瀏覽器中打開http://localhost:3000

建議使用Google Chrome
