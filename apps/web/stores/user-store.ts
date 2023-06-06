import { UserModel } from "models";
import { proxy } from "valtio";
import { devtools } from "valtio/utils";

const user = new UserModel();
export const userStore = proxy<UserModel>(user);

devtools(userStore, { name: "user", enabled: true });
