const characterFactory = (basic,biographical,social,appearances) => {
  return {basic,biographical,social,appearances}
};

const basicFactory = (status,gender,birthplace,occupation, hairColor, eyeColor, aliases, affiliations) => {
  return {status,gender,birthplace,occupation, aliases, affiliations};
};

const biographicalFactory = (birth,age,relatives) => {
  return {birth,age,relatives};
};

const socialFactory = (friends, enemies) => {
  return {friends, enemies};
};

const appearancesFactory = (appearsIn) => {
  return {appearsIn};
};

const MaddieBasic = basicFactory("Alive/Active","Female","Northern Serenity (Palisades)","Private Detective","Blonde","Blue-Grey",["Maddie","Miss Perfection","Catalyst"],["Independent"]);
const MaddieBio = biographicalFactory("Palisades, 2003","16-19",["Clarissa Harbour", "Jacques Harbour"]);
const MaddieSocial = socialFactory(["Juliette Sandover","Julian Gaitan","Jade Vernon","James Vernon","Ada Lima","Estefania Lima","Katie Ryan"], ["Maxine Rubin","Selena Rasoca","Alfonso Lima","Alexander Sage"]);
const MaddieAppearsIn = appearancesFactory(["The Ring of Deceit","The Heroic Villainess", "The Fate of Serenity"]);

const Maddie = characterFactory(MaddieBasic,MaddieBio,MaddieSocial,MaddieAppearsIn);
