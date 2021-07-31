import './App.css';
import Navbar from './Nabar';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Login from './Login';
import Sdata from './Sdata';
const Home = () => {
  return ( 
    <>
   <Navbar />
 
  
    <Container>
    <div className="row">
   
      <div className="col-md-4">
      <div className="card" >
      
  <img src={Sdata[0].imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Sdata[0].title}</h5>
    <p className="card-text">{Sdata[0].paragraph}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>

      <div className="col-md-4">
      <div className="card" >
      
  <img src={Sdata[1].imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Sdata[1].title}</h5>
    <p className="card-text">{Sdata[1].paragraph}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>

      <div className="col-md-4">
      <div className="card" >
      
  <img src={Sdata[2].imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Sdata[2].title}</h5>
    <p className="card-text">{Sdata[2].paragraph}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>

      {/* <div className="col-md-4">
      <div className="card" >
  <img src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>

      <div className="col-md-4">
      <div className="card" >
  <img src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

  </div> */}
  

    </div>
</Container>
    <Footer />

    </>
   );
};

const About = () => {
  return ( 
    <>
   <Navbar />
   <Container>
    <h1 className="todo">About Page</h1>
    <br />
    <p>DevOps is the combination of cultural philosophies, practices,
       and tools that increases an organization’s ability to deliver applications
        and services at high velocity: evolving and improving products at a faster
         pace than organizations using traditional software development and infrastructure
       management processes. This speed enables organizations to better serve their customers 
       and compete more effectively in the market.</p>

       <br />

       <p>Under a DevOps model, development and operations teams are no longer “siloed.” Sometimes, these two teams are merged into a single team where the engineers work across the entire application lifecycle, from development and test to deployment to operations, and develop a range of skills not limited to a single function.

In some DevOps models, quality assurance and security teams may also become more tightly integrated with development and operations and throughout the application lifecycle. When security is the focus of everyone on a DevOps team, this is sometimes referred to as DevSecOps.
These teams use practices to automate processes that historically have been manual and slow. They use a technology stack and tooling which help them operate and evolve applications quickly and reliably. These tools also help engineers independently accomplish tasks (for example, deploying code or provisioning infrastructure) that normally would have required help from other teams, and this further increases a team’s velocity.</p>

</Container>
<Footer />
    </>
   );
};



const Contact = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const onChangeHandler = (fieldName, value)=>{
    if(fieldName === "email"){
      setEmail(value);
    }
    else if(fieldName==="password"){
      setPassword(value);
    }
    else if(fieldName==="contact"){
      setContact(value);
    }
    else if(fieldName==="address"){
      setAddress(value);
    }
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(email.trim()==="" || password.trim() =="" || contact.trim() =="" || address.trim() ==""){
    alert('All field are Required');
    }
     else{
      alert(password+"  " +email + "  " +contact);
      setEmail("");
      setPassword("");
      setContact("");
      setAddress("");
    }
  }
  return ( 
    <>
   <Navbar />
  
    <Container>   
      <form onSubmit={(e)=>{onSubmitHandler(e)}}>
       <div className="row">
      <div className="col-md-6">
     <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={email} onChange={(e)=>{ onChangeHandler("email",e.target.value)}} aria-describedby="emailHelp"/>
    <span className="email"></span>
    </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={(e)=>{ onChangeHandler("password",e.target.value)}} id="password"   aria-describedby="emailHelp"/>
    <span className="pass"></span>
  </div>
  </div>
  <div className="col-md-6">
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contact</label>
    <input type="text" className="form-control" id="conatct" value={contact} onChange={(e)=>{ onChangeHandler("contact",e.target.value)}} />
    <span className="con"></span>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" className="form-control" id="address" value={address} onChange={(e)=>{ onChangeHandler("address",e.target.value)}} />
    <span className="add"></span>
  </div>
 </div>
 </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      
   
   
</Container>
<Footer />
    </>
   );
};


const ToDo = () => {

  const [input, setValue] = useState("");
   const [todos, setTodos] = useState([]);

    const handleInput = (event) => {
    setValue(event.target.value);


  }

  const surendra = (event) => {
    event.preventDefault();
    if (!input) return
    
    const newtods = [todos,input];
    setTodos(newtods);
     setValue("");
    // const newTodos = [...todos, input];
    
    // setTodos(newTodos);
    // setValue("");
  }

  return ( 
    <>
   <Navbar />
  
    <Container>
    <h1 className="todo">This is ToDo Page</h1>
    <center>
      <div className="container">
        <div className="row">
        <div className="col-md-4">
        <table>
              <tr>
                <th><h3 className="todo">Todo List</h3></th>
                
              </tr>
              <tr>
                <td><h1>  {todos.map((todo, index) => <p key={index}>{todo}</p>)}</h1></td>
               
              </tr>
              </table>
          </div>
          <div className="col-md-8">
           
          <form onSubmit={surendra}>    
          <br />
           <label>
 
      <input 
      type="text"
      name="name"
      value={input}
        placeholder="Name"
        onChange={handleInput}
    />

  </label><br />
  <br />



  <button type="submit">Submit</button>
</form>
          </div>
        </div>

        </div>
  
    </center>
    
</Container>
<Footer />
    </>
   );
};


const Weather = () => {

  const[city,setCity] = useState(null);
  const[search,setSearch] = useState("Mumbai");

  useEffect( () => {

    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=20837201b26e556fad3d619ee31a3678`;

      const response = await fetch(url);
      const resJson = await response.json();
    //  console.log(resJson);

    setCity(resJson.main);
    }

    fetchApi();

  },[search] );

  return ( 
    <>
   <Navbar />
   
  
    <Container>
    <div className="box">
      <div className="inputData">
        <input
        type="search"
        className="inputFeild"
        value={search}
        onChange = {(event)=>{ setSearch(event.target.value)}}/>
      </div>

      {!city ? ( 
        <p>No Data Found</p>
      ) : (

        
    <div className = "info">
    <h2 className="location">
    <i className="fas fa-street-view">{search}</i>
    </h2>
    <h1 className="temp">
      {city.temp}°C
    </h1>

    <h3 className="tempmin_max">    min {city.temp_min}°C     max {city.temp_max}°C </h3>

    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
  </div>

        
      )


      }
  

    </div>
    
</Container>
    <Footer />

    </>
   );
};



const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      {/* <Route path="/service">
        <Service />
      </Route> */}

      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/todo">
        <ToDo />
      </Route>

      <Route path="/wheather">
        <Weather />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default App;
