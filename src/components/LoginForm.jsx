import { useState } from "react"
import axios from 'axios';

const LoginForm =()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSumbit = async(e) => {
        e.preventDefault();
        const authObject ={ 'Project-ID': "3b133f85-a0ae-4001-9966-bff88a97ac77", 'User-Name': username , 'User-Secret': password };
        
        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload( );
        } catch (error) {
            setError('Oops, incorrect username or password..')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSumbit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center" >
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h3 className="error">{error}</h3>
                </form>
            </div>
        </div>
    );
}

export default  LoginForm;