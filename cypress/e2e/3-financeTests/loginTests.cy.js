/// <reference types="cypress" />

describe('API Tests', () => {
  // before(() => {
  //   // Assuming you have a custom command to log in
  //   cy.login('admin', 'changeme');
  // });

  it('should make an API request', () => {
    cy.request({
      method: 'POST',
      url: 'https://cypress-training.iliad-solutions.com/reg/api/login',
      timeout: 10000, // Increase timeout to 10 seconds
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Cookie': 'JSESSIONID=DEC23C4C850F3875C4424085C123E9D5; JSESSIONID=131BB908C5515C3521DADDDF12D91684',
        'DNT': '1',
        'Origin': 'https://cypress-training.iliad-solutions.com',
        'Referer': 'https://cypress-training.iliad-solutions.com/reg/index.html',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"'
      },
      body: {
        "username": "admin",
        "password": "changeme"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      console.log(response.body);
    });

    cy.visit("https://cypress-training.iliad-solutions.com/reg/index.html#SGVhZGVyOnRlc3Rpbmc6VGVzdGluZ01lbnU6dGVzdC1zeXN0ZW0tc3RhdGU=")
    cy.wait(4000)
    cy.get('#ext-gen9096 > .x-grid-cell-inner').click({force:true})
    cy.get('#button-6212-btnIconEl').click({force:true})
    cy.wait(4000)
    cy.get('#button-1031-btnIconEl').click({force:true})

    cy.wait(4000)
  });
});



// github decentralized version control system

// git init

/// git add Readme.md
//  git commit -m "Adding readme file"
// git push -u origin main
// git branching strategy

// git checkout -b samiscode





