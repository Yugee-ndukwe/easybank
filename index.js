let headerDetails = document.getElementsByClassName('row')[0];

let column1= document.createElement('div')
column1.className = 'col-11 col-lg-4 headerText'

let h1= document.createElement('h1')
h1.textContent = 'Next Generation Digital Banking'

let p =document.createElement('p')
p.textContent = 'Take your financial life online. Your Easybank account will be a non-stop shop for spending, saving, budgeting, investing, and much more.'

let button = document.createElement('button')
button.className = 'navBtn'
button.textContent = 'Request Invite'

column1.appendChild(h1);
column1.appendChild(p);
column1.appendChild(button);

let secondCol =  document.createElement('div')
secondCol.className= " col-10 col-lg-5  columnPix"


let mockUp = document.createElement('div')
mockUp.className = "mockUp"

let mockUpImg = document.createElement('img')
mockUpImg.src= 'images/image-mockups.png'
mockUpImg.alt = 'mockup'

// imgContainer.appendChild(svgImg);
mockUp.appendChild(mockUpImg)

// column2.appendChild(imgContainer);
secondCol.appendChild(mockUp);

headerDetails.appendChild(column1)
headerDetails.appendChild(secondCol)

// Main section
let items = [
    {
        image : 'images/icon-online.svg',
        heading: 'Online Banking',
        text :  "Our modern web and mobile applications allow you to track your finances wherever in the world."

    },

    {
        image : 'images/icon-budgeting.svg',
        heading: 'Simple Budgeting',
        text :  "See exactly where your money goes. Recieve notification each month when you're close to hitting your limit."

    },

    {
        image : 'images/icon-onboarding.svg',
        heading: 'Fast Onboarding',
        text :  "We don't do braches. Open your account in a minute and start taking controlof your finances right away."

    },

    {
        image : 'images/icon-api.svg',
        heading: 'Open Api',
        text :  "Manage your savings, pension and much more from one account. Tracking your finance has never been easier."

    },
]

// Create the main element
let main = document.createElement('main');
main.className = "main-section"

// Initialize the HTML content with the container and the row
let htmlContent = `
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-lg-11 my-5">
            <h2>Why Choose Easybank?</h2>
            <p>We leverage open banking to turn your bank account into your financial hub.</br> Control your finance like never before.</p>
        </div>`;

// Loop through the items array to create cards
items.forEach(item => {
    htmlContent += `
    <div class="col-11 col-lg-3 py-3">
        <div class="card">
            <img src="${item.image}" class="card-img-top" alt="${item.heading}">
            <div class="card-body">
                <h5 class="card-title">${item.heading}</h5>
                <p class="card-text">${item.text}</p>
            </div>
        </div>
    </div>`;
});

// Close the row and container divs
htmlContent += `
    </div> <!-- End of row -->
</div> <!-- End of container-fluid -->
`;

// Set the innerHTML of the main element
main.innerHTML = htmlContent;

// Append the main element to the body or another container
document.body.appendChild(main);
let mainContent = document.querySelector('.main-content' )


// Latest Article Section
let latestArticle =[
    {
        image : 'images/image-currency.jpg',
        author: 'By Wilson Hutton',
        heading: 'Recieve money in any currency with no fee.',
        text :  "The world is getting smaller and we're becoming more mobile. So why should you be forced to recieve money in a single..." 
    },
    
    {
        image : 'images/image-restaurant.jpg',
        author: 'By Wilson Hutton',
        heading: 'Treat yourself without worrying about money',
        text :  "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..." 
    },

    {
        image : 'images/image-plane.jpg',
        author: 'By Wilson Hutton',
        heading: 'Take your easybank card wherever you go',
        text :  "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We will even..." 
    },

    {
        image : 'images/image-confetti.jpg',
        author: 'By Wilson Hutton',
        heading: 'Our invite-only beta accounts are now live!',
        text :  "After a lot of hardwork by the whole team, We're excited to launch our closed beta. It's easy to request an invite through the site..." 
    }, 

]

let articleSection = document.createElement("div")
articleSection.className= 'article'

let articleContent =`<div class = "container-fluid py-4">
<div class = "row py-4">
<h2>Latest Articles</h2>`;

latestArticle.forEach(article=>{
    articleContent += `
     <div class="col-11 col-lg-3 py-3">
        <div class="card-item">
        
            <img src="${article.image}" class="card-img-top" alt="${article.heading}">
             
           
            <div class="body">
            <span>${article.author}</span>
                <h5 class="title">${article.heading}</h5>
                <p class="text">${article.text}</p>
            </div>
        </div>
    </div>`;
    
})
articleSection.innerHTML = articleContent

document.body.appendChild(articleSection)



// Footer Section
let footerSection = document.createElement("footer");
footerSection.className = "footer-section";
footerSection.innerHTML = `
  <div class= 'footer-logo'>
    <img src='images/logo.svg' alt='logo'>
  </div>
`;

let footerContainer = document.createElement('div');
footerContainer.className = 'container-fluid';

let footerRow = document.createElement('div');
footerRow.className = 'row align-items-center';

let footerCol1 = document.createElement('div');
footerCol1.className = 'col-10 col-lg-4';

let social = document.createElement('div');
social.className = 'icon-container'
let socialImages = [
  { src: 'images/icon-facebook.svg', alt: 'facebook' },
  { src: 'images/icon-youtube.svg', alt: 'youtube' },
  { src: 'images/icon-twitter.svg', alt: 'twitter' },
  { src: 'images/icon-pinterest.svg', alt: 'pinterest' },
  { src: 'images/icon-instagram.svg', alt: 'instagram' }
];

socialImages.forEach(image => {
  let socialImg = document.createElement('img');
  socialImg.src = image.src;
  socialImg.alt = image.alt;
  socialImg.className = 'social-icon'
  social.appendChild(socialImg);
});

footerCol1.appendChild(social);
footerRow.appendChild(footerCol1);
footerContainer.appendChild(footerRow);
footerSection.appendChild(footerContainer);

// Adding a list of items to a new column
let footerCol2 = document.createElement('div');
footerCol2.className = 'col-10 col-lg-4';

let footerList = document.createElement('ul');
footerList.className = 'list-container'

let li = document.createElement('li');
li.className = 'list-item';

let div1 = document.createElement('div');
div1.className = 'list-one'
let listItem1 = [
    "About Us",
  "Contact",
  "Blog",
]

listItem1.forEach(item =>{
 let firstItem =   document.createElement('p')
 firstItem.textContent = item
 div1.appendChild(firstItem);
})

let div2 = document.createElement('div')
div2.className = 'list-two'
let listItem2 = [
    "Careers",
  "Support",
  "Privacy Policy"
]

listItem2.forEach(items => {
    let secondItem = document.createElement('p')
    secondItem.textContent = items
    div2.appendChild(secondItem);

})

li.appendChild(div1)
li.appendChild(div2)

footerList.appendChild(li)


footerCol2.appendChild(footerList);
footerRow.appendChild(footerCol2);

let footerCol3 = document.createElement('div')
footerCol3.className = 'col-10 col-lg-4 footer-button';
footerCol3.appendChild(button)


footerRow.appendChild(footerCol3)

let copyright = document.createElement('div')
copyright.className = 'col-10 col-lg-10'
let copyrightText = document.createElement('p')
copyright.className ='copyright'
copyrightText.innerHTML = "&#169; Easybank. All Rights Reserved"

copyright.appendChild(copyrightText)
footerContainer.appendChild(copyright);

// Append footer section to body
document.body.appendChild(footerSection);








