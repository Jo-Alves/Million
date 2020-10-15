const mongoose = require("../../db/connection");

const AcoesUsuario = mongoose.model("acoes_usuarios", {
    codigoUsuario: { type: String, required: true },
    codigoAcao: { type: String, required: true, uppercase: true },
    valorInvestido: { type: Number, required: true },
    percentual: { type: Number, required: true },
    data_compra: { type: Date, default: Date.now, immutable: true }
})

AcoesUsuario.comprar = async (codigoUsuario, codigoAcao, valorInvestido, percentual) => {
    try {
        let acao = await AcoesUsuario.create({
            codigoUsuario,
            codigoAcao,
            valorInvestido,
            percentual
        });
        return acao;
    }
    catch (err) {
        return err;
    }
}

AcoesUsuario.calcularValorInvestido = async () => {
    let atual = new Date(Date.now());
    let mercadoAberto = false
    if (atual.getHours() >= 10 && atual.getHours() <= 18) {
        mercadoAberto = true;

        AcoesUsuario.find().then(async acoes => {
            await acoes.forEach(async acao => {
                let acrescimoPercentual = (Math.random() * acao.percentual) < 0.5 ? (Math.random() * -1) : Math.random();
                acao.percentual += acrescimoPercentual;
                await acao.save();
            })
        })
    }
    else if (atual.getHours() > 18 && mercadoAberto == true) {
        await AcoesUsuario.find().then(async acoes => {
            await acoes.forEach(async acao => {
                let valorSomar = (acao.valorInvestido * acao.percentual) / 100;
                acao.valorInvestido += valorSomar;
                acao.save()
            })
        })

        mercadoAberto = false;
    }
}

AcoesUsuario.valorInvestidoPorAcao = async (usuarioId, codigoAcao) => {
    let total = 0;
    await AcoesUsuario.find({ codigoUsuario: usuarioId, codigoAcao }).then(acoes => {
        acoes.forEach(acao => {
            total += acao.valorInvestido;
        })
    })
    return { total: total, acao: codigoAcao };
}

AcoesUsuario.vender = async (codigoUsuario, codigoAcao) => {
    try {
        await AcoesUsuario.deleteMany({ codigoUsuario, codigoAcao })
    }
    catch (error) {
        return error;
    }
}
module.exports = AcoesUsuario