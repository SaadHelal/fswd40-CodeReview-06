var Music = [{
        Title: 'Dylan',
        Author: 'Bob Dylan',
        Genre: 'rock',
        Minutes: 34,
        Publisher: 'Columbia Records',
        Description: 'Dylan is the 13th studio album by American singer-songwriter Bob Dylan, released on November 19, 1973 by Columbia Records. Compiled and issued by the label with no input from Dylan himself, it contains no original Dylan songs, the material consisting of two outtakes from Self Portrait and another seven from New Morning. It followed the artists departure from Columbia for Asylum Records, and the announcement of his first major tour since 1966. ',
        img: "imgs/Bob_Dylan.jpg",
        Rating: 2
    },

    {
        Title: 'Diamond Life',
        Author: 'Sade',
        Genre: 'smooth soul',
        Minutes: 45,
        Publisher: 'Epic',
        Description: 'Diamond Life is the debut studio album by English band Sade.It was first released in the United Kingdom on 16 July 1984 by Epic Records and in the United States on 27 February 1985 by Portrait Records.Diamond Life went on to sell over six million copies worldwide, becoming one of the top - selling debut recordings of the 80s and the best-selling debut by a British female vocalist',
        img: "imgs/sade-diamond-life.jpg",
        Rating: 1
    },
    {
        Title: 'Ready to Die',
        Author: 'Notorious BIG',
        Genre: 'Hip-Hop',
        Minutes: 10,
        Publisher: 'Universal',
        img: "imgs/Ready_To_Die.jpg",
        Description: "Biggy at his absolute best.",
        Rating: 5
}];

var movies = [{
        Title: 'City lights',
        Author: 'Charlie Chaplin',
        Genre: 'romantic comedy',
        Minutes: 87,
        Publisher: 'United Artists ',
        Description: 'City Lights is a 1931 American pre-Code silent romantic comedy film written, produced, directed by and starring Charlie Chaplin. The story follows the misadventures of Chaplins Tramp as he falls in love with a blind girl (Virginia Cherrill) and develops a turbulent friendship with an alcoholic millionair(Harry Myers).',
        img: "imgs/citylights.jpg",
        Rating: 2

    },
    {
        Title: 'Gladiator',
        Author: 'Ridley Scott',
        Genre: 'Historical Drama',
        Minutes: 180,
        Publisher: 'Universal',
        Description: 'Commodus takes power and strips rank from Maximus, one of the favored generals of his predecessor and father, Emperor Marcus Aurelius, the great stoical philosopher. Maximus is then relegated to fighting to the death in the gladiator arenas.',
        img: "imgs/Gladiator.jpg",
        Rating: 5
    },
    {
        Title: 'Lawrence of Arabia',
        Author: 'T.E.Lawrence',
        Genre: 'historical drama',
        Minutes: 222,
        Publisher: 'Columbia Pictures',
        Description: 'Lawrence of Arabia is a 1962 epic historical drama film based on the life of T. E. Lawrence. It was directed by David Lean and produced by Sam Spiegel through his British company Horizon Pictures, with the screenplay by Robert Bolt and Michael Wilson. The film stars Peter OToole in the title role.It is widely considered one of the greatest and most influential films in the history of cinema.',
        img: "imgs/Lawrence.jpg",
        Rating: 4
}];

var books = [

    {
        Title: 'Woodwalkers',
        Author: 'Katja Brandis',
        Genre: 'belletristik',
        Publisher: 'Bild',
        Weight: '1 kg',
        Description: 'Auf den ersten Blick sieht Carag aus wie ein normaler Junge. Doch hinter seinen leuchtenden Augen verbirgt sich ein Geheimnis: Carag ist ein Gestaltwandler. Aufgewachsen als Berglöwe in den Wäldern lebt er erst seit Kurzem in der Menschenwelt. Das neue Leben ist für ihn so fremd wie faszinierend.',
        img: "imgs/woodwalkers.jpg",
        Rating: 3

    },
    {
        Title: 'Foundation',
        Author: 'Isaac Asimov',
        Genre: 'fantasy science fiction',
        Publisher: 'Heyne',
        Weight: '2 kg',
        Description: 'Foundation is a science fiction novel by American writer Isaac Asimov. It is the first published in his Foundation Trilogy (later expanded into the Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire.',
        img: "imgs/fondation-asimov.jpg",
        Rating: 5

    },
    {
        Title: 'The Sandman',
        Author: 'Neil Gaiman',
        Genre: 'fantasy',
        Publisher: 'Vertigo',
        Weight: '0.6 kg',
        Description: 'The Sandman is a book series written by Neil Gaiman and published by DC Comics.   It tells the story of Dream of the Endless, who rules over the world of dreams. The original series ran for 75 issues from January 1989 to March 1996. The series is famous for Gaimans trademark use of anthropomorphic personification of various metaphysical entities, while also blending mythology and history in its horror setting within the DC Universe.',
        img: "imgs/Sandman.jpg",
        Rating: 4
}];
document.write("<div class = \"container\">");
document.write("<header>")
document.write("<img src='imgs/logo1.jpg'>");
document.write("<h1 id='title'>" + "My Library" + "</h1>"); 
document.write("</header>" + "<br>");

document.write("</div>" + "<h2 class='text-danger text-center' style='font-weight: bold;'> " + "Movies" + "</h2>" + "<hr>");
document.write("<div id=\"mov\" class=\"row\">");

for (var i = 0; i < movies.length; i++) {
    document.write("<div class=\"col-lg-4 col-md-6 col-sm-5\">");
    document.write('<div class="vid">');
    document.write('<img src="' + movies[i].img + '" >');
    document.write('<br>' +"<b>" + "Title: "  + movies[i].Title + "<b>"+ "<br>");
    document.write("Rating: ");
    for (j = 0; j < movies[i].Rating; j++) {
        document.write("<span>" + '&starf;' + "</span>");
    }

    document.write("<br>" +"<div class=\"popup\">" + "<button  type='button' class='btn btn-default' data-toggle='modal' data-target='#exampleModalCenter'>" +"details" + "</button>" + "</div>" +"</div>" +"</div>");
        
}

document.write("</div>" +"<h2 class='text-danger text-center'>" + "Books" + "</h2>" +"<hr>" +"<div id=\"book\" class=\"row\">");

for (var i = 0; i < books.length; i++) {
    document.write("<div class=\"col-lg-4 col-md-6 col-sm-5\">");
    document.write("<div class=\"vid\">");
    document.write('<img src="' + books[i].img + '">' + '<br>');
    document.write("<b>" + "Title: " + "</b>" + books[i].Title + "<br>");
    document.write("Rating: ");
    for (j = 0; j < books[i].Rating; j++) {
        document.write("<span>" + '&starf;' + "</span>");
    } 

   

    document.write("<br>" +"<div class=\"popup\">" + "<button  type='button' class='btn btn-default' data-toggle='modal' data-target='#exampleModalCenter'>" +"details" + "</button>" + "</div>" +"</div>" +"</div>");
}

document.write("</div>" +"<h2 class='text-danger text-center'>" + "Music" + "</h2>" +"<hr>" +"<div id=\"mus\" class=\"row\">");
var h=0;
for (var i = 0; i < Music.length; i++) {

    document.write("<div class=\"col-lg-4 col-md-6 col-sm-5\">");
    document.write("<div class=\"vid\">");
    document.write('<img src="' + Music[i].img + '">' + '<br>');
    document.write("<b>" + "Title: " + "</b>" + Music[i].Title + "<br>");
    document.write("Rating: ");
    for (j = 0; j < Music[i].Rating; j++) {
        document.write("<span>" + '&starf;' + "</span>");
    }
    document.write("<br>" +"<div class=\"popup\">" + "<button  type='button' class='btn btn-default' data-toggle='modal' data-target='#modal '>" +h+"details" + "</button>" + "</div>" +"</div>" +"</div>");
    document.write('<div class="modal fade" id="modal"' +h+'tabindex="-1" role="dialog" aria-labelledby="label"'+h+' aria-hidden="true">' +
  '<div class="modal-dialog modal-dialog-centered" role="document">' +
    '<div class="modal-content">'+
      '<div class="modal-header">'+
        '<h5 class="modal-title" id="label"'+h+'>Modal title</h5>'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
          '<span aria-hidden="true">&times;</span>'+
        '</button>'+
      '</div>'+
      '<div class="modal-body">'+
      '<img src="' + Music[i].img + '">'+
      '<p>'+ Music[i].Description+ '</p>'+
      '</div>'+
      '<div class="modal-footer">'+
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
        '<button type="button" class="btn btn-primary">Save changes</button>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>');
h++;

}
        document.write("</div>" +"</div>");
        document.write("<div class = \"container\">");
        document.write('<h1 class="text-primary text-center">Media Adding Form </h1>')
        document.write('<div class="form-row">' +
                    '<div class="form-group col-md-6">'+
                    '<label for="inputEmail4">Title</label>'+
                    '<input class="form-control" id="title1" placeholder="type your media title"></div>'+
                    '<div class="form-group col-md-6">'+
                    '<label for="inputPassword4">Author</label>'+ 
                    '<input  class="form-control" id="author" placeholder="type youe media author">'+
                    '</div>'+
                    '</div>'+
                    '<div class="form-group">'+
                    '<label for="inputAddress">Publisher</label>'+
                    '<input type="text" class="form-control" id="publisher" placeholder="type your media publisher">'+
                    '</div>'+
                    '<div class="form-group">'+
                    '<label for="inputAddress2">Genre</label>'+
                    '<input type="text" class="form-control" id="genre" placeholder="type your media genre ">'+
                    '</div>'+
                    '<div class="form-row">'+
                    '<div class="form-group col-md-12">'+
                    '<label for="inputCity">Image URL</label>'+
                    '<input class="form-control" id="img" placeholder="Your media image adress">'+
                    '</div></div>' +
                    '<button type="submit" class="btn btn-primary">Add</button>');
        document.write('</div>');   


function add(){
var a = document.getElementById('title1').value;
var b = document.getElementById('author').value;
var c = document.getElementById('publisher').value;
var d = document.getElementById('genre').value;
var e = document.getElementById('img').value;
}
