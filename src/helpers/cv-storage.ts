import axios from "axios";
import { EducationProp, ProfileProp } from "../_types/ProfileProps.d";

const url = "https://localhost:7282/api/Profile";

export async function getAllEducation(): Promise<EducationProp[]> {
  try {
    const resp = await axios.get<EducationProp[]>(url);
    if (resp.status !== 200) {
      throw new Error("Error getting education document");
    }
    const data: EducationProp[] = await resp.data;

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getProfile() {
  try {
    const data = await axios.get<ProfileProp[]>(url);
    if (data.status !== 200) {
      throw new Error("Error getting education document");
    }
    return data.data[0];
  } catch (error) {
    console.log(error)
    throw error;
  }
}
