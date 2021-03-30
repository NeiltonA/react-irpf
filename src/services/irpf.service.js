import http from "../http-common";

class IrpfDataService {

  create(data) {
    return http.post("/irpf/calculate", data);
  }
}

export default new IrpfDataService();