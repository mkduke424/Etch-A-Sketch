
function createchart (){
    const cont = document.querySelector(".container");
    for(let i = 0; i <= 255; i++){
        const div = document.createElement('div')
        div.classList.add('grid-item')
        cont.appendChild(div);
    }
}
createchart();

    const divs = document.querySelectorAll('.grid-item');
    divs.forEach(div => {
        div.addEventListener("mouseover", () => div.style.backgroundColor = "black")
    });
    




