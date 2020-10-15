const axios = require("axios").default;
const TesouroUsuario = require("../../app/models/tesouros_usuario");
const host = "http://localhost:3000";
const token = "12345"

describe("TDD Tesouro Usuário Controller", () => {
    beforeEach(async () => {
        await TesouroUsuario.deleteMany();
    })

    describe("POST/tesouros-usuario.json", () => {
        it("Deve retornar o status de 201", async done => {
            body = {
                codigoTesouro: "salsicha",
                codigoUsuario: "sf828",
                valorInvestido: 50,
                dataInvestimento: new Date()
            }
            const response = await axios.post(`${host}/tesouros-usuario.json`, body, { headers: { auth_token: token } });
            expect(response.status).toBe(201)
            done()
        })
    })

    describe("GET/tesouros-usuario.json", () => {
        it("Deve retornar o status de 200 e o código do tesouro", async done => {
            body = {
                codigoTesouro: "VELMA",
                codigoUsuario: "sf828",
                valorInvestido: 50,
                dataInvestimento: new Date()
            }
            await TesouroUsuario.create(body)
            const response = await axios.get(`${host}/tesouros-usuario.json`, { headers: { auth_token: token } });
            expect(response.data[0].codigoTesouro).toBe("VELMA")
            expect(response.status).toBe(200)
            done()
        })
    })

    describe("GET/tesouros-usuario/:id.json", () => {
        it("Deve retornar o status de 201", async done => {
            body = {
                codigoTesouro: "FRINSTONE",
                codigoUsuario: "sf828",
                valorInvestido: 50,
                dataInvestimento: new Date()
            }
            const tesouroUsuario = await TesouroUsuario.create(body)
            const response = await axios.get(`${host}/tesouros-usuario/${tesouroUsuario._id}.json`, { headers: { auth_token: token } });
            expect(response.data.codigoTesouro).toBe("FRINSTONE")
            expect(response.status).toBe(200)
            done()
        })
    })

    describe("PUT/tesouros-usuario/:id.json", () => {
        it("Deve retornar o status de 204", async done => {
            const body = {
                codigoTesouro: "BARNEEEEEEEY",
                codigoUsuario: "sf828",
                valorInvestido: 50,
                dataInvestimento: new Date()
            }

            const bodyUpdate = {
                codigoTesouro: "BARNEY",
                codigoUsuario: "sf828",
                valorInvestido: 50,
                dataInvestimento: new Date()
            }
            const tesouroUsuario = await TesouroUsuario.create(body)
            const response = await axios.put(`${host}/tesouros-usuario/${tesouroUsuario._id}.json`, bodyUpdate, { headers: { auth_token: token } });
            const find = await TesouroUsuario.findById(tesouroUsuario._id)
            expect(find.codigoTesouro).toBe("BARNEY")
            expect(response.status).toBe(204)
            done()
        })
    })

    describe("DELETE/tesouros-usuario/:id.json", () => {
        it("Deve retornar o status de 204", async done => {
            body = {
                codigoTesouro: "FRINSTONE",
                codigoUsuario: "sf828",
                valorInvestido: 50,
                dataInvestimento: new Date()
            }
            const tesouroUsuario = await TesouroUsuario.create(body)
            const response = await axios.delete(`${host}/tesouros-usuario/${tesouroUsuario._id}.json`, { headers: { auth_token: token } });
            expect(response.data).toBe("")
            expect(response.status).toBe(204)
            done()
        })
    })
})
