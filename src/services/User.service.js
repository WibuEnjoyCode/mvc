import { User_Data } from "../models/UserData.js";

const QueryListAllUser = () => {
  return User_Data;
};
const QueryListUserById = (id) => {
  const user = User_Data.find((user) => user.id === id);

  console.table(user);
  return user;
};

export { QueryListAllUser, QueryListUserById };
