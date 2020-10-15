const axios = require("axios").default;
const AcoesUsuario = require("../../app/models/acoes_usuarios");
const host = "http://localhost:3000";
const token = "12345";
describe("TDD - Testando as rotas - ", () => {
    beforeEach(async () => {
        await AcoesUsuario.deleteMany();
    });

    describe("POST/acoes-usuario.json - Deve salvar as acoes do usuário na API", () => {
        it("e deve retornar o status de 201", async done => {
            body = {
                codigoUsuario: "sd654a",
                codigoAcao: "vbSab4",
                valorInvestido: 3600,
                percentual: 8
            };

            const response = await axios.post(`${host}/acoes-usuario.json`, body, { headers: { auth_token: token } });
            expect(response.status).toBe(201);
            done();
        })
    })

    describe("GET/acoes-usuario.json - Deve retornar as acoes do usuário na API", () => {
        it("e deve retornar o status de 200", async done => {
            await AcoesUsuario.create({
                codigoUsuario: "asdsd654a",
                codigoAcao: "vbSab4asd",
                valorInvestido: 3650,
                percentual: 5
            })
            const response = await axios.get(`${host}/acoes-usuario.json`, { headers: { auth_token: token } });
            expect(response.status).toBe(200);
            done();
        })
    })

    describe("PUT/acoes-usuario/:id.json - Deve retornar as acoes do usuário na API", () => {
        it("e deve retornar o status de 200", async done => {
            const acoesUsuario = await AcoesUsuario.create({
                codigoUsuario: "asd",
                codigoAcao: "asd",
                valorInvestido: 36,
                percentual: 5
            })

            body = {
                codigoUsuario: "asdfasd",
                codigoAcao: "asd",
                valorInvestido: 365,
                percentual: 5
            }
            const response = await axios.put(`${host}/acoes-usuario/${acoesUsuario._id}.json`, body, { headers: { auth_token: token } });
            expect(response.status).toBe(204);
            done();
        })
    })

    describe("DELETE/acoes-usuario/:id.json - Deve retornar as acoes do usuário na API", () => {
        it("e deve retornar o status de 200", async done => {
            const acoesUsuario = await AcoesUsuario.create({
                codigoUsuario: "asd",
                codigoAcao: "asd",
                valorInvestido: 36,
                percentual: 5
            })
            const response = await axios.delete(`${host}/acoes-usuario/${acoesUsuario._id}.json`, { headers: { auth_token: token } });
            expect(response.status).toBe(204);
            expect(response.data).toBe('');
            done();
        })
    })
})