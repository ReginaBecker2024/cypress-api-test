/// <referencetypes="cypress"/>
describe('Atualizar dispositivos', () => {
    const payload_cadastro_device = require('../fixtures/Cadastrar_device_sucesso.json')    
    const payload_atualizar_device = require('../fixtures/Atualizar_device_sucesso.json')    
    
    it('Atualizar um dispositivo específico', () => {
        cy.cadastrarDevice(payload_cadastro_device)
        .then((response_post) => {                
                expect(response_post.status).equal(200)        
                expect(response_post.body.name).equal(payload_cadastro_device.name)
            const devide_id = response_post.body.id                
        cy.atualizarDevice(devide_id, payload_atualizar_device)
            .then((response_update) => {
                expect(response_update.status).equal(200)
                expect(response_update.body.name).equal(payload_atualizar_device.name)
            })  
        })  
    })
})  