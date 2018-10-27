import $ from 'jquery';
import {navList,logo} from '../assets/js/option';

function setNavigation(){
    if(logo[0] == 'text'){
        $('.logo').append(`<a href="#" class="header-logo-name">${logo[1]}</a>`);
    }
    for(let i = 0;i < navList.length;i++){
        $('.navlist').append(`<li><a href="${navList[i].link}">${navList[i].value}</a></li>`);
    }
}


export {setNavigation}