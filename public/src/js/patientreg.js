const patientImage = document.getElementById('upload-patient-picture');
const imgshow = document.getElementById('patientimage');

patientImage.addEventListener('change', ()=>{
    const file = patientImage.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", ()=>{
        imgshow.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(file);
    
});

const patientName = document.getElementById('name');
const nameshow = document.getElementById('patientname');

patientName.addEventListener('input', ()=>{
    const name = patientName.value;

    nameshow.innerText = name
});