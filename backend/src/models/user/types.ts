import { ActiveStatus } from "src/utils/constants";

export interface IUser {
  _id: string;
  username: string;
  status: ActiveStatus;
  lastSeen: Date;
  createdAt: Date;
  updatedAt: Date;
}
