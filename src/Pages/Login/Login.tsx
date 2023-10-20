import { InputContainer, InputStyle, LoginButtonStyle, LoginCard, LoginForm, LoginP } from "./styles/Login.Styles";
import { useButtonLogin } from "./state/useButtonLogin";
import { useForm } from "react-hook-form";
import { get, isEmpty } from "lodash";
import { useEffect} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase" 
import { Link } from "react-router-dom";


export const Login = () => {

    const {isHovered,handleMouseEnter,handleMouseLeave} = useButtonLogin();
    const loginForm = useForm({mode:"onBlur"});

    const onSubmit = () => {
        loginForm.trigger();
        if (loginForm.formState.isValid) {

            signInWithEmailAndPassword(auth,
                                          loginForm.getValues("username"),
                                          loginForm.getValues("password")
                                        ).then((response) => {
                                          sessionStorage.setItem("value", JSON.stringify(response.user));
                                            alert("Usuario autenticado");
                                          window.location.href = "/dashboard";
                                        }).catch(
                                              (error) => {
                                                  alert("Usuario no encontrado");
                                                  
                                              }
   
                                          )
                                          
        }
    }

    useEffect(()=> {
    },[loginForm.watch()])


    return( 
            <>

            <div style={{backgroundColor: "#f0f0f0", display:"flex", alignItems:"center"}}>
            <div style={LoginCard}>
                    <h1 style={{marginTop: "-15px"}}>Login</h1>
                    <img style={{marginBottom:"5px"}} width="95px" height="95px" src="https://i5.walmartimages.com/asr/bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png"/>
                    <div style={LoginForm}>
                        <div style={InputContainer}>
                            <p style={LoginP}>Dirección correo</p>
                            <input  {...loginForm.register("username",{
                                        required:"Este campo es requerido",
                                        })
                                    }
                                    style={InputStyle} 
                                    type="text"  
                                    placeholder="Ingrese usuario" 
                            />
                            {!isEmpty(loginForm.formState.errors) && <p style={{color:"rgb(158, 158, 158)", margin:"0"}}>{get(loginForm,"formState.errors.username.message","") as string}</p>}
                        </div>
                        <div style={InputContainer}>
                            <p style={LoginP}>Contraseña</p>
                            <input  {...loginForm.register("password",{
                                        required:"Este campo es requerido",
                                        minLength: {
                                            value:8, 
                                            message:"La contraseña debe tener almenos 8 caracteres"
                                        }})
                                    }
                                    style={InputStyle} 
                                    type="password" 
                                    placeholder="Ingrese Contraseña" 
                            />
                            {!isEmpty(loginForm.formState.errors) && <p style={{color:"rgb(158, 158, 158)",margin:"0"}}>{get(loginForm,"formState.errors.password.message","") as string}</p>}
                        </div>
                        <button onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                style={{...LoginButtonStyle, backgroundColor: isHovered? "#4a90a1":  "#61b7c4"}}
                                onClick={onSubmit}
                                >Ingresar</button>
                        <Link to="/register"  style={{color:"white",textDecoration:"none"}}><h5 style={{marginTop:"10px"}}>Registrarse</h5></Link>
                    </div>
                </div>
            </div>
            </>
    );
};