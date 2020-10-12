const Tesouro = require("../../app/models/tesouro");
const axios = require("axios").default;
const host = "http://localhost:3000";
const token = "9876543210"

describe("TDD - Tesouro Controller - ", () => {
    beforeEach(async () => {
        await Tesouro.deleteMany();
        await Tesouro.create({
            nome: "DEF",
            taxa: 0.5,
            ir: "SIM",
            fixado: "Pré",
            vencimento: "2020/10//20 00:00:00",
            pais: "FRANÇA"
        });
    })

    describe("POST/tesouros.json - Deve salvar os dados do tesouro direto na API - ", () => {
        it("Deve retornar o status de 201", async done => {
            const body = {
                nome: "ABC",
                taxa: 0.5,
                ir: "SIM",
                fixado: "Pré",
                vencimento: "2020/10//20 00:00:00",
                pais: "POLÔNIA"
            }

            const response = await axios.post(`${host}/tesouros.json`, body, { headers: { auth_token: token } });
            expect(response.status).toBe(201);
            done();
        })
    })

    describe("GET/tesouros.json - Deve retonar todos os dados do tesouro direto na API - ", () => {
        it("Deve retornar o status de 200 e retonar o nome do tesouro direto", async done => {
            const response = await axios.get(`${host}/tesouros.json`, { headers: { auth_token: token } });
            expect(response.status).toBe(200);
            expect(response.data[0].nome).toBe("DEF");
            done();
        })
    })

    describe("GET/tesouros/:id.json - Deve retonar os dados do tesouro direto na API pelo ID - ", () => {
        it("Deve retornar o status de 200 e retonar o nome do tesouro direto", async done => {
            const tesouro = await Tesouro.create({
                nome: "GHI",
                taxa: 0.8,
                ir: "NÃO",
                fixado: "Pré",
                vencimento: "2020/10//20 00:00:00",
                pais: "CANADÁ"
            });

            const response = await axios.get(`${host}/tesouros/${tesouro._id}.json`, { headers: { auth_token: token } });
            expect(response.status).toBe(200);
            done();
        })
    })

    describe("PUT/tesouros/:id.json - Deve atualizar os dados do tesouro direto na API - ", () => {
        it("Deve retornar o status de 204", async done => {
            const tesouro = await Tesouro.create({
                nome: "JLM",
                taxa: 0.8,
                ir: "NÃO",
                fixado: "Pré",
                vencimento: "2020/10//20 00:00:00",
                pais: "CANADÁ"
            });

            const bodyUpdate = {
                nome: "JKL",
                taxa: 0.7,
                ir: "sim",
                fixado: "Pré",
                vencimento: "2020/10//20 00:00:00",
                pais: "ITÁLIA"
            }

            const response = await axios.put(`${host}/tesouros/${tesouro._id}.json`, bodyUpdate, { headers: { auth_token: token } });
            expect(response.status).toBe(204);
            done();
        })
    })

    describe("DELETE/tesouros/:id.json - Deve apagar um dados do tesouro direto na API - ", () => {
        it("Deve retornar o status de 204", async done => {
            const tesouro = await Tesouro.create({
                nome: "JLM",
                taxa: 0.8,
                ir: "NÃO",
                fixado: "Pré",
                vencimento: "2020/10//20 00:00:00",
                pais: "CANADÁ"
            });

            const response = await axios.delete(`${host}/tesouros/${tesouro._id}.json`, { headers: { auth_token: token } });
            expect(response.status).toBe(204);
            done();
        })
    })
})