const Cliente = require("../../app/models/cliente");
const axios = require("axios").default;
const host = "http://localhost:3000";
const token = "12345"


describe("TDD Cliente Controller", () => {
    beforeEach(async () => {
        await Cliente.deleteMany();
        await Cliente.create([{
            nome: "Valdirene Aparecida",
            sobrenome: "Ferreira",
            cpf: "000.000.000-00",
            login: "val",
            senha: "12345"
        }, {
            nome: "Joelmir Rogério",
            sobrenome: "Carvalho",
            cpf: "111.111.111-11",
            login: "Jô Dev",
            senha: "12345"
        }])
    })

    it("GET - Deve retornar o status de 200", async done => {
        const response = await axios.get(`${host}/clientes.json`, { headers: { auth_token: token } })
        expect(response.status).toBe(200)
        expect(response.data[0].nome).toBe("Valdirene Aparecida")
        done();
    })

    it("GET - Deve retornar o status de 200", async done => {
        const data = {
            nome: "Noelly Cristina",
            sobrenome: "Carvalho",
            cpf: "100.000.000-00",
            login: "val",
            senha: "12345"
        }

        const cliente = await Cliente.create(data)

        const response = await axios.get(`${host}/clientes/${cliente._id}.json`, { headers: { auth_token: token } })
        expect(response.data.nome).toBe("Noelly Cristina")
        expect(response.status).toBe(200)
        done();
    })

    it("POST - Deve retornar o status de 201", async done => {
        const body = {
            nome: "Maria clara",
            sobrenome: "Carvalho",
            cpf: "100.000.000-00",
            login: "Noelly",
            senha: "12345"
        }

        const response = await axios.post(`${host}/clientes.json`, body, { headers: { auth_token: token } })
        expect(response.status).toBe(201)
        done();
    })

    it("PUT - Deve retornar o status de 204", async done => {
        const data = {
            nome: "Bennedittoooooooo",
            sobrenome: "Carvalho",
            cpf: "200.000.000-00",
            login: "Benne",
            senha: "12345"
        }

        const cliente = await Cliente.create(data);
        const body = {
            nome: "Benneditto",
            sobrenome: "Carvalho",
            cpf: "200.000.000-00",
            login: "Benne",
            senha: "12345"
        }

        const response = await axios.put(`${host}/clientes/${cliente._id}.json`, body, { headers: { auth_token: token } })
        expect(response.data).toBe("")
        expect(response.status).toBe(204)
        done();
    })

    it("DELETE - Deve retornar o status de 204", async done => {
        const data = {
            nome: "Bennedittoooooooo",
            sobrenome: "Carvalho",
            cpf: "220.000.000-00",
            login: "Benne",
            senha: "12345"
        }

        const cliente = await Cliente.create(data);

        const response = await axios.delete(`${host}/clientes/${cliente._id}.json`, { headers: { auth_token: token } })
        expect(response.data).toBe("")
        expect(response.status).toBe(204)
        done();
    })
})