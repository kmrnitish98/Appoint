import { useState,useEffect } from "react";
import { useNavigate ,Link} from "react-router-dom"
import {Cookies,useCookies} from "react-cookie";
import axios from "axios";
export function Dashboard(){
     
    let navigate=useNavigate();
    const [cookies,setCookies,removeCookies]=useCookies(['username']);
    const [Appointments,setAppointments]=useState([{id:0,UserName:"",title:"",date:""}])
     
    useEffect(()=>{
        console.log(`UserName: ${cookies['username']}`);
        axios.get('https://appoint-server.onrender.com/Appointments')
        .then(response=>{
            const filtered=response.data.filter(appointment=>appointment.UserName?.toLowerCase()===cookies['username']?.toLowerCase());
            console.log(filtered);
            setAppointments(filtered);
        })
        
      },[cookies.username])
    function handleSignout(){
        removeCookies('username');
        navigate('/');
        alert('SingOut Successfully');
    }
    return(
        <div className="container p-4 justify-content-center align-items-center">
            <div className=" w-full sm:w-2/3 md:w-2/4 lg:w-1/2 p-5 mt-6 bg-amber-100 shadow-xl/40 rounded-4 mx-auto">
            <h3 className="d-flex justify-content-between align-items-center bg-amber-200 p-2 rounded-4 md:text-xl w-100">
                <span className="bi bi-person-circle text-amber-800 text-xl"> Welcome,{cookies['username']}</span>
                <span className="text-amber-600">Dashboard</span>
                <button className="btn btn-link fw-bold text-decoration-none" onClick={handleSignout}>
                    <span className="text-amber-600 bi bi-person-fill "> Signout </span>
                </button>
            </h3>
            <Link to='/addAppointment' className="btn btn-success bi bi-plus-circle"> Add Appointment</Link>
            <div className="mt-2 overflow-auto grid md:grid md:grid-cols-2 md:gap-2 max-h-[300px]">
                { 
                Appointments.map(appointment=>
                 <div className="card mb-2 w-full"key={appointment.id}>
                    <div className="card-body text-center bg-amber-200">
                         <span className="text-amber-800 fw-bold text-xl">
                            {appointment.title}
                         </span>  
                         <p className="fw-bold">Date: {appointment.date}</p>
                         <div className="d-flex justify-content-around mt-3 align-items-center">
                            <Link to={`/editAppointment/${appointment.id}`} className="btn btn-success bi bi-pen-fill"></Link>
                            <Link to={`/deleteAppointment/${appointment.id}`} className="btn btn-danger bi bi-trash-fill "></Link>
                         </div>
                    </div>
                 </div>      
               ) }
                    
            </div>
        </div>
        </div>
    )
}