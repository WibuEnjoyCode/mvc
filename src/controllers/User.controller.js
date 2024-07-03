import {
  QueryListAllUser,
  QueryListUserById,
} from "../services/User.service.js";

const GetAllUsers = (req, res) => {
  const userList = QueryListAllUser();

  return res.render("UserAll", { userList });
};
const GetUserById = (req, res) => {
  const id = req.params.id;
  const user = QueryListUserById(id);
  console.log(user);
  return res.render("UserById", { user });
};

export { GetAllUsers, GetUserById };
