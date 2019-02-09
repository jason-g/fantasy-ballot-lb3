module.exports = function(app) {
  var Person = app.models.Person;
  var Category = app.models.Category;
  var Entry = app.models.Entry;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Team = app.models.Team;

  /*
  Person.create([
    {username: 'User 1', email: 'donotreply@donotreply.com', password: 'password007'},
    {username: 'User 2', email: 'donotreply@donotreply.com', password: 'password007'},
    {username: 'Admin', email: 'admin@donotrelpy.com', password: 'password007'},
  ], function(err, users) {
    if (err) throw err;
    console.log('Created users:', users);

    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);
      // set admins
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) throw err;
        console.log('Created principal:', principal);
      });

      // set admins
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[1].id
      }, function(err, principal) {
        if (err) throw err;
        console.log('Created principal:', principal);
      });


      // set admins
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[2].id
      }, function(err, principal) {
        if (err) throw err;
        console.log('Created principal:', principal);
      });

    });
  });
*/

/*
  Category.create([{
      "display_name": "BEST PICTURE",
      "display_content": "String",
      "category_id": 1,
    }, {
      "display_name": "ACTOR IN A LEADING ROLE",
      "display_content": "string",
      "category_id": 2,
    }, {
      "display_name": "ACTRESS IN A LEADING ROLE",
      "display_content": "string",
      "category_id": 3,
    }, {
      "display_name": "ACTOR IN A SUPPORTING ROLE",
      "display_content": "string",
      "category_id": 4,
    }, {
      "display_name": "ACTRESS IN A SUPPORTING ROLE",
      "display_content": "string",
      "category_id": 5,
    }, {
      "display_name": "ANIMATED FEATURE FILM",
      "display_content": "string",
      "category_id": 6,
    }, {
      "display_name": "CINEMATOGRAPHY",
      "display_content": "string",
      "category_id": 7,
    }, {
      "display_name": "COSTUME DESIGN",
      "display_content": "string",
      "category_id": 8,
    }, {
      "display_name": "DIRECTING",
      "display_content": "string",
      "category_id": 9,
    }, {
      "display_name": "DOCUMENTARY (FEATURE)",
      "display_content": "string",
      "category_id": 10,
    }, {
      "display_name": "DOCUMENTARY (SHORT SUBJECT)",
      "display_content": "string",
      "category_id": 11,
    }, {
      "display_name": "FILM EDITING",
      "display_content": "string",
      "category_id": 12,
    }, {
      "display_name": "FOREIGN LANGUAGE FILM",
      "display_content": "string",
      "category_id": 13,
    }, {
      "display_name": "MAKEUP AND HAIRSTYLING",
      "display_content": "string",
      "category_id": 14,
    }, {
      "display_name": "MUSIC (ORIGINAL SCORE)",
      "display_content": "string",
      "category_id": 15,
    }, {
      "display_name": "MUSIC (ORIGINAL SONG)",
      "display_content": "string",
      "category_id": 16,
    }, {
      "display_name": "PRODUCTION DESIGN",
      "display_content": "string",
      "category_id": 17,
    }, {
      "display_name": "SHORT FILM (ANIMATED)",
      "display_content": "string",
      "category_id": 18,
    }, {
      "display_name": "SHORT FILM (LIVE ACTION)",
      "display_content": "string",
      "category_id": 19,
    }, {
      "display_name": "SOUND EDITING",
      "display_content": "string",
      "category_id": 20,
    }, {
      "display_name": "SOUND MIXING",
      "display_content": "string",
      "category_id": 21,
    }, {
      "display_name": "VISUAL EFFECTS",
      "display_content": "string",
      "category_id": 22,
    }, {
      "display_name": "WRITING (ADAPTED SCREENPLAY)",
      "display_content": "string",
      "category_id": 23,
    }, {
      "display_name": "WRITING (ORIGINAL SCREENPLAY)",
      "display_content": "string",
      "category_id": 24,
    }
  ], function(err, categories) {
    if (err) throw err;
  });
*/
/*
  Entry.create([{
      "display_name": "BLACK PANTHER",
      "featured_image": "http://prettybrownandnerdy.com/wp-content/uploads/2018/01/Black-Panther-Movie-Runtime-Character-Bios-180x180.jpg",
      "featured_video": "https://www.youtube.com/watch?v=xjDjIWPwcPU",
      "display_content": "Kevin Feige",
      "category_id": 1
    },

    {
      "display_name": "BLACKKKLANSMAN",
      "featured_image": "https://ssl-gfx.filmweb.pl/ph/75/61/807561/779894_1.2.jpg",
      "featured_video": "https://www.youtube.com/watch?v=pFc6I0rgmgY",
      "display_content": "Sean McKittrick, Jason Blum, Raymond Mansfield, Jordan Peele and Spike Lee",
      "category_id": 1
    },


    {
      "display_name": "BOHEMIAN RHAPSODY",
      "featured_image": "https://ssl-gfx.filmweb.pl/ph/92/01/619201/779620_1.2.jpg",
      "featured_video": "https://www.youtube.com/watch?v=mP0VHJYFOAU",
      "display_content": "Graham King",
      "category_id": 1
    },

    {
      "display_name": "THE FAVOURITE",
      "featured_image": "string",
      "featured_video": "https://youtu.be/p5rNSBaR1Hw",
      "display_content": "Ceci Dempsey, Ed Guiney, Lee Magiday and Yorgos Lanthimos",
      "category_id": 0
    },

    {
      "display_name": "GREEN BOOK",
      "featured_image": "string",
      "featured_video": "https://youtu.be/QkZxoko_HC0",
      "display_content": "Jim Burke, Charles B. Wessler, Brian Currie, Peter Farrelly and Nick Vallelonga",
      "category_id": 0
    },

    {
      "display_name": "ROMA",
      "featured_image": "https://ssl-gfx.filmweb.pl/ph/56/37/805637/791311_1.2.jpg",
      "featured_video": "https://www.youtube.com/watch?v=6BS27ngZtxg",
      "display_content": "Gabriela Rodríguez and Alfonso Cuarón",
      "category_id": 1
    },

    {
      "display_name": "A STAR IS BORN",
      "featured_image": "https://ssl-gfx.filmweb.pl/ph/25/76/542576/781164_1.2.jpg",
      "featured_video": "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
      "display_content": "Bill Gerber, Bradley Cooper and Lynette Howell Taylor",
      "category_id": 1
    },




    {
      "display_name": "VICE",
      "featured_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-H5ammzIO2EwzpvEIMovSddbdYbMPVUGBgoDREh3AOsXj1_J5",
      "featured_video": "https://www.youtube.com/watch?v=g09a9laLh0k",
      "display_content": "Dede Gardner, Jeremy Kleiner, Adam McKay and Kevin Messick",
      "category_id": 1
    },

    //ACTOR IN A LEADING ROLE

    {
      "display_name": "Christian Bale",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=g09a9laLh0k",
      "display_content": "Vice",
      "category_id": 2
    },


    {
      "display_name": "Bradley Cooper",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
      "display_content": "A Star Is Born",
      "category_id": 2
    },


    {
      "display_name": "Willem Dafoe",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/CZGl0qjJYHM",
      "display_content": "At Eternity’s Gate",
      "category_id": 2
    },


    {
      "display_name": "Rami Malek",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=mP0VHJYFOAU",
      "display_content": "Bohemian Rhapsody",
      "category_id": 2
    },


    {
      "display_name": "Viggo Mortensen",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/QkZxoko_HC0",
      "display_content": "Green Book",
      "category_id": 2
    },

    //ACTRESS IN A LEADING ROLE

    {
      "display_name": "Yalitza Aparicio",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=6BS27ngZtxg",
      "display_content": "Roma",
      "category_id": 3
    },


    {
      "display_name": "Glenn Close",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/d81IM0loH7o",
      "display_content": "The Wife",
      "category_id": 3
    },


    {
      "display_name": "Olivia Colman",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/p5rNSBaR1Hw",
      "display_content": "The Favourite",
      "category_id": 3
    },





    {
      "display_name": "Lady Gaga",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
      "display_content": "A Star is Born",
      "category_id": 3
    },


    {
      "display_name": "Melissa McCarthy",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/UvJIaNsf_bY",
      "display_content": "Can You Ever Forgive Me?",
      "category_id": 3
    },

    //ACTOR IN A SUPPORTING ROLE

    {
      "display_name": "Mahershala Ali",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/QkZxoko_HC0",
      "display_content": "Green Book",
      "category_id": 4
    },

    {
      "display_name": "Adam Driver",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=pFc6I0rgmgY",
      "display_content": "BlacKkKlansman",
      "category_id": 4
    },

    {
      "display_name": "Sam Elliott",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
      "display_content": "A Star Is Born",
      "category_id": 4
    },

    {
      "display_name": "Richard E. Grant",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/UvJIaNsf_bY",
      "display_content": "Can You Ever Forgive Me?",
      "category_id": 4
    },

    {
      "display_name": "Sam Rockwell",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=g09a9laLh0k",
      "display_content": "Vice",
      "category_id": 4
    },

    //ACTRESS IN A SUPPORTING ROLE

    {
      "display_name": "Amy Adams",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=g09a9laLh0k",
      "display_content": "Vice",
      "category_id": 5
    },

    {
      "display_name": "Marina de Tavira",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=6BS27ngZtxg",
      "display_content": "Roma",
      "category_id": 5
    },

    {
      "display_name": "Regina King",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/N4m3t3G3Zqc",
      "display_content": "If Beale Street Could Talk",
      "category_id": 5
    },

    {
      "display_name": "Emma Stone",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/p5rNSBaR1Hw",
      "display_content": "The Favourite",
      "category_id": 5
    },

    {
      "display_name": "Rachel Weisz",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/p5rNSBaR1Hw",
      "display_content": "The Favourite",
      "category_id": 5
    },

    //ANIMATED FEATURE FILM

    {
      "display_name": "Incredibles 2",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/i5qOzqD9Rms",
      "display_content": "Brad Bird, John Walker and Nicole Paradis Grindle",
      "category_id": 6
    },

    {
      "display_name": "Isle of Dogs",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/dt__kig8PVU",
      "display_content": "Wes Anderson, Scott Rudin, Steven Rales and Jeremy Dawson",
      "category_id": 6
    },

    {
      "display_name": "Mirai",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/6d-lsJZgmJs",
      "display_content": "Mamoru Hosoda and Yuichiro Saito",
      "category_id": 6
    },

    {
      "display_name": "Ralph Breaks The Internet",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/T73h5bmD8Dc",
      "display_content": "Rich Moore, Phil Johnston and Clark Spencer",
      "category_id": 6
    },

    {
      "display_name": "Spider-Man: Into The Spider-Verse",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/tg52up16eq0",
      "display_content": "Bob Persichetti, Peter Ramsey, Rodney Rothman, Phil Lord and Christopher Miller",
      "category_id": 6
    },

    //CINEMATOGRAPHY

    {
      "display_name": "Cold War",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/8ImvkXgGVWw",
      "display_content": "Łukasz Żal",
      "category_id": 7
    },

    {
      "display_name": "The Favourite",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/p5rNSBaR1Hw",
      "display_content": "Robbie Ryan",
      "category_id": 7
    },

    {
      "display_name": "Never Look Away",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Caleb Deschanel",
      "category_id": 7
    },

    {
      "display_name": "Roma",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=6BS27ngZtxg",
      "display_content": "Alfonso Cuarón",
      "category_id": 7
    },

    {
      "display_name": "A Star Is Born",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
      "display_content": "Matthew Libatique",
      "category_id": 7
    },

    //COSTUME DESIGN

    {
      "display_name": "The Ballad of Buster Scruggs",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/_2PyxzSH1HM",
      "display_content": "Mary Zophres",
      "category_id": 8
    },

    {
      "display_name": "Black Panther",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=xjDjIWPwcPU",
      "display_content": "Ruth Carter",
      "category_id": 8
    },

    {
      "display_name": "The Favourite",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/p5rNSBaR1Hw",
      "display_content": "Sandy Powell",
      "category_id": 8
    },

    {
      "display_name": "Mary Poppins Returns",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/-3jsfXDZLIY",
      "display_content": "Sandy Powell",
      "category_id": 8
    },

    {
      "display_name": "Mary Queen of Scots",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Alexandra Byrne",
      "category_id": 8
    },

    //DIRECTING

    {
      "display_name": "Blackkklansman",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=pFc6I0rgmgY",
      "display_content": "Spike Lee",
      "category_id": 9
    },

    {
      "display_name": "Cold War",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/8ImvkXgGVWw",
      "display_content": "Paweł Pawlikowski",
      "category_id": 9
    },

    {
      "display_name": "The Favourite",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/p5rNSBaR1Hw",
      "display_content": "Yorgos Lanthimos",
      "category_id": 9
    },

    {
      "display_name": "Roma",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=6BS27ngZtxg",
      "display_content": "Alfonso Cuarón",
      "category_id": 9
    },

    {
      "display_name": "Vice",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=g09a9laLh0k",
      "display_content": "Adam McKay",
      "category_id": 9
    },

    //DOCUMENTARY (FEATURE)
    {
      "display_name": "Free Solo",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Elizabeth Chai Vasarhelyi, Jimmy Chin, Evan Hayes and Shannon Dill",
      "category_id": 10
    },

    {
      "display_name": "Hale County This Morning, This Evening",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "RaMell Ross, Joslyn Barnes and Su Kim",
      "category_id": 10
    },

    {
      "display_name": "Minding the Gap",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Bing Liu and Diane Quon",
      "category_id": 10
    },

    {
      "display_name": "Of Fathers and Sons",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Talal Derki, Ansgar Frerich, Eva Kemme and Tobias N. Siebert",
      "category_id": 10
    },

    {
      "display_name": "RBG",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Betsy West and Julie Cohen",
      "category_id": 10
    },

    //DOCUMENTARY (SHORT SUBJECT)

    {
      "display_name": "Black Sheep",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Ed Perkins and Jonathan Chinn",
      "category_id": 11
    },
    {
      "display_name": "End Game",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Rob Epstein and Jeffrey Friedman",
      "category_id": 11
    },

    {
      "display_name": "Lifeboat",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Skye Fitzgerald and Bryn Mooser",
      "category_id": 11
    },



    {
      "display_name": "A Night at the Garden",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Marshall Curry",
      "category_id": 11
    },

    {
      "display_name": "Period. End of Sentence.",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Rayka Zehtabchi and Melissa Berton",
      "category_id": 11
    },

    //FILM EDITING

    {
      "display_name": "BlacKkKlansman",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=pFc6I0rgmgY",
      "display_content": "Barry Alexander Brown",
      "category_id": 12
    },

    {
      "display_name": "Bohemian Rhapsody",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=mP0VHJYFOAU",
      "display_content": "John Ottman",
      "category_id": 12
    },

    {
      "display_name": "The Favourite",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/p5rNSBaR1Hw",
      "display_content": "Yorgos Mavropsaridis",
      "category_id": 12
    },


    {
      "display_name": "Green Book",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/QkZxoko_HC0",
      "display_content": "Patrick J. Don Vito",
      "category_id": 12
    },

    {
      "display_name": "Vice",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=g09a9laLh0k",
      "display_content": "Hank Corwin",
      "category_id": 12
    },

    //FOREIGN LANGUAGE FILM

    {
      "display_name": "Capernaum",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Lebanon; Nadine Labaki",
      "category_id": 13
    },

    {
      "display_name": "Cold War",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/8ImvkXgGVWw",
      "display_content": "Poland; Paweł Pawlikowski",
      "category_id": 13
    },

    {
      "display_name": "Never Look Away",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/gCEYXnDNcrg",
      "display_content": "Germany; Florian Henckel von Donnersmarck",
      "category_id": 13
    },


    {
      "display_name": "Roma",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=6BS27ngZtxg",
      "display_content": "Mexico; Alfonso Cuarón",
      "category_id": 13
    },

    {
      "display_name": "Shoplifters",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Japan; Hirokazu Kore-eda",
      "category_id": 13
    },

    //MAKEUP AND HAIRSTYLING

    {
      "display_name": "Border",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Göran Lundström and Pamela Goldammer",
      "category_id": 14
    },

    {
      "display_name": "Mary Queen of Scots",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Jenny Shircore, Marc Pilcher and Jessica Brooks",
      "category_id": 14
    },

    {
      "display_name": "Vice",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=g09a9laLh0k",
      "display_content": "Greg Cannom, Kate Biscoe and Patricia Dehaney",
      "category_id": 14
    },


    //MUSIC (ORIGINAL SCORE)

    {
      "display_name": "Black Panther",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=xjDjIWPwcPU",
      "display_content": "Ludwig Goransson",
      "category_id": 15
    },

    {
      "display_name": "BlacKkKlansman",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=pFc6I0rgmgY",
      "display_content": "Terence Blanchard",
      "category_id": 15
    },

    {
      "display_name": "If Beale Street Could Talk",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/N4m3t3G3Zqc",
      "display_content": "Nicholas Britell",
      "category_id": 15
    },

    {
      "display_name": "Isle of Dogs",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/dt__kig8PVU",
      "display_content": "Alexandre Desplat",
      "category_id": 15
    },

    {
      "display_name": "Mary Poppins Returns",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/-3jsfXDZLIY",
      "display_content": "Marc Shaiman",
      "category_id": 15
    },


    //MUSIC (ORIGINAL SONG)

    {
      "display_name": '“All The Stars” from Black Panther',
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=xjDjIWPwcPU",
      "display_content": "Music by Kendrick Lamar, Mark “Sounwave” Spears and Anthony “Top Dawg” Tiffith; Lyric by Kendrick Lamar, SZA and Anthony “Top Dawg” Tiffith",
      "category_id": 16
    },

    {
      "display_name": '“I’ll Fight” from RBG',
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Music and Lyric by Diane Warren",
      "category_id": 16
    },

    {
      "display_name": '“The Place Where Lost Things Go” from Mary Poppins',
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Music by Marc Shaiman; Lyric by Scott Wittman and Marc Shaiman",
      "category_id": 16
    },

    {
      "display_name": '“Shallow” from A Star Is Born',
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
      "display_content": "Music and Lyric by Lady Gaga, Mark Ronson, Anthony Rossomando and Andrew Wyatt",
      "category_id": 16
    },

    {
      "display_name": '“When A Cowboy Trades His Spurs For Wings” from The Ballad of Buster Scruggs',
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/_2PyxzSH1HM",
      "display_content": "Music and Lyric by David Rawlings and Gillian Welch",
      "category_id": 16
    },

    //PRODUCTION DESIGN

    {
      "display_name": "Black Panther",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=xjDjIWPwcPU",
      "display_content": "Hannah Beachler (Production Design); Jay Hart (Set Decoration)",
      "category_id": 17
    },

    {
      "display_name": "The Favourite",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/p5rNSBaR1Hw",
      "display_content": "Fiona Crombie (Production Design); Alice Felton (Set Decoration)",
      "category_id": 17
    },

    {
      "display_name": "First Man",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Nathan Crowley (Production Design); Kathy Lucas (Set Decoration)",
      "category_id": 17
    },

    {
      "display_name": "Mary Poppins Returns",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/-3jsfXDZLIY",
      "display_content": "John Myhre (Production Design); Gordon Sim (Set Decoration)",
      "category_id": 17
    },

    {
      "display_name": "Roma",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=6BS27ngZtxg",
      "display_content": "Eugenio Caballero (Production Design); Bárbara Enríquez (Set Decoration)",
      "category_id": 17
    },


    //SHORT FILM (ANIMATED)

    {
      "display_name": "Animal Behaviour",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Alison Snowden and David Fine",
      "category_id": 18
    },

    {
      "display_name": "Bao",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Domee Shi and Becky Neiman-Cobb",
      "category_id": 18
    },

    {
      "display_name": "Late Afternoon",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Louise Bagnall and Nuria González Blanco",
      "category_id": 18
    },

    {
      "display_name": "One Small Step",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Andrew Chesworth and Bobby Pontillas",
      "category_id": 18
    },

    {
      "display_name": "Weekends",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Trevor Jimenez",
      "category_id": 18
    },


    //SHORT FILM (LIVE ACTION)

    {
      "display_name": "Detainment",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Vincent Lambe and Darren Mahon",
      "category_id": 19
    },

    {
      "display_name": "Fauve",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Jeremy Comte and Maria Gracia Turgeon",
      "category_id": 19
    },

    {
      "display_name": "Marguerite",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Marianne Farley and Marie-Hélène Panisset",
      "category_id": 19
    },

    {
      "display_name": "Mother",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Rodrigo Sorogoyen and María del Puy Alvarado",
      "category_id": 19
    },

    {
      "display_name": "Skin",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Guy Nattiv and Jaime Ray Newman",
      "category_id": 19
    },


    //SOUND EDITING

    {
      "display_name": "Black Panther",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=xjDjIWPwcPU",
      "display_content": "Benjamin A. Burtt and Steve Boeddeker",
      "category_id": 20
    },

    {
      "display_name": "Bohemian Rhapsody",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=mP0VHJYFOAU",
      "display_content": "John Warhurst and Nina Hartstone",
      "category_id": 20
    },

    {
      "display_name": "First Man",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Ai-Ling Lee and Mildred Iatrou Morgan",
      "category_id": 20
    },

    {
      "display_name": "A Quiet Place",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Ethan Van der Ryn and Erik Aadahl",
      "category_id": 20
    },

    {
      "display_name": "Roma",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=6BS27ngZtxg",
      "display_content": "Sergio Díaz and Skip Lievsay",
      "category_id": 20
    },


    //SOUND MIXING

    {
      "display_name": "Black Panther",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=xjDjIWPwcPU",
      "display_content": "Steve Boeddeker, Brandon Proctor and Peter Devlin",
      "category_id": 21
    },

    {
      "display_name": "Bohemian Rhapsody",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=mP0VHJYFOAU",
      "display_content": "Paul Massey, Tim Cavagin and John Casali",
      "category_id": 21
    },

    {
      "display_name": "First Man",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Jon Taylor, Frank A. Montaño, Ai-Ling Lee and Mary H. Ellis",
      "category_id": 21
    },

    {
      "display_name": "Roma",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=6BS27ngZtxg",
      "display_content": "Skip Lievsay, Craig Henighan and José Antonio García",
      "category_id": 21
    },

    {
      "display_name": "A Star Is Born",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
      "display_content": "Tom Ozanich, Dean Zupancic, Jason Ruder and Steve Morrow",
      "category_id": 21
    },


    //VISUAL EFFECTS

    {
      "display_name": "Avengers: Infinity War",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Dan DeLeeuw, Kelly Port, Russell Earl and Dan Sudick",
      "category_id": 22
    },

    {
      "display_name": "Christopher Robin",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Christopher Lawrence, Michael Eames, Theo Jones and Chris Corbould",
      "category_id": 22
    },

    {
      "display_name": "First Man",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Paul Lambert, Ian Hunter, Tristan Myles and J.D. Schwalm",
      "category_id": 22
    },

    {
      "display_name": "Ready Player One",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Roger Guyett, Grady Cofer, Matthew E. Butler and David Shirk",
      "category_id": 22
    },

    {
      "display_name": "Solo: A Star Wars Story",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Rob Bredow, Patrick Tubach, Neal Scanlan and Dominic Tuohy",
      "category_id": 22
    },


    //WRITING (ADAPTED SCREENPLAY)

    {
      "display_name": "The Ballad of Buster Scruggs",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/_2PyxzSH1HM",
      "display_content": "Written by Joel Coen & Ethan Coen",
      "category_id": 23
    },

    {
      "display_name": "BlacKkKlansman",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=pFc6I0rgmgY",
      "display_content": "Written by Charlie Wachtel & David Rabinowitz and Kevin Willmott & Spike Lee",
      "category_id": 23
    },

    {
      "display_name": "Can You Ever Forgive Me?",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/UvJIaNsf_bY",
      "display_content": "Screenplay by Nicole Holofcener and Jeff Whitty",
      "category_id": 23
    },

    {
      "display_name": "If Beale Street Could Talk",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/N4m3t3G3Zqc",
      "display_content": "Written for the screen by Barry Jenkins",
      "category_id": 23
    },

    {
      "display_name": "A Star Is Born",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
      "display_content": "Screenplay by Eric Roth and Bradley Cooper & Will Fetters",
      "category_id": 23
    },


    //WRITING (ORIGINAL SCREENPLAY)
    {
      "display_name": "The Favourite",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/p5rNSBaR1Hw",
      "display_content": "Written by Deborah Davis and Tony McNamara",
      "category_id": 24
    },

    {
      "display_name": "First Reformed",
      "featured_image": "images/xxx.png",
      "featured_video": "string",
      "display_content": "Written by Paul Schrader",
      "category_id": 24
    },

    {
      "display_name": "Green Book",
      "featured_image": "images/xxx.png",
      "featured_video": "https://youtu.be/QkZxoko_HC0",
      "display_content": "Written by Nick Vallelonga, Brian Currie, Peter Farrelly",
      "category_id": 24
    },

    {
      "display_name": "Roma",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=6BS27ngZtxg",
      "display_content": "Written by Alfonso Cuarón",
      "category_id": 24
    },

    {
      "display_name": "Vice",
      "featured_image": "images/xxx.png",
      "featured_video": "https://www.youtube.com/watch?v=g09a9laLh0k",
      "display_content": "Written by Adam McKay",
      "category_id": 24
    }
  ], function (err, categories) {
    if (err) throw err;
  });
*/
};