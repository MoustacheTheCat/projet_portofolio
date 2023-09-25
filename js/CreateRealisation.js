const urlImg = '/img/picture/';
const nbArticle = 6;
function createRealisation (){
    let vueArticle = document.getElementById('vue-article');
    for (let a=1;a<=nbArticle;a++){
        let article = document.createElement('article');
        article.setAttribute('class', 'overlay-image');

        let linkVue = document.createElement('a');
        linkVue.setAttribute('href', 'page-vue.html');
        article.appendChild(linkVue);

        let picture = document.createElement('img');
        picture.setAttribute('src', urlImg+'projet-'+a+'.jpg');
        picture.setAttribute('alt', 'photo du projet');
        picture.setAttribute('class', 'image');
        linkVue.appendChild(picture);

        let divNormal = document.createElement('div');
        divNormal.setAttribute('class', 'normal');
        linkVue.appendChild(divNormal);

        let divH2 = document.createElement('div');
        divH2.setAttribute('class', 'text');
        let pictureTitle = document.createElement('h2');
        let textPictureTitle = document.createTextNode('Projet '+ a);
        pictureTitle.appendChild(textPictureTitle);
        divH2.appendChild(pictureTitle);
        divNormal.appendChild(divH2);


        let divHover = document.createElement('div');
        divHover.setAttribute('class', 'hover');
        linkVue.appendChild(divHover);


        let divTextHover = document.createElement('div');
        divTextHover.setAttribute('class', 'text');
        let textHover = document.createElement('p');
        let textContent =  document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, asperiores quis?');
        textHover.appendChild(textContent);
        divTextHover.appendChild(textHover);
        divHover.appendChild(divTextHover);
        
        vueArticle.appendChild(article);
    }
    return vueArticle;
}

createRealisation();