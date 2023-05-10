// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBbV4IS-utcOF9fQ5L-dBM9yXOMgPQr1EA",
    authDomain: "hamoye-angular.firebaseapp.com",
    databaseURL: "https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800",
    projectId: "hamoye-angular",
    storageBucket: "hamoye-angular.appspot.com",
    messagingSenderId: "602686650498",
    appId: "1:602686650498:web:c6200b768362a1bc68dc9b"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
