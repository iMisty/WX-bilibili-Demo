import $ from 'jquery';
import { github } from '../assets/js/option';

function setGithub(){
    $('#forth-section').append(`
            <div class="section-title">
                <h2>${github.title}</h2>
            </div>
            <div class="forth-section-wrap">
                <div class="forth-section-left">
                    <i class="fa fa-github fa-large"></i>
                    <h3>${github.leftTitle}</h3>
                    <p>${github.leftText}</p>
                    <div class="forth-section-button">
                        <a href="${github.buttonLinks}" target="view_window">
                            <button class="primany-button">View Demo On Github</button>
                        </a>
                        <a href="${github.buttonLinks}" target="view_window">
                            <button>
                                <i class="fa fa-star"> Star</i>
                            </button>
                        </a>
                        <a href="${github.buttonLinks}" target="view_window">
                            <button>
                                <i class="fa fa-code-fork"> Fork</i>
                            </button>
                        </a>
                    </div>
                </div>
                <div class="forth-section-right">
                    <h3>${github.rightTitle}</h3>
                    <ul class="forth-section-list">
                    </ul>
                </div>
            </div>
    `);

    for(let i = 0;i < github.rightLists.length;i++){
        $('.forth-section-list').append(`
        <li>
            <i class="fa fa-check green l-padding-1px"></i>
            <p>${github.rightLists[i]}</p>
        </li>`);
    }
}

export { setGithub }