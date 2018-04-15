#Description
 The program provides the user interface for displaying the data of API(git issues or repository) using query filters.

#Implementation:
- The solution is implemented in ReactJS, Javascript, HTML, CSS, Bootstrap.
- Provide a user interface for building the filter criteria based on which service fetch the data.
- If no information provided in the filter criteria the API fetch the data with default filter values as mentioned in the API docs.
- There is a conf folder present inside application folder, which contains config.json.
  This JSON contains the information about the API (URL, Headers) and the filters and its default values.
  The config information loaded by webpack and passed to the application.
- Based on the filters of the config.json, the application creates the filters at the runtime.
- Currently configured for the issues API but by changing the config.json, we can easily switch to fetch repository data as well.
- After clicking on the search currently the search result showing the avatar, title and body information which can be extended only by adding new fields in the search-results.js.
- Used fetch API to fetch the data but it isn't part of ECMAScript but its part of the web platform.
  Babel is only a compiler to write the latest Javascript. So for proving cross-browser functionality, use a polyfill. 

#For Running:
- npm install
- npm run start
- http://localhost:8087/