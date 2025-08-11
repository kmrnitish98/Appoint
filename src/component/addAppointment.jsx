import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";
export function AddAppointment(){
    const [cookies,setCookies,removeCookies]=useCookies(['username']);
    let navigate=useNavigate();

    const formik=useFormik({
        initialValues:{
            title:'',
            date:'',
            UserName:cookies['username']
        },
        onSubmit:appoit=>{
            axios.post('http://localhost:3000/Appointments',appoit)
            .then(()=>{
            alert('Appointment Added Successfully');
             navigate('/dashboard');
          });
        
        }
    })
    return(
        <div className="container mt-20 p-5">
            <div className="w-full p-3 bg-amber-100 shadow-xl/40 rounded-4  sm:w-2/3 md:w-2/4 lg:w-1/2 mx-auto">
                <span className="text-amber-700 fw-bold text-xl md:text-2xl">Add Appointment-{cookies['username']}</span>
                <form onSubmit={formik.handleSubmit}>
                   <dl>
                      <dt className="text-amber-700">Title</dt>
                      <dd><input type="text" onChange={formik.handleChange} className="form-control" name="title" /></dd>
                      <dt className="text-amber-700">Date</dt>
                      <dd><input type="date" onChange={formik.handleChange} className="form-control" name="date" /></dd>
                   </dl>
                    <div className="d-flex justify-content-between align-items-center">
                        <button type="submit" className="btn btn-success ">Add</button>
                        <Link to="/dashboard" className="btn btn-warning ">Cancel</Link>
                    </div>
               </form>
            </div>
        </div>
    )
}