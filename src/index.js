import mainPage from './mainPage';
import './style.css';
import mainPageBackground from './mainPageBackground.jpeg';
import aboutPage from './aboutPage.js';

const contentDiv=document.querySelector('#content');

    //**********************************headerDiv********************************************************************* */
    //this will be the same in all js files as it won't change
    const headerDiv=document.createElement('div');
    headerDiv.setAttribute('id','headerDiv');
    contentDiv.appendChild(headerDiv);

    //website title
    const h1Title=document.createElement('h1');
    h1Title.setAttribute('id','title');
    headerDiv.append(h1Title);
    h1Title.innerText="Falso Ristorante";

    //navbar
    const navbar=document.createElement('div');
    navbar.setAttribute('class','navbar');
    headerDiv.append(navbar);

    //navbar options

    const navbarHome=document.createElement('button');
    navbarHome.setAttribute('class','navbarElement');
    navbarHome.setAttribute('id','navbarHome');
    navbar.append(navbarHome);
    navbarHome.innerText='Home';

    const navbarAbout=document.createElement('button');
    navbarAbout.setAttribute('class','navbarElement');
    navbarAbout.setAttribute('id','navbarAbout');
    navbar.append(navbarAbout);
    navbarAbout.innerText='About';

    const homeButton=document.querySelector('#navbarHome');
    const aboutButton=document.querySelector('#navbarAbout');

    //content
    const contentBody=document.createElement('div');
    contentDiv.append(contentBody);
    contentBody.setAttribute('id','contentBody');


    mainPage(); //default setting

    homeButton.onclick = function(){
        contentBody.innerHTML='';
        mainPage();
    };

    aboutButton.onclick = function(){
        contentBody.innerHTML='';
        aboutPage();
    };


    //**************************************************************************************************************** */

