// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const BASE_API = "http://localhost:3001"
export const environment = {
  production: false,
  GOOGLE_CLIENT_ID: "879888154859-hq0sasrjdnj9220uleton2ifluv7qtd0.apps.googleusercontent.com",
  subject_api: `${BASE_API}/subjects`,
  quiz_api: `${BASE_API}/quiz`,
  question_api: `${BASE_API}`,
  user_api: `${BASE_API}/users`,
  history_api: `${BASE_API}/historys`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
