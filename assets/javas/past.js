let pastCards = document.getElementById("sectionCard3")
let pastData = data.events

pastData.filter((evento)=>{
    if(evento.date < "2022")
        return pastCards.innerHTML +=
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
        </div>`
    }
)


