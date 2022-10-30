type Modifier = "read" | "update" | "create";

type UserRole = {
  customers?: Modifier;
  projects?: Modifier;
  adminPanel?: Modifier;
};

type UserAccess = {
  customers?: boolean;
  projects: boolean;
  adminPanel?: boolean;
};

// UserAccess можно переписать замапив
type ModifierToAccess<T> = {
  [P in keyof T]: boolean;
  // [P in keyof T as `canAccess${string & P}`]: boolean; // так можно изменить имена атрибутов
  // [P in keyof T as Exclude<`canAccess${string & P}`,"canAccess">]: boolean; // так можно удалить из имени параметра
  // [P in keyof T]?: boolean; // сделать параметры не обязательным
  // [P in keyof T]-?: boolean;// сделать параметры обязательными
  // [P in keyof T]+?: boolean;// сделать параметры не обязательным
  // +readonly [P in keyof T]?: boolean; // сделать параметры только readonly, подобно можно добавить другие настройки
};

type UserAccessMapped = ModifierToAccess<UserRole>;

//---------------------------------------------------------
interface IForm {
  name: string;
  password: string;
}

const form: IForm = {
  name: "Vasa",
  password: "123",
};

const formValidation: Validation<IForm> = {
  name: { isValid: true },
  password: { isValid: false, error: "Need length > 5 symbols" },
};

type Validation<T> = {
  [K in keyof T]:
    | {
        isValid: true;
      }
    | {
        isValid: false;
        error: string;
      };
};
