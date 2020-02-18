import Sequelize, { Model, VIRTUAL } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model{
  static init(sequelize){
    super.init(
      {
        name: Sequelize.STRING,
        userType: Sequelize.STRING,
        email: Sequelize.STRING,
        password: VIRTUAL,
        passHash: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if(user.password){
        user.passHash = await bcrypt.hashSync(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password){
    return bcrypt.compare(password, this.passHash);
  }
}

export default User;
