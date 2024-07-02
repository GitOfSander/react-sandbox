import { Link } from "react-router-dom"
//import { replacePageClass } from "../helpers"
import { useEffect, useState } from "react"
//import Form from "react-validation/build/form"
//import Input from "react-validation/build/input"
//import CheckButton from "react-validation/build/button"
//import authService from "../services/auth.service"
//import { vRequired, vPassword, vConfirmPassword } from "../validations"

function ResetPassword(props) {
    const queryParams = new URLSearchParams(window.location.search);

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [successful, setSuccesful] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [checkBtn, setCheckBtn] = useState(undefined)
    const [form, setForm] = useState(undefined)
    const [token] = useState(queryParams.get('token'))


    //const {loginPanelHeight, setLoginPanelHeight} = useContext(AppContext)

    useEffect(() => {
        //replacePageClass('reset-password')
        //setLoginPanelHeight('482px')

        /*authService.checkResetPasswordToken(token).then(
            response => {
                setMessage(response.data.message)
            },
            error => {
                const resMessage =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString()
        
                setSuccesful(true)
                setMessage(resMessage)

                //setLoginPanelHeight('700px')
                //console.log($('.card-login-box-inner')[0].clientHeight)
                //console.log(loginPanelRef.current.clientHeight)
                //setLoginPanelHeight($('.card-login-box-inner')[0].clientHeight + 'px')
            }
        )*/

        //componentWillUnmount
        return () => {
        }
    }, [])
    
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    
    const handleLogin = (e) => {
        e.preventDefault()
    
        setMessage('')
        setLoading(true)
    
        form.validateAll()
    
        if (checkBtn.context._errors.length === 0) {
            /*authService.resetPassword(token, password).then(
                response => {
                    setMessage(response.data.message)
                    setLoading(false)
                    setSuccesful(true)
                },
                error => {
                    const resMessage =
                        (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString()
            
                    setLoading(false)
                    setMessage(resMessage)

                    //setLoginPanelHeight('700px')
                    //console.log($('.card-login-box-inner')[0].clientHeight)
                    //console.log(loginPanelRef.current.clientHeight)
                    //setLoginPanelHeight($('.card-login-box-inner')[0].clientHeight + 'px')
                }
            )*/
        } else {
            setLoading(false)
        }
    }

    return (
        <div className="wrapper wrapper-forgot-password">
            <div>
                <h1>Wachtwoord wijzigen</h1>
                <h2>Wijzig het wachtwoord van je account</h2>
                <h5 className="mb-0">Vul in de velden je nieuwe wachtwoord in. Na het wijzigen wordt je direct naar het inlogscherm gebracht</h5>
            </div>
            <hr />
            {/*<Form
            onSubmit={handleLogin}
            ref={c => {
                setForm(c)
            }} className="user">
                {!successful && (
                    <>
                        <div className="form-group">
                            <label htmlFor="email">Wachtwoord</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[vRequired, vPassword]}
                                placeholder="Wachtwoord"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Bevestig wachtwoord</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="confirm"
                                value={confirmPassword}
                                onChange={onChangeConfirmPassword}
                                validations={[vRequired, vConfirmPassword]}
                                placeholder="Bevestig wachtwoord"
                            />
                        </div>

                        <CheckButton type="submit" className="btn btn-primary btn-block mb-19" disabled={ loading } ref={ c => { setCheckBtn(c) }}>
                            { loading ? (
                                <span className="spinner-border spinner-border-sm"></span>
                            ) : (
                                <>Wachtwoord wijzigen</>
                            )}
                        </CheckButton>
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
                        </Form>*/}
            <div className="text-center">
                <small className="mb-0">
                    <Link to="/">Terug naar de inlogpagina</Link>
                </small>
            </div>
        </div>
    )
}

export default ResetPassword