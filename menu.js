let informasjonHTML = ""

resources.map(resource => informasjonHTML += 
            <ul id="menu">
                <li>
                    <p id="menu" onclick="content('${resource.category}')" >${resource.category}</p>
                </li>
            </ul>
)

document.getElementById("menu").innerHTML = informasjonHTML


function content(category){
    const filter = resources.filter (item => item.category === category)
    const clicked = filter [0]
    const informationHTML = `
        <h2>${clicked.category}</h2>
        <p id="text">${clicked.text}</p>
        <ul>
            ${clicked.sources.map(source => 
                <li><a href="${source.url}" target="_blank">${source.title}</a></li>
            ).join("")}
        </ul>
    `


    document.getElementById("content").innerHTML=informationHTML
    }

content("HTML")