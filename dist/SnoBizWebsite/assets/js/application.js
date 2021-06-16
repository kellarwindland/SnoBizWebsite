$(window).scroll(function() {
  if($(this).scrollTop() == 0) {
      $('#to-top').fadeOut();
  } else if (isVisible($('footer'))) {
      $('#to-top').css('position','absolute');
  } else {
      $('#to-top').css('position','fixed');
      $('#to-top').fadeIn();
      
  }
});

function isVisible(elment) {
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elment).offset().top;

    return y <= (vpH + st);
}

var flavors = [
  "Apple Cider", "Apple Pie A La Mode", "Apple Tart", "Aquamarine Surf", "Bahama Mama", "Banana Berry", "Banana Crème Pie", "Banana Split", "Banango", "BanAppleBerry", "Bart Juice", "Batman", "Berries", "Berry Burst", "Berry Tart", "Big League Chew", "Big Red", "Big Sour", "Big Stick", "Blackberry Cobbler", "Blue Hawaii", "Blueberries & Crème", "Blueberry Cobbler", "Blueberry Colada", "Blueberry Daiquiri", "Blueberry Pomegranate", "Blue's Clues ", "Bulldog Power", "Bullfrog in a Blender", "Burst of Sunshine", "Buzz", "California Surf", "Candy Apple", "Cantaloupe~N~Crème", "Caribbean Rush", "Carmel Apple", "Caramel Apple Pop", "Cherry Bomb", "Cherry Cola", "Cherry Delite", "Cherry Lime", "Cherry Limeade", "Cherry Pie", "Chocolate Coconut Bar", "Chocolate Covered Cherries", "Cinnamint", "Circus", "Citrus Twist", "Coconut Crème Pie", "Cody's Cupcake", "Colada", "Coolio", "Cotton Candy Dream", "Curious George", "Crème Soda", "Cremesicle", "Crusher", "Daiquiri Base", "Darth Vader", "Dr. Sno", "Dracula", "Eifel Rhodes", "Electric Lemonade", "Flag", "Fruit Punch", "Fruit Rollups", "Fudgesicle", "Fuzzy Naval", "Fuzzy Tiger", "Georgia Peach", "Hawaiian Chill", "Hawaiian Delight", "Hawaiian Dream", "Homemade Ice Cream", "Hula Cooler", "Hurricane", "Island Breeze", "Jamaica Joe", "Jamaican Me Crazy", "Jaws", "Jazzy ", "Juice", "Juicy Fruit", "Key Lime Pie", "Kryptonite", "Lauren", "Lemon Meringue Pie", "Lifesavers", "Lindsey", "Lover's Delight", "Mai Tai", "Mama Tiger", "Mangorita", "Mars", "Maui Dream", "McNasty", "Miami Vice", "Mint Chocolate Chip", "Mister Joe", "Monster", "Mountaineer", "Mox on the Rox", "Nerds", "Ocean Breeze", "Orange Burst", "Orchid Blossom", "Palm Tree", "Palooza", "Panama Sky", "Passion Delight", "Peach Cinnamon", "Peaches and Crème", "Peachy Keen", "Phantom", "Pineango", "Pineapple Upside Down Cake", "Pineapple Willy", "Pink Flamingo", "Pirate", "Pixie Stix", "Poison Ivy", "Polynesian Pineapple", "Pom-A-Cherry", "Pucker", "Purple Hawaii", "Purple Passion", "Rainbow", "Raspberry Colada", "Raspberry Daiquiri", "Raspberry Lemonade", "Rattlesnake", "Rave ", "Razzle Dazzle", "Red Dragon ", "Red Fox", "Red Hots", "Reese Cup", "Revenge of the Nerds", "Rhythm & Blues", "Rock-N-Roll", "Romeo", "Root Beer Float", "Rotten Apple", "Sahara", "Sea Breeze", "The Shannon", "Shark Attack", "Skittles", "Snapping Turtle ", "Sour Skittles", "Spiced Rum", "SpongeBob", "Strawberries & Crème", "Strawberry Shortcake", "Strawmagranate", "Sunrae", "Sunrise", "Sunset", "Sunshine Dream", "Superman", "Superman Returns", "Surfin' Smurf", "Sweet & Sour", "Sweet Tart", "Tangerango", "Teek", "Texas Twister", "Tidal Wave", "Tigers Blood", "Toasted Coconut", "Tooth Paste", "Trash", "T-Rex", "Tropical Blast", "Turtle Power", "Twilight", "Tye Dye", "Vanilla Mint", "Very Berry", "Volcano", "Warp Speed", "Wedding Cake", "Wedgie", "Weekend at the Beach", "Wild Thing", "Wing It", "Yellow Brick Road", "Yoda", "Yoda in a Blender"
]

function newFlavor() {
  var randomNumber = Math.floor(Math.random() * (flavors.length));
  document.getElementById('flavorDisplayP').innerHTML = flavors[randomNumber];
  document.getElementById('flavorDisplayB').hidden = false;
  document.getElementById('flavorDisplayB').innerHTML = "Go to " + flavors[randomNumber];
}

function scrollFlavor() {
  var h5Tags = document.getElementsByTagName("h5");
  var name = document.getElementById('flavorDisplayP').innerText;
  for (var i = 0; i < h5Tags.length; i++) {
    if (h5Tags[i].textContent == name) {
      h5Tags[i].scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
      });
      break;
    }
  }
}

function scrollView(){
  var element = document.getElementById('flavorDisplayJ');
  $('html,body').animate({
    scrollTop: $(element).offset().top},
    'fast');
}