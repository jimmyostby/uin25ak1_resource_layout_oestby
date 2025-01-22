
let informasjonHTML = ""


/*
resources.map((cat, index) => {
    informasjonHTML += `<button onclick="content('${cat.category}')">${cat.category}</button>`})

    */ 

    resources.map(resource => {
        informasjonHTML += `<button id="button" onclick="updatecontent('${resource.category}')">${resource.category}</button>`;
      });
      

function content(category){
    const filter = resources.filter (item => item.category === category)
    const clicked = filter [0]
    const information = `<h2>${clicked.category}</h2>`

    document.getElementById("menu").innerHTML=information
    }
    
    content("HTML")


















