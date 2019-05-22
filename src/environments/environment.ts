// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAYtzZ1PhxK9UdhEtBfRbbkyIlYqKrKEYA",
    authDomain: "crud-firebase2018.firebaseapp.com",
    databaseURL: "https://crud-firebase2018.firebaseio.com",
    projectId: "crud-firebase2018",
    storageBucket: "crud-firebase2018.appspot.com",
    messagingSenderId: "683645946241"
  }
};
