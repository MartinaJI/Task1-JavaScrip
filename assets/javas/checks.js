let cardDetails = document.getElementById("cardContent")
let details = data.events

details.map((evento)=>{ 
cardDetails.innerHTML+=
`<div class="row g-0">
  <div class="col-md-4">
    <img src="${evento.image}" class="img-fluid rounded-start d-flex" alt="concert">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text">${evento.description}</p>
      <div class="card-inf">
        <p><small class="text-muted">Category: ${evento.category}</small></p>
        <p><small class="text-muted">Place": ${evento.place}</small></p>
      </div>
      <div class="card-inf">
        <p><small class="text-muted">capacity: ${evento.capacity}</small></p>
        <p><small class="text-muted">price:$${evento.price}</small></p>
        <p><small class="text-muted">date: ${evento.date}</small></p>
      </div>
    </div>
  </div>
</div>`}
)