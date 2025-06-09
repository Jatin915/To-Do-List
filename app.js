let inp=document.querySelector(".inpBtn input");
let addBtn = document.querySelector(".inpBtn button");
let container = document.querySelector(".container");
let div, dltBtn;
addBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    addTask();
});

function addTask(){
    let val=inp.value;
    let div = document.createElement("div");
    let para = document.createElement("p");
    para.textContent=val;
    let dltBtn = document.createElement("button");
    dltBtn.textContent="Delete";
    
    div.appendChild(para);
    div.appendChild(dltBtn);
    div.classList.add("tasks");
    container.appendChild(div);
    inp.value="";

    dltBtn.addEventListener("click", () => {
        div.remove();
    });
}