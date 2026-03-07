export const WORDS = [
  "Pizza", "Fotboll", "Netflix", "Kaffe", "Semester",
  "Katt", "Gym", "Sushi", "Ikea", "Öl",
  "Tåg", "Strand", "Bio", "Hund", "Tacos",
  "Fredagsmys", "Minecraft", "Kebab", "Löpning", "Camping",
  "Midsommar", "Julafton", "Kanelbulle", "Spotify", "Snapchat",
  "Hamburgare", "Cykel", "Simning", "Kortspel", "Bastu",
  "Pannkakor", "Glasglass", "Skidor", "Volleyboll", "Fika",
  "Padel", "Bowling", "Popcorn", "Husdjur", "Solglasögon",
  "Tandborste", "Paraply", "Ryggsäck", "Vattenflaska", "Hörlurar",
  "Smörgåstårta", "Godispåse", "Julklappar", "Nyårsfest", "Påskägg",
  "Semesterresa", "Hotellrum", "Flygplats", "Passfoto", "Solstol",
  "Grillfest", "Korv", "Bryggkaffe", "Chokladkaka", "Frukostbuffé",
  "Träningsskor", "Badbyxor", "Vinterjacka", "Mössa", "Handskar",
  "Datorspel", "Streamingtjänst", "Podcast", "Sociala medier", "Selfie",
  "Skateboard", "Longboard", "Inlines", "Kickbike", "Elsparkcykel",
  "Tunnelbana", "Buss", "Spårvagn", "Taxi", "Samåkning",
  "Bibliotek", "Museum", "Djurpark", "Nöjespark", "Vattenpark",
  "Picknick", "Vandring", "Fågelskådning", "Fiske", "Paddling",
  "Yoga", "Meditation", "Dans", "Teater", "Konsert",
];

export function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function createGameState(players) {
  const word = WORDS[Math.floor(Math.random() * WORDS.length)];
  const shuffled = shuffle(players);
  const imposterIndex = Math.floor(Math.random() * shuffled.length);
  const roles = {};
  shuffled.forEach((name, i) => {
    roles[name] = i === imposterIndex ? "imposter" : "crewmate";
  });
  return { word, roles, playerOrder: shuffled };
}