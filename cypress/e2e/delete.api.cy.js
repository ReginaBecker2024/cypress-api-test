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
        cy.cadastrarDevice(body)
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