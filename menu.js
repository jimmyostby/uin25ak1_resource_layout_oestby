let informasjonHTML = ""

//Blitt peket i riktig retning på kodelinje 5-12 av foreleser Marius.

resources.map(resource => informasjonHTML += `
            <ul id="menu">
                <li>
                    <button id="menu" onclick="content('${resource.category}')" >${resource.category}</button>
                </li>
            </ul>

`)

document.getElementById("menu").innerHTML = informasjonHTML

/*Kodelinje 18-31 har jeg fått forklart og hjelp til å skrive av medstudent Hanna Hänel Sørum, da jeg ikke fikk til løsningnen selv.*/ 

function content(category){
    const filter = resources.filter (item => item.category === category)
    const clicked = filter [0]
    const informationHTML = `
        <h2>${clicked.category}</h2>
        <p id="text">${clicked.text}</p>
        <ul>
            ${clicked.sources.map(source => 
                `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`
            ).join("")}
        </ul>
        `
    document.getElementById("content").innerHTML=informationHTML
    }

content("HTML")

/*Fikk i starten en del error, feilsøkt koden ved hjelp av chat-gpt, 
men brukte ikke løsningen den kom med, da jeg ikke forstod hva den mente. */

