import House from "../models/House";
import User from "../models/User";
import * as Yup from "yup";

class HouseController {
  async index(req, res) {
    const { status } = req.query;

    const houses = await House.find({ status });

    return res.json(houses);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required(),
    });

    const { filename } = req.file;
    const { description, location, price, status } = req.body;
    const { user_id } = req.headers;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation failed!" });
    }

    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      description,
      location,
      price,
      status,
    });

    return res.json(house);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required(),
    });

    const { filename } = req.file;
    const { house_id } = req.params;
    const { description, location, price, status } = req.body;
    const { user_id } = req.headers;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation failed!" });
    }

    const user = await User.findById(user_id);
    const house = await House.findById(house_id);

    if (!user || !house || String(user._id) !== String(house.user)) {
      return res.status(401).json({ error: "Not Authorized!" });
    }

    await House.updateOne(
      { _id: house_id },
      {
        user: user_id,
        thumbnail: filename,
        description,
        location,
        price,
        status,
      }
    );

    return res.json({ message: "Updated!" });
  }

  async destroy(req, res) {
    try {
      const { house_id } = req.body;
      const { user_id } = req.headers;

      const user = await User.findById(user_id);
      const house = await House.findById(house_id);

      if (!user || !house || String(user._id) !== String(house.user)) {
        return res.status(401).json({ error: "Not Authorized!" });
      }

      await House.findByIdAndDelete({ _id: house_id });

      return res.json({ success: "House deleted!" });
    } catch (err) {
      return res.status(400).json({ error: "Validation error!" });
    }
  }
}

export default new HouseController();
