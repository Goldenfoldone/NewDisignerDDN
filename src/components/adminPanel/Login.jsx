import { useContext, useState, useEffect } from "react"
import { styled } from "styled-components";
import { useNavigate} from "react-router-dom";
import { login} from "../../http/userAPI";
import { Context } from './../../index';



const Osnova = styled.div`
    background-color:#535353;
    background-size: 100%;
    height: 1308px;
    min-width: 1366px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Vvod = styled.form`
    background-color: #E2E8ED;
    display: inline-block;
    padding: 15px;
    border: 2px solid black;
`
const Text = styled.p`
margin: 0;
    font-size: 35px;
`
const Logins = styled.input`
    width: 100%;
    height: 35px;
    font-size: 35px;
    margin-top: 8px;
    margin-bottom: 25px;
    border: 2px solid black;
    border-radius: 8px;
    transition: border-color 0.4s;

    &:placeholder-shown {
        border: 4px solid #DB6B4D;
    }
`
const Btn = styled.button`
    font-size: 30px;
    padding: 5px;
    background-color: #E2E8ED;
    border-radius: 15px;
    width: 150px;
    cursor: pointer;
    &:hover{
        background-color: #DB6B4D;
        color:#E2E8ED;
    }
`

export const Login = () =>{
    const auth = localStorage.getItem('token');
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        setIsAuth(auth)
    }, [auth])
  
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const history = useNavigate()
    const click = async () =>{
        let data;
        try {            
            data = await login(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            window.location.reload();
        } catch (e) {
            alert(e.response.data.massage)
        } }  
        if (isAuth) {
            history('/admin')
        }             
    return (
        <Osnova>
            <Vvod>
                <Text> Имя пользователя: </Text>
                <Logins type="text" name="Username" value={email}
        onChange={(e) => setEmail(e.target.value)} required/>
                <Text> Пароль: </Text>
                <Logins type="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <Btn type="button" onClick={click}>Вход</Btn>
            </Vvod>
        </Osnova>
    )
}