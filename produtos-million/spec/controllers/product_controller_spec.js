var axios = require("axios").default;
var Product = require("../../app/models/product");
var host = "http://localhost:3000";
var token = "12345"

describe("productController", () => {
    beforeEach(async () => {
        await Product.deleteMany();
        await Product.create([
            { nome: "Carro sport", descricao: "Carro  zero quilometro com cambrio automático e elétrico", nivelInvestidor: 9 },
            { nome: "Moto", descricao: "Moto  zero quilometro com Freio a disco e elétrico", nivelInvestidor: 8 }
        ]);
    });

    describe("GET/produtos.json - Deve retornar uma lista de produtos", () => {
        it("Deve retornar o status de 200", async done => {
            const response = await axios.get(`${host}/produtos.json`, {headers: {"auth_token": token}});
            expect(response.data[0].nome).toBe("Carro sport");
            expect(response.data[1].nome).toBe("Moto");
            expect(response.status).toBe(200);
            done();
        })
    })

    describe("GET/produtos/:id.json - Deve buscar dados do produto pelo ID", () => {
        it("Deve retornar o satus de 200", async done => {
            const data = { nome: "Notebook DELL", descricao: "Notebook com processador i9, 16GB de RAM e 2TB de HD", nivelInvestidor: 8 };
           const product =  await Product.create(data)

            const response = await axios.get(`${host}/produtos/${product._id}.json`,  {headers: {"auth_token": token}} );
            expect(response.status).toBe(200);
            done()
        })
    })

    describe("POST/produtos.json - Deve incluir dados do produto", () => {
        it("Deve retornar o satus de 201", async done => {
            const data = { nome: "Notebook", descricao: "Notebook com processador i9, 16GB de RAM e 2TB de HD", nivelInvestidor: 8 };
            const response = await axios.post(`${host}/produtos.json`, data, {headers: {"auth_token": token}});
            expect(response.status).toBe(201);
            done()
        })
    })

    describe("PUT/produtos/:id.json - Deve alterar dados do produto", () => {
        it("Deve retornar o satus de 204", async done => {
            const data = { nome: "Notebook STI", descricao: "Notebook com processador i9, 16GB de RAM e 2TB de HD", nivelInvestidor: 8 };
           const product =  await Product.create({ nome: "Notebook", descricao: "Notebook com processador i9, 16GB de RAM e 2TB de HD", nivelInvestidor: 8 })

            const response = await axios.put(`${host}/produtos/${product._id}.json`, data, {headers: {"auth_token": token}});
            expect(response.status).toBe(204);
            done()
        })
    })
    describe("DELETE/produtos/:id.json - Deve excluir dados do produto", () => {
        it("Deve retornar o satus de 204", async done => {
            const data = { nome: "Notebook STI", descricao: "Notebook com processador i9, 16GB de RAM e 2TB de HD", nivelInvestidor: 8 };
           const product =  await Product.create({ nome: "Notebook", descricao: "Notebook com processador i9, 16GB de RAM e 2TB de HD", nivelInvestidor: 8 })

            const response = await axios.delete(`${host}/produtos/${product._id}.json`, {headers: {"auth_token": token}}, data);
            expect(response.status).toBe(204);
            done()
        })
    })
})