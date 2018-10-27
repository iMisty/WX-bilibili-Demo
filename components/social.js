import $ from 'jquery';
import { socialIcon } from '../assets/js/option';

function setSocial(){
    for(let i = 0;i < socialIcon.length;i++){
        $('.footer-social-button').append(`
            <a href="${socialIcon[i].link}">
                <i class="fa fa-2x ${socialIcon[i].icon}"></i>
            </a>
        `);
    }
}

export { setSocial }