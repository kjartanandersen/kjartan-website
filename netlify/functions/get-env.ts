import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import axios, { AxiosResponse } from 'axios';

import { ProfileProp } from '../../src/_types/ProfileProps.d'

const prod_config = {
    headers: {'Ocp-Apim-Subscription-Key': '496fcaa404a2454bb5d6a2f45e5cd95d'}
  
  };

const def_axios_res: AxiosResponse<ProfileProp[], any> = {
  data: [],
  status: 200,
  statusText: 'Internal Server Error',
  headers: {},
  config: {},
  request: {}

};

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    try {
        // let data: AxiosResponse<ProfileProp[], any>;

        //const config = process.env.NODE_ENV == 'production' ? prod_config : process.env.NODE_ENV === 'development' ? dev_config : '';
        const prod_url = process.env.REACT_APP_API_URL!;
        const dev_url = process.env.REACT_APP_DEV_API_URL!;
        

        // if (process.env.NODE_ENV === 'development') {
        //   data = await axios.get<ProfileProp[]>(dev_url, prod_config);
        // } else {
        //   data = await axios.get<ProfileProp[]>(prod_url , prod_config);
        // } 
        // else {
        //   data = def_axios_res;
        // }

       const data = await axios.get<ProfileProp[]>(prod_url, prod_config);

        if (data.status !== 200) {
          throw new Error("Error getting profile document");
        }
        return {
            statusCode: 200,
            body: JSON.stringify(data.data[0]),
            headers: {
                        "Content-Type": "text/plain",
                        "Access-Control-Allow-Origin": "*"
                    }
        }


      } catch (error) {
        console.error(error)
        throw error;
      }

};

export { handler };