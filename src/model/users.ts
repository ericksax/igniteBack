import { v4 as uuid } from "uuid";

export class User {
  private id?: string;
  private createdAt: Date;
  name!: string;
  idade!: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

    this.createdAt = new Date();
  }
}
