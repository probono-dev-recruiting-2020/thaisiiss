import Client from '../models/Client';
import { validate } from 'gerador-validador-cpf';

import bcrypt from 'bcryptjs';

class ClientController {

    async store(req,res) {
        const { cpf, password, email } = req.body;
        const created = new Date();
        const updated = new Date();
        
        let cpfIsValid = validate(cpf);

        if(!cpfIsValid) {
            return res.status(401).json({error: "CPF inválido"});
        }

        let client = await Client.findOne({cpf});
        
        if(!client) {
            let passwordHash = await bcrypt.hash(password, 8);
            client = await Client.create({cpf, password:passwordHash, email, created, updated});
            delete client.password;
            return res.json(client);
        } else {
            return res.status(401).json({error: "Usuário Já existe"});
        }

    }

}

export default new ClientController();