import { toast } from "react-toastify";
import api from "../../config/URL";

const fetchAllEmployeeNamesWithId = async () => {
  try {
    const response = await api.get("emp-reg-details-with-id");
    return response.data;
  } catch (error) {
    toast.error(error);
    throw error;
  }
};

export default fetchAllEmployeeNamesWithId;
