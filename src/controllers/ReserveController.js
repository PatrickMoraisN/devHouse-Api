import Reserve from '../models/Reserve';
import User from '../models/User';
import House from '../models/House';

class ReserveController {

  async index(req, res) {
    const { user_id } = req.headers;

    if (!user_id) return res.status(401).json({error: "User_id required"})
    
    const reserves = await Reserve.find({ user: user_id }).populate('house');

    if (!reserves) return res.status(404).json({message: "Reserves not found"})

    return res.json(reserves);
  }

  async store(req, res) {
    const { user_id } = req.headers;
    const { house_id } = req.params;
    const { date } = req.body;

    const house = await House.findById({ _id: house_id });

    if (!house) {
      return res.status(400).json({error: "House not found"});
    }

    if (String(house.user) === String(user_id)) {
      return res.status(401).json({error: "Not Authorized"});
    }

    if (house.status !== true) {
      return res.status(401).json({error: "House not available"});
    }

    const reserve = await Reserve.create({
      user: user_id,
      house: house_id,
      date,
    });
    
    return res.json(reserve)
  }
}

export default new ReserveController();