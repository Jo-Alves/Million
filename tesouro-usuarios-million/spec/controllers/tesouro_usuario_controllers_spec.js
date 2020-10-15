const axios = require("axios").default;
const TesouroUsuario = require("../../app/models/tesouros_usuario");
const host = "http://localhost:3000"

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
            const response = await axios.post(`${host}/tesouros-usuario.json`, body);
            expect(response.status).toBe(201)
            done()
        })
    })
})