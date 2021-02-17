import React, { useState } from 'react';
import axios from 'axios';

import '../css/login/login.css'

export default function LoginBox() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const login = ()=>{
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };

    return(
        <div id="telaLogin">
            <div>
                <div id="formContent">
                    <i id="icoIMG" className="far fa-times-circle"></i>
                    <br/>
                    <div>
                    </div>
                        <input type="text" onChange={(e) => setLoginUsername(e.target.value)} />
                        <input type="password" onChange={(e) => setLoginPassword(e.target.value)} />
                        <button onClick={login}>Submit</button>

                    
                    <div id="formFooter">
                    <a className="underlineHover" href="#">Esqueceu a senha?</a>
                    </div>
        
                </div>
            </div>
        </div>
    )
}
    