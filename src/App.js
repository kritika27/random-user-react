import React,{useState,useEffect} from "react"
import './App.css';

const url="https://randomuser.me/api/"

const App=()=>{
  const [profile,setProfile]= useState([]);

const fetchUser=async()=>{
  const res=await fetch(url);
  const data=await res.json();
  const profile = data.results[0];
  const {cell,email,dob:{date,age},name:{first,last},picture:{large},location:{city,country}} = profile;
  
const newPerson={
  first,
  last,
  email,
  cell,
  date,
  age,
  large,
  city,
  country
}
setProfile(newPerson);
}

const newUser=()=>{
  fetchUser();
}

useEffect(()=>{
fetchUser();
},[]) 

  return(
  <main>
    <div className='block bcg-black'></div>
      <div className='block'>
        <div className="container">
          <img src={profile.large} alt={profile.first}/>
          <p className='user-value'>{profile.first} {profile.last}</p>
          <p className='user-title'>{profile.age}</p>
          <p className='user-title'>{profile.email}</p>   
          <p className='user-title'>{profile.city},{profile.country}</p>
          <button className="btn" onClick={newUser}>Surprise Me</button>
        </div>
      </div>
  </main>
    )
    }
export default App