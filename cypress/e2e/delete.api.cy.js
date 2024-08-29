/// <referencetypes="cypress"/>
describe('Excluir dispositivos', () => {
    it('Excluir um dispositivo específico', () => {
        const body = {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
        }
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body: body
        }).as('postDeviceResult')

        // Validações/Asserções
        cy.get('@postDeviceResult').then((response_post) => {                
                expect(response_post.status).equal(200)        

        cy.request({
            method: 'DELETE',
            url: `https://api.restful-api.dev/objects/${response_post.body.id}`,
            failOnStatusCode: false
        }).as('deleteDeviceResult')

        // Validações/Asserções
        cy.get('@deleteDeviceResult').then((response_del) => {
                expect(response_del.status).equal(200)
                expect(response_del.body.message).equal(`Object with id = ${response_post.body.id} has been deleted.`)
            })
        })  
    })
})  