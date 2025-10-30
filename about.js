// Navigation
const nav = d3.select("body").append("nav");
nav.append("a").attr("href", "index.html").text("Home");
nav.append("span").text(" | ");
nav.append("a").attr("href", "about.html").text("More Details");

// Smaller heading than Home (use h2 here)
d3.select("body").append("h2").text("More About My Golf Interest");

// 200+ word descriptive text
d3.select("body").append("p").text(
  "Golf being such a complex game is a big reason why I fell in love with it. It is easily the most difficult sport I have ever played with a large barrier to entry with novice players taking a long time to really pick it up. The biggest part that many don’t think about is the mental side of the game. The ball and club face are both not very big and a slight wrist movement or miscue from your swing will cause the ball to go astray. Staying laser focused mentally is critical and one of the hardest parts of the game. I currently have a 10 handicap while my low was a 6.7 (back when I played daily). This means my potential is around 10 strokes over par, being my best rounds would be around 80-82 but my best is a 75 at 3 over par. Below I added a list of things I like to think about when I am playing. I am confident in my ball striking ability and the focus is on being consistent and playing smart above all else. Not trying to make the hero shots to make birdies and being content with pars and bogeys allows me to score better. The social aspect of golf is also an advantage. So much business occurs on the golf course and as I enter the finance world, being able to not only play but compete with anyone on the course is a critical skill."
);

// Image 2
d3.select("body")
  .append("img")
  .attr("src", "JL.jpg")
  .attr("alt", "Me and My Friend golfing two weeks ago");

// Simple list about the topic
const list = d3.select("body").append("ul");
[
  "Hitting more greens, not focusing on pin hunting",
  "Willing to put the driver away",
  "Eliminate 3 putts",
  "Stay inbounds"
].forEach(item => list.append("li").text(item));

// Custom styling
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: "Times New Roman";
    background-color: green;                
    color: white;                            
  }
`;
document.head.appendChild(style);