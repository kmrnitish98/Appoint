import { Cookies, useCookies } from "react-cookie"
import { useNavigate,Link } from "react-router-dom";
import { useFormik} from "formik";
import axios from "axios";
import { useState } from "react";

export function Login(){
    const [showPassword,setPassword]=useState(false);
    const [cookies,setCookies,removeCookies]=useCookies(['username']);

    const navigate= useNavigate();

    const formik=useFormik({
        initialValues:{
            username:"",
            password:''
        },
        onSubmit:(user)=>{
            axios.get('https://appoint-server.onrender.com/User')
            .then((response)=>{
                const userData=response.data;
                const userdetails= userData.find((u)=>u.username===user.username);
                if(userdetails){
                    if(userdetails.password===user.password){
                        setCookies('username',userdetails.username,{path:'/'})
                        alert('Login Successfully');
                        navigate('/dashboard');
                    }
                    else{
                        alert("invalid password");
                    }
                }
                else{
                    alert("User not found");
                }
            })
        }
    })
    return(
        <div className="container mt-8 mb-4 p-4 d-flex justify-content-center align-items-center"> 
                <form action="" onSubmit={formik.handleSubmit}className="bg-amber-100 p-5 rounded-4 shadow-xl/50 opacity-0.8 w-full sm:w-2/3 md:w-2/4 lg:w-1/3">
                    <div className="text-amber-600 mb-3">
                        <h2 className="bi bi-person-fill text-center"> User Login</h2>
                    </div>
                    <dl>
                        <dt className="text-amber-600 mb-2 fw-bold md:text-lg">UserName <span className="text-red-700">*</span></dt>
                        <dd className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <input type="text" onChange={formik.handleChange} className="form-control" placeholder="UserName" name="username" required/>
                            <i className="bi bi-person ms-2 text-amber-700"></i>
                        </div>
                        </dd>
                        <dt className="text-amber-600 mb-2 fw-bold md:text-lg">Password <span className="text-red-700">*</span></dt>
                        <dd>
                        <div className="d-flex text-center align-items-center">
                            <input type={showPassword?"text":"password"} onChange={formik.handleChange} className="form-control" placeholder="Enter-Password" name="password" required/>
                            <button onClick={()=>setPassword(!showPassword)} className={showPassword?"bi bi-eye text-amber-700 ms-2":"bi bi-eye-slash ms-2 text-amber-700"}></button>
                        </div>
                        </dd>
                    </dl>
                    <button className="btn btn-warning fw-bold form-control">Login</button>
                    <div className="text-center fw-bold mt-3">
                        <p>Don't have an Account <Link to='/register'>Register</Link></p>
                    </div>
                </form>
        </div>
    )
}