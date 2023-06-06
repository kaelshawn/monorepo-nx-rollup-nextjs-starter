import { UserModel } from "models";
import { proxy } from "valtio";

const user = new UserModel();
export const userStore = proxy<UserModel>(user);
