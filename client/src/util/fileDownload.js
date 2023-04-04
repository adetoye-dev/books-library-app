import axios from "axios";
import fileDownload from "js-file-download";

const handleDownload = (url, filename) => {
  axios
    .get(url, {
      responseType: "blob",
    })
    .then((res) => {
      fileDownload(res.data, `${filename}.pdf`);
    });
};

export default handleDownload;
