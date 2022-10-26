interface IPayment {
  sum: number;
  from: number;
  ro: number;
}

enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

type Response = IResponseSuccess | IResponseFailed;

function isSuccess(res: Response): res is IResponseSuccess {
  if (res.status === PaymentStatus.Success) {
    return true;
  }
  return false;
}

function getIDFromData(res: Response): number {
  if (isSuccess(res)) {
    return res.data.databaseId;
  } else {
    throw new Error(res.data.errorMessage);
  }
}
