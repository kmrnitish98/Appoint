import { useNavigate, useParams,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
export function DeleteAppointment(){
    const params=useParams();
    const navigate=useNavigate();
    const [appointment,setAppointment]=useState({id:0,title:'',date:'',UserName:''});
    useEffect(()=>{
        axios.get(`http://localhost:3000/Appointments/${params.id}`)
        .then(response=>{
            setAppointment(response.data);
        })
        .catch(() => alert("Failed to fetch appointment"));
    },[params.id]);

    function handleDelete(){
        axios.delete(`http://localhost:3000/Appointments/${params.id}`)
        .then(()=>{
            alert('Appointment Deleted Successfully');
            navigate('/dashboard');
        })
        .catch(() => alert("Failed to fetch appointment"));
    }

    return(
        <div className="container mt-20 p-8">
            <div className=" w-full p-4 bg-amber-100 shadow-xl/40 rounded-4  sm:w-2/3 md:w-2/4 lg:w-1/2 mx-auto">
                <div className="text-amber-700 fw-bold text-2xl md:text-3xl">Delete appointment</div>
                <span className="text-red-800 fw-bold"> Are you Sure want to Delete Appointment? <span className="text-green-800 fw-bold text-xl" >{appointment.title}</span> </span>
                <div className="d-flex justify-content-around align-items-center mt-2">
                    <button className="btn btn-outline-danger fw-bold" onClick={handleDelete}>Yes</button>
                    <Link to="/dashboard" className="btn btn-outline-warning fw-bold">Cancel</Link>
                </div>
            </div>
        </div>
    )
}