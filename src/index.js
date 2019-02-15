// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @namespace google
 */
/**
 * @namespace google.cloud
 */
/**
 * @namespace google.cloud.irm
 */
/**
 * @namespace google.cloud.irm.v1alpha2
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1alpha2: require('./v1alpha2'),
});

/**
 * The `irm` package has the following named exports:
 *
 * - `IncidentServiceClient` - Reference to
 *   {@link v1alpha2.IncidentServiceClient}
 * - `v1alpha2` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `IncidentServiceClient` - Reference to
 *       {@link v1alpha2.IncidentServiceClient}
 *
 * @module {object} irm
 * @alias nodejs-irm
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save irm
 *
 * @example <caption>Import the client library:</caption>
 * const irm = require('irm');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new irm.IncidentServiceClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new irm.IncidentServiceClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} IncidentServiceClient
 *   Reference to {@link v1alpha2.IncidentServiceClient}
 */
module.exports = gapic.v1alpha2;

/**
 * @type {object}
 * @property {constructor} IncidentServiceClient
 *   Reference to {@link v1alpha2.IncidentServiceClient}
 */
module.exports.v1alpha2 = gapic.v1alpha2;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
