/// <referencetypes="cypress"/>
describe('Excluir dispositivos', () => {
    const payload_cadastro_device = require('../fixtures/Cadastrar_device_sucesso.json')    

    it('Excluir um dispositivo específico', () => {
        cy.cadastrarDevice(payload_cadastro_device)
            .then((response_post) => {                
                expect(response_post.status).equal(200)        

            const devide_id = response_post.body.id

        cy.excluirDevice(devide_id)
            .then((response_del) => {
                expect(response_del.status).equal(200)
                expect(response_del.body.message).equal(`Object with id = ${response_post.body.id} has been deleted.`)
        })  
    })          
    })

    it('Excluir um dispositivo não existente', () => {
            const id_inexistente = 'regina'
        cy.excluirDevice(id_inexistente)
            .then((response_del) => {
                expect(response_del.status).equal(404)
                expect(response_del.body.error).equal(`Object with id = ${id_inexistente} doesn't exist.`)
        })  
    })    
})  