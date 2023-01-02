export function getEnvVar(v: string) {
    console.log(process.env.REACT_APP_API_URL);
    const ret = process.env[v];
    if (ret === undefined) {
        throw new Error('process.env.' + v + ' is undefined!');
    }
    return ret;
}
