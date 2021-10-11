import House from "../models/House";
import User from "../models/User";

class DashboardController {
  async show(req, res) {
    try {
      const { user_id } = req.headers;

      const user = await User.findById(user_id);
      const houses = await House.find({ user: user_id });
      if (!user) {
        return res.status(401).json({ error: "not authorized" });
      }
      return res.json(houses);
    } catch (err) {
      return res.status(400).json({ error: "Invalid request" });
    }
  }
}

export default new DashboardController();
