export const TAGS = {
    GODOT: {
        name: "Godot 4",
        class: "bg-[#478cbf]/20 text-[#8ec5e8]",
        icon: "lucide:gamepad-2",
    },
    GDSCRIPT: {
        name: "GDScript",
        class: "bg-[#478cbf]/20 text-[#8ec5e8]",
        icon: "lucide:code-2",
    },
    HTML: {
        name: "HTML5",
        class: "bg-[#e34f26]/20 text-[#ff8a65]",
        icon: "lucide:code",
    },
    CSS: {
        name: "CSS3",
        class: "bg-[#1572b6]/20 text-[#63b3ed]",
        icon: "lucide:palette",
    },
    FIREBASE: {
        name: "Firebase Hosting",
        class: "bg-[#ffca28]/20 text-[#ffd95a]",
        icon: "lucide:cloud",
    },
    GITHUB: {
        name: "Git & GitHub",
        class: "bg-white/10 text-gray-200",
        icon: "lucide:git-branch",
    },
    ANGULAR: {
        name: "Angular",
        class: "bg-[#dd0031]/20 text-[#ff6b81]",
        icon: "lucide:layers",
    },
    TYPESCRIPT: {
        name: "TypeScript",
        class: "bg-[#3178c6]/20 text-[#72b6ff]",
        icon: "lucide:code-2",
    },
    JAVA: {
        name: "Java",
        class: "bg-[#f89820]/20 text-[#ffb866]",
        icon: "lucide:coffee",
    },
    SPRING: {
        name: "Spring Boot",
        class: "bg-[#6db33f]/20 text-[#a9d98a]",
        icon: "lucide:leaf",
    },
    MYSQL: {
        name: "MySQL",
        class: "bg-[#00758f]/20 text-[#68c8d9]",
        icon: "lucide:database",
    },
};

export const PROJECTS = [
    {
        title: "Rojita Run",
        description:
            "A 2D endless runner developed from scratch with Godot 4 and GDScript. Designed, programmed, tested and published independently for Windows and HTML5.",
        link: "https://yaelnmr.itch.io/rojita-run",
        linkLabel: "Play",
        github: "https://github.com/YaelNmr",
        image: "/projects/rojita-run.gif",
        tags: [TAGS.GODOT, TAGS.GDSCRIPT],
    },
    {
        title: "Kuma Happy Moments",
        description:
            "A responsive website and digital product catalog developed for a local creative business. Built with HTML5 and CSS3, version-controlled with Git and GitHub, and deployed with Firebase Hosting.",
        link: "https://kuma-rosario.web.app/",
        linkLabel: "Live Site",
        github: "https://github.com/YaelNmr/WebKuma",
        image: "/projects/kuma-happy-moments.png",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.FIREBASE, TAGS.GITHUB],
    },
    {
        title: "Full Stack Personal Portfolio",
        description:
            "A full-stack personal portfolio developed as the final project of my web development training. Built with Angular and TypeScript on the frontend, with a Java and Spring Boot REST API and a MySQL relational database. Includes administrator authentication and CRUD operations for managing portfolio content.",
        link: "https://portfolio-yael.web.app/",
        frontend: "https://github.com/YaelNmr/FrontEnd",
        backend: "https://github.com/YaelNmr/Proyecto",
        image: "/projects/full-stack-portfolio.webp",
        tags: [
            TAGS.ANGULAR,
            TAGS.TYPESCRIPT,
            TAGS.JAVA,
            TAGS.SPRING,
            TAGS.MYSQL,
        ],
        linkLabel: "Live Site",
    },
];
