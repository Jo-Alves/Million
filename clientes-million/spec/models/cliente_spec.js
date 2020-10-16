const Cliente = require("../../app/models/cliente");

describe("TDD modelo Cliente", () => {
    beforeEach(async () => {
        await Cliente.deleteMany();
    })

    it("deve salvar cliente", async done => {
        const data = {
            nome: "Valdirene Aparecida",
            sobrenome: "Ferreira",
            cpf: "000.000.000-00",
            login: "valdirene",
            senha: "12345"
        };

        const cliente = await Cliente.create(data);
        expect(cliente.nome).toBe("Valdirene Aparecida");
        done();
    })

    it("deve atualizar cliente", async done => {
        const data = {
            nome: "Joelmir Rogério",
            sobrenome: "Ferreira",
            cpf: "111.111.111-111",
            login: "Jô Dev",
            senha: "12345"
        };

        const dataUpdate = {
            nome: "Joelmir Rogério",
            sobrenome: "Carvalho",
            cpf: "111.111.111-11",
            login: "Jô Dev",
            senha: "12345"
        };

        const cliente = await Cliente.create(data);
        await Cliente.findByIdAndUpdate({ _id: cliente._id }, dataUpdate);
        const clienteUpdate = await Cliente.findById(cliente._id);
        expect(clienteUpdate.sobrenome).toBe("Carvalho");
        done();
    })

    it("deve apagar cliente", async done => {
        const data = {
            nome: "Joelmir Rogério",
            sobrenome: "Ferreira",
            cpf: "111.111.111-11",
            login: "Jô Dev",
            senha: "12345"
        };

        const cliente = await Cliente.create(data);
        await Cliente.findByIdAndDelete(cliente._id);
        const clienteDelete = await Cliente.findById(cliente._id);
        expect(clienteDelete === null).toBe(true);
        done();
    })

    it("deve buscar cliente", async done => {
        const data = [{
            nome: "Alexina",
            sobrenome: "Rosa",
            cpf: "222.222.222-22",
            login: "alexa",
            senha: "12345"
        }, {
            nome: "Vicente",
            sobrenome: "Ferreira",
            cpf: "333.333.333-33",
            login: "vick",
            senha: "12345"
        }];

        await Cliente.create(data);
        const clienteFind = await Cliente.find();
        expect(clienteFind[0].nome).toBe("Alexina");
        done();
    })

    it("deve buscar cliente", async done => {
        const data = {
            nome: "Maria Lídia",
            sobrenome: "Carvalho",
            cpf: "555.555.555-55",
            login: "lidia",
            senha: "12345"
        };

        const cliente = await Cliente.create(data);
        const clienteFind = await Cliente.find(cliente._id);
        expect(clienteFind[0].nome).toBe("Maria Lídia");
        done();
    })
})