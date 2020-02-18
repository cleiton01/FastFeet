import Sequelize, { VIRTUAL, Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Destinatario extends Model{
  static init(sequelize){
    super.init(
      {
        id: Sequelize.INTEGER,
        uniqueHashValue: Sequelize.STRING,
        name: Sequelize.STRING,
        rua: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        estado: Sequelize.STRING,
        cidade: Sequelize.STRING,
        cep: Sequelize.STRING,
      }, 
      {
        sequelize
      }
    );
  this.addHook('beforeSave', async dest => {
    uniqueHashValue = await this.toHash(this);
  });

  return this;
  }

  /*
  gera hash para o destinatario 
  */
  static toHash(destinatario){
    const concatFieldsToHash = (
      `${destinatario.name};${destinatario.rua};${destinatario.numero};${destinatario.complemento};`
      +`${destinatario.estado};${destinatario.cidade};${destinatario.cep};`
    );
    
    return bcrypt.hashSync(concatFieldsToHash, 1);
  }

}

export default Destinatario;
