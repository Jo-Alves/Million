const Tesouro = require("../../app/models/tesouro");

describe("TDD Tesouro", () => {
    beforeEach(async () => {
        await Tesouro.deleteMany();

    })

    describe("Metódo Salvar", () => {
        it("Deve salvar no mongo o tesouro direto", async done => {
            const tesouro = await Tesouro.create({
                nome: "TCU",
                taxa: 0.2,
                ir: "NÃO",
                fixado: "Pós",
                vencimento: "2020/10//20 00:00:00",
                pais: "Brasil"
            })

            expect(tesouro.nome).toBe("TCU");
            done();
        })
    })

    describe("Metódo Atualizar", () => {
        it("Deve atualizar no mongo o tesouro direto", async done => {
            const tesouro = await Tesouro.create({
                nome: "TU",
                taxa: 0.2,
                ir: "NÃO",
                fixado: "Pós",
                vencimento: "2020/10//20 00:00:00",
                pais: "Brasil"
            })

            await Tesouro.findByIdAndUpdate({ _id: tesouro._id }, {
                nome: "TCU",
                taxa: 0.2,
                ir: "SIM",
                fixado: "Pós",
                vencimento: "2020/10//20 00:00:00",
                pais: "Brasil"
            })
            const tesouroUpdate = await Tesouro.findById(tesouro._id);

           expect(tesouroUpdate.nome).toBe("TCU");
            done();
        })
    })

    describe("Metódo Apagar", () => {
        it("Deve apagar no mongo o tesouro direto", async done => {
            const tesouro = await Tesouro.create({
                nome: "TU",
                taxa: 0.2,
                ir: "NÃO",
                fixado: "Pós",
                vencimento: "2020/10//20 00:00:00",
                pais: "Brasil"
            })

            await Tesouro.findByIdAndDelete(tesouro._id)

            const tesouroUpdate = await Tesouro.findById(tesouro._id);
            expect(tesouroUpdate).toBe(null);
            done();
        })
    })

    describe("Metodo Buscar", () => {
        it("Deve buscar no mongo o tesouro direto", async done => {
            await Tesouro.create({
                nome: "TCUEAU",
                taxa: 0.2,
                ir: "NÃO",
                fixado: "Pós",
                vencimento: "2020/10//20 00:00:00",
                pais: "EUA"
            });

            Tesouro.find({})
                .then(dado => {
                    expect(dado.length > 0).toBe(true);
                    done();
                })
        })
    })

    describe("Metodo Buscar", () => {
        it("Deve buscar no mongo o tesouro direto por ID", async done => {
            const tesouro = await Tesouro.create({
                nome: "TCUJA",
                taxa: 0.2,
                ir: "NÃO",
                fixado: "Pós",
                vencimento: "2020/10//20 00:00:00",
                pais: "JAMAICA"
            });

            Tesouro.findById(tesouro._id)
                .then(dado => {
                   expect(dado.nome).toBe("TCUJA");
                    done();
                })
        })
    })
})