const User = require("../../app/models/product");

describe("Modelo de Produto", () => {
    beforeEach(async () => {
        await User.deleteMany();
    })

    it("Deve salvar Produto", async done => {
        const product = await User.create({ nome: "Notebook DELL", descricao: "Notebook com processador i9, 16GB de RAM e 2TB de HD", nivelInvestidor: 8 });

        expect(product.nome === "Notebook DELL").toBe(true);
        done();
    })

    it("Deve atualizar produto", async done => {
        const product = await User.create({
            nome: "Notebook DELL", descricao: "Notebook com processador i9, 16GB de RAM e 2TB de HD", nivelInvestidor: 8
        });

        await User.findByIdAndUpdate({ _id: product._id }, { nome: "Notebook DELL" });
        User.findById(product._id)
            .then(data => {
                expect(data.nome).toBe("Notebook DELL");
                done()
            })

    });

    it("Deve buscar os dados pelo id do produto", async done => {
        const product = await User.create({ nome: "Notebook LG", descricao: "Notebook com processador i9, 16GB de RAM e 2TB de HD", nivelInvestidor: 8 });
        await User.findById(product._id)
            .then(data => {
                expect(data.nome)).toBe("Notebook LG");
                done()
            })
    })

    it("Deve buscar todos os dados", async done => {
        await User.create([
            { nome: "Carro sport", descricao: "Carro  zero quilometro com cambrio automático e elétrico", nivelInvestidor: 9 },
            { nome: "Moto", descricao: "Moto  zero quilometro com Freio a disco e elétrico", nivelInvestidor: 8 }
        ])
        await User.find()
            .then(data => {
                expect(data.length > 0).toBe(true);
                done()
            })
    })

    it("Deve apagar os dados", async done => {
        const product = await User.create( { nome: "Carro sport", descricao: "Carro  zero quilometro com cambrio automático e elétrico", nivelInvestidor: 9 });

        await User.findByIdAndDelete(product._id);
        await User.findById(product._id)
            .then(data => {

                expect(!data).toBe(true);
                done()
            })
    });
})