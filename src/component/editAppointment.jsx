import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams ,Link} from "react-router-dom";
export function EditAppointment(){
    let params=useParams();
    let navigate=useNavigate();

    const [appointment,setAppointment]=useState({id:0,title:'',date:'',UserName:''});

    const formik=useFormik({
        initialValues:{
            id:appointment.id,
            title:appointment.title,
            date:appointment.date,
            UserName:appointment.UserName
        },
        onSubmit:Oppo=>{
            axios.put(`http://localhost:3000/Appointments/${params.id}`,Oppo)
            .then(()=>{
                alert('Appointment Updated Successfully');
                navigate('/dashboard');
            })
        },
        enableReinitialize:true
    });

    useEffect(()=>{
        axios.get(`http://localhost:3000/Appointments/${params.id}`)
        .then(response=>{
            setAppointment(response.data)
        })
    },[]);

    
    return(
        <div className="container mt-20 p-6">
            <div className="w-full bg-amber-200 p-5 rounded-4 shadow-xl/40 sm:w-1/3 md:w-2/4 lg:w-1/3 mx-auto">
                <div className="text-amber-700 fw-bold text-2xl text-center bi bi-pen-fill md:text-2xl"> Edit Appointment</div>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt className="text-amber-600 mt-3">Title</dt>
                        <dd><input type="text" onChange={formik.handleChange} value={formik.values.title} name='title' className="form-control"/></dd>
                        <dt className="text-amber-600 mt-2">Date</dt>
                        <dd><input type="date" onChange={formik.handleChange} value={formik.values.date} name='date' className="form-control"/></dd>
                    </dl>
                    <button className="btn btn-outline-success form-control my-2" >Save</button>
                    <Link to='/dashboard' className='btn btn-outline-danger form-control'>Cancel</Link>
                </form>
            </div>
        </div>
    )
}