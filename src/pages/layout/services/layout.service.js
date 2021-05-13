import axios from "axios";
import swal from "sweetalert2";
import RUTA_API from "../../../env.js";

export default new (class LayoutService {
  async getTags() {
    try {
      const res = await axios.get(`${RUTA_API}/tags/`);
      return res.data;
    } catch (err) {
      swal.fire(
        `Ha ocurrido un ${err.response.status} con las categorias`,
        err.response.statusText,
        "error"
      );
    }
  }

  async getImages() {
    try {
      const res = await axios.get(`${RUTA_API}/imagenes/`);

      return res.data;
    } catch (err) {
      swal.fire(
        `Ha ocurrido un ${err.response.status} con las imagenes`,
        err.response.statusText,
        "error"
      );
    }
  }
})();
