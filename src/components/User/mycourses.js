import Sidebar from "./sidebar";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Course_Details/context";
import { Link } from "react-router-dom";
function MyCourses(){
  const {setCourse, user} = useContext(AuthContext);
  console.log(user);
 
  const [list,setlist]= useState([])
  useEffect(()=>{
    setlist(user, list)
  },[user]);

  const action = (index) =>{
        const updatedCourse = [...list];
        updatedCourse.splice(index, 1);
        setCourse(updatedCourse);
    };
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">My Courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created By</th>
                                        <th>Watch</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {/* <tbody>
                                    {list.map((l,index)=>(
                                        <tr>
                                            <td>{l.course}</td>
                                            <td>{l.name}</td>
                                            <td><Link to={l.link}><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link></td>
                                            <td><button onClick={()=>action(index)} className='btn btn-sm btn-danger m-2' >Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody> */}
                                <tbody>
                                    {list.map((l, index) => (
                                        <tr key={l.id}> {/* Assuming each item in list has an 'id' property */}
                                            <td>{l.course}</td>
                                            <td>{l.name}</td>
                                            <td><Link to={l.link}><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link></td>
                                            <td><button onClick={() => action(index)} className='btn btn-sm btn-danger m-2'>Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MyCourses;