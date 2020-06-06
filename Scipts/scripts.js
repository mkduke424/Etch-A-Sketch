
function createchart (){
    //modify to allow the user to size the grid. For ex - Enters 16 -> creates a 16 by 16 grid
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
    
function reload(){
    //functionality not created yet
    let newgrid = prompt("how big do you want your new grid to be?");
    window.location.reload();
}



