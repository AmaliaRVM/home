//Global variables
const sectionOne = document.querySelector('section.name-section');
const divWebLeft = document.querySelector('div.web-section-left');
const divWebRight = document.querySelector('div.web-section-right');
const divToolsLeft = document.querySelector('div.tools-left-section');
const divToolsIcon = document.querySelector('div.right-tools-icons-section');
const divToolsLogo = document.querySelector('div.right-tools-logos-section');
const footerSection = document.querySelector('section.footer-name-container');

// Getting Data for the webpage

const getData = function (){
    fetch("data.json")
    .then(response => response.json())
    .then((jsonData)=> {
        data = jsonData;

        sectionOne.innerHTML = sectionOne.innerHTML + `
        <div class="col-left name-container" >
            <h1>${data.section_one.name}</h1>
            <h1>${data.section_one.surname}<h1>
        </div>
        <div>
            <h3 id="about">${data.section_one.about_header}</h3>
            <p>
                ${data.section_one.about_description}
            </p>
        </div>
        `

        divWebLeft.innerHTML = divWebLeft.innerHTML + `
        <div class="col-left">
            <h3 class="title-header">${data.section_two.header}</h3>
            <p class="th-description">${data.section_two.description}</p>
        </div>
        `
        data.section_two.websites.forEach(element => {
            console.log(element.title);
            divWebRight.innerHTML = divWebRight.innerHTML + `
            <div>
                <h4 class="subtitle-header"><a href="https://reuse-it.github.io/home/" target="_blank">${element.title}</a></h4>
                <p class="description">${element.web_description}</p>
                <p>${element.hashtag}</p>
            </div>     
        `
        }) 

        divToolsLeft.innerHTML = divToolsLeft.innerHTML + `
            <h3 class="title-header">${data.section_three.header}</h3>
            <div class="col-left-subheader">
                <h4 class="subtitle-header">${data.section_three.icon_header}</h4>
                <p class="th-description">${data.section_three.icon_description}</p>
            </div>
            <div class="col-left-subheader">
                <h4 class="subtitle-header">${data.section_three.logo_header}</h4>
                <p class="th-description">${data.section_three.logo_description}</p>
            </div>
        `

        data.section_three.icons.forEach(element => {
            divToolsIcon.innerHTML = divToolsIcon.innerHTML + `
                <div class="img-container">
                    <img src="${element.img}" alt="">
                    <a href="${element.img}" download=""><img class="download_icon" src="${element.download}" alt="download icon"></a>
                </div>
            `
        })

        data.section_three.logos.forEach(element => {
            divToolsLogo.innerHTML = divToolsLogo.innerHTML + `
            <div class="img-container">
                <img class="logo-img" src="${element.img}" alt="a logo">
                <p class="logo-name">${element.logo_name}</p> 
            </div>
            
            `
        })

        footerSection.innerHTML = footerSection.innerHTML + `
        <div class="col-left name-container footer-container">
            <h1>${data.section_one.name}</h1>
            <h1>${data.section_one.surname}<h1>
        </div>
        <div>
            <h3 id="contact">contact</h3>
            <p>${data.section_one.mail}</p>
            <p>${data.section_one.phone}</p>
        </div>
        `
    }) 
}

getData();

