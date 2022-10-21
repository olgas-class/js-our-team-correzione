const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

const teamContainer = document.querySelector(".team-container");

printTeam();

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener( "click", handleSubmitBtnClick);


// UI Functions
/**
 * Description: Stampa i membri del team
 */
function printTeam() {
  let teamMembers = "";
  for (let i = 0; i < team.length; i++) {
    const thisMember = team[i];

    // Stampa in console
    // for (let key in thisMember) {
    //   console.log(key, thisMember[key]);
    //   teamContainer.innerHTML += `<p>${key}: ${thisMember[key]}</p>`;
    // }
    // console.log("------------------");
    // teamContainer.innerHTML += "<div>--------------</div>";

    // Stampa delle card
    teamMembers += `
      <div class="team-card">
        <div class="card-image">
          <img
            src="img/${thisMember.image}"
            alt="${thisMember.name}"
          />
        </div>
        <div class="card-text">
          <h3>${thisMember.name}</h3>
          <p>${thisMember.role}</p>
        </div>
      </div>
    `;
  }

  // console.log(teamMembers);
  teamContainer.innerHTML = teamMembers;
}

function handleSubmitBtnClick(event) {
  // Per evitare la ricarica della pagina se usiamo il tag form
  event.preventDefault();

  // Creare un membro del team con i dati presi dall'input
  const newTeamMember = createNewTeamMemeberFromForm(); 

  // Aggingere il nuovo membro del team nell'array
  team.push(newTeamMember);

  console.log(team);

  printTeam();

  // disabilitare click eventlistener
  submitBtn.removeEventListener("click", handleSubmitBtnClick);
}

/**
 * Description: Crea un nuovo oggetto che rappresenta un membro del team. I dati vanno presi dagli input della form
 * @returns {object}
 */
function createNewTeamMemeberFromForm() {
  // Prendo gli input html
  const nameInput = document.getElementById("name");
  const roleInput = document.getElementById("role");
  const imageInput = document.getElementById("image");

  const newMember = {
    name: nameInput.value,
    role: roleInput.value,
    image: imageInput.value
  }

  return newMember;
}