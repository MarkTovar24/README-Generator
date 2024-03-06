//Runs through every possible response on the "licenses" question, and adds the corrersponding badge
function renderLicenseBadge(licenses) {
  const license = licenses[0]
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "none") {
    return ""
  }
}

//Begins the generation process,
function generateMarkdown(data) {
//Returns the name of the project given by the user
//Returns choses license badge
  return `# ${data.projectname}\n
   ${renderLicenseBadge(data.licenses)}\n
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [usage](#usageinfo)
  3. [license](#licenses)
  4. [Contributors](#contribution)
  5. [Tests](#testing)

  ## Installation
  ${data.installinfo}

  ## Usage
  ${data.usageinfo}

  ## License
  ${data.licenses}

  ## Contributors
  ${data.contribution}

  ## Tests
  ${data.testing}
`;
}
//exports the generateMarkdown application to work together with index.js
module.exports = generateMarkdown;
