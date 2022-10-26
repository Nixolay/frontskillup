enum StatusCode {
  SUCCESS,
  IN_PROGRESS = 3,
  FAILED = "s",
}

const enum Roles {
  Root = 1,
  Admin,
  User,
}

enum Role {
  Root = 1,
  Admin,
  User,
}

const admin = Roles.Admin;

const res = {
  msg: "success",
  code: StatusCode.SUCCESS,
};

console.log(res);
