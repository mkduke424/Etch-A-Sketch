     userChart();
function userChart(sides=16){   
    const cont = document.querySelector(".container");
    for(let i = 0; i < sides*sides; i++){
        const div = document.createElement('div')
        div.classList.add('grid-item')
        cont.appendChild(div);
}
    const divs = document.querySelectorAll('.grid-item');
    divs.forEach(div => {
        div.addEventListener("mouseover", () => div.style.backgroundColor = "black")
});
    cont.style["grid-template-columns"] = `repeat(${sides},1fr)`;
    cont.style["grid-template-rows"] = `repeat(${sides},1fr)`;
}
    
function reloadpage(){
    let newgrid = prompt("how big do you want your new grid to be?");
    document.querySelectorAll(".grid-item").forEach((element)=>{
        element.remove();
    })
    userChart(newgrid);
}



