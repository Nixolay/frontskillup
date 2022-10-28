class Response<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    if (data) {
      this.data = data;
    }

    if (error) {
      this.error = error;
    }
  }
}

const res = new Response("data", 0);
const resNoError = new Response("data");
const resTypes = new Response<string, number>("data", 0);

// При наследовании от дженерика, мы должны указывать типы с которыми мы будем работать.
class HTTPResp<F> extends Response<string, number> {
  code: F;

  setCode(code: F) {
    this.code = code;
  }
}

const resHTTP = new HTTPResp();
console.log(resHTTP.data);
