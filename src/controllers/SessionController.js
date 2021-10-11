/*
index, show, update, destroy, store

index - listagem de sessoes
show - listar uma unica sessao
update - atualizar sessao
destroy - deletar sessao
store - criar sessao
*/

import User from "../models/User";
import * as Yup from "yup";

class SessionController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
      });
      const { email } = req.body;

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Email validation error" });
      }

      let user = await User.findOne({ email });
      if (!user) {
        user = await User.create({ email });
      }
      return res.json(user);
    } catch (err) {
      console.log(err.message);
    }
  }
}

export default new SessionController();
