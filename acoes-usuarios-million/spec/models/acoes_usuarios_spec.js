const AcoesUsuario = require("../../app/models/acoes_usuarios");

describe("TDD acoes-usuarios - ", () => {
    // beforeEach(async () => {
    //     await AcoesUsuario.deleteMany();
    //     await AcoesUsuario.create([
    //         {
    //             codigoUsuario: 1,
    //             codigoAcao: "5fa99",
    //             valorInvestido: 400,
    //             percentual: 1
    //         },
    //         {
    //             codigoUsuario: 2,
    //             codigoAcao: "5fd32",
    //             valorInvestido: 500,
    //             percentual: 0.8
    //         }
    //     ])
    // })

    describe("Deve retornar se o model de AcoesUsuario", () => {
        it("retornou o valor investido", done => {
            AcoesUsuario.findOne({}).exec(async (error, acao) => {
                let valorInvestido = await AcoesUsuario.valorInvestidoPorAcao(acao.codigoUsuario, acao.codigoAcao);
               
                expect(valorInvestido.total !== null && valorInvestido.total !== undefined).toBe(true);
                expect(valorInvestido.acao !== null && valorInvestido.acao !== undefined).toBe(true);
                done()
            })
        })

        it('Foi criado', (done) => {
            AcoesUsuario.create({
                codigoUsuario: "1231",
                codigoAcao: "ZM007",
                valorInvestido: 45,
                percentual: 15
            }, (err, res) => {
                expect(err == undefined || err == null).toBe(true)
            })
            done();
        })

        it('alterou  o valor investido e percentual ', async (done) => {
            let acao = await AcoesUsuario.create({
                codigoUsuario: "6546asd654a",
                codigoAcao: "Sab4",
                valorInvestido: 3600,
                percentual: 8
            });

            let acao_alterada = await AcoesUsuario.findByIdAndUpdate(acao._id, { valorInvestido: 1550, percentual: 50 }, { new: true });

            expect(acao_alterada !== null && acao_alterada !== undefined).toBe(true)
            expect(acao_alterada.valorInvestido == 1550).toBe(true)
            expect(acao_alterada.percentual == 50).toBe(true)
            done();
        });


        it('salvou o percentual e o valor investido apenas após a 18h', async (done) => {
            let atual = new Date(Date.now());
            var mercado_aberto = false;

            let acao = await AcoesUsuario.create({
                codigoUsuario: "sldjl654sdf",
                codigoAcao: "LET3",
                valorInvestido: 5600,
                percentual: 11
            });

            if (atual.getHours() >= 10 && atual.getHours() <= 18) {
                mercado_aberto = true;
                let acrescimo_percentual = (Math.random() * acao.percentual) < 0.5 ? (Math.random() * -1) : Math.random();
                acao.percentual += acrescimo_percentual;
                await acao.save();
            }
            else if (atual.getHours() > 18 && mercado_aberto == true) {
                valor_somar = (acao.valorInvestido * acao.percentual) / 100
                acao.valorInvestido += valor_somar;
                acao.save();
                mercado_aberto = false;
            }

            if (atual.getHours() >= 10 && atual.getHours() <= 18) {
                expect(acao.valorInvestido == 5600).toBe(true);
            }

            else if (atual.getHours() > 18 && mercado_aberto == true) {
                expect(acao.valorInvestido != 5600).toBe(true);
            }

            else if (atual.getHours() > 18 && atual.getHours() < 10 && mercado_aberto == false) {
                expect(acao.valorInvestido == 5600).toBe(true);
            }

            done();
        });


        it('alterou o rendimento percentual apenas após as 10h e antes das 18h', async (done) => {
            let atual = new Date(Date.now());
            var mercado_aberto = false;

            let acao = await AcoesUsuario.create({
                codigoUsuario: "4df465g465",
                codigoAcao: "LET4",
                valorInvestido: 5600,
                percentual: 11
            });

            if (atual.getHours() >= 10 && atual.getHours() <= 18) {
                mercado_aberto = true;
                let acrescimo_percentual = (Math.random() * acao.percentual) < 0.5 ? (Math.random() * -1) : Math.random();
                acao.percentual += acrescimo_percentual;
                await acao.save();
            }
            else if (atual.getHours() > 18 && mercado_aberto == true) {
                valor_somar = (acao.valorInvestido * acao.percentual) / 100
                acao.valorInvestido += valor_somar;
                acao.save();
                mercado_aberto = false;
            }

            if (atual.getHours() >= 10 && atual.getHours() <= 18) {
                expect(acao.percentual != 11).toBe(true);
            }

            else if (atual.getHours() > 18 && mercado_aberto == true) {
                expect(acao.percentual == 11).toBe(true);
            }

            else if (atual.getHours() > 18 && atual.getHours() < 10 && mercado_aberto == false) {
                expect(acao.percentual == 11).toBe(true);
            }

            done();
        });

        it(' Permite Deletou  um registro', async (done) => {
            let acao = await AcoesUsuario.create({
                codigoUsuario: "99998888",
                codigoAcao: "AMZOO8",
                valorInvestido: 9652100,
                percentual: 38
            });

            await AcoesUsuario.deleteOne({ _id: acao._id }, (err) => {
                expect(err == null || err == undefined).toBe(true);
                AcoesUsuario.findOne({ _id: acao._id }).exec(async (err, acao) => {
                    expect(acao == null && acao == undefined).toBe(true);
                })

            });
            done();

        })

        it('Testar  o método vender', async (done) => {

            let acao_1 = await AcoesUsuario.create({
                codigoUsuario: "112233",
                codigoAcao: "ABC123",
                valorInvestido: 2211,
                percentual: 15
            });

            let acao_2 = await AcoesUsuario.create({
                codigoUsuario: "112233",
                codigoAcao: "ABC123",
                valorInvestido: 500,
                percentual: 6
            });

            await AcoesUsuario.vender(acao_1.codigoUsuario, acao_1.codigoAcao)
            AcoesUsuario.findOne({ _id: acao_1._id }).exec(async (err, acao) => {
                expect(acao == null && acao == undefined).toBe(true);
            })
            AcoesUsuario.findOne({ _id: acao_2._id }).exec(async (err, acao) => {
                expect(acao == null && acao == undefined).toBe(true);
            })
            done();
        })
    })
})