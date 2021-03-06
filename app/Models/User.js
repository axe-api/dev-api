import { Model } from "axe-api";

class User extends Model {
  get fillable() {
    return {
      POST: ["email", "name"],
      PUT: ["name"],
    };
  }

  get validations() {
    return {
      POST: {
        email: "required|email",
        name: "required",
      },
    };
  }

  get middlewares() {
    return [];
  }

  posts() {
    return this.hasMany("Post", "id", "user_id");
  }

  links() {
    return this.hasMany("Link", "id", "user_id");
  }
}

export default User;
