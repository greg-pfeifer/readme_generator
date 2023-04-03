// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}
    
  ## Description
    
  ${data.description}
  
    ---
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ---
  
  ## Installation
  
  ${data.installation}
  
  ---
  
  ## How to Contribute
  
  ${data.contributions}
  
  ---
  
  ## Tests
  
  ${data.tests}
  
  ---
  
  ## License
  
  This project is licensed with ${data.license}
  
  ---
  
  ## Questions
  
  - [Github](${data.github})
  - [Email](${data.github})
  
  ---
  
  `;
  }
  
  module.exports = generateMarkdown;
  