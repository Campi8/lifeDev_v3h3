import React, { useState } from 'react'

const [displayName, setDisplayName] = useState('')
const [emailusuario, setEmailUsuario] = useState('')
const [senhausuario, setsenhaUsuario] = useState('')
const [Confirmação, setConfirmacao] = useState('')
const [erro, setErro] = useState('')

const Register = () => {
  return (
    <div>
      <h1>Cadastro de LifeDeveopers</h1>
      <form>

        <label>
          <span>Nome: </span>
          <input type="text" name='displayName' placeholder='Digite o Nome' required/>
        </label>

        <label>
          <span>Email: </span>
          <input type="email" name='emailusuario' placeholder='Digite seu e-mail' required/>
        </label>

        <label>
          <span>Senha: </span>
          <input type="password" name='senhausuario' placeholder='entre com uma senha segura' required/>
        </label>

        <label>
          <span>Confirmação: </span>
          <input type="password" name='senhausuario' placeholder='Confirme a senha' required/>
        </label>

        <button className='btn'>
          Cadastrar
        </button>

      </form>
    </div>
  )
}

export default Register