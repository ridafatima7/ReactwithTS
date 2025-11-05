import React, { FC, useState } from 'react'

interface myButtonProp{
    text:string | number | boolean
    onClick?:()=> void
}
interface Book{
  name:string;
  price:number;
}
const MyButton : React.FC<myButtonProp> = (props) => {
  const [value,setValue]=useState<number>(1)
  const [value1,setvalue1]=useState<Book>({
    name:'Malala',
    price:23
  })
  return (
    <>
    <p>{value}</p>
        <button onClick={()=> ( value +1)}>
        {props.text}</button>
    </>
  )
}

export default MyButton