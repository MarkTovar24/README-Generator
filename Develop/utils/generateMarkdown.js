// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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

module.exports = generateMarkdown;
