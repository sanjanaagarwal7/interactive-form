import './App.css';
import tickimage from "./assets/tick.png";
import correcttick from "./assets/correcttick.png";
import PersonalInfo from './Components/PersonalInfo';
import Confirm from './Components/Confirm';
import Bank from './Components/Bank';
import {useState} from "react";


function App() {
  const [start,setStart]=useState(false);
  const [personal,setPersonal]=useState(true);
  const [bank,setBank]=useState(false);
  const [confirm,setConfirm]=useState(false);
  const [tick,setTick]=useState({
    nextBank:false,
    nextConfirm:false,
  });
  function handlePersonal(){
    setPersonal(true);
    setBank(false);
    setConfirm(false);
  }
  function handleBank(){
    setPersonal(false);
    setBank(true);
    setConfirm(false);
  }
  function handleConfirm(){
    setPersonal(false);
    setBank(false);
    setConfirm(true);
  }
  function handleStart(){
    setStart(true);
  }
  
  return (
    <>
    {!start && <nav id="main-nav">
    <div id="personal">
    {(!tick.nextBank) && <img src={tickimage} height="40px"/>}
    {tick.nextBank && <img src={correcttick} height="40px"/>}
    <button type="button" onClick={handlePersonal}>Personal Information</button>
    </div>
    <div id="bank">
    {(!tick.nextConfirm) && <img src={tickimage} height="40px"/>}
    {tick.nextConfirm && <img src={correcttick} height="40px"/>}
    <button type="button" onClick={handleBank}>Bank Information</button>
    </div>
    <div id="confirm">
    <img src={tickimage} height="40px"/>
    <button type="button" onClick={handleConfirm}>Confirm Details</button>
    </div>
    </nav>}
    <div id="components">
    {personal && <PersonalInfo setPersonal={setPersonal} setBank={setBank} setConfirm={setConfirm} setTick={setTick}/>}
    {bank && <Bank setPersonal={setPersonal} setBank={setBank} setConfirm={setConfirm} setTick={setTick}/>}
    {confirm && <Confirm setStart={setStart}/>}
    </div>
    </>
  );
}

export default App;
