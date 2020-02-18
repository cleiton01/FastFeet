import jwt from 'jsonwebtoken';
import User from '../models/User';

import oauthConfig from '../config/oauth';

class SessionController{
  async store(req, res){
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } } );

    if(!user){
      return res.status(401).json({ error: 'User or Password is invalid'});
    }

    if(!( await user.checkPassword(password)) ){
      return res.status(401).json({ error: 'User or Password is invalid.'});
    }
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign(
        {id, exp: oauthConfig.expiresIn,},
        oauthConfig.secret,
      ),
    });
  }
}

export default new SessionController();