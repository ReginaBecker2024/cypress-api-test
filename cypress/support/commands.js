// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
  Cypress.Commands.add('buscaDeviceEspecifico', (devide_id) => { 
    cy.request({
        method: 'GET',
        url: `/objects/${devide_id}`,
        failOnStatusCode: false
}).then((retorno) => { 
    return retorno 
    })
})

Cypress.Commands.add('cadastrarDevice', (payload) => { 
    cy.request({    
        method: 'POST',
        url: '/objects',
        failOnStatusCode: false,
        body: payload
}).then((retorno) => { 
    return retorno 
    })
})

Cypress.Commands.add('excluirDevice', (devide_id) => { 
    cy.request({
        method: 'DELETE',
        url: `/objects/${devide_id}`,
        failOnStatusCode: false
    }).then((retorno) => { 
    return retorno 
    })
})

Cypress.Commands.add('atualizarDevice', (devide_id, payload) => { 
    cy.request({    
        method: 'PUT',
        url: `/objects/${devide_id}`,
        failOnStatusCode: false,
        body: payload
}).then((retorno) => { 
    return retorno 
    })
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })