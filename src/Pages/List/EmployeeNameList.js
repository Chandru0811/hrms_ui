import { toast } from "react-toastify";
import api from "../../config/URL";

const fetchAllEmployeeNamesWithId = async () => {
  try {
    const response = await api.get("getAllEmployeeNamesWithId");
    return response.data;
  } catch (error) {
    toast.error("Error fetching Department data:", error);
    throw error;
  }
};

export default fetchAllEmployeeNamesWithId;
