

// Navigation
const nav = d3.select("body").append("nav");
nav.append("a").attr("href", "index.html").text("Home");
nav.append("span").text(" | ");
nav.append("a").attr("href", "about.html").text("More Details");

// Header
d3.select("body")
  .append("h1")
  .text("Welcome to My Website");

// Paragraph (200+ words)
d3.select("body")
  .append("p")
  .text("My Name is Sam Gioffre and I am a rising senior here at Northeastern with a Finance Major and a Data Science Minor. My interest for this section is golf. I have been playing golf for nearly my entire life. I grew up in camps and didn't love the game. I was a big baseball player and didn't have too much time to play when I was 8-14 due time constraints. However, once COVID hit and baseball was cancelled, I fell back in love with golf. I started working at a golf course and was able to play unlimited free golf and I absolutely loved it. I decided to quit baseball and focus on tennis which also left much more time for golf. Around this time my parents also decided to buy a house on a golf course in Florida which further my addiction as we lived there for a few months during COVID school. I joined the golf team my senior year of high school and still to this day love to play more casually with my friends and my family. I love being able to get outside for a few hours and get exercise in a less intense manor than I am used to.")
// Image
d3.select("body")
  .append("img")
  .attr("src", "golfcourse.jpg")
  .attr("alt", "Golf Course");

  // Contact section with link
d3.select("body")
  .append("h2")
  .text("Contact");

d3.select("body")
  .append("p")
  .append("a")
  .attr("href", "mailto:gioffre.s@northeastern.edu")
  .text("Email: gioffre.s@northeastern.edu");


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
