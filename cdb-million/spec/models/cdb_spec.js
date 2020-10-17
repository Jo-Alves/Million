const CDB = require("../../app/models/cdb")

describe("TDD - Modelo CDB", () => {
    beforeEach(async () => {
        await CDB.deleteMany();
        await CDB.create([{
            nome: "MULHER MARAVILHA",
            valorTaxa: 500.00,
            vencimento: new Date()
        }, {
            nome: "MULHER GAVIÃO",
            valorTaxa: 800.00,
            vencimento: new Date()
        }]);
    })

    it("Salvar CDB", async done => {
        const cdb = await CDB.create([{
            nome: "JETSON",
            valorTaxa: 500.00,
            vencimento: new Date()
        }, {
            nome: "NICK",
            valorTaxa: 800.00,
            vencimento: new Date()
        }])

        expect(cdb[0].nome).toBe("JETSON");
        done();
    })

    it("Atualizar CDB", async done => {
        const cdb = await CDB.create({
            nome: "LEO",
            valorTaxa: 575.00,
            vencimento: new Date()
        })

        await CDB.findByIdAndUpdate({ _id: cdb._id }, {
            nome: "RAFA",
            valorTaxa: 250.00,
            vencimento: new Date()
        })

        const cdbUpdate = await CDB.findById(cdb._id);
        expect(cdbUpdate.nome).toBe("RAFA");
        done();
    })

    it("Excluir CDB", async done => {
        const cdb = await CDB.create({
            nome: "LEO",
            valorTaxa: 575.00,
            vencimento: new Date()
        })

        await CDB.findByIdAndDelete(cdb._id)

        const cdbDelete = await CDB.findById(cdb._id);
        expect(cdbDelete).toBe(null);
        done();
    })

    it("Buscar CDB por ID", async done => {
        const cdb = await CDB.create({
            nome: "DONATELO",
            valorTaxa: 575.00,
            vencimento: new Date()
        })

        const cdbFindId = await CDB.findById(cdb._id);
        expect(cdbFindId.nome).toBe("DONATELO");
        done();
    })

    it("Buscar todos os CDBs", async done => {
        await CDB.create({
            nome: "DIPSE",
            valorTaxa: 575.00,
            vencimento: new Date()
        })

        const cdbFind = await CDB.find();
        expect(cdbFind.length > 0).toBe(true);
        done();
    })
})