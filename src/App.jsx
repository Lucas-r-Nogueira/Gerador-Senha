import { useState } from 'react'
import style from "./app.module.css"
function App() {
  const [buttonText,setButtonText] = useState("Copiar");
  const [finalPassword,setFinalPassword] = useState("");
  
  const GerarSenha = () => {
    const tokens = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    
    let password = "";

    for(let i = 0; i <= 10; i++){
      const index = Math.floor(Math.random() * tokens.length);
      password += tokens[index];
      console.log(password)

    }
    setFinalPassword(password)
    setButtonText("Copiar")
  }

  const Copiar = () =>{
    setButtonText("Copiado!")
    return navigator.clipboard.writeText(finalPassword)
  }

  return (
    <>
    <div className={style.main}>
      <div className={style.container__title}>
        <h1>Gerador de Senha</h1>
      </div>
      <div className={style.container__button}>
        <button onClick={() =>{GerarSenha()}}>Gerar</button>
        <button  onClick={() => Copiar()}>{buttonText}</button>
      </div>
      <div className={style.container__password}>
        <p>{finalPassword}</p>
      </div>
    </div>
    </>
  )
}

export default App
