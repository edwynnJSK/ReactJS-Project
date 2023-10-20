import { InputContainer, InputStyle, RegisterButtonStyle, RegisterCard, RegisterForm, RegisterP } from "./styles/Register.Styles";
import { useForm } from "react-hook-form";
import { get, isEmpty } from "lodash";
import { useEffect} from "react";
import {auth} from "../../Firebase"
import { useButtonRegister } from "./state/useButtonRegister";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const Register = () => {

    const {isHovered,handleMouseEnter,handleMouseLeave} = useButtonRegister();
    const registerForm = useForm({mode:"onBlur"});

    const onSubmit = () => {
        registerForm.trigger();
        if (registerForm.formState.isValid) {
        
            createUserWithEmailAndPassword(
                auth,
                registerForm.getValues("username"),
                registerForm.getValues("password")
            ).then((response) => {
                alert("usuario registrado correctamente")
                window.location.href = "/Login";
                }).catch(
                    (error) => {
                        alert("error al registrat el usuario");
                        }
                )                         
        }
    }

    useEffect(()=> {

    },[registerForm.watch()])


    return( 
            <>
            <div style={{backgroundColor: "#f0f0f0", display:"flex", alignItems:"center"}}>
            <div style={RegisterCard}>
                    <h1 style={{marginTop: "-30px"}}>Register</h1>
                    <img style={{marginBottom:"5px"}} width="95px" height="95px" src="https://www.vhv.rs/dpng/d/486-4868483_rick-y-morty-vector-hd-png-download.png"/>
                    <div style={RegisterForm}>
                        <div style={InputContainer}>
                            <p style={RegisterP}>Dirección correo</p>
                            <input  {...registerForm.register("username",{
                                        required:"Este campo es requerido",
                                        })
                                    }
                                    style={InputStyle} 
                                    type="text"  
                                    placeholder="Ingrese usuario" 
                            />
                            {!isEmpty(registerForm.formState.errors) && <p style={{color:"rgb(158, 158, 158)", margin:"0"}}>{get(registerForm,"formState.errors.username.message","") as string}</p>}
                        </div>
                        <div style={InputContainer}>
                            <p style={RegisterP}>Contraseña</p>
                            <input  {...registerForm.register("password",{
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
                            {!isEmpty(registerForm.formState.errors) && <p style={{color:"rgb(158, 158, 158)",margin:"0"}}>{get(registerForm,"formState.errors.password.message","") as string}</p>}
                        </div>
                        <button onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                style={{...RegisterButtonStyle, backgroundColor: isHovered? "#4a90a1":  "#61b7c4"}}
                                onClick={onSubmit}
                                >Registrar</button>
                    </div>
                </div>
            </div>
            </>
    );
};