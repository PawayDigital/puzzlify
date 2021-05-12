import axios from "axios";
import swal from "sweetalert2";
import RUTA_API from "../../../env.js";

export default new (class ProfileService {
  async getTags(user_id, tags_array) {
    try {
      const res = await axios.get(`${RUTA_API}/tags`),
        json = res.data;
      json.forEach((tags) => {
        tags.images.forEach((el) => {
          if (user_id === el.user) {
            tags_array.push(tags);
          }
        });
      });
      return tags_array;
    } catch (err) {
      swal.fire(
        `Ha ocurrido un ${err.response.status} con las categorias`,
        err.response.statusText,
        "error"
      );
    }
  }

  async getImagesMe() {
    try {
      const res = await axios.get(`${RUTA_API}/imagenes/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

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
