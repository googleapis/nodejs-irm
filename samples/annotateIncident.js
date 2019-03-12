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

function main(projectId = 'YOUR_PROJECT_ID', incidentId = 'YOUR_INCIDENT_ID') {
  // [START monitoring_irm_annotate_incident]
  // Imports the Google Cloud client libraries
  const irm = require('@google-cloud/irm').v1alpha2;

  // Creates a client
  const client = new irm.IncidentServiceClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const projectId = 'Your Google Cloud project Id';
  // const incidentId = 'IRM Incident id';

  async function annotateIncident() {
    const formattedParent = client.incidentPath(projectId, incidentId);
    const newAnnotation = {
      content: 'The red button was found in a depressed state.',
    };
    const request = {
      parent: formattedParent,
      annotation: newAnnotation,
    };

    const annotation = await client.createAnnotation(request);
    console.log(annotation.name);
  }

  annotateIncident();
  // [END monitoring_irm_annotate_incident]
}

main(...process.argv.slice(2));
