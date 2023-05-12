import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm({})

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successful, setSuccesful] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    function onChangeUsername(e) {
        setUsername(e.target.value)
    }

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleRegister(e) {
    }

    return (
        <div className="wrapper wrapper-login">
            <div>
                <h1>Registreren</h1>
                <h2>Nog geen account?</h2>
                <p className="light-text mb-0">Maak een account aan door de onderstaande velden in te vullen</p>
            </div>
            <hr />

            <form onSubmit={ handleSubmit(handleRegister) } className="user">
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
                        <div className="form-group">
                            <label htmlFor="email">E-mailadres</label>
                            <input 
                            type="email"
                            className="form-control"
                            placeholder="E-mailadres"
                            data-name="email"
                            onKeyUp={ onChangeEmail }
                            {...register('email', {
                                required: "Dit veld is verplicht"
                            })}
                            />
                            { errors['email'] && <span className="form-error">{ errors['email'].message }</span> }
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

                        <div className="d-grid mb-3 mt-4">
                            <button type="submit" className="btn btn-primary btn-block" disabled={ loading }>
                                { loading ? (
                                    <span className="spinner-border spinner-border-sm"></span>
                                ) : (
                                    <>Registreren</>
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
        </div>
    )
}

export default Register