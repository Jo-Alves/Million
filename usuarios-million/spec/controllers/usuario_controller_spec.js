const axios = require("axios").default;
const Usuario = require("../../app/models/usuarios");
const host = "http://localhost:3000";

describe("UsuarioController", () => {
    beforeEach(async () => {
        await Usuario.deleteMany();
        await Usuario.create([
            { nome: "Valdirene Aparecida Ferreira", cpf: "000.000.000-00", telefone: "(99) 99999-9999", endereco: "Campo das flores, 123", email: "val@example.com", banco: "0111 0000000-0", nivelInvestidor: 9.9 },
            { nome: "Joelmir Rogério Carvalho", cpf: "111.111.111-11", telefone: "(88) 88888-8888", endereco: "Jardim das flores, 123", email: "jodev@example.com", banco: "0111 1111111-0", nivelInvestidor: 8.9 }
        ])
    })


    describe("GET/usuarios.json - Deve retornar uma lista de usuários", () => {
        it("deve retornar o status 200", async (done) => {
            const response = await axios.get(`${host}/usuarios.json`);
            expect(response.data[0].nome).toBe("Valdirene Aparecida Ferreira")
            expect(response.data[1].nome).toBe("Joelmir Rogério Carvalho")
            expect(response.status).toBe(200);
            done();
        })
    })

    describe("POST/usuarios.json - Deve salvar os dados do usuário no banco de dados", () => {
        it("deve retornar o status de 201", async (done) => {
            const body = {
                nome: "Alexina Rosa", cpf: "222.222.222-22", telefone: "(77) 77777-7777", email: "alexinarosa@example.com", endereco: "Campo das flores, 123", banco: "0111 3333333-5", nivelInvestidor: 9.5
            }
            const response = await axios.post(`${host}/usuarios.json`, body);
            expect(response.status).toBe(201);
            done();
        })
    })

    describe("PUT/usuarios.json - Deve alterar os dados do usuário no banco de dados", () => {
        it("deve retornar o status de 204", async (done) => {
            const usuario = await Usuario.create({
                nome: "Alexina Rosa", cpf: "222.222.222-22", telefone: "(77) 77777-7777", email: "alexinarosa@example.com", endereco: "Campo das flores, 123", banco: "0111 3333333-5", nivelInvestidor: 9.5
            });
            const body = {
                nome: "Maria Lídia", cpf: "333.333.333-33", telefone: "(88) 88888-8888", email: "marialidia@example.com", endereco: "Campo das flores, 123", banco: "0111 3333333-5", nivelInvestidor: 10
            }
           
            const response = await axios.put(`${host}/usuarios/${usuario._id}.json`, body);
            expect(response.status).toBe(204);
            done();
        })
    })
})

