// const Acao = require("../../app/models/acao")
// const Action = require("../../app/models/acao")

// describe("Teste Modelo Ações", () => {
//     beforeEach(async () => {
//         await Acao.deleteMany();
//     });

//     describe("FIND ACTION", () => {
//         it("Deve retornar uma ação", async done => {
//             await Acao.create({
//                 nome: "Facebook",
//                 codigo: "acao-facebook",
//                 taxa: 0.8,
//                 tipo: "PN"
//             })
//             const acao = await Acao.find({})
//             expect(acao !== undefined).toBe(true)
//             done()
//         })
//     })

//     describe("FINDONE ACTION", () => {
//         it("Deve retornar uma ação pelo id", async done => {
//             const acaoId = await Acao.create({
//                 nome: "Microsoft",
//                 codigo: "acao-Microsoft",
//                 taxa: 0.8,
//                 tipo: "PN"
//             })
//             const acao = await Acao.findOne(acaoId)
//             expect(acao !== undefined).toBe(true)
//             done()
//         })
//     })

//     describe("SAVE ACTION", () => {
//         it("Deve salvar a ação", async done => {
//             const acao = await Acao.create({
//                 nome: "Coca-Cola",
//                 codigo: "acao-coca-cola",
//                 taxa: 0.8,
//                 tipo: "ON"
//             })

//             expect(acao.nome).toBe("Coca-Cola");
//             done()
//         })
//     })

//     describe("UPDATE ACTION", () => {
//         it("Deve atualizar a ação", async done => {
//             const acaoId = await Acao.create({
//                 nome: "Apple",
//                 codigo: "VApple",
//                 taxa: 0.8,
//                 tipo: "ON"
//             })
//             const acaoUpdate = await Acao.findByIdAndUpdate({ _id: acaoId._id }, {
//                 nome: "Apple",
//                 codigo: "acao-apple",
//                 taxa: 1.0,
//                 tipo: "ON"
//             })
//             expect(acaoUpdate.nome).toBe("Apple");
//             done()
//         })
//     })

//     describe("DELETE ACTION", () => {
//         it("Deve excluir a ação", async done => {
//             const acaoId = await Acao.create({
//                 nome: "Apple",
//                 codigo: "VApple",
//                 taxa: 0.8,
//                 tipo: "ON"
//             })
//             const acaoUpdate = await Acao.findByIdAndDelete(acaoId._id)
//             await Acao.findById(acaoId._id).then(data => {
//                 expect(!data).toBe(true);
//                 done()
//             })

//         })
//     })

//     describe("Save ACTION", () => {
//         it("Não pode repetir o nome da ação", async done => {
//             const acao = await Acao.create({
//                 nome: "Didox",
//                 codigo: "ADidox",
//                 taxa: 0.8,
//                 tipo: "ON"
//             });
//             const newAcao = await Acao.create({
//                 nome: "Google",
//                 codigo: "AGoogle",
//                 taxa: 0.8,
//                 tipo: "ON"
//             })

//             expect(newAcao.nome).not.toBe(acao.nome);
//             done();
//         })
//     })

//     describe("Save ACTION", () => {
//         it("Não pode repetir o código da ação", async done => {
//             const acao = await Acao.create({
//                 nome: "Las Technology",
//                 codigo: "ALas",
//                 taxa: 0.8,
//                 tipo: "ON"
//             });
//             const newAcao = await Acao.create({
//                 nome: "LVL",
//                 codigo: "ALVL",
//                 taxa: 0.8,
//                 tipo: "ON"
//             })

//             expect(newAcao.codigo).not.toBe(Acao.codigo);
//             done();

//         })
//     })
// })