// src/environments/environment.ts

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ionic build --prod` then `environment.prod.ts` will be used instead.

export const environment = {
  production: false,
  // WordPress.comのURL、もしくはJetPack連携しているURL
  wordpressURL: 'islandnotes.wordpress.com',
  excludePages: [3, 6, 23, 559],
  noImageURL: 'assets/wordpress-logo-notext-rgb.png',
  wordpressAPI: 'https://public-api.wordpress.com/rest/v1.1/sites/',
};
