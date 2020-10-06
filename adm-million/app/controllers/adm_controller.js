const Adm = require('../models/adm');
const TOKEN = "0123456789"
const AdmController = {
  index: (req, res, next) => {
	  if(req.headers.token == TOKEN)
      {
		  Adm.find().then(dado => res.send(dado) );
	  }else
	  {
		  res.status(401).send({Error: "Acesso negado! Token inválido."});
	  }
  },
	create: (req, res, next) => {
		if(req.headers.token == TOKEN)
		{
			const adm = new Adm({ nome: req.body.nome, senha: req.body.senha, email: req.body.email });
			adm.save(error => {
				if(error){
					res.status(401).send(error)
					return
				}
			});
		}
		else{
			res.status(401).send({error: "Acesso negado! Token inválido."})
		}
	  },
	change: async(req, res, next) => {
		if(req.headers.token == TOKEN)
		{
			try{
				await Adm.findOneAndUpdate({_id: req.params.adm_id}, {nome: req.body.nome, senha: req.body.senha, email: req.body.email})
				res.status(204).send(`Alterado com o id ${req.params.adm_id}`)
			}
			catch(err){
			  res.status(401).send(`Erro: ${err}`)
			}
		}
		else
		{
			res.status(401).send({error: "Acesso negado! Token inválido."})
		}
	},
	delete: async(req, res, next) => {
		if(req.headers.token == TOKEN)
		{
			try
			{
				await Adm.findByIdAndDelete(req.params.adm_id)
				res.status(204).send({});
			}
			catch(err){
				res.status(401).send({})
			}
		}
		else
		{
			res.status(401).send({error: "Acesso negado! Token inválido."})
		}
	}
}

module.exports = AdmController;
