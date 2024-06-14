import self from "../img/poto-yazid2.jpeg"
import mock1 from "../img/project-1.png"
import mock2 from "../img/project-2.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Yazid Mufid",
    lastName: "",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Frontend Development",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Indonesian'
        },
        {
            emoji: "💼",
            text: "Mahasantri on PeTIK II Jombang"
        },
        {
            emoji: "📧",
            text: "theonlyyxzid@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/yyxxzz.d/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "hhttps://github.com/yazidmufid05",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/yazid-mufid-08b174290/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/ymufid12",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "👋 Halo, Saya Moch. Yazid Syahrilo Mufid, atau lebih akrab disapa Yazid Mufid dalam dunia pemrograman. Saya adalah seorang pengembang frontend dengan dedikasi tinggi untuk menciptakan pengalaman pengguna yang luar biasa. Dengan latar belakang pendidikan dan pengalaman praktis, saya telah mengembangkan keterampilan dalam desain responsif, pengembangan antarmuka pengguna yang intuitif, dan implementasi solusi kreatif untuk tantangan teknis.",
    skills:
        {
            proficientWith: ['javascript', 'react',  'github', 'bootstrap', 'html5', 'css', 'figma', 'laravel'],
            exposedTo: ['reactjs', 'php']
        }
    ,
    hobbies: [
        {
            label: 'Gamers',
            emoji: '🎮'
        },
        {
            label: 'Coffee',
            emoji: '☕'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Coding',
            emoji: '💻'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://portofolio-yazid-mufid.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/yazidmufid05/cv-yazid", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://film-yazid-cinema.vercel.app/",
            source: "https://github.com/yazidmufid05/my-film",
            image: mock2
        },
    ]
}
