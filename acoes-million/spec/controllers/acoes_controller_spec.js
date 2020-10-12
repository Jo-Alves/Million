const host = "http://localhost:3000";
const axios = require("axios").default;
const Acao = require("../../app/models/acao");
const token = "1234567890";

describe("Acoes Controller", () => {
    beforeEach(async () => {
        await Acao.deleteMany();
        await Acao.create({
            nome: "Bar da Grazy",
            codigo: "aBarGrazy",
            taxa: 0.8,
            tipo: "ON"
        })
    })

    describe("GET/acoes.json", () => {
        it("Deve retornar o status de 200", async done => {
            const response = await axios.get(`${host}/acoes.json`, { headers: { auth_token: token } });

            expect(response.status).toBe(200);
            done();
        })
    })

    describe("GET/acoes/:id.json", () => {
        it("Deve retornar o status de 200 e o código da ação", async done => {
            const acao = await Acao.create({
                nome: "Loja JO e Val",
                codigo: "AJoVal",
                tipo: "ON",
                taxa: 1.0
            })
            const response = await axios.get(`${host}/acoes/${acao._id}.json`, { headers: { auth_token: token } });
            expect(response.status).toBe(200);
            expect(response.data.codigo).toBe("AJoVal");
            done();
        })
    })

    describe("PUT/acoes/:id.json", () => {
        it("Deve retornar o status de 204", async done => {
            const acao = await Acao.create({
                nome: "Mercedesssssssssssssssss",
                codigo: "AMercedessssssssssssss",
                tipo: "ON",
                taxa: 1.0
            })
            const acaoUpdate = {
                nome: "Mercedes",
                codigo: "AMercedes",
                tipo: "ON",
                taxa: 0.7
            }
            const response = await axios.put(`${host}/acoes/${acao._id}.json`, acaoUpdate, { headers: { auth_token: token } });
            expect(response.status).toBe(204);
            done();
        })
    })

    describe("DELETE/acoes/:id.json", () => {
        it("Deve retornar o status de 204", async done => {
            const acao = await Acao.create({
                nome: "Loja JOVal",
                codigo: "AJoVal10",
                tipo: "ON",
                taxa: 1.0
            })
            const response = await axios.delete(`${host}/acoes/${acao._id}.json`, { headers: { auth_token: token } });
            expect(response.status).toBe(204);
            done();
        })
    })

    describe("POST/acoes.json", () => {
        it("Deve retornar o status de 201", async done => {
            const body = {
                nome: "Ferrari",
                codigo: "AFerrari",
                taxa: 0.7,
                tipo: "ON"
            }

            const response = await axios.post(`${host}/acoes.json`, body, { headers: { auth_token: token } });
            expect(response.status).toBe(201);
            done();
        })
    })
})