import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import axios from 'axios';

import { ProfileProp } from '../../src/_types/ProfileProps.d'

const prod_config = {
    headers: {'Ocp-Apim-Subscription-Key': '496fcaa404a2454bb5d6a2f45e5cd95d'}
  
  };

  
const dev_config = {}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    
    // const apiUrl = process.env.REACT_APP_API_URL!;
    // const dbHost = process.env.REACT_APP_DB_HOST!;

    // const value = JSON.stringify({apiUrl: apiUrl, dbHost: dbHost})

    // return {
    //     statusCode: 200,
    //     body: value,
    //     headers: {
    //         "Content-Type": "text/plain",
    //         "Access-Control-Allow-Origin": "*"
    //     }
    // }

    try {
    
        //const config = process.env.NODE_ENV == 'production' ? prod_config : process.env.NODE_ENV === 'development' ? dev_config : '';
        const config = prod_config;
        const url = process.env.REACT_APP_API_URL!;
    
        const data = await axios.get<ProfileProp[]>(url , config);
        
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

        // return data.data[0];


      } catch (error) {
        console.log(error)
        throw error;
      }

};

export { handler };