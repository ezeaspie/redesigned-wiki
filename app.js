let container = document.getElementById('container');

let currentObject = characters[container.dataset.index];

const renderAside = (obj) => {
  let HTML = `
    <h2 class="header">${obj.basic.name}</h2>
    <img id="mainImg" src="${obj.imageURL}">
    <section>
      <h2 class="sub-header" id="firstAside">Basic Information</h2>
      <div>
        <span class="bold label">Status</span>
        <span class="label-info">${obj.basic.status}</span>
      </div>
      <div>
        <span class="bold label">Gender</span>
        <span class="label-info">${obj.basic.gender}</span>
      </div>
      <div>
        <span class="bold label">Birthplace</span>
        <span class="label-info">${obj.basic.birthplace}</span>
      </div>
      <div>
        <span class="bold label">Occupation</span>
        <span class="label-info">${obj.basic.occupation}</span>
      </div>
      <div>
        <span class="bold label">Hair Color</span>
        <span class="label-info">${obj.basic.hairColor}</span>
      </div>
      <div>
        <span class="bold label">Eye Color</span>
        <span class="label-info">${obj.basic.eyeColor}</span>
      </div>
      <div>
        <span class="bold label">Aliases</span>
        <span class="label-info">${convertArray(obj.basic.aliases)}</span>
      </div>
      <div>
        <span class="bold label">Affiliations</span>
        <span class="label-info">${obj.basic.affiliations}</span>
      </div>
    </section>
    <section>
      <h2 class="sub-header">Biographical</h2>
      <div>
        <span class="bold label">Current Residence</span>
        <span class="label-info">${obj.biographical.currentPlace}</span>
      </div>
      <div>
        <span class="bold label">Age</span>
        <span class="label-info">${obj.biographical.age}</span>
      </div>
      <div>
        <span class="bold label">Relatives</span>
        <span class="label-info">${convertArray(obj.biographical.relatives)}</span>
      </div>
    </section>
    <section>
      <h2 class="sub-header">Social</h2>
      <div>
        <span class="bold label">Allies</span>
        <span class="label-info">${convertArray(obj.social.friends)}</span>
      </div>
      <div>
        <span class="bold label">Enemies</span>
        <span class="label-info">${convertArray(obj.social.enemies)}</span>
      </div>
    </section>
    <section>
      <h2 class="sub-header">Appearances</h2>
      <div>
        <span class="bold label">Appears In</span>
        <span class="label-info">${convertArray(obj.appearances.appearsIn)}</span>
      </div>
    </section>
    `
  document.getElementById('quickInfo').innerHTML = HTML;
};

const renderFooter = () => {
  let HTML = `<table class= 'footer'>
    <tr>
      <th id="first">Characters</th>
      <th id="second"></th>
    </tr>
    <tr class="footerSection">
      <td class="footerLabel">Major</td>
      <td><a href='madeline.html'>Madeline Harbour</a> • <a href='maxine.html'>Maxine Rubin</a> • <a href='selena.html'>Selena Rasoca</a> • <a href='julian.html'>Julian Gaitan</a> • <a href='juliette.html'>Juliette Sandover</a> • <a href='alexander.html'>Alexander Sage</a> • <a href='alfonso.html'>Alfonso Lima</a></td>
    </tr>
    <tr class="footerSection">
      <td class="footerLabel">Supporting</td>
      <td><a href='clarissa.html'>Clarissa Harbour</a> • <a href='jacques.html'>Jacques Harbour</a> • <a href='maeve.html'>Maeve Colbrun</a> • <a href='jade.html'>Jade Vernon</a> • <a href='james.html'>James Vernon</a> • <a href='damien.html'>Damien Schmidt</a> • <a href='alceste.html'>Alceste Lucy</a> • <a href='alexandra.html'>Alexandra Sage</a> • <a href='ada.html'>Ada Lima</a> • <a href='estefania.html'>Estefania Lima</a></td>
    </tr>
    <tr class="footerSection">
      <td class="footerLabel">Minor</td>
      <td><a href='cynthia.html'>Cynthia Palafox</a> • <a href='katie.html'>Katie Ryan</a> • <a href='randall.html'>Randall McCarthy</a> • <a href='austin.html'>Austin</a> • <a href='alice.html'>Alice Lucy</a> • <a href='emilia.html'>Emilia Gaitan</a> • <a href='edward.html'>Edward Blake</a> • <a href='billy.html'>Billy Creel</a> • <a href='maya.html'>Maya Slawson</a></td>
    </tr>
  </table>`
  document.getElementById("links").innerHTML = HTML;
}

const renderTitle = (obj) => {
  document.getElementById('title').innerHTML = obj.basic.name;
}

renderAside(currentObject);
renderFooter();
renderTitle(currentObject);

document.querySelector(".navigation").style.display = "none";
