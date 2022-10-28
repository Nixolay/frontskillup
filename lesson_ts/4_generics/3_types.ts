function getSplitterHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

const split: <T>(data: Array<T>) => Array<T> = getSplitterHalf;
const splitY: <Y>(data: Array<Y>) => Array<Y> = getSplitterHalf;
const splitAnyName: <AnyName>(data: Array<AnyName>) => Array<AnyName> =
  getSplitterHalf;

interface ILogLine<T> {
  timeStamp: Date;
  data: T;
}

type ILogLineType<T> = {
  timeStamp: Date;
  data: T;
};

const logLine: ILogLine<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};
