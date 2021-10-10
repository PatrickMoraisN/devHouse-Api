import House from '../models/House';
import User from '../models/User';

class HouseController {

  async index(req, res) {
    const { status } = req.query;

    const houses = await House.find({ status });

    return res.json(houses);
  }

  async store(req, res) {
    const { filename } = req.file;
    const { description, location, price, status } = req.body;
    const { user_id } = req.headers;

    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      description,
      location,
      price,
      status
    })

    return res.json(house)
  }

  async update(req,res) {
    const { filename } = req.file;
    const { house_id } = req.params;
    const { description, location, price, status } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    const house = await House.findById(house_id);

    if(String(user._id) !== String(house.user)) {
      return res.status(401).json({ error: "Not Authorized!"});
    }

    await House.updateOne({ _id: house_id }, {
      user: user_id,
      thumbnail: filename,
      description,
      location,
      price,
      status
    })

    return res.send();
  }

  async destroy(req, res) {
    const { house_id } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    const house = await House.findById(house_id);

    console.log(user);
    if(!user || String(user._id) !== String(house.user)) {
      return res.status(401).json({ error: "Not Authorized!"});
    }

    await House.findByIdAndDelete({ _id: house_id })

    return res.json({success: "House deleted!"})
  }
}

export default new HouseController();