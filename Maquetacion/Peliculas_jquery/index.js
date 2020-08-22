
class Movie {
  //creo el constructor
  constructor(title, releaseYear, nacionality, genre) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.nacionality = nacionality;
    this.genre = genre;
  }
  write() {
    return (` <strong>Title:</strong> ${this.title} <br> <strong>Release Year:</strong> ${this.releaseYear} <br> <strong>Nacionality:</strong> ${this.nacionality} <br> <strong>Genre</strong> ${this.genre} <br> <strong>director:</strong> ${this.director} <br> <strong>Actors:</strong> ${this.actors} <br> <strong>Writer:</strong> ${this.writer} <br> <strong>Languages:</strong> ${this.languages} <br> <strong>Platform:</strong> ${this.platform} <br> <strong>MCU:</strong> ${this.isMCU} <br> <strong>Main Character:</strong> ${this.mainCharacterName} <br> <strong>Producer:</strong> ${this.producer} <br> <strong>Distributor:</strong> ${this.distributor} <br>`)

  }
}

class Imdb {
  constructor(arrayMovie) {
    this.peliculas = arrayMovie
  }
  /* escribirEnFicheroJSON(nombreFichero) {
    let result = ""
    result = JSON.stringify(this.peliculas)
    return fs.writeFileSync(nombreFichero, result);
  }
  obtenerInstanciaIMDB(nombreFichero) {
    let lectura = fs.readFileSync(nombreFichero, 'utf8');
    let final = new Imdb(JSON.parse(lectura));
    return final;
  } */
}

let hp1 = new Movie("Harry Potter", 2005, "english", "Adventures");
hp1.actors = (" Daniel Radcliffe, Rupert Grint, Emma Watson")
hp1.director = ("Chris Columbus")
hp1.writer = ("Steve Kloves")
hp1.languages = ("English, Spanish, French")
hp1.platform = ("Netflix")
hp1.isMCU = ("no")
hp1.mainCharacterName = ("Harry Potter")
hp1.producer = ("Warner Bros")
hp1.distributor = ("Heyday Film")

let af1 = new Movie("Fantastic Beast", 2016, "US", "Adventures");
af1.actors = ("Eddie Redmayne, Dan Fogler, Katherine Waterston")
af1.director = ("David Yates")
af1.writer = ("J.K. Rowling")
af1.languages = ("English, Spanish, French")
af1.platform = ("Prime Now")
af1.isMCU = ("no")
af1.mainCharacterName = ("Newt Scamander ")
af1.producer = ("Warner Bros")
af1.distributor = ("Walt Disney")

let mulan = new Movie("Mulan", 2020, "US", "Adventures");
mulan.actors = ("Liu Yifei, Donnie Yen, Gong Li, Jet Li, ")
mulan.director = ("Niki Caro")
mulan.writer = ("Rick Jaffa")
mulan.languages = ("English, Spanish, French")
mulan.platform = ("Prime Now")
mulan.isMCU = ("no")
mulan.mainCharacterName = ("Mulan")
mulan.producer = ("Walt Disney Pictures")
mulan.distributor = ("Heyday Film")

let xmen = new Movie("X men", 2000, "US", "Fiction");
xmen.actors = ("Hugh Jackman, Patrick Stewart, Ian McKellenn")
xmen.director = ("Bryan Singer")
xmen.writer = ("David Hayte")
xmen.languages = ("English, Spanish, French")
xmen.platform = ("Movistar +")
xmen.isMCU = ("no")
xmen.mainCharacterName = ("Wolverine")
xmen.producer = ("Warner Bros")
xmen.distributor = ("Genetics Productions")

let up = new Movie("Up", 2009, "US", "Fiction");
up.actors = ("Carl Fredricksen")
up.director = ("Pete Docter")
up.writer = ("Bob Peterson")
up.languages = ("English, Spanish, French")
up.platform = ("Netflix")
up.isMCU = ("no")
up.mainCharacterName = ("Carl Fredricksen")
up.producer = ("Pixar")
up.distributor = ("Walt Disney Pictures")

let avatar = new Movie("Avatar", 2009, "US", "Fiction");
avatar.actors = ("Carl Fredricksen")
avatar.director = ("James Cameron")
avatar.writer = ("Bob Peterson")
avatar.languages = ("English, Spanish, French")
avatar.platform = ("Netflix")
avatar.isMCU = ("no")
avatar.mainCharacterName = ("Jake")
avatar.producer = ("PJames Cameronr")
avatar.distributor = ("20th Century Fox")

let imdb = new Imdb([hp1, af1, mulan, xmen, up, avatar])

function showData(i) {
  $("#m" + i).toggle(800, function () {
    $("#m" + i).html(imdb.peliculas[i].write())
  })
}

let i = 0

function SetMovie() {
  let picture = $("#picture").val()
  let title = $("#title").val()
  let releaseYear = $("#releaseYear").val()
  let nationality = $("#nationality").val()
  let genre = $("#genre").val()
  let newMovie = new Movie(title, releaseYear, nationality, genre)

  newMovie.actors = $("#actors").val()
  newMovie.director = $("#director").val()
  newMovie.writer = $("#writer").val()
  newMovie.languages = $("#languages").val()
  newMovie.platform = $("#platform").val()
  newMovie.isMCU = $("#mcu").val()
  newMovie.mainCharacterName = $("#mCharacter").val()
  newMovie.producer = $("#producer").val()
  newMovie.distributor = $("#distributor").val()
  
  $("#img" + i).attr("src", picture) && ($("#newTitle").html(newMovie.title)) && ($("#importMovie" + i).html(newMovie.write())) && ($('#botones'+ i).prepend('<div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary" id="info">View</button><a class="btn btn-sm btn-outline-secondary" href="#newMovie">Edit</a></div>'))
  i++;
}


/* $(function () {
  $("#info7").click(function () {
    $("#importMovie1").toggle(800)
    })
  $("#info8").click(function () {
    $("#importMovie2").toggle(800)
  })
  $("#info9").click(function () {
    $("importMovie1").toggle(800)
  })
}) */


/* $(function(){
  let pelicula = `titulo: Harry Potter \n Genero: comedia`
  $("button").click(function(){
  $('#newPicture').append('<img id="theImg" width="100%">').src(imagen) &&
    $("p").html(pelicula);
  });

}); */






