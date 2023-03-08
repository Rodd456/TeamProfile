function generateHtml(array) {
  const cardsArray = array.map(employee => {
    switch (employee.getRole()) {
      case "Manager":
        return generateCard(employee, "Manager", "Office Number", employee.getOfficeNumber());
      case "Intern":
        return generateCard(employee, "Intern", "School", employee.getSchool());
      default:
        return generateCard(employee, "Engineer", "Github", employee.getGithub());
    }
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <title>Document</title>
      </head>
      <body>
        <nav id="navbar" class="navbar bg-body-tertiary">
          <div class="container-fluid d-flex justify-content-center">
            <p class="navbar-brand text-uppercase fw-bold">
              Team Profile Generator
            </p>
          </div>
        </nav>
        <main class="container">
          <div class="row justify-content-center mt-5">
            ${cardsArray.join("")}
          </div>
        </main>
      </body>
    </html>
  `;
}

function generateCard(employee, roleText, extraFieldText, extraFieldValue) {
  return `
    <div class="col-md-4 col-sm-6 mt-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${employee.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${roleText}</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: ${employee.getEmail()}</li>
            <li class="list-group-item">${extraFieldText}: ${extraFieldValue}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

module.exports = generateHtml;
