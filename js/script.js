// url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');



// body

document.body.style.background = 'hsl(217, 54%, 11%)';
document.body.style.fontFamily = ' "Outfit", sans-serif';
document.body.style.display = 'flex';
document.body.style.fontSize = '18px';



// div

const div = document.getElementById('wrapper');
div.style.background = 'hsl(216, 50%, 16%)';
div.style.width = '375px';
div.style.borderRadius = '15px';
div.style.backgroundColor = 'rgb(27 , 46 , 73)';
div.style.boxShadow = '0px 20px 25px 15px rgba(0,0,0,0.30)';
div.style.padding = '20px';
div.style.fontFamily = '"Outfit", sans-serif';
div.style.marginTop = '100px';
div.style.scrollMarginBottom = '100px';
div.style.fontSize = '23px';
div.style.margin = 'auto';


// cardimg

const cardimg = document.createElement('img');
cardimg.setAttribute( 'src', 'image/image-equilibrium.jpg' );
wrapper.prepend(cardimg);
cardimg.style.width = '100%';
cardimg.style.marginBottom = '25px'
cardimg.style.alignItems = 'center';
cardimg.style.borderRadius = '15px';


// title text

const title = document.createElement('a');
title.href = '#';
title.innerText = ' Equilibrium #3429 ';
title.style.color = 'white';
title.style.fontSize = '30px';
title.style.textDecoration = 'none';
title.style.fontWeight = '600';
wrapper.append(title);


// text 'p'

const text = document.createElement('p');
text.innerText = 'Our Equilibrium collection promotes balance and calm.';
text.style.color = 'hsl(215, 51%, 70%)';
text.style.lineHeight = '30px'
wrapper.append(text);


// iconPrice

const icon = document.createElement('img');
icon.setAttribute( 'src', 'image/icon-ethereum.svg');
wrapper.append(icon);
icon.style.marginRight = '5px'


// icon priceText

const priceText = document.createElement('strong');
priceText.innerText = '0.041 ETH';
priceText.style.color = 'hsl(178, 100%, 50%)';
priceText.style.fontSize = '21px'
wrapper.append(priceText);


// iconClock

const icon2 = document.createElement('img');
icon2.setAttribute( 'src', 'image/icon-clock.svg');
wrapper.append(icon2);
icon2.style.marginRight = '5px';
//icon2.style.width = '20px';
icon2.style.height = '20px';
icon2.style.margin = '12px, -80px, 0px, 0px';


// timeText

const timeText = document.createElement('p2');
timeText.innerText = '3 days left';
timeText.style.color = 'hsl(215, 51%, 70%)';
timeText.style.fontSize = '23px';
timeText.style.fontFamily = 'Outfit';
timeText.style.margin = '65px';
//timeText.style.display = 'flex'
//timeText.style.alignItems = 'center';
wrapper.append(timeText);


// line 

const line = document.createElement('hr');
line.style.width = '100%';
line.style.color = 'hsl(215, 32%, 27%)';
line.style.marginTop = '25px'; 
line.style.border = 'solid 1px'
wrapper.append(line);

// const line2 = line.cloneNode(true);
// wrapper2.append(line2);


//avatar

const avatar = document.createElement('img');
avatar.setAttribute( 'src', 'image/image-avatar.png');
avatar.style.width = '40px';
avatar.style.borderRadius = '50%';
avatar.style.height = '40px';
avatar.style.border = '1px solid white';
avatar.style.padding = '2px';
wrapper.append(avatar);


// author 

const author = document.createElement('span');
author.innerText = 'Creation of';
author.style.color = 'hsl(215, 51%, 70%)';
author.style.fontWeight = 'bold';
author.style.fontSize = '20px';
author.style.fontFamily = 'Outfit';
author.style.marginLeft = '20px';
//author.style.display = 'inline';
wrapper.append(author);


// authorName

const authorName = document.createElement('span');
authorName.innerText = 'Jules Wyvern';
authorName.style.color = 'white';
authorName.style.marginLeft = '15px';
authorName.style.fontSize = '20px';
//authorName.style.display = 'inline';
wrapper.append(authorName);




//alert("Я оцениваю свою работу на 100 баллов");

















