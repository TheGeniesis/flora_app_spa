import {getEnvVar} from "../../Config/App";
import {ConvertObjectToJson} from "../Converter/ObjectToJsonConverter";
import {Sprintf} from "../Formatter/Sprintf";

enum RequestMethod {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

const mergeHeaders = (init: RequestInit) => {

    const headers = init.headers ?? {};
    return {

        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'en',
        ...headers
    }
};

const prepareUrl = (url: string) => {
    return `${getEnvVar('host')}/api${url}`;
};

export function generateRoute(url: string, query ?: {}) {
    return query ? Sprintf(url, query) : url;
}


const handleRequest = (method: RequestMethod, url: string, init?: RequestInit, query?: {}) => {
    if (!init) {
        init = {}
    }

    url = generateRoute(url, query);

    if (init.body && typeof init.body === "object") {
        init.body = ConvertObjectToJson(init.body);
    }

    init.headers = mergeHeaders(init);

    init.method = method;

    return fetch(prepareUrl(url), init);
};

export const Router = (() => {
    return {
        fetch(url: string, init?: RequestInit, query?: {}) {
            return handleRequest(RequestMethod.GET, url, init, query)
                .then(res => res.json());
        },
        put(url: string, init?: RequestInit, query?: {}) {
            return handleRequest(RequestMethod.PUT, url, init, query);
        },
        post(url: string, init?: RequestInit, query?: {}) {
            return handleRequest(RequestMethod.POST, url, init, query);
        },
        delete(url: string, init?: RequestInit, query?: {}) {
            return handleRequest(RequestMethod.DELETE, url, init, query);
        },
    }
})();
