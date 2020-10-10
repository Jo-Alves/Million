const axios = require("axios").default;
const User = require("../../app/models/user");
const host = "http://localhost:3000";

describe("UserController", () => {
    beforeEach(async () => {
        await User.deleteMany();
        await User.create([
            { nome: "Valdirene Aparecida Ferreira", cpf: "000.000.000-00", telefone: "(99) 99999-9999", cep: "39.180-000", endereco: "Campo das flores", numero: 123, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", email: "val@example.com", banco: "0111 0000000-0", nivelInvestidor: 9.9 },
            { nome: "Joelmir Rogério Carvalho", cpf: "111.111.111-11", telefone: "(88) 88888-8888", cep: "39.180-000", endereco: "Jardim das flores", numero: 123, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", email: "jodev@example.com", banco: "0111 1111111-0", nivelInvestidor: 8.9 }
        ])
    })


    describe("GET/usuarios.json - Deve retornar uma lista de usuários", () => {
        it("deve retornar o status 200", async (done) => {
            const response = await axios.get(`${host}/usuarios.json`, { headers: { "auth_token": "12345" } });
            expect(response.data[0].nome).toBe("Valdirene Aparecida Ferreira")
            expect(response.data[1].nome).toBe("Joelmir Rogério Carvalho")
            expect(response.status).toBe(200);
            done();
        })
    })


    describe("POST/usuarios.json - Deve salvar os dados do usuário no banco de dados", () => {
        it("deve retornar o status de 201", async (done) => {
            const body = {
                nome: "Alexina Rosa", cpf: "222.222.222-22", telefone: "(77) 77777-7777", cep: "39.180-000", email: "alexinarosa@example.com", endereco: "Campo das flores", numero: 123, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", banco: "0111 3333333-5", nivelInvestidor: 9.5
            }
            const response = await axios.post(`${host}/usuarios.json`, body, { headers: { "auth_token": "12345" } });
            expect(response.status).toBe(201);
            done();
        })
    })

    describe("PUT/usuarios/:id.json - Deve alterar os dados do usuário no banco de dados", () => {
        it("deve alterar usuário e retornar o status de 204", async (done) => {
            const user = await User.create({
                nome: "Alexina Rosa", cpf: "222.222.222-22", telefone: "(77) 77777-7777", cep: "39.180-000", email: "alexinarosa@example.com", endereco: "Campo das flores", numero: 123, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", banco: "0111 3333333-5", nivelInvestidor: 9.5
            });
            const response = await axios.put(`${host}/usuarios/${user._id}.json`, {
                _id: user._id,
                nome: "Maria Lídia", cpf: "333.333.333-33", telefone: "(88) 88888-8888", cep:"39.180-0000", email: "marialidia@example.com", endereco: "Campo das flores", numero: 123, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", banco: "0111 3333333-5", nivelInvestidor: 10
            }, { headers: { "auth_token": "12345" } });

            expect(response.status).toBe(204);
            done();
        })
    })

    describe("DELETE/usuarios/:id.json - Deve excluir os dados do Usuário pelo ID", () => {
        it("Deve apagar usuário e retornar o status de 204", async done => {
            let data = {
                nome: "Clarete Silva", cpf: "444.444.444-44", telefone: "(77) 55677-7777", email: "claretesilva@example.com", cep: "39.180-000", endereco: "Belo Jardim", numero: 234, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", banco: "0111 3333333-5", nivelInvestidor: 5
            }

            const user = await User.create(data);

            const response = await axios.delete(`${host}/usuarios/${user._id}.json`, { headers: { "auth_token": "12345" } });
            expect(response.status).toBe(204);
            done();
        })
    })

    describe("GET/usuarios/:id.json - Deve buscar os dados do usuário pelo ID", () => {
        it("deve retornar o status de 200", async (done) => {
            const data = {
                nome: "Clarete Silva", cpf: "444.444.444-44", telefone: "(77) 55677-7777", email: "claretesilva@example.com", cep: "39.180-000", endereco: "Belo Jardim", numero: 234, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", banco: "0111 3333333-5", nivelInvestidor: 5
            }

            const user = await User.create(data);

            const response = await axios.get(`${host}/usuarios/${user._id}.json`, { headers: { "auth_token": "12345" } });
            expect(response.status).toBe(200);
            done();
        })
    })
})