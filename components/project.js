import $ from 'jquery';
import { yourProject } from '../assets/js/option';

function setProject(){
    $('#third-section')
        .append(`
            <div class="section-title">
                <h2>${yourProject.title}</h2>
            </div>`)
        .append(`
            <div class="third-section-lists"></div>
        `);
    for(let i = 0;i < yourProject.obj.length;i++){
        $('.third-section-lists')
            .append(`
                <a href="${yourProject.obj[i].link}">
                    <img src="${yourProject.obj[i].img}" alt="project-img">
                    <header>
                        <h3>${yourProject.obj[i].title}</h3>
                        <p>${yourProject.obj[i].text}</p>
                    </header>
                </a>
            `);
    }
}

export { setProject }