const contentDiv=document.querySelector('#content');
import mainPageBackground from './mainPageBackground.jpeg';

function mainPage(){
    
        const contentBackground=new Image();
        contentBackground.src=mainPageBackground;
        contentBody.style.backgroundImage='contentBackground';
    
        contentBody.innerHTML='This is the main page';
}

export default mainPage;