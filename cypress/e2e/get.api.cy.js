/// <referencetypes="cypress"/>
describe('Buscar dispositivos', () => {
    it('Buscar um dispositivo específico', () => {

        const devide_id = '7'
        cy.buscaDeviceEspecifico(devide_id)
            .then((response) => {
                // npx cypress open F12 - Console
                //console.log(response)
                expect(response.status).equal(200)
                expect(response.body).not.empty                
                expect(response.body.id).equal(devide_id)
                expect(response.body.name).equal('Apple MacBook Pro 16')
                expect(response.body.data).not.empty
                expect(response.body.data.year).not.string
                expect(response.body.data.year).equal(2019)
                expect(response.body.data.price).not.string
                expect(response.body.data.price).equal(1849.99)
                expect(response.body.data['CPU model']).not.empty
                expect(response.body.data['Hard disk size']).not.empty
        })
    })  

    it('Buscar um dispositivo inexistente', () => {

        const devide_id = '123456'
        cy.buscaDeviceEspecifico(devide_id)
            .then((response) => {                
                expect(response.status).equal(404)
                expect(response.body).not.empty
                expect(response.body.error).equal(`Oject with id=${devide_id} was not found.`)
        })
    })      
})