import './login.css';
import imagem from '../../assets/img_login.png';

function Login() {
    return (
        <div className='mestre'>
            <div className='titulos'>
                <h1 className='t1'>Portal do Suporte</h1>
                <h2 className='t2'>Sistema Gálago</h2>
            </div>
            <div className='fundo-form'>
                <div>
                    <figure>
                        <img className='img' src={imagem} alt="imagem-login" />
                    </figure>
                </div>
                <form action="" className='form'>
                    <h1 className='t1 t1-t'>Login</h1>
                    <p>E-mail:</p>
                    <input type="email" className='inputs' autoComplete='email' placeholder='Digite seu e-mail' />
                    <p>Senha:</p>
                    <input type="password" className='inputs' placeholder='Digite sua senha' />
                    <br />
                    <a href="http://192.168.0.102:3000/login" target='_blank' className='link'>Esqueci minha senha</a>
                    <button className='btn-login' type='button'>
                            Acessar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;