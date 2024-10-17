import { toast } from "react-toastify";
import api from "../../config/URL";

const fetchAllDepartmentNamesWithId = async () => {
  try {
    const response = await api.get("department-with-id");
    return response.data;
  } catch (error) {
    toast.error("Error fetching Department data:", error);
    throw error;
  }
};

export default fetchAllDepartmentNamesWithId;
