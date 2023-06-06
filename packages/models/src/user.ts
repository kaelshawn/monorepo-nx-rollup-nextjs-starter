import { BaseModel } from "./base";

export class UserModel extends BaseModel {
  id?: string;
  name?: string;

  count = 0;

  count2 = 0;

  setUserName() {
    this.name = "aaa";
  }

  addNumber() {
    this.count++;
  }

  add2() {
    this.count2++;
  }
}
