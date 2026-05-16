const prev = document.getElementById("prevbutton");
const next = document.getElementById("nextbutton");
const submit = document.getElementById("submitbutton");

//element
const indexsoal = document.querySelector('.headersoal h4');
const gambarsoal = document.querySelector('#Dokumentasisoal img')
const soal = document.querySelector('.question h2');
const modal = document.querySelector('.modal');
const isimodal = document.querySelector('.isimodal');
const close = document.querySelector('.close');
let currentsoal = 0;
const daftarsoal = [
    {
        index: "Index soal 1",
        gambarsoal: "/FormUjian/Asset/gtm.png",
        pertanyaan: "Soal 1: If you could live in a book, TV show, or movie, what would it be?"
    },
    {
        index: "Index soal 2",
        gambarsoal: "/FormUjian/Asset/Dummyphoto.jpg",
        pertanyaan: "Soal 2: What's one place you've travelled that you never want to go back to?"
    },
    {
        index: "Index soal 3",
        gambarsoal: "/FormUjian/Asset/gtm.png",
        pertanyaan: "Soal 3: Who is one of your best friends, and what do you love about them?"
    },
    {
        index: "Index soal 4",
        gambarsoal: "/FormUjian/Asset/Dummyphoto.jpg",
        pertanyaan: "Soal 4: What's something you wish you'd figured out sooner?"
    }
];

function tampilkansoal(){
    const soalaktif = daftarsoal[currentsoal];
    indexsoal.textContent = soalaktif.index;
    gambarsoal.src = soalaktif.gambarsoal
    soal.textContent = soalaktif.pertanyaan
}
prev.addEventListener('click', (e) => {
    e.preventDefault();
    if(currentsoal > 0){
        currentsoal--;
        tampilkansoal();
    } 
});

next.addEventListener('click', (e) => {
    e.preventDefault();
    if(currentsoal < daftarsoal.length - 1){
        currentsoal++;
        tampilkansoal();
    }
});

gambarsoal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.style.display = 'flex';
    isimodal.src = gambarsoal.src;
});

close.addEventListener('click', () =>{
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) =>{
    if(e.target === modal){
        modal.style.display = 'none';
    }
    
});

//submit
//next
//kosongkan jawaban
//modal
tampilkansoal();