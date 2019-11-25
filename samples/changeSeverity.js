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

function main(projectId = 'YOUR_PROJECT_ID', incidentId = 'YOUR_INCIDENT_ID') {
  // [START monitoring_irm_change_severity]
  // Imports the Google Cloud client libraries
  const {IncidentServiceClient} = require('@google-cloud/irm');

  // Creates a client
  const client = new IncidentServiceClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const projectId = 'Your Google Cloud project Id';
  // const incidentId = 'IRM Incident id';

  async function changeSeverity() {
    const formattedName = client.incidentPath(projectId, incidentId);
    const incident = client.getIncident({name: formattedName});

    incident.severity = 'minor';

    const request = {
      incident,
      updateMask: {paths: ['severity']},
    };

    const response = await client.updateIncident(request);
    console.log(`Changed severity of ${response.name}.`);
  }

  changeSeverity();
  // [END monitoring_irm_change_severity]
}

main(...process.argv.slice(2));
