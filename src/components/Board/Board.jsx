import React,{useEffect, useState} from 'react'
import Box from './Box'
import './Board.css'

const Board = () => {

  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [status, setStatus] = useState("");
  const [winner, setWinner] = useState(null);

  useEffect(()=>{
    let lines=[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for(let i in lines){
      let [a,b,c]=lines[i];
      if(square[a] && square[a] === square[b] && square[a] === square[c]){
        setWinner(square[a]);
      }
    }
    // if(winner){
    //   setStatus(`Winner: ${winner}`);  
    //   console.log(status);
    // }else if(!winner && square.every(e=>e !== null)){
    //   setStatus(`Match Drawn`)
    // }else{
    //   setStatus(isNext ? `Player: X` : `Player: O`);
    // }
    setStatus(winner ? `Winner: ${winner}` :
    !winner && square.every(e=>e !== null) ? `Match Drawn` :
    isNext ? `Player: X` : `Player: O`);
    
  },[square,status])
  // const checkWinner=(square)=>{
  //   let lines=[
  //     [0,1,2],[3,4,5],[6,7,8],
  //     [0,3,6],[1,4,7],[2,5,8],
  //     [0,4,8],[2,4,6]
  //   ];
  //   for(let i in lines){
  //     let [a,b,c]=lines[i];
  //     if(square[a] && square[a] === square[b] && square[a] === square[c]){
  //       return square[a];
  //     }
  //   }
  //   return null;
  // }

  const handleSquare=(i)=>{
    if(square[i] || winner){
      return 0;
    }
    let nextSquare=square.slice();
    if(isNext){
      nextSquare[i]='X'; 
    }else{
      nextSquare[i]='O';
    }
    setSquare(nextSquare);
    setIsNext(!isNext);
  }

  const reset = () =>{
    setIsNext(true);
    setSquare(Array(9).fill(null));
    setWinner(null);
  }
  // let winner = checkWinner(square);
  // let status;
  // if(winner){
  //   status=`Winner: ${winner}`;
  // }else{
  //   status = (isNext ? `Player: X` : `Player: O`);
  // }

  return (
    <main>
        <span>{status}</span>
        <div className='board'>
            <div className='row'>
            <Box value={square[0]} change={()=>handleSquare(0)} />
            <Box value={square[1]} change={()=>handleSquare(1)} />
            <Box value={square[2]} change={()=>handleSquare(2)} />
            </div>
            <div className='row'>
            <Box value={square[3]} change={()=>handleSquare(3)} />
            <Box value={square[4]} change={()=>handleSquare(4)} />
            <Box value={square[5]} change={()=>handleSquare(5)} />
            </div>
            <div className='row'>
            <Box value={square[6]} change={()=>handleSquare(6)} />
            <Box value={square[7]} change={()=>handleSquare(7)} />
            <Box value={square[8]} change={()=>handleSquare(8)} />
            </div>
        </div>
        <button className='reset' onClick={reset}>Reset</button>
    </main>
  )
}

export default Board