import './App.css';
import {useState,useEffect} from "react";
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, animateScroll as scroll } from 'react-scroll';

import Swal from 'sweetalert2'



function App() {

  const [dni,setDni] = useState();  
  const [nombre,setNombre] = useState("");
  const [apellido,setApellido] = useState("");
  const [sexo,setSexo] = useState("");
  const [id,setId] = useState(0);
  const [numTelef,setNumeroDeTelefono] = useState("");
  const [usuariosList,setUsuarios] = useState([]);
  const [editar,setEditar] = useState(false);
  const [dniFilter, setDniFilter] = useState("");
  const [error, setError] = useState("");
  
  

  const add= ()=>{
    Axios.post("http://localhost:3001/create",{
      dni:dni,
      nombre:nombre,
      apellido:apellido,
      sexo:sexo,
      numTelef:numTelef,
    }).then(()=>{
      getUsuarios();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Registro Exitoso!!!</strong>",
        html:  "<i>El usuario <strong>" +nombre+ " " +apellido+" </strong>  fue agregado correctamente en el listado</i>",
        icon:  'success'
      })

    })
  }

  const update= ()=>{
    Axios.put("http://localhost:3001/update",{
      id:id,
      dni:dni,
      nombre:nombre,
      apellido:apellido,
      sexo:sexo,
      numTelef:numTelef,
    }).then(()=>{
      getUsuarios();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Actualizacion exitosa</strong>",
        html:  "<i>El empleado <strong>" +dni+ " </strong>  fue actualizado </i>",
        icon:  'success'
      })
    })
  }




  const deletUser= (val)=>{

    Swal.fire({
      title: 'Confirmar eliminado?',
      html: "<i>Realmente desea eliminar a <strong>"+val.nombre+"</strong>?</i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo'
    }).then((result) => {
      if (result.isConfirmed) {

      Axios.delete(`http://localhost:3001/delete/${val.id}`).then(()=>{
      getUsuarios();
      limpiarCampos();
      Swal.fire(
      'Eliminado!',
      val.nombre+' fue eliminado',
      'success'
      )
    });
    
  }
});

}
  

  const limpiarCampos=()=>{
    setDni("");				
    setNombre("");				
    setApellido("");				
    setSexo("");					
    setId("");					
    setNumeroDeTelefono("");		
    setEditar(false);			
  }


  const getUsuarios = () => {
    let url = "http://localhost:3001/usuarios";
  
    if (dniFilter) {
      url += `?dni=${dniFilter}`;
    }
  
    Axios.get(url)
      .then((response) => {
        if (dniFilter && response.data.length === 0) {
          
          setUsuarios([]);
        } else {
          setError('');
          setUsuarios(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        setError('Ocurrió un error al obtener los usuarios.');
        setUsuarios([]);
      });
  }









  // Llamada a getUsuarios al cargar la página
  useEffect(() => {
    getUsuarios();
  }, [dniFilter]);

  const editarUsuario = (val)=>{
    setEditar(true);
    
    
    setDni(val.dni);
    setNombre(val.nombre);
    setApellido(val.apellido);
    setSexo(val.sexo);
    setNumeroDeTelefono(val.numTelef);
    setId(val.id);

   
   scroll.scrollToTop({
    duration: 500, 
    smooth: 'easeInOutQuad', // Función de tiempo para el desplazamiento suave
  });
}

  return (
    <div className="container">
     <div className="card text-center">
        <div className="card-header">
         GESTION DE USUARIOS
        </div>
        <div className="card-body">

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Dni: </span>
        <input type="number" 
         onChange={(event)=>{
          setDni(event.target.value);
        }}
        
        className="form-control" value={dni} placeholder="Ingrese Documento" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Nombre: </span>
        <input type="text" 
         onChange={(event)=>{
          setNombre(event.target.value);
        }}
        
        className="form-control" value={nombre} placeholder="Ingrese su nombre" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>


        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Apellido: </span>
        <input type="text" value = {apellido}
         onChange={(event)=>{
          setApellido(event.target.value);
        }}
        
        className="form-control" placeholder="Ingrese su Apellido" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
       
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Sexo: </span>
        <input type="text" value = {sexo}
         onChange={(event)=>{
          setSexo(event.target.value);
        }}
        
        className="form-control" placeholder="Ingrese Sexo" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
       
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Numero de Telefono: </span>
        <input type="number" value = {numTelef}
         onChange={(event)=>{
          setNumeroDeTelefono(event.target.value);
        }}
        
        className="form-control" placeholder="Ingrese Telefono" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

       
        <div className="input-group mb-3">
        <span className="input-group-text btn btn-primary" id="basic-addon1">
          Filtro:
          </span>
          
          <input type="text" 
  onChange={(event) => {
    setDniFilter(event.target.value);
  }}

  className="form-control" placeholder="Buscar por DNI" aria-label="Buscar por DNI"
/>

      
</div>

{error && <div className="alert alert-danger">{error}</div>}

        </div>

          <div className="card-footer text-muted">
        {
          editar? 
          <div>
          <button className='btn btn-warning m-2' onClick={update}>Actualizar</button> 
          <button className='btn btn-info m-2' onClick={limpiarCampos}>Cancelar</button>
          
          </div>

          : <button className='btn btn-success' onClick={add}>Registrar</button>


        }



          
          </div>
        </div>  

        
            <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">DNI</th>
                <th scope="col">Sexo</th>
                <th scope="col">Numero de Telefono</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
           
           <tbody>

           {usuariosList.length === 0 ? (
          <tr>
            <td colSpan="7">Usuario no encontrado.</td>
          </tr>
        ):( 
            usuariosList.map((val,key)=>{
              return <tr key={val.id}>
                    <th scope="row">{val.id}</th>
                    <td>{val.nombre}</td>
                    <td>{val.apellido}</td>
                    <td>{val.dni}</td>
                    <td>{val.sexo}</td>
                    <td>{val.numTelef}</td>
                    <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button"
                            onClick={() => {
                              editarUsuario(val);
                            }}
                            className="btn btn-info">Editar</button>
                            <button type="button" onClick={()=>{
                              deletUser(val);
                            }}  className="btn btn-danger">Eliminar</button>
                            
                    </div>


                    </td> 

                    
                    </tr>
              
              
              
              
             
            }))
        }


        
       
      </tbody>
          </table>



        


        
      </div>

      

    
   
   


  );
}

export default App;
