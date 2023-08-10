import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [dob,setDob]=useState("");
  const [num,setNum]=useState(0);
  const [result,setResult]=useState("");


  const changeDob=(e)=>{
    setDob(e.target.value);
  }
  const changeNum=(e)=>{
    setNum(e.target.value);
  }

  const getnewDob=(dob)=>{

    dob=dob.replaceAll('-',"");

    let sum=0;
    for(let i=0;i<dob.length;i++){
      sum+=Number(dob[i]);
    }
    console.log(sum);
    return sum;
  }

  const clickHandle=()=>{

    if(dob!="" && num!=0){
      const newDobSum=getnewDob(dob);
      const ans=newDobSum%num;
      if(ans===0)
        setResult("you are lucky");
      else  
      setResult("you are not lucky");
    }else{
      setResult("put data correctly");
    }
  }
  return (
    <div className="App">
     
     <div>
     <label>Enter your dob:</label>
     <input type='date' placeholder='dd/mm/yyy'
     onChange={changeDob}
     ></input>
     </div>
     <div>
     <label>Enter your lucky number</label>
     <input type='number'
     onChange={changeNum}
     ></input>
     </div>
     <div>
     <button onClick={clickHandle}>Check here</button>
     <div>{result}</div>
     </div>
    </div>
  );
}

export default App;
