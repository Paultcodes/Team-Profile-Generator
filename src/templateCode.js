genHtml = (data) => {
  let employeesHtmlCards = [];
  for (let i = 0; i < data.length; i++) {
    const result = data[i];
    const employeeRole = result.getRole();
    if (employeeRole === "Engineer") {
      const engineerInfo = generateEngineer(result);
      employeesHtmlCards.push(engineerInfo);
    } else if (employeeRole === "Intern") {
      const internInfo = generateIntern(result);
      employeesHtmlCards.push(internInfo);
    } else if (employeeRole === "Manager") {
      const managerInfo = generateManager(result);
      employeesHtmlCards.push(managerInfo);
    }
  }
  let joinedHtml = employeesHtmlCards.join("");
  let finalHtml = createHtml(joinedHtml);
  return finalHtml;
};

generateEngineer = (engineer) => {
  return `<div class="employee-card">
    <h2>${engineer.name}</h2>
    <h3><i class="fa-solid fa-code"></i> ${engineer.getRole()}</h3>
    <p>ID: ${engineer.id}</p>
    <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${
      engineer.email
    }" target="_blank">${engineer.email}</a>
        </p>
    <p>GitHub: <a href="https://github.com/Paultcodes?tab=repositories">${engineer.getGithub()}</a></p>
  </div>`;
};

generateIntern = (intern) => {
  return `<div class="employee-card">
      <h2>${intern.name}</h2>
      <h3><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h3>
      <p>ID: ${intern.id}</p>
      <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${
        intern.email
      }" target="_blank">${intern.email}</a>
        </p>
      <p>School: ${intern.getSchool()}</p>
    </div>`;
};

generateManager = (manager) => {
  return `<div class="employee-card">
        <h2>${manager.name}</h2>
        <h3><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h3>
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${
          manager.email
        }" target="_blank">${manager.email}</a>
        </p>
        <p>Office Number: ${manager.officeNumber}</p>
      </div>`;
};

createHtml = (info) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/dist/style.css" />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <h1 class="main-header">Team Profile <i class="fa-solid fa-people-line"></i></h1>
    <div class="main-container">
      ${info}
    </div>
  </body>
</html>`;
};

module.exports = genHtml;
