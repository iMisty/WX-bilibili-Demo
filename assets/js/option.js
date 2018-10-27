var header = new Object();
var introduce = new Object();
var advantage = new Object();
var yourProject = new Object();
var github = new Object();
var about = new Object();
var socialIcon = new Object();

var logo = ['text','Miya Carnival'];

var navList = [
    {
        link: '#first-section',
        value: '简介'
    },    
    {
        link: '#third-section',
        value: '作品'
    },    
    {
        link: '#forth-section',
        value: '关于'
    },    
    {
        link: '#',
        value: '施工中'
    }
];


header.title = 'Miya Carnival';
header.text = '路过的熟悉，如同有你，已无转身的距离';

introduce.text = 'Miya Carnival 是一套基于 BootStrap 与 Vue 的模板,只为内容渲染';

advantage = [
    {
        icon: 'fa-flag',
        title: '可选的组件化工程',
        text: '组件化的配置使得部署一个站点变得非常简单,只需要选择想要的组件,再设置喜欢的颜色样式即可完成'
    },
    {
        icon: 'fa-home',
        title: '多用途页面配置',
        text: '简单配置一个页面,无论企业网站还是博客网站,亦或是定价展示等,在这里都可以实现'
    },
    {
        icon: 'fa-map',
        title: '示例页面和站点',
        text: '如果只是为了产品或内容的展示或寻找合适的idea,您完全可以根据我们提供的示例页面来设置操作'
    }
]

yourProject.title = '近期作品';
yourProject.obj = [
    {
        link: 'https://Miya-Yukarin.github.io/Nekomimi/',
        img: 'assets/imgs/project1.png',
        title: 'Nekomimi-多功能导航页',
        text: 'Nekomimi是一个简洁的导航页,可用于博客起始页面或固定内容落地页'
    },
    {
        link: 'https://Miya-Yukarin.github.io/LandingPage/',
        img: 'assets/imgs/project2.png',
        title: 'LandingPage-简洁起始页',
        text: 'LandingPage是一个导航单页,仅输出标题与导航,无任何其他功能,回归简洁'
    },
    {
        link: 'https://Miya-Yukarin.github.io/HTML-MinResume/',
        img: 'assets/imgs/project3.png',
        title: 'Resume-个人简历项目',
        text: 'Resume是基于Bootstrap的个人简历项目,纯粹为展示内容而生'
    }
];

github.title = '关于本项目';
github.leftTitle = '免费且开源的模板';
github.leftText = '本页面为开源模板,您可以随意修改并发布为您自己的网站页面';
github.buttonLinks = 'https://github.com/Miya-Yukarin/Miya-Yukarin';
github.rightTitle = '使用该模板您将获得';
github.rightLists = ['6种不同的模板可自由组合','可快速部署于您的服务器','可自定义的组件列表','60个以上的组件','承诺不断更新'];

about.title = '关于我们';
about.text = '具体的名字其实还没想好<br>我们是一个新成立的社团<br>虽然来自不同的领域<br>但是由于共同的爱好走到了一起<br>我们刚刚起步,请多指教'

socialIcon = [
    {
        link: 'https://github.com/Miya-Yukarin',
        icon: 'fa-github'
    },
    {
        link: '#',
        icon: 'fa-twitter'
    },
    {
        link: '#',
        icon: 'fa-behance'
    }
];

export { logo,navList,header,introduce,advantage,yourProject,github,about,socialIcon}