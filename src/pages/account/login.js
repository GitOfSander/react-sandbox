import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({})
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const handleLogin = (e) => {
    }

    return(
        <div className="wrapper wrapper-login">
            <div>
                <h1>ReactJS Sandbox</h1>
                <h2>Log in op je account</h2>
                <p className="light-text mb-0">ReactJS sandbox ontwikkeld in ReactJS en SCSS.</p>
            </div>
            <hr />

            <form onSubmit={ handleSubmit(handleLogin) } className="user">
                <div className="form-group">
                    <label htmlFor="username">Gebruikersnaam</label>
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Gebruikersnaam"
                    data-name="username"
                    onKeyUp={ onChangeUsername }
                    {...register('username', {
                        required: "Dit veld is verplicht"
                    })}
                    />
                    { errors['username'] && <span className="form-error">{ errors['username'].message }</span> }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Wachtwoord</label>
                    <input 
                    type="password"
                    className="form-control"
                    placeholder="Wachtwoord"
                    data-name="password"
                    onKeyUp={ onChangePassword }
                    {...register('password', {
                        required: "Dit veld is verplicht"
                    })}
                    />
                    { errors['password'] && <span className="form-error">{ errors['password'].message }</span> }
                </div>

                <div className="mb-3">
                    <Link className="small" to="/wachtwoord-vergeten">Wachtwoord vergeten?</Link>
                </div>

                <div className="d-grid mb-4">
                    <button type="submit" className="btn btn-primary" disabled={ loading }>
                        { loading ? (
                            <span className="spinner-border spinner-border-sm"></span>
                        ) : (
                            <>Inloggen</>
                        )}
                    </button>
                </div>

                { message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                        { message }
                        </div>
                    </div>
                )}
            </form>
            <div className="text-center">
                <small>
                    Beschik je nog niet over een account?<br />
                    <Link to="/registreren">Maak er hier een aan</Link>
                </small>
            </div>
        </div>
    )
}
  
export default Login