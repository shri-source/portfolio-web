// import { useCallback, useState } from 'react';


// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setnumberAllowed] = useState(false);
//   const [charAllowed, setcharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

// const passwordGenerator = useCallback(() =>{
//   let pass = "";
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//   if (numberAllowed) str += "0123456789";
//   if (numberAllowed) str += "@#$%^&*()";
//   for (let i = 0; i <= length; i++) {
//     let char = Math.floor(Math.random()* str.length+1)
//      pass = str.charAt(char);
//   }
//   setPassword(pass);
// },
// [length, numberAllowed, charAllowed, setPassword] )
//   return (
//  <>
//  <div className='width-full m-auto h-52 text-orange-600 bg-gray-600 max-w-md p-x5 my-8 rounded'>
//   <div className='text-center m-8 my-6 text-white'>password generator
//   <div className='flex overflow-hidden rounded '>
//     <input
//      type="text"
//      value={password}
//      className='w-full outline-none py-1 px-3 my-4 rounded'
//      placeholder='password'
//      readOnly
//       />
//       <button className='bg-blue-700 py-1 px-3 py-0.5 shrink-0 text-white rounded outline-none'>copy</button>
//   </div>
//   <div className='flex text-sm gap-x-2'>
//     <div className='flex items-center gap-x-1 '>
//   <input 
//   type="range" 
//   min={6}
//   max={100}
//   value={length}
//   onChange={(e) => {setLength(e.target.value)}}
//   />
//   <label>length:{length}</label>
//     </div>
//   </div>
//   </div>
//  </div>
//  </>
//   )
// }

// export default App



 function App() {
  return (
  <div>
    
    {/* <Sidebar/> */}
    {/* <Calculator/> */}
    </div>
  )
}
export default App


