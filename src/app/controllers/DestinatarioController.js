
import Destinatario from '../models/destinatario';

class DestinatarioController{

  async store(req, res){
    // obtem hash do destinatario
    const uniqDestinatario = await Destinatario.toHash(req.body);

    const destinatario = await Destinatario.findOne( {where: { uniqueHashValue: uniqDestinatario }});

    // check if already exists
    // if exists return a menssage, Destinatario already exist.
    if (destinatario){
      const { id, name } = destinatario;
      return res.status(200).json( {destinatario: { id , name } } );
    }

    // if do not exists, create and return the id and name.

    destinatario = await Destinatario.create(req.body);

    const { id, name } = destinatario;

    return res.json( 
      {
        destinatario:{
          id,
          name
        },
      }
    );
  }

  async index(req, res){

    

    return res.json();
  }

}

export default new DestinatarioController();