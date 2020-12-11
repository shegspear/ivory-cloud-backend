// // document.getElementById('sarch').addEventListener('input', ()=>{
// //     const search = document.getElementById('sarch').value
// //     patientsdata(search);
// // });
// // const patients =document.getElementById('patients').innerText;

// // patientsdata(patients)
// function patientsdata(data){
//     let patList = document.getElementById('pat-list');
//     patList.innerHTML = ''
//     data.forEach(pat => {
//         let patientlist = `<li class="patient-list-item">
                 

//             <img class="patient-profile-picture" src=" http://localhost:3000/${pat.patientimg} %> " alt="patient picture">  

//             <span class="patient-profile-name">
//                 <a href="#">
//                     ${pat.name} 
//                 </a>
//             </span>

//             <spna class="patient-hospital-id">
//                 ${pat.patientId}
//             </spna>

//             <span class="patient-sex">
//                 ${pat.gender}
//             </span>

//             <span class="patient-dob">
//                 ${pat.dob}
//             </span>
//             </li>`
//         patList.innerHTML = patientlist;
//     });
    
// };
// async function funcName(url){
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log(data)
//     patientsdata(data)
//     }
//     funcName('http://localhost:3000/patient/api');
