/**
 * Copyright 2019, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

function main(projectId = 'YOUR_PROJECT_ID') {
  // [START monitoring_irm_create_signal]
  // Imports the Google Cloud client libraries
  const irm = require('@google-cloud/irm').v1alpha2;

  // Creates a client
  const client = new irm.IncidentServiceClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const projectId = 'Your Google Cloud project Id';

  async function createSignal() {
    const formattedParent = client.projectPath(projectId);
    const newSignal = {
      title: 'Red button pushed.',
      content: 'Somebody pushed the red button!',
      contentType: 'text/plain',
    };

    const request = {
      parent: formattedParent,
      signal: newSignal,
    };

    const response = await client.createSignal(request);
    console.log(`Created signal ${response.name}.`);
  }

  createSignal();
  // [END monitoring_irm_create_signal]
}

main(...process.argv.slice(2));
