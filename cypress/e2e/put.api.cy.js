/// <referencetypes="cypress"/>
describe('Atualizar dispositivos', () => {
    it('Atualizar um dispositivo específico', () => {
        const body_cadastro = {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
        }
        const body_atualizar = {
            "name": "Apple MacBook Pro 16 - UPDATE",
            "data": {
               "year": 2024,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB",
               "OWNER": "Método Update"
            }
        }  
        cy.cadastrarDevice(body_cadastro)
        .then((response_post) => {                
                expect(response_post.status).equal(200)        
                expect(response_post.body.name).equal(body_cadastro.name)
            const devide_id = response_post.body.id                
        cy.atualizarDevice(devide_id, body_atualizar)
            .then((response_update) => {
                expect(response_update.status).equal(200)
                expect(response_update.body.name).equal(body_atualizar.name)
            })  
        })  
    })
})  