import { toast } from "react-toastify";
import api from "../../config/URL";

const fetchAllCompanyNamesWithId = async () => {
  try {
    const response = await api.get("getAllCompanyNamesWithId");
    return response.data;
  } catch (error) {
    toast.error("Error fetching Company data:", error);
    throw error;
  }
};

export default fetchAllCompanyNamesWithId;
