
let informasjonHTML = ""


/*
resources.map((cat, index) => {
    informasjonHTML += `<button onclick="content('${cat.category}')">${cat.category}</button>`})

    
*/
   /* resources.map(resource => {
        informasjonHTML += `<button id="button" onclick="updatecontent('${resource.category}')">${resource.category}</button>`;
      });
      */



resources.map(resource => informasjonHTML += `
            <ul id="menu">
                <li>
                    <p id="menu" onclick="showContent('${resource.category}')" >${resource.category}</p>
                </li>
            </ul>


`)

document.getElementById("menu").innerHTML = informasjonHTML


function content(category){
    const filter = resources.filter (item => item.category === category)
    const clicked = filter [0]
    const informationHTML = `
    <h2>${clicked.category}</h2>
                        <p id="text">${clicked.text}</p>`

    document.getElementById("content").innerHTML=informationHTML
    }

content("HTML")



















