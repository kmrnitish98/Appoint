import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
export function Register(){
   const [showPassword,setPassword]=useState(false);
    const navigate=useNavigate();
    const Formik=useFormik({
        initialValues:{
            username:'',
            password:'',
            email:''
        },
        onSubmit:(user)=>{
            axios.post('http://localhost:3000/User',user)
            .then((response)=>{
                    alert("User Registered Successfully");
                    console.log(response.data);
                    navigate('/');
            })
            
        }

    })
    return(
        <div className='container mt-2 p-4 d-flex justify-content-center align-items-center '>
            <div className="w-full sm:w-2/3 md:w-2/4 lg:w-1/3">
                <form action="" onSubmit={Formik.handleSubmit} className="p-5 bg-amber-100 shadow-xl/40 rounded-4 ">
                    <div className='text-amber-600'><h2 className='bi bi-person-circle text-center'> Register</h2></div>
                    <div>
                        <dl>
                            <dt className='mb-2 text-amber-700 md:text-lg'>UserName *</dt>
                            <dd className='d-flex justify-content-between align-items-center mb-3'>
                                <input type="text" placeholder="UserName" onChange={Formik.handleChange} name='username' pattern='^(?=.*[A-Za-z\d]).{3,}$' title='Must be 3+ char' required className="form-control"/><i className="bi bi-person-fill ms-1.5 text-amber-700"></i>
                            </dd>
                            <dt className='mb-2 text-amber-700 md:text-lg'>password *</dt>
                            <dd>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <input type={showPassword?"text":"password"} placeholder="Enter-Password" onChange={Formik.handleChange} name="password" className="form-control" required pattern='^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@$&*!%?]).{6,}$' title="Must be 6+ chars, include upper & lower case, a number and a special character"/>
                                <button onClick={()=>setPassword(!showPassword)} className={showPassword?"bi bi-eye ms-2 text-amber-700":"bi bi-eye-slash ms-2 text-amber-700"}></button>
                            </div>
                             </dd>
                             <dt className='mb-2 text-amber-700 md:text-lg'>Email *</dt>
                             <dd>
                                <div className="d-flex justify-content-between align-items-center">
                                   <input type="email" placeholder="kumar@12gmail.com" onChange={Formik.handleChange} name="email" className="form-control" required/><i className="bi bi-envelope-at-fill ms-1.5 text-amber-700"></i>
                                </div>
                             </dd>
                        </dl>
                        <button className="btn btn-warning fw-bold form-control">Register</button>
                    </div>
                    <div className='fw-bold mt-3'>
                        <p className="mt-3 text-center ">Already Have an Account <Link to="/">Login</Link></p>
                    </div>
               </form>
            </div>
            <div>
                
            </div>
        </div>
    )
}