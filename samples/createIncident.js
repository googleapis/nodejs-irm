// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(projectId = 'YOUR_PROJECT_ID') {
  // [START monitoring_irm_create_incident]
  // Imports the Google Cloud client libraries
  const {IncidentServiceClient} = require('@google-cloud/irm');

  // Creates a client
  const client = new IncidentServiceClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const projectId = 'Your Google Cloud project Id';

  async function createIncident() {
    const formattedParent = client.projectPath(projectId);
    const newIncident = {
      title: 'Somebody pushed the red button!',
    };
    const request = {
      parent: formattedParent,
      incident: newIncident,
    };

    const incident = await client.createIncident(request);
    console.log(`Created incident ${incident.name}.`);
  }

  createIncident();
  // [END monitoring_irm_create_incident]
}

main(...process.argv.slice(2));
