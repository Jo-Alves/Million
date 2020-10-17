const CDB = require("../../app/models/cdb")
const auth_token = "12345";
const host = "http://localhost:3000";
const axios = require("axios").default;

describe("TDD - CBD controller", () => {
    beforeEach(async () => {
        await CDB.deleteMany();
        await CDB.create([{
            nome: "MULHER GATO",
            valorTaxa: 500.00,
            vencimento: new Date()
        }, {
            nome: "VIÚVA GAVIÃO",
            valorTaxa: 800.00,
            vencimento: new Date()
        }])
    })

    it("GET - Deve retornar 200 e o nome Mulher Gato", async done => {
        const response = await axios.get(`${host}/cdb.json`, { headers: { auth_token } })
        expect(response.data[0].nome).toBe("MULHER GATO");
        expect(response.data.length > 0).toBe(true);
        expect(response.status).toBe(200);
        done();
    })

    it("GET - Deve retornar 200 e o nome Florzinha", async done => {
        const cdb = await CDB.create({
            nome: "FLORZINHA",
            valorTaxa: 500.00,
            vencimento: new Date()
        })

        const response = await axios.get(`${host}/cdb/${cdb._id}.json`, { headers: { auth_token } })
        expect(response.data.nome).toBe("FLORZINHA");
        expect(response.status).toBe(200);
        done();
    })

    it("POST - Deve retornar 201", async done => {
        body = {
            nome: "DOCINHO",
            valorTaxa: 500.00,
            vencimento: new Date()
        }

        const response = await axios.post(`${host}/cdb.json`, body, { headers: { auth_token } });
        expect(response.status).toBe(201);
        done();
    })
    
    it("DELETE - Deve retornar 204", async done => {
        const cdb = await CDB.create({
            nome: "FLORZINHA",
            valorTaxa: 500.00,
            vencimento: new Date()
        })

        const response = await axios.delete(`${host}/cdb/${cdb._id}.json`, { headers: { auth_token } })
        expect(response.status).toBe(204);
        done();
    })

    it("PUT - Deve retornar 204", async done => {
        const cdb = await CDB.create({
            nome: "FLORZINHA",
            valorTaxa: 500.00,
            vencimento: new Date()
        })

        const body = {
            nome: "LINDINHA",
            valorTaxa: 500.00,
            vencimento: new Date()
        }

        const response = await axios.put(`${host}/cdb/${cdb._id}.json`, body, { headers: { auth_token } })
        expect(response.status).toBe(204);
        done();
    })
})