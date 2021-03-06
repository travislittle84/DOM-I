const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Update nav menu
let navItems = document.querySelectorAll("nav a");
for (var i = 0; i < navItems.length; i++){
  navItems[i].innerText = siteContent["nav"][`nav-item-${i+1}`];
};

// Change Nav BG color
let headerElement = document.querySelector("header");
headerElement.style.backgroundColor = "green";

// Add 2 new items
let navElement = document.querySelector("nav");

//---- Home nav item
let newNavHome = document.createElement("a");
newNavHome.setAttribute("href","#");
newNavHome.innerHTML = "Home";
navElement.prepend(newNavHome);

//---- Support nav item
let newNavSupport = document.createElement("a");
newNavSupport.setAttribute("href","#");
newNavSupport.innerHTML = "Support";
navElement.appendChild(newNavSupport);

// Top CTA section

// CTA Image
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Update CTA Text
let headerText = document.querySelector(".cta-text h1");
headerText.textContent = siteContent["cta"]["h1"];

// CTA button
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerText = siteContent["cta"]["button"];

// Top content
let topH4 = document.querySelectorAll(".top-content .text-content h4");
topH4[0].textContent = siteContent["main-content"]["features-h4"]; // features h4
topH4[1].textContent = siteContent["main-content"]["about-h4"]; // about h4

let topContent = document.querySelectorAll(".top-content .text-content p");
topContent[0].textContent = siteContent["main-content"]["features-content"];
topContent[1].textContent = siteContent["main-content"]["about-content"];

// Middle
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom content
let bottomH4 = document.querySelectorAll(".bottom-content .text-content h4");
bottomH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomH4[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContent = document.querySelectorAll(".bottom-content .text-content p");
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

// Contact
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactContent = document.querySelectorAll(".contact p");
contactContent[0].innerText = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

// Footer Copyright
let copyright = document.querySelector("footer p");
copyright.innerHTML = siteContent["footer"]["copyright"];

// STRETCH STUFF - comment out to see MVP

// Change style
let slowMode = false;
let theBody = document.getElementsByTagName('body');
theBody[0].style.backgroundColor = 'black';
theBody[0].style.color = 'slategrey';

ctaButton.innerHTML = 'Click me!';

headerElement.style.backgroundColor = 'slategrey';

headerNav = document.querySelector('header nav');
headerNav.style.justifyContent = 'space-around';

let mainContainer = document.querySelector('.container');
mainContainer.style.width = '98%';

let newButton = document.createElement('button');
newButton.innerHTML = "56k Mode";

let ctaText = document.querySelector('.cta-text');

ctaButton.addEventListener('click', (event) => {
  ctaText.append(newButton);
});

const toggleSlowMode = function() {
  let allImages;
  if (!slowMode) {
      allImages = document.getElementsByTagName('img');
      allImages = Array.from(allImages);
      allImages.forEach(function(image){
      image.style.display = 'none';
      slowMode = true;
    });
  } else {
      allImages = document.getElementsByTagName('img');
      allImages = Array.from(allImages);
      allImages.forEach(function(image){
      image.style.display = 'initial';
      slowMode = false;
    });
  };
}

newButton.addEventListener('click',(event) => {
  toggleSlowMode();  
});




