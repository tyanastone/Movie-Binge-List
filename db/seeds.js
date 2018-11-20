const mongoose = require('./connections')
const Movie  = require('../Models/Movie.js')
const User  = require('../Models/User.js')



// "Looks" like you're defining an instance of a class, adding a NEW Product(Product is defined at the top), followed after "Store model"
const Black_Lightning = new Movie({
    name: "Black Lightning",
    image: "https://pbs.twimg.com/media/Dr_RbMEU0AAzDyu.jpg",
    year: "2018",
    description: "The first season of the American television series Black Lightning, based on the DC Comics character Jefferson Pierce / Black Lightning, premiered on The CW on January 16, 2018 and ran for 13 episodes until April 17, 2018. The season introduces us to Jefferson Pierce, a high school principal who retired from his superhero identity Black Lightning nine years ago after seeing the effects it had on his family, is forced to become a hero again when the rise of the local gang called The 100 leads to increased crime and corruption in his community of Freeland. The season is produced by Berlanti Productions, Akil Productions, Warner Bros. Television, and DC Entertainment, with Salim Akil serving as showrunner.",
    genre: "Action"  
})

const Naruto_Shippuden = new Movie({
    name: "Naruto Shippuden",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUV6qojrj4adRSKj7SCP3d9DudNJi1nQVvUP41TViOe9J_ndbt",
    year: "2007",
    description: "More than two years have passed since the most recent adventures in the Hidden Leaf Village, ample time for ninja wannabe Naruto Uzumaki to have developed skills worthy of recognition and respect. The hyperactive youngster has trained extensively with Jiraiya-sama and returned to Konoha to reunite with friends and, perhaps, partake in more pranks than schoolwork. But Naruto is more determined than ever to become the greatest ninja, and his hard-earned improvements are put to the ultimate test against newer, stronger enemies.",
    genre: "Anime"
})

const Chewing_Gum = new Movie({
    name: "Chewing Gum",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJVoFp0TpiV7WuRIZEQCqjALjG0qyMt8pdJidr7S5vD7SZGT3",
    year: "2015",
    description: "Tracey Gordon, a religious, Beyoncé-obsessed 24-year-old, is fast to find out that the more she learns about the world, the less she understands.",
    genre: "Comedy"
})
const Black_Mirror = new Movie({
    name: "Black Mirror",
    image: "https://m.media-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg",
    year: "2011",
    description: "Featuring stand-alone dramas -- sharp, suspenseful, satirical tales that explore techno-paranoia -- 'Black Mirror' is a contemporary reworking of 'The Twilight Zone' with stories that tap into the collective unease about the modern world. Each story features its own cast of unique characters, including stars like Bryce Dallas Howard ('The Help'), Alice Eve, Gugu Mbatha-Raw, Tom Cullen and Jerome Flynn ('Game of Thrones'). Joe Wright, Dan Trachtenberg, and James Watkins are among the featured directors.",
    genre: "Science Fiction"
})
const Dragon_Ball_Z = new Movie({
    name: "Dragon Ball Z",
    image: "http://www.gstatic.com/tv/thumb/tvbanners/10420628/p10420628_b_v8_aa.jpg",
    year: "1989",
    description: "Dragon Ball Z follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. 'Dragon Ball Z' teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.",
    genre: "Anime"
})
const Full_Metal = new Movie({
    name: "Full Metal Alchemist Brotherhood",
    image: "http://www.gstatic.com/tv/thumb/tvbanners/9065115/p9065115_b_v8_aa.jpg",
    year: "2009",
    description: "Brothers Edward and Alphonse Elric search for the Philsopher's Stone, hoping to restore their bodies, which were lost when they attempted to use their alchemy skills to resurrect their deceased mother. Edward, who lost only limbs, joins the State Military, which gives him the freedom to continue the search as he tries to restore his brother, whose soul is tethered to earth by a suit of armor. However, Edward and Alphonse are not the only ones seeking the powerful stone. And as they search, they learn of a plot to transmute the entire country for reasons they cannot comprehend.",
    genre: "Anime"
})
const Seven_Sins = new Movie({
    name: "Seven Deadly Sins",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ0OTY3NjAxMF5BMl5BanBnXkFtZTgwMzE4NDAzNzE@._V1_.jpg",
    year: "2014",
    description: "A Japanese fantasy manga series written and illustrated by Nakaba Suzuki. It has been serialized in Kodansha's Weekly Shōnen Magazine since October 2012, with the chapters collected into thirty-one tankōbon volumes as of April 17, 2018. The manga features a setting similar to the European Middle Ages, with its titular group of knights representing the seven deadly sins.",
    genre: "Anime"
})
const Black_Panther = new Movie({
    name: "Black Panther",
    image: "http://www.gstatic.com/tv/thumb/v22vodart/12878741/p12878741_v_v8_ac.jpg",
    year: "2018",
    description: "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
    genre: "Action"
})
const Inifinity_War = new Movie({
    name: "Marvel Infinity War",
    image: "http://www.gstatic.com/tv/thumb/v22vodart/12863030/p12863030_v_v8_ae.jpg",
    year: "2018",
    description: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
    genre: "Action"
})
const Incredibles = new Movie({
    name: "The Incredibles 2",
    image: "http://www.gstatic.com/tv/thumb/v22vodart/13446354/p13446354_v_v8_ag.jpg",
    year: "2018",
    description: "Everyone’s favorite family of superheroes is back in “Incredibles 2” – but this time Helen (voice of Holly Hunter) is in the spotlight, leaving Bob (voice of Craig T. Nelson) at home with Violet (voice of Sarah Vowell) and Dash (voice of Huck Milner) to navigate the day-to-day heroics of “normal” life. It’s a tough transistion for everyone, made tougher by the fact that the family is still unaware of baby Jack-Jack’s emerging superpowers. When a new villain hatches a brilliant and dangerous plot, the family and Frozone (voice of Samuel L. Jackson) must find a way to work together again—which is easier said than done, even when they’re all Incredible.",
    genre: "Kids"
})
const Meg = new Movie({
    name: "The Meg",
    image: "https://pbs.twimg.com/media/DgEOQKaVMAAuCPc.jpg:large",
    year: "2018",
    description: "Previously thought to be extinct, a massive creature attacks a deep-sea submersible, leaving it disabled and trapping the crew at the bottom of the Pacific. With time running out, a visionary oceanographer recruits rescue diver Jonas Taylor to save the crew and the sea itself from an unimaginable threat -- a 75-foot-long prehistoric shark known as the Megalodon.",
    genre: "Thriller"
})
const Overlord = new Movie({
    name: "Overlord",
    image: "http://www.gstatic.com/tv/thumb/v22vodart/15423448/p15423448_v_v8_aa.jpg",
    year: "2018",
    description: "On the eve of D-Day, American paratroopers drop behind enemy lines to penetrate the walls of a fortified church and destroy a radio transmitter. As the soldiers approach their target, they soon begin to realize that there's more going on in the Nazi-occupied village than a simple military operation. Making their way to an underground lab, the outnumbered men stumble upon a sinister experiment that forces them into a vicious battle against an army of the undead.",
    genre: "Thriller/Horror"
})
const Fool = new Movie({
    name: "Nobody's Fool",
    image: "http://www.gstatic.com/tv/thumb/v22vodart/15445617/p15445617_v_v7_aa.jpg",
    year: "2018",
    description: "After serving five years in prison, wild child Tanya looks to her buttoned-up, by-the-book sister Danica to help her get back on her feet. The feisty ex-con becomes suspicious and concerned when Danica tells her that she's in a long-distance, online relationship with a mysterious man she's never seen. As the polar opposites start to collide, Tanya soon discovers that her sibling's picture-perfect life may not be what it seems.",
    genre: "Comedy"
})
const Venom = new Movie({
    name: "Venom",
    image: "http://www.gstatic.com/tv/thumb/v22vodart/13937884/p13937884_v_v8_aa.jpg",
    year: "2018",
    description: "Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drake's experiments, Eddie's body merges with the alien Venom -- leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.",
    genre: "Thriller"
})
const Grinch = new Movie({
    name: "The Grinch",
    image: "http://www.gstatic.com/tv/thumb/v22vodart/12806157/p12806157_v_v8_aa.jpg",
    year: "2018",
    description: "The Grinch and his loyal dog, Max, live a solitary existence inside a cave on Mount Crumpet. His main source of aggravation comes during Christmastime when his neighbors in Whoville celebrate the holidays with a bang. When the Whos decide to make Christmas bigger and brighter, the disgruntled Grinch realizes there is one way to gain peace and quiet. With help from Max, the green grump hatches a scheme to pose as Santa Claus, steal Christmas and silence the Whos' holiday cheer once and for all",
    genre: "Kids"
})
const Creed = new Movie({
    name: "Creed",
    image: "http://cdn.collider.com/wp-content/uploads/2018/06/creed-2-poster.jpg",
    year: "2018",
    description: "n 1985, Russian boxer Ivan Drago killed former U.S. champion Apollo Creed in a tragic match that stunned the world. Against the wishes of trainer Rocky Balboa, Apollo's son Adonis Johnson accepts a challenge from Drago's son -- another dangerous fighter. Under guidance from Rocky, Adonis trains for the showdown of his life -- a date with destiny that soon becomes his obsession. Now, Johnson and Balboa must confront their shared legacy as the past comes back to haunt each man.",
    genre: "Action"
})
const Mary = new User({
    username: "Mary",
    password: "maryishere",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3fa46375259c39d07d0227e8ade6daa&auto=format&fit=crop&w=500&q=60",
    movies: [Naruto_Shippuden, Chewing_Gum, Black_Lightning, Full_Metal, Dragon_Ball_Z, Black_Mirror, Seven_Sins, Incredibles, Inifinity_War, Black_Panther, Overlord, Meg, Fool, Venom, Grinch, Creed]
})
const John = new User({
    username: "John",
    password: "johnishere",
    image: "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c0bebe40d57258868aa633e15197f07&auto=format&fit=crop&w=667&q=80",
    movies: [Naruto_Shippuden, Chewing_Gum, Black_Lightning, Full_Metal, Dragon_Ball_Z, Black_Mirror, Seven_Sins, Incredibles, Inifinity_War, Black_Panther, Overlord, Meg, Fool, Venom, Grinch, Creed]
})

const Sarah = new User({
    username: "Sarah",
    password: "sarahishere",
    image: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b4e41a670c097c8fd2834579f5d5958&auto=format&fit=crop&w=500&q=60",
    movies: [Naruto_Shippuden, Chewing_Gum, Black_Lightning, Full_Metal, Dragon_Ball_Z, Black_Mirror, Seven_Sins, Incredibles, Inifinity_War, Black_Panther, Overlord, Meg, Fool, Venom, Grinch, Creed]
})
// you want to re-seed your database
User.remove({})
    .then(() => Movie.remove({}))
    // creating all of these products into the following stores
    .then(() => Movie.insertMany([Naruto_Shippuden, Chewing_Gum, Black_Lightning, Full_Metal, Dragon_Ball_Z, Black_Mirror, Seven_Sins, Incredibles, Inifinity_War, Black_Panther, Overlord, Meg, Fool, Venom, Grinch, Creed]))
   
    // created stores and saved them
    .then(() => Mary.save())
    .then(() => John.save())
    .then(() => Sarah.save())
    // this message tells you that everything works
    .then(() => console.log("Database seeded success"))
    // this closes the mongoDB connection so that you don't have to exit in terminal
    .then(() => mongoose.connection.close())