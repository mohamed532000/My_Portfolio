// element in my nav bar to calc height of my website by the height of this elemnet
let elemnetInNavBar = document.querySelector(".number-of-height")

let personImg = document.getElementById("personImg");
let aboutSection = document.getElementById("About-section");
let servicesSection = document.getElementById("Services-section");
let worksSection = document.getElementById("Works-section");
let blogsSection = document.getElementById("Blogs-section");
let contactSection = document.getElementById("Contact-section");


let aboutImg = document.getElementById("aboutImg");
let aboutText = document.getElementById("aboutText");
let aboutOthersDivs = document.querySelectorAll(".others .other-div");

let servicesBoxes = document.querySelectorAll(".container .service-box");

let worksBoxes = document.querySelectorAll(".container .work-box");

let blogsBoxes = document.querySelectorAll(".container .blog-box");

let contactBoxes = document.querySelectorAll(".container .contact-box");

window.onload = ()=>{
    personImg.style.opacity = 1
};


window.onscroll = ()=>{

    // طرحنا قيمه ال clientHeight علشان لما نوصل لاخر الاسكرول في الموقع هيبقا فاضل عندنا الجزء الامامي فا مش هتعرف تعمل سكرول تاني علشان هنبقا وصلنا لاخر الموقع اصلا

    let myHeightWithoutClientHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrollTop = document.documentElement.scrollTop;
    let calcHeight = scrollTop / myHeightWithoutClientHeight ;

    elemnetInNavBar.style.height = `${calcHeight * 100}%`



    if(window.scrollY >= aboutImg.offsetTop + 200) {
        aboutImg.style.left = 0;
        aboutImg.style.opacity = 1;

        aboutText.style.right = 0;
        aboutText.style.opacity = 1;

        aboutOthersDivs.forEach((otherDiv)=>{
            otherDiv.style.left = 0;
            otherDiv.style.opacity = 1;
        })
    };

    if(window.scrollY >= servicesSection.offsetTop + 50) {

        servicesBoxes.forEach((servBox)=>{
            servBox.style.right = 0;
            servBox.style.opacity = 1;
        })
    };


    if(window.scrollY >= worksSection.offsetTop + 50) {

        worksBoxes.forEach((workBox)=>{
            workBox.style.transform = "translateY(0)";
            workBox.style.opacity = 1;
        })
    };

    if(window.scrollY >= blogsSection.offsetTop + 50) {

        blogsBoxes.forEach((blogBox)=>{
            blogBox.style.left = 0;
            blogBox.style.opacity = 1;
        })
    };

    if(window.scrollY >= contactSection.offsetTop + 50) {

        contactBoxes.forEach((contactBox)=>{
            contactBox.style.transform = "translateY(0)";
            contactBox.style.opacity = 1;
        })
    };
}