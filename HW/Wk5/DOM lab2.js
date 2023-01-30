// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let maiinEl = document.querySelector('main');

maiinEl.style.backgroundColor = 'var(--main-bg)';
maiinEl.innerHTML = '<h1>SEI Rocks!</h1>';
maiinEl.classList.add('flex-ctr');

let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = '--top-menu-bg';
topMenuEl.classList.add('flex-around')

//create an a element and add an href attribute with value set to href property of "link" object

let i= document.createElement ('a')
<a href = "link"></a>

document.topMenuEl.appendChild(a)


//i do not see a link object. 

let subMenuEl =document.getElementsByName('subMenuEl');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = '--top-menu-bg';
subMenuEl.classList.add('flex-around');

