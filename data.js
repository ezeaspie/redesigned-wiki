const characters = [];

const convertArray = (array) => {
  let HTML = "";
  for (i=0 ; i<array.length ; i++){
    HTML += array[i] + '</br>';
  }
  return HTML;
};

const characterFactory = (basic,biographical,social,appearances,imageURL) => {

  return {basic,biographical,social,appearances,imageURL}
};

const basicFactory = (name,status,gender,birthplace,occupation, hairColor, eyeColor, aliases, affiliations) => {
  return {name,status,gender,birthplace,occupation, hairColor, eyeColor, aliases, affiliations};
};

const biographicalFactory = (currentPlace,age,relatives) => {
  return {currentPlace,age,relatives};
};

const socialFactory = (friends, enemies) => {
  return {friends, enemies};
};

const appearancesFactory = (appearsIn) => {
  return {appearsIn};
};

const MaddieBasic = basicFactory("Madeline Harbour","Alive/Active","Female","Northern Serenity (Palisades)","Private Detective","Blonde","Blue-Grey",["Maddie","Miss Perfection","Catalyst"],["Independent"]);
const MaddieBio = biographicalFactory("Northern Serenity (Isle of Tranqulity)","16-19",["Clarissa Harbour", "Jacques Harbour"]);
const MaddieSocial = socialFactory(["Juliette Sandover","Julian Gaitan","Jade Vernon","James Vernon","Ada Lima","Estefania Lima","Katie Ryan","Nancy Petrov"], ["Maxine Rubin","Selena Rasoca","Alfonso Lima","Alexander Sage","Alexandra Sage","Alexis Sage","Alex-Sandro Sage"]);
const MaddieAppearsIn = appearancesFactory(["The Ring of Deceit","The Heroic Villainess", "The Fate of Serenity"]);

const Maddie = characterFactory(MaddieBasic,MaddieBio,MaddieSocial,MaddieAppearsIn, "./img/madeline.jpg");
characters.push(Maddie);
