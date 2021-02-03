import React,{useState, useEffect} from 'react'

const App = () => {

  

  const random = (num) => Math.floor(Math.random() * num);


  function condition(num, min, max) {

    if (min < max) return num += 1;
    if (min >= max) return num -= 1;
  }


  const background = `linear-gradient(
  ${random(360)}deg,
  rgba(
    ${random(256)},
    ${random(256)},
    ${random(256)},1)0%,
  rgba(
    ${random(256)},
    ${random(256)},
    ${random(256)},1)
    ${random(98) + 1}%,
  rgba(
    ${random(256)},
    ${random(256)},
    ${random(256)},1) 100%)`

  const style = {
    width: '100%',
    height: '100vh',
    background: `${background}`
  }
  const [number, setNumber] = useState(1);
  useEffect(()=>{
   return setNumber(setInterval(condition(5, 1, 10),1000))
  },[])

  return (
    <div className='main--Page--Background' style={style}>
      {number}
    </div>
  )
}

export default App
