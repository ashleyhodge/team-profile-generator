const genManager = function(manager) {
    return `
    <div class= "col-4 mt-4">
        <div class= "card h-100">
            <div class= "card-header">
                <h2>${manager.name}</h3>
                <h3> Manager </h3>
            </div>
            <div class= "card-body"
                <h4 class= "id"> ID: ${manager.id}</h4>
                <h4 class= "email"> Email Address: <a href= "mailto:${manager.email}"> ${manager.email} </h4>
            </div>
        </div>
    </div>
    `;
}

const genEngineer = function(engineer) {
    return `
    <div class= "col-4 mt-4">
        <div class= "card h-100">
            <div class= "card-header">
                <h2>${engineer.name}</h3>
                <h3> Manager </h3>
            </div>
            <div class= "card-body"
                <h4 class= "id"> ID: ${engineer.id}</h4>
                <h4 class= "email"> Email Address: <a href= "mailto:${engineer.email}"> ${engineer.email} </h4>
                <h4 class+ "github"> GitHub Account: <a href="https://github.com/${engineer.github}"> ${engineer.github} </a></h4>
            </div>
        </div>
    </div>
    `
}

const genIntern = function(intern) {
    return `
    <div class= "col-4 mt-4">
        <div class= "card h-100">
            <div class= "card-header">
                <h2>${intern.name}</h3>
                <h3> Manager </h3>
            </div>
            <div class= "card-body"
                <h4 class= "id"> ID: ${intern.id} </h4>
                <h4 class= "email"> Email Address: <a href= "mailto:${intern.email}"> ${intern.email} </h4>
                <h4 class= "school"> School: ${intern.school} </h4>
            </div>
        </div>
    </div>
    `
}

const generatePage = function() {
    return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
    `
}

// export to index
module.exports = generateHTML; 