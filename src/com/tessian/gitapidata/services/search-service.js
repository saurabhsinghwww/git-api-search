import configuration from 'configuration';

//Used fetch API to fetch the data but it isn't part of EcmaScript but its part of the web platform.
// Babel is only a compiler to write the latest Javascript. 
// So for proving cross browser functionality, use a polyfill. 
import 'whatwg-fetch';

/**
 * The funtion load the data from the APIT using the filter criteria passed as a input and then transform the data into json
 * and return the promise response.
 * 
 * @author Saurabh Singh
 * @version 1.0
*/
const loadData = (filters) => {

    let filterParams = "?";

    //Creating the query strings from the filters
    for (let key in filters) {

        if (filters[key]) {
            filterParams = filterParams + key + "=" + filters[key] + "&";
        }

    }

    //Removing the last & symbol
    if (filterParams.indexOf('&')) {
        filterParams = filterParams.substr(0, filterParams.lastIndexOf('&'));
    }

    //Fetch the data using fetch API
    return fetch(configuration.url + filterParams, { headers: configuration.headers })
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
        .catch(error => {
            alert('Service failed with error: ' + error.message);
        });

}

export default {
    loadData
}