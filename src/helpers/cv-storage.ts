import axios, { Axios } from "axios";
import { ProfileProp } from "../_types/ProfileProps.d";
import { profileData } from "../Db/profileData";
import { EnvType } from "../globals";

const prod_config = {
  headers: {'Ocp-Apim-Subscription-Key': '496fcaa404a2454bb5d6a2f45e5cd95d'}

};

const defaultProfile: ProfileProp = {
  id: "",
  name: "",
  about_me: "",
  current_residence: "",
  date_of_birth: new Date(),
  ssn: "",
  phone: "",
  email: "",
  hobbies: [],
  languages: [],
  skills: [],
  references: [],
  education: [],
  work_experiences: [],
  links: [],
};

const dev_config = {}

export async function getProfileFromAPI(url: string) {
  try {
    
    //const config = process.env.NODE_ENV == 'production' ? prod_config : process.env.NODE_ENV === 'development' ? dev_config : '';
    const config = prod_config

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

export async function getProfile() {
  try {

    const env = await axios.get<EnvType>('http://localhost:8888/.netlify/functions/get-env', {headers: {Accept: 'text/plain'}});
    if (env.status !== 200) {throw new Error("Error getting environment values")}
    return await getProfileFromAPI(env.data.apiUrl);

    
  } catch (error) {
    console.error(error);
    throw error;
  }
}