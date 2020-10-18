const FundoImobiliario = require("../../app/models/fundo-imobiliario");
const auth_token = "12345";
const host = "http://localhost:3000";
const axios = require("axios").default;

describe("TDD - CBD controller", () => {
    beforeEach(async () => {
        await FundoImobiliario.deleteMany();
        await FundoImobiliario.create([{
            nome: "MULHER GATO",
            taxaRetorno: 0.35,
            indiceInfix: 1
        }, {
            nome: "VIÚVA GAVIÃO",
            taxaRetorno: 0.8,
            indiceInfix: 1
        }])
    })

    it("GET - Deve retornar 200 e o nome Mulher Gato", async done => {
        const response = await axios.get(`${host}/fi.json`, { headers: { auth_token } })
        expect(response.data[0].nome).toBe("MULHER GATO");
        expect(response.data.length > 0).toBe(true);
        expect(response.status).toBe(200);
        done();
    })

    it("GET - Deve retornar 200 e o nome Florzinha", async done => {
        const fi = await FundoImobiliario.create({
            nome: "FLORZINHA",
            taxaRetorno: 0.35,
            indiceInfix: 1
        })

        const response = await axios.get(`${host}/fi/${fi._id}.json`, { headers: { auth_token } })
        expect(response.data.nome).toBe("FLORZINHA");
        expect(response.status).toBe(200);
        done();
    })

    it("POST - Deve retornar 201", async done => {
        body = {
            nome: "DOCINHO",
            taxaRetorno: 0.35,
            indiceInfix: 1
        }

        const response = await axios.post(`${host}/fi.json`, body, { headers: { auth_token } });
        expect(response.status).toBe(201);
        done();
    })
    
    it("DELETE - Deve retornar 204", async done => {
        const fi = await FundoImobiliario.create({
            nome: "FLORZINHA",
            taxaRetorno: 0.35,
            indiceInfix: 1
        })

        const response = await axios.delete(`${host}/fi/${fi._id}.json`, { headers: { auth_token } })
        expect(response.status).toBe(204);
        done();
    })

    it("PUT - Deve retornar 204", async done => {
        const fi = await FundoImobiliario.create({
            nome: "FLORZINHA",
            taxaRetorno: 0.35,
            indiceInfix: 1
        })

        const body = {
            nome: "LINDINHA",
            taxaRetorno: 0.35,
            indiceInfix: 1
        }

        const response = await axios.put(`${host}/fi/${fi._id}.json`, body, { headers: { auth_token } })
        expect(response.status).toBe(204);
        done();
    })
})