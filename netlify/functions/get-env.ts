import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    
    const apiUrl = process.env.REACT_APP_API_URL!;
    const dbHost = process.env.REACT_APP_DB_HOST!;

    const value = JSON.stringify({apiUrl: apiUrl, dbHost: dbHost})

    return {
        statusCode: 200,
        body: value
    }

};

export { handler };