import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import { AddAppointment } from "./component/addAppointment";
import { Dashboard } from "./component/dashboard";
import { DeleteAppointment } from "./component/deleteAppointment";
import { EditAppointment } from "./component/editAppointment";
import { Login } from "./component/login";
import { Register } from "./component/register";

export function ToDo(){
     return(
          <div className="todoimg md:min-h-screen">
            <BrowserRouter>
               <header className='text-center pt-3 md:pt-8'>   
                  <Link to='/' className="fw-bold text-3xl  mt-5 text-decoration-none md:text-4xl"><span className='text-amber-800 ' >ToDo Application</span></Link>
               </header>
               <section className="md:container md:mx-auto">
                  <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/addAppointment" element={<AddAppointment/>}/>
                    <Route path="/editAppointment/:id" element={<EditAppointment/>}/>
                    <Route path="/deleteAppointment/:id" element={<DeleteAppointment/>}/>
                  </Routes>
               </section>
            </BrowserRouter>
         </div>
     )
}
