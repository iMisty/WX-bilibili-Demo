import { setNavigation } from '../../components/navigation';
import { setHeader } from '../../components/header';
import { setIntroduce } from '../../components/introduce';
import { setAdvantage } from '../../components/advantage';
import { setProject } from '../../components/project';
import { setGithub } from '../../components/github';
import { setAbout } from '../../components/about';
import { setSocial } from '../../components/social';

function setTemplate(){
    setNavigation();
    setHeader();
    setIntroduce();
    setAdvantage();
    setProject();
    setGithub();
    setAbout();
    setSocial();
}

export { setTemplate }