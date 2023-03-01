let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  const newTitle = document.getElementById('main-title');
  newTitle.textContent = 'Doms Website';
  
    // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor = ('green');
  
    // Part 3
  const favThings = document.getElementById('favorite-things');
  console.log(favThings);
  
  favThings.lastElementChild.remove();
  console.log(favThings);
  
    // Part 4
  specialTitle = document.querySelectorAll('.special-title');
  console.log(specialTitle);
  
  specialTitle.forEach(title => {
    title.style.fontSize = '2rem';
  });
  
    // Part 5
  const domRaces = document.getElementById('past-races')
  console.log(pastRaces);
  domRaces.children[3].remove();
  
    // Part 6
  const li = document.createElement('li');
  li.textContent = 'Orange';
  console.log(li);
  domRaces.appendChild(li);
  
    // Part 7
  const orangeDiv = document.createElement('div');
  orangeDiv.className = ('blog-post');
  const orangeHeader = document.createElement('h1');
  orangeHeader.textContent = 'City of Orange';
  
  
  
  
    // Part 8
  const quoteTitle = document.getElementById('quote-title');
  quoteTitle.addEventListener('click', randomQuote);
  
    // Part 9
  const blogPost = document.querySelectorAll('.blog-post');
  console.log(blogPost);
  blogPost.forEach(div => {
    div.addEventListener('mouse', function(event) { 
      event.target.classList.toggle('purple');
    })
  })
  div.addEventListener('mouseenter', function(event) { 
    event.target.classList.toggle('red');
  })
  
  });
  