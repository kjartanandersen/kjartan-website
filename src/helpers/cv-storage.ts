import axios from "axios";
import { ProfileProp } from "../_types/ProfileProps.d";
import { profileData } from "../Db/profileData";

const url = "https://localhost:7282/api/Profile";

export async function getProfileFromAPI() {
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

export async function getProfileFromLocalDb() {
  try {
    return profileData;
  } catch (error) {
    console.error(error)
    throw error;
  }
}