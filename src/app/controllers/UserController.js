import User from '../models/User';

class UserController {

  async store(req,res){
    
    return res.json({message: 'ola mundo'});
  }

}

export default new UserController();
