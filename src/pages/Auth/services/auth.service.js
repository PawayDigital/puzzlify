import axios from "axios";
import swal from "sweetalert2";
import RUTA_API from "../../../env.js";

export default new (class AuthService {
  async login(data) {
    try {
      const res = await axios.post(RUTA_API + "/auth/local", data);
      if (res.status === 200) {
        swal.fire("Bienvenido!", "has sesion con exito!", "success");
      }
      return res.data;
    } catch (err) {
      swal.fire(
        `Ha ocurrido un ${err.response.status}`,
        err.response.statusText,
        "error"
      );
    }
  }
  async register(data) {
    try {
      const res = await axios.post(RUTA_API + "/auth/local/register", data);
      if (res.status === 200) {
        swal.fire("Bienvenido!", "te has registrado con exito!", "success");
      }
      return res.data;
    } catch (err) {
      swal.fire(
        `Ha ocurrido un ${err.response.status}`,
        err.response.statusText,
        "error"
      );
    }
  }
  async registerUpload(data) {
    try {
      const res = await axios.post(RUTA_API + "/foto-users", data);
      return res.data;
    } catch (err) {
      swal.fire(
        `Ha ocurrido un ${err.response.status}`,
        err.response.statusText,
        "error"
      );
    }
  }
})();
