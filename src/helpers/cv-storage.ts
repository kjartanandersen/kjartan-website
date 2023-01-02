import axios from "axios";
import { ProfileProp } from "../_types/ProfileProps.d";
import { profileData } from "../Db/profileData";

const prod_config = {
  headers: {'Ocp-Apim-Subscription-Key': '496fcaa404a2454bb5d6a2f45e5cd95d'}

}

const dev_config = {}

export async function getProfileFromAPI() {
  try {
    
    const config = process.env.NODE_ENV == 'production' ? prod_config : process.env.NODE_ENV === 'development' ? dev_config : '';

    const url: string = process.env.REACT_APP_API_URL!;
    const data = await axios.get<ProfileProp[]>(url , config);
    
    if (data.status !== 200) {
      throw new Error("Error getting profile document");
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