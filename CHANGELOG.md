# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/irm?activeTab=versions

## [2.0.0](https://www.github.com/googleapis/nodejs-irm/compare/v1.4.3...v2.0.0) (2020-01-27)


### ⚠ BREAKING CHANGES

* move the API to typescript code generation (#126)

### Features

* move the API to typescript code generation ([#126](https://www.github.com/googleapis/nodejs-irm/issues/126)) ([157ea2f](https://www.github.com/googleapis/nodejs-irm/commit/157ea2f1b194a21beddf2322c96edc2da144f3c4))

### [1.4.3](https://www.github.com/googleapis/nodejs-irm/compare/v1.4.2...v1.4.3) (2019-12-15)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([c2f6557](https://www.github.com/googleapis/nodejs-irm/commit/c2f6557e6e6f0cf1acf8de888b50a85d68d1ed43))
* update imports to include long ([#109](https://www.github.com/googleapis/nodejs-irm/issues/109)) ([10c9a05](https://www.github.com/googleapis/nodejs-irm/commit/10c9a0590186ed089f53ee1599aebed9d958c8cd))

### [1.4.2](https://www.github.com/googleapis/nodejs-irm/compare/v1.4.1...v1.4.2) (2019-11-15)


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#105](https://www.github.com/googleapis/nodejs-irm/issues/105)) ([76b6878](https://www.github.com/googleapis/nodejs-irm/commit/76b68782801487b0828b47960a028b39ee2feb52))

### [1.4.1](https://www.github.com/googleapis/nodejs-irm/compare/v1.4.0...v1.4.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#97](https://www.github.com/googleapis/nodejs-irm/issues/97)) ([930b673](https://www.github.com/googleapis/nodejs-irm/commit/930b67318594c59ab93fe4ab543a8afcb45216d2))

## [1.4.0](https://www.github.com/googleapis/nodejs-irm/compare/v1.3.0...v1.4.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([706c57b](https://www.github.com/googleapis/nodejs-irm/commit/706c57b))


### Features

* .d.ts for protos ([#88](https://www.github.com/googleapis/nodejs-irm/issues/88)) ([7cbb418](https://www.github.com/googleapis/nodejs-irm/commit/7cbb418))

## [1.3.0](https://www.github.com/googleapis/nodejs-irm/compare/v1.2.2...v1.3.0) (2019-09-16)


### Bug Fixes

* set proper version # for x-goog-api-client ([f5bce70](https://www.github.com/googleapis/nodejs-irm/commit/f5bce70))


### Features

* load protos from JSON, grpc-fallback support ([f7fe6bb](https://www.github.com/googleapis/nodejs-irm/commit/f7fe6bb))

### [1.2.2](https://www.github.com/googleapis/nodejs-irm/compare/v1.2.1...v1.2.2) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([e97b569](https://www.github.com/googleapis/nodejs-irm/commit/e97b569))

### [1.2.1](https://www.github.com/googleapis/nodejs-irm/compare/v1.2.0...v1.2.1) (2019-07-10)


### Bug Fixes

* **docs:** add note about library being in private alpha ([#68](https://www.github.com/googleapis/nodejs-irm/issues/68)) ([2a327e4](https://www.github.com/googleapis/nodejs-irm/commit/2a327e4))

## [1.2.0](https://www.github.com/googleapis/nodejs-irm/compare/v1.1.2...v1.2.0) (2019-06-27)


### Features

* add the lookupSignal method and improve jsdoc comments ([#65](https://www.github.com/googleapis/nodejs-irm/issues/65)) ([b1485e9](https://www.github.com/googleapis/nodejs-irm/commit/b1485e9))

### [1.1.2](https://www.github.com/googleapis/nodejs-irm/compare/v1.1.1...v1.1.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#63](https://www.github.com/googleapis/nodejs-irm/issues/63)) ([7e270e7](https://www.github.com/googleapis/nodejs-irm/commit/7e270e7))

### [1.1.1](https://www.github.com/googleapis/nodejs-irm/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#60](https://www.github.com/googleapis/nodejs-irm/issues/60)) ([9128031](https://www.github.com/googleapis/nodejs-irm/commit/9128031))

## [1.1.0](https://www.github.com/googleapis/nodejs-irm/compare/v1.0.0...v1.1.0) (2019-06-05)


### Bug Fixes

* default options to empty object ([a5a4a83](https://www.github.com/googleapis/nodejs-irm/commit/a5a4a83))


### Features

* support apiEndpoint override in client constructor ([#57](https://www.github.com/googleapis/nodejs-irm/issues/57)) ([c9b0914](https://www.github.com/googleapis/nodejs-irm/commit/c9b0914))

## 1.0.0 (2019-05-22)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#32)

### Bug Fixes

* cleanup package.json ([5cbe7c1](https://www.github.com/googleapis/nodejs-irm/commit/5cbe7c1))
* include 'x-goog-request-params' header in requests ([#26](https://www.github.com/googleapis/nodejs-irm/issues/26)) ([11ed240](https://www.github.com/googleapis/nodejs-irm/commit/11ed240))
* **deps:** update dependency google-gax to ^0.26.0 ([#31](https://www.github.com/googleapis/nodejs-irm/issues/31)) ([2f87f93](https://www.github.com/googleapis/nodejs-irm/commit/2f87f93))
* **deps:** update dependency google-gax to v1 ([#41](https://www.github.com/googleapis/nodejs-irm/issues/41)) ([34e8320](https://www.github.com/googleapis/nodejs-irm/commit/34e8320))


### Build System

* upgrade engines field to >=8.10.0 ([#32](https://www.github.com/googleapis/nodejs-irm/issues/32)) ([6370e0f](https://www.github.com/googleapis/nodejs-irm/commit/6370e0f))


### Features

* update the latest version of the alpha proto ([#8](https://www.github.com/googleapis/nodejs-irm/issues/8)) ([7feeb8d](https://www.github.com/googleapis/nodejs-irm/commit/7feeb8d))
