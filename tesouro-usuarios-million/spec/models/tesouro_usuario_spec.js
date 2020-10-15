const TesouroUsuario = require("../../app/models/tesouros_usuario");

describe("TDD TesouroUsuario - ", () => {
    beforeEach(async () => {
        await TesouroUsuario.deleteMany();
        await TesouroUsuario.create({
            codigoTesouro: "8dasad",
            codigoUsuario: "sf828",
            valorInvestido: 300,
            devolucao: "2020-12-12"
        });

    })

    it("salvar tesouro", async done => {
        const tesouroUsuario = await TesouroUsuario.create({
            codigoTesouro: "8dasad",
            codigoUsuario: "sf828",
            valorInvestido: 300,
            devolucao: "2020-12-12"
        });

        expect(tesouroUsuario._id !== undefined).toBe(true);
        done();
    })
    it("altera tesouro", async done => {
        const tesouroUsuario = await TesouroUsuario.create({
            codigoTesouro: "8dasad",
            codigoUsuario: "sf828",
            valorInvestido: 300,
            devolucao: "2020-12-12"
        });

        const tesouroUsuarioUpdate = {
            codigoTesouro: "8dasad",
            codigoUsuario: "sf828",
            valorInvestido: 500,
            devolucao: "-12-12-2020"
        }

       await TesouroUsuario.findByIdAndUpdate({ _id: tesouroUsuario._id }, tesouroUsuarioUpdate);

        await TesouroUsuario.findById(tesouroUsuario._id).then(dado => {
            expect(dado.valorInvestido).toBe(500);
            done();
        })
    })

    it("delete tesouro", async done => {
        const tesouroUsuario = await TesouroUsuario.create({
            codigoTesouro: "8dasaddfsd",
            codigoUsuario: "sf828",
            valorInvestido: 300,
            devolucao: "2020-12-12"
        });

        const tesouroUsuarioDelete = await TesouroUsuario.findByIdAndDelete(tesouroUsuario._id);

        expect(tesouroUsuarioDelete._id !== undefined).toBe(true);
        done();
    })

    it("Buscar tesouro", async done => {
        await TesouroUsuario.create({
            codigoTesouro: "8dasadasd",
            codigoUsuario: "sf828",
            valorInvestido: 300,
            devolucao: "2020-12-12"
        });

        await TesouroUsuario.find().then(dados => {
            expect(dados.length > 0).toBe(true);
            done();
        })
    })
})