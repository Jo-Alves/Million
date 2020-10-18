const FundoImobiliario = require("../../app/models/fundo-imobiliario")

describe("TDD - Modelo fundo imobiliario", () => {
    beforeEach(async () => {
        await FundoImobiliario.deleteMany();
	 await FundoImobiliario.create([{
            nome: "MARSHALL",
            taxaRetorno: 0.5,
            indiceInfix: 1
        }, {
            nome: "ROCK",
            taxaRetorno: 0.8,
            indiceInfix: 2
        }])
    })

    it("Deve salvar", async done => {
        const fi = await FundoImobiliario.create([{
            nome: "TOM",
            taxaRetorno: 0.5,
            indiceInfix: 1
        }, {
            nome: "JERRY",
            taxaRetorno: 0.8,
            indiceInfix: 2
        }])

        expect(fi[0].nome).toBe("TOM");
        done();
    })
   
    it("Deve Buscar", async done => {
        await FundoImobiliario.create([{
            nome: "MARSHALL",
            taxaRetorno: 0.5,
            indiceInfix: 1
        }, {
            nome: "ROCK",
            taxaRetorno: 0.8,
            indiceInfix: 2
        }])

        const fi = await FundoImobiliario.find()
        expect(fi[0].nome).toBe("MARSHALL");
        done();
    })

    it("Deve Buscar por ID", async done => {
       const fiCreate = await FundoImobiliario.create([{
            nome: "MARSHALL",
            taxaRetorno: 0.5,
            indiceInfix: 1
        }, {
            nome: "CHEASE",
            taxaRetorno: 0.8,
            indiceInfix: 2
        }])

        const fi = await FundoImobiliario.findById(fiCreate[1]._id)
        expect(fi.nome).toBe("CHEASE");
        done();
    })

    it("Deve Atualiza", async done => {
       const fiCreate = await FundoImobiliario.create({
            nome: "ZUMAaaaa",
            taxaRetorno: 0.5,
            indiceInfix: 1
        })

        const fiUpdate = {
            nome: "ZUMA",
            taxaRetorno: 0.5,
            indiceInfix: 1
        }

        await FundoImobiliario.findByIdAndUpdate({_id: fiCreate._id}, fiUpdate)
        const fi = await FundoImobiliario.findById(fiCreate._id)
        expect(fi.nome).toBe("ZUMA");
        done();
    })

    it("Deve excluir", async done => {
       const fiCreate = await FundoImobiliario.create({
            nome: "ZUMAaaaaaaaa",
            taxaRetorno: 0.5,
            indiceInfix: 1
        })

        await FundoImobiliario.findByIdAndDelete(fiCreate._id)
        const fi = await FundoImobiliario.findById(fiCreate._id)
        expect(fi).toBe(null);
        done();
    })
})