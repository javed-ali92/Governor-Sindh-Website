import React from 'react'

const Courses = () => {
  return (
    <div className='bg-white'>
      <div>
        <h1>Core Courses</h1>
           
        <p>Programming Fundamentals</p>

        <p>Web2 Using NextJS</p>

        <p>Eran as You Learn</p>

      </div>
      <u />
      <div>
        <h1>Advanced Courses</h1>

        <p>Web 3 and Metaverse</p>

        <p>Cloud-Native Computing</p>

        <p>Artificial intelligence (AI) and Deep Learning</p>

        <p>Ambient Computing and lo T</p>

        <p>Genomics and Bioinformatics</p>

        <p>Network Programmability and Automation</p>
      </div>
    </div>
  )
}

export default Courses

// import { useState } from 'react';

// export default function DropdownButton() {
//     // Dropdown ke liye state banayein
//     const [showDropdown, setShowDropdown] = useState(false);

//     // Dropdown ko toggle karne ka function
//     const toggleDropdown = () => {
//         setShowDropdown(!showDropdown);
//     };

//     return (
//         <div>
//             {/* Button jo dropdown ko toggle karega */}
//             <button onClick={toggleDropdown}>
//                 Dropdown Button
//             </button>

//             {/* Agar showDropdown true ho to dropdown items dikhayein */}
//             {showDropdown && (
//                 <ul>
//                     <li>Option 1</li>
//                     <li>Option 2</li>
//                     <li>Option 3</li>
//                 </ul>
//             )}
//         </div>
//     );
// }