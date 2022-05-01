import Database from "../infra/Database";

class ClienteMetodos{
    static listaClientes() {
        const query = 'SELECT * FROM clientes';
        return new Promise((resolve, reject) => {
            Database.all(query, (error, registros) => {
                if (error) reject(error.message);
                else resolve({clientes: registros});    
            });
        });
    }

    static listaClientePorCpf(cpf) {
        const query = `SELECT * FROM clientes WHERE cpf = ${cpf}`;
        return new Promise((resolve, reject) =>{
            Database.all(query,(error, registros) => {
                if (error) reject(error.message);
                else resolve({clientes: registros});
            });
        });
    }

    static insereCliente(cliente){
        const query = `INSERT INTO clientes VALUES (?,?,?,?)`
        const clienteArr = Object.values(cliente);
        return new Promise ((resolve, reject) => {
            Database.run(query, clienteArr, error => {
                if(error) reject(erorr.message);
                else resolve('Usuário inserido com sucesso!')
            }); 
        });
    }

}

