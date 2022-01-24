// Fetching filter buttons

let All = document.querySelector('.All');
let Design = document.querySelector('.Design');
let Branding = document.querySelector('.Branding');
let Apps = document.querySelector('.Apps');

// Fetching ul & li's

let Holder = document.querySelector('.Holder');
let items = Holder.getElementsByTagName('li');



// Fetching display area
let portfolioSpace = document.querySelector('.portfolio-space');

// Fetching portfolio classes
let DesignsMade = document.querySelector('.DesignsMade');
let AppsMade = document.querySelector('.AppsMade');
let BrandsCreated = document.querySelector('.BrandsCreated');





All.addEventListener('click', () => {
  for(let i = 0; i < items.length; i++) {
    items[i].classList.remove('hide-work');
  }
});

Design.addEventListener('click', () => {
  for(let i = 0; i < items.length; i++) {
    items[i].classList.remove('hide-work');
    if(items[i].classList != 'DesignsMade') {
      items[i].classList.add('hide-work');
    }
  }
});

Branding.addEventListener('click', () => {
  for(let i = 0; i < items.length; i++) {
    items[i].classList.remove('hide-work');
    if(items[i].classList != 'BrandsCreated') {
      items[i].classList.add('hide-work');
    }
  }
});

Apps.addEventListener('click', () => {
  for(let i = 0; i < items.length; i++) {
    items[i].classList.remove('hide-work');
    if(items[i].classList != 'AppsMade') {
      items[i].classList.add('hide-work');
    }
  }
});

/* 
  * personal access token github
  * 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
*/