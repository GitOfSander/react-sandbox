import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from 'react-hook-form';

function ForgotPassword(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({})
    const [username, setUsername] = useState('')
    const [successful, setSuccesful] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    
    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    
    const handleForgotPassword = (e) => {    
    }

    return (
        <div className="wrapper wrapper-forgot-password">
            <div>
                <h1>Oops, kan gebeuren!</h1>
                <h2>Wachtwoord vergeten</h2>
                <p className="light-text mb-0">Geen probleem, voer je gebruikersnaam in en wij sturen je een herstellink</p>
            </div>
            <hr />
            <form onSubmit={ handleSubmit(handleForgotPassword) } className="user">
                {!successful && (
                    <>
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

                        <div className="d-grid mb-2">
                            <button type="submit" className="btn btn-primary btn-block" disabled={ loading }>
                                { loading ? (
                                    <span className="spinner-border spinner-border-sm"></span>
                                ) : (
                                    <>Herstellink sturen</>
                                )}
                            </button>
                        </div>
                    </>
                )}

                { message && (
                    <div className="form-group">
                        <div className={
                                successful
                                ? "alert alert-success"
                                : "alert alert-danger"
                            }
                            role="alert">
                                { message }
                        </div>
                    </div>
                )}
            </form>
            <div className="text-center">
                <small className="mb-0">
                    <Link to="/">Terug naar de inlogpagina</Link>
                </small>
            </div>
        </div>
    )
}

export default ForgotPassword