let position = document.getElementById('position')
let specialty = document.getElementById('specialty')


position.addEventListener('click', ()=>{
    if (position.value !== 'Doctor'){
        specialty.style.display = "none"
    }else{
        specialty.style.display = "block"
    }
});

const staffimg = document.getElementById('image');
const imgshow = document.getElementById('img');

staffimg.addEventListener('change', ()=>{
    const file = staffimg.files[0];
    const reader = new FileReader();

    if(file){
        reader.addEventListener('load', ()=>{
            imgshow.setAttribute("src", reader.result);

            
        });
        reader.readAsDataURL(file);
    }
})