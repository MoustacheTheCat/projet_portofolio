const urlImg = '/img/picture/';

function createVue (){
    let mainVue = document.getElementById('main-vue');
    let divTitle = document.createElement('div');
    divTitle.setAttribute('class', 'div-title');
    let title = document.createElement('h1');
    let titleText = document.createTextNode('Titre du projet');
    title.appendChild(titleText);
    divTitle.appendChild(title);
    let divPicture = document.createElement('div');
    divPicture.setAttribute('class', 'div-picture-vue');
    let pictureLink = document.createElement('a');
    pictureLink.setAttribute('href', '#');
    let picture = document.createElement('img');
    picture.setAttribute('src', urlImg+'projet.jpg');
    picture.setAttribute('alt', 'photo du projet');
    pictureLink.appendChild(picture);
    divPicture.appendChild(pictureLink);
    let divDescription = document.createElement('div');
    divDescription.setAttribute('class', 'div-description-vue');
    let descriptionContent = document.createElement('p');
    let descriptionText = document.createTextNode('Lorem ipsum dolor sit amet. Quis test quisquam similique cumque magnam officia temporibus iusto sequi ipsum, eum enim exercitationem dolorem fugit nisi fuga ut, modi cum. Odit enim voluptatibus a distinctio! Facere nostrum ad deleniti voluptatibus eveniet.');
    descriptionContent.appendChild(descriptionText);
    divDescription.appendChild(descriptionContent);
    mainVue.appendChild(divTitle);
    mainVue.appendChild(divPicture);
    mainVue.appendChild(divDescription);
    return mainVue;
}

export {createVue};