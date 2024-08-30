/// <referencetypes="cypress"/>
describe('Cadastrar dispositivos', () => {
    it('Cadastrar um dispositivo', () => {
        const dataAtual = new Date().toISOString().slice(0, 10)
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
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.id).not.empty
                expect(response.body.createdAt).not.empty
                expect(response.body.createdAt.slice(0, 10)).equal(dataAtual)
                //console.log(response.body.createdAt.slice(0, 10))
                // Slice da Posição 0 até 10
                //console.log(new Date().toISOString().slice(0, 10))
                expect(response.body).not.empty                                
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

    it('Cadastrar um dispositivo sem mandar dados', () => {
        cy.cadastrarDevice('')
            .then((response) => {
                expect(response.status).equal(400)
                expect(response.body.error)
                .equal("400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.")
        })
    })      
})