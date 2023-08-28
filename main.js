const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault(); ///evita que se recarge la pagina enviando el form

  const text = input.value; ///tomamos el valor que llega por el input
  if (text !== ""){
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
  
    li.appendChild(p);
    li.appendChild(addDeleteBtn())
    ul.appendChild(li);
  
    input.value = "" //reseteamos el input
    empty.style.display = 'none'
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete"; ///modificamos el nombre de la clase solo para ese elemento

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    //target toma al elemento que estamos aplicando el evento,
    ///es decir el que estamos clickeando. Parent element elimina
    //el elemento contenedor del boton, es decir, guarda
    //el div tarea completo
    ul.removeChild(item);
    //removemos de la lista el elemento, para eliminar en el dom
    //debemos deletear su etiqueta

    const items = document.querySelectorAll('li') //traemos todos los li
    if (items.length === 0){
        empty.style.display = 'block'
    }
  });

  return deleteBtn //lo retornamos para llamarlo en el eventlistener
}
