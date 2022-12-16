let cardEvents = document.getElementById("sectionCards");
let eventos = data.events 

eventos.map((evento)=>{
    cardEvents.innerHTML +=
`<div class="card margin-topcar border-color" style="width: 12rem;">
<img src="${evento.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title title-color">${evento.name}</h5>
  <p class="card-text title-color2">${evento.description}</p>
  <div class="botPrice d-flex justify-content-between">
    <p class="price">${evento.price}</p>
    <a href="./Details.html" class="btn btn-primary color-pad">+Details</a>
  </div>
</div>
</div>`})

let contentCheckbox = document.getElementsByClassName("containChek")

let categorias = Array.from(new Set(data.events.map((e)=>e.category)))
 categorias.forEach((element) =>{
 contentCheckbox.innerHTML +=          
 `<div class="form-check form-check-inline">
 <input class="form-check-input color-input" type="checkbox" id="${categorias}" value="${categorias}">
 <label class="form-check-label" for="${categorias}"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${categorias}</font></font></label>
</div>`
 })

