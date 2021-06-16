const Fetch = (inputEmail, inputPassword) => {
    const uri = 'https://falcon-api-staging.tkkpt.com/api/accounts/login';
    let body = {
        name = inputEmail,
        password = inputPassword
    }
    body = JSON.stringify(body);
    return (
        fetch(uri, {
            method: 'POST',
            body: body,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        .then(res => {
            return res.json();
        }).then(result => {
            console.log("登入成功");
            console.log(result);
        }).catch((e) => {
            console.log("登入失敗，帳號或密碼錯誤！");
        })
    )
}

export default Fetch;