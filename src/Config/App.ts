declare global {
    interface Window {
        _env_:any;
    }
}

export const getEnvVar = (env: string) => {
    if (typeof (process.env[`REACT_APP_RUNTIME_${env}`]) !== undefined) {
        return process.env[`REACT_APP_RUNTIME_${env}`];
    }

    if (window.hasOwnProperty('_env_')){
      return window._env_[`REACT_APP_RUNTIME_${env}`];
    }

    throw Error(`Variable ${env} is not declared!`);
}
