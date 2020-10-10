const User = require("../../app/models/user");

describe("Modelo de Usuário", () => {
    beforeEach(async () => {
        await User.deleteMany();
    })

    it("Deve salvar Usuario", async done => {
        const user = await User.create({
            nome: "Noelly Cristina", cpf: "555.555.555-55", telefone: "(99) 99999-9999", cep: "39.180-000", email: "noellycristina@example.com", endereco: "Campo das flores", numero: 123, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", banco: "0111 3333333-5", nivelInvestidor: 10
        });

        expect(user.nome === "Noelly Cristina").toBe(true);
        done();
    })

    it("Deve atualizar usuário", async done => {
        const user = await User.create({
            nome: "Maria", cpf: "657.555.555-55", telefone: "(99) 99999-9999", cep: "39.180-000", email: "noellycristina@example.com", endereco: "Campo das flores", numero: 123, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", banco: "0111 3333333-5", nivelInvestidor: 10
        });

        const users = new User(user)

        await User.findByIdAndUpdate({ _id: user._id }, { nome: "Maria Clara" });
        User.findById(user._id)
            .then(data => {
                expect(data.nome).toBe("Maria Clara");
                done()
            })

    });

    it("Deve buscar os dados pelo id do usuario", async done => {
        const user = await User.create({ nome: "Bennedito", cpf: "123.000.000-00", telefone: "(99) 99999-9999", cep: "39.180-000", endereco: "Campo das flores", numero: 123, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", email: "val@example.com", banco: "0111 0000000-0", nivelInvestidor: 9.9 })
        await User.findById(user._id)
            .then(data => {
                expect(data.nome).toBe("Bennedito");
                done()
            })
    })

    it("Deve buscar todos os dados", async done => {
        await User.create([
            { nome: "Maria do Rosário Alves Carvalho", cpf: "123.000.000-00", telefone: "(99) 99999-9999", cep: "39.180-000", endereco: "Campo das flores", numero: 123, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", email: "val@example.com", banco: "0111 0000000-0", nivelInvestidor: 9.9 },
            { nome: "Gislaine Nunes", cpf: "456.111.111-11", telefone: "(88) 88888-8888", cep: "39.180-000", endereco: "Jardim das flores", numero: 123, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", email: "jodev@example.com", banco: "0111 1111111-0", nivelInvestidor: 8.9 }
        ])
        await User.find()
            .then(data => {
                expect(data.length > 0).toBe(true);
                done()
            })
    })

    it("Deve apagar os dados", async done => {
        const user = await User.create({
            nome: "Alberto", cpf: "658.555.555-55", telefone: "(99) 99999-9999", cep: "39.180-000", email: "noellycristina@example.com", endereco: "Campo das flores", numero: 123, cidade: "Felício dos Santos", estado: "MG", pais: "Brasil", banco: "0111 3333333-5", nivelInvestidor: 1
        });

        await User.findByIdAndDelete(user._id);
        await User.findById(user._id)
            .then(data => {

                expect(!data).toBe(true);
                done()
            })
    });
})