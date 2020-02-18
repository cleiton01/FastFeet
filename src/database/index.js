import Sequelize from 'sequelize';
import User from '../app/models/User';
import Destinatario from '../app/models/destinatario';
import encomenda from '../app/models/encomenda';
import entregador from '../app/models/entregador';
import databaseConfig from '../app/config/database';

const models = [User];

class Database{
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();