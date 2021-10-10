import House from '../models/House';

class HouseController {

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
}

export default new HouseController();