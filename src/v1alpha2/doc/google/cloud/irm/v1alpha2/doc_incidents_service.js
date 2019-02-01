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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Request for the CreateIncident method.
 *
 * @property {Object} incident
 *   The incident to create.
 *
 *   This object should have the same structure as [Incident]{@link google.cloud.irm.v1alpha2.Incident}
 *
 * @property {string} parent
 *   The resource name of the hosting Stackdriver project which the incident
 *   belongs to.
 *   The name is of the form `projects/{project_id_or_number}`
 *   .
 *
 * @typedef CreateIncidentRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.CreateIncidentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const CreateIncidentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the GetIncident method.
 *
 * @property {string} name
 *   Resource name of the incident, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @typedef GetIncidentRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.GetIncidentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const GetIncidentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the UpdateIncident method.
 *
 * @property {Object} incident
 *   The incident to update with the new values.
 *
 *   This object should have the same structure as [Incident]{@link google.cloud.irm.v1alpha2.Incident}
 *
 * @property {Object} updateMask
 *   List of fields that should be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateIncidentRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.UpdateIncidentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const UpdateIncidentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the SearchSimilarIncidents method.
 *
 * @property {string} name
 *   Resource name of the incident or signal, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @property {number} pageSize
 *   Number of similar incidents to return.
 *
 * @property {string} pageToken
 *   Page token from an earlier query, as returned in 'next_page_token'.
 *
 * @typedef SearchSimilarIncidentsRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const SearchSimilarIncidentsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the SearchSimilarIncidents method.
 *
 * @property {Object[]} results
 *   The search results, ordered by descending relevance.
 *
 *   This object should have the same structure as [Result]{@link google.cloud.irm.v1alpha2.Result}
 *
 * @property {string} nextPageToken
 *   Page token to fetch the next set of similar incidents.
 *
 * @typedef SearchSimilarIncidentsResponse
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const SearchSimilarIncidentsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A single search result, i.e. an incident with (potentially) additional
   * information.
   *
   * @property {Object} incident
   *   An incident that is "similar" to the incident or signal specified in the
   *   request.
   *
   *   This object should have the same structure as [Incident]{@link google.cloud.irm.v1alpha2.Incident}
   *
   * @typedef Result
   * @memberof google.cloud.irm.v1alpha2
   * @see [google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
   */
  Result: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Request for the CreateAnnotation method.
 *
 * @property {string} parent
 *   Resource name of the incident, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @property {Object} annotation
 *   Only annotation.content is an input argument.
 *
 *   This object should have the same structure as [Annotation]{@link google.cloud.irm.v1alpha2.Annotation}
 *
 * @typedef CreateAnnotationRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.CreateAnnotationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const CreateAnnotationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the ListAnnotations method.
 *
 * @property {string} parent
 *   Resource name of the incident, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @property {number} pageSize
 *   Number of annotations to return.
 *
 * @property {string} pageToken
 *   Page token from an earlier query, as returned in `next_page_token`.
 *
 * @typedef ListAnnotationsRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListAnnotationsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListAnnotationsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the ListAnnotations method.
 *
 * @property {Object[]} annotations
 *   List of annotations.
 *
 *   This object should have the same structure as [Annotation]{@link google.cloud.irm.v1alpha2.Annotation}
 *
 * @property {string} nextPageToken
 *   Page token to fetch the next set of annotations.
 *
 * @typedef ListAnnotationsResponse
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListAnnotationsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListAnnotationsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the CreateTag method.
 *
 * @property {string} parent
 *   Resource name of the incident, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @property {Object} tag
 *   Tag to create. Only tag.display_name is an input argument.
 *
 *   This object should have the same structure as [Tag]{@link google.cloud.irm.v1alpha2.Tag}
 *
 * @typedef CreateTagRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.CreateTagRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const CreateTagRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the DeleteTag method.
 *
 * @property {string} name
 *   Resource name of the tag.
 *
 * @typedef DeleteTagRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.DeleteTagRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const DeleteTagRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the ListTagsForIncident method.
 *
 * @property {string} parent
 *   Resource name of the incident, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @property {number} pageSize
 *   Number of tags to return.
 *
 * @property {string} pageToken
 *   Page token from an earlier query, as returned in `next_page_token`.
 *
 * @typedef ListTagsRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListTagsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListTagsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the ListTagsForIncident method.
 *
 * @property {Object[]} tags
 *   Tags.
 *
 *   This object should have the same structure as [Tag]{@link google.cloud.irm.v1alpha2.Tag}
 *
 * @property {string} nextPageToken
 *   Page token to fetch the next set of tags.
 *
 * @typedef ListTagsResponse
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListTagsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListTagsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the UpdateAnnotation method.
 *
 * @property {Object} annotation
 *   The annotation to update with the new values.
 *
 *   This object should have the same structure as [Annotation]{@link google.cloud.irm.v1alpha2.Annotation}
 *
 * @property {Object} updateMask
 *   List of fields that should be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateAnnotationRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.UpdateAnnotationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const UpdateAnnotationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the CreateSignal method.
 *
 * @property {string} parent
 *   The resource name of the hosting Stackdriver project which requested
 *   signal belongs to.
 *
 * @property {Object} signal
 *   The signal to create.
 *
 *   This object should have the same structure as [Signal]{@link google.cloud.irm.v1alpha2.Signal}
 *
 * @typedef CreateSignalRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.CreateSignalRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const CreateSignalRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the ListSignals method.
 *
 * @property {string} parent
 *   The resource name of the hosting Stackdriver project which requested
 *   incidents belong to.
 *
 * @property {string} filter
 *   Filter to specify which signals should be returned.
 *
 * @property {number} pageSize
 *   Maximum number of `signals` to return in the response.
 *
 * @property {string} pageToken
 *   Page token from an earlier query, as returned in `next_page_token`. All
 *   field values except for page_size and page_token should be the same as the
 *   original query (may return an error or unexpected data otherwise).
 *
 * @typedef ListSignalsRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListSignalsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListSignalsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the ListSignals method.
 *
 * @property {Object[]} signals
 *   List of signals that have not been moved into an incident yet.
 *
 *   This object should have the same structure as [Signal]{@link google.cloud.irm.v1alpha2.Signal}
 *
 * @property {string} nextPageToken
 *   Page token to fetch the next set of signals.
 *
 * @typedef ListSignalsResponse
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListSignalsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListSignalsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the GetSignal method.
 *
 * @property {string} name
 *   Resource name of the Signal resource, e.g.
 *   "projects/{project_id}/signals/{signal_id}".
 *
 * @typedef GetSignalRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.GetSignalRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const GetSignalRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the UpdateSignal method.
 *
 * @property {Object} signal
 *   The signal to update with the new values.
 *
 *   This object should have the same structure as [Signal]{@link google.cloud.irm.v1alpha2.Signal}
 *
 * @property {Object} updateMask
 *   List of fields that should be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateSignalRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.UpdateSignalRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const UpdateSignalRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the AcknowledgeSignal method.
 *
 * @property {string} name
 *   Resource name of the Signal resource, e.g.
 *   "projects/{project_id}/signals/{signal_id}".
 *
 * @typedef AcknowledgeSignalRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.AcknowledgeSignalRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const AcknowledgeSignalRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response of the AcknowledgeSignal method.
 * @typedef AcknowledgeSignalResponse
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.AcknowledgeSignalResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const AcknowledgeSignalResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the SearchIncidents method.
 *
 * @property {string} parent
 *   The resource name of the hosting Stackdriver project which requested
 *   incidents belong to.
 *
 * @property {string} query
 *   An expression that defines which incidents to return.
 *
 *   Search atoms can be used to match certain specific fields.  Otherwise,
 *   plain text will match text fields in the incident.
 *
 *   Search atoms:
 *   * `start` - (timestamp) The time the incident started.
 *   * `stage` - The stage of the incident, one of detected, triaged, mitigated,
 *     resolved, documented, or duplicate (which correspond to values in the
 *     Incident.Stage enum). These are ordered, so `stage<resolved` is
 *     equivalent to `stage:detected OR stage:triaged OR stage:mitigated`.
 *   * `severity` - (Incident.Severity) The severity of the incident.
 *      + Supports matching on a specific severity (e.g., `severity:major`) or
 *        on a range (e.g., `severity>medium`, `severity<=minor`, etc.).
 *
 *   Timestamp formats:
 *   * yyyy-MM-dd - an absolute date, treated as a calendar-day-wide window.
 *     In other words, the "<" operator will match dates before that date, the
 *     ">" operator will match dates after that date, and the ":" or "="
 *     operators will match the entire day.
 *   * Nd (e.g. 7d) - a relative number of days ago, treated as a moment in time
 *     (as opposed to a day-wide span) a multiple of 24 hours ago (as opposed to
 *     calendar days).  In the case of daylight savings time, it will apply the
 *     current timezone to both ends of the range.  Note that exact matching
 *     (e.g. `start:7d`) is unlikely to be useful because that would only match
 *     incidents created precisely at a particular instant in time.
 *
 *   Examples:
 *
 *   * `foo` - matches incidents containing the word "foo"
 *   * `"foo bar"` - matches incidents containing the phrase "foo bar"
 *   * `foo bar` or `foo AND bar` - matches incidents containing the words "foo"
 *     and "bar"
 *   * `foo -bar` or `foo AND NOT bar` - matches incidents containing the word
 *     "foo" but not the word "bar"
 *   * `foo OR bar` - matches incidents containing the word "foo" or the word
 *     "bar"
 *   * `start>2018-11-28` - matches incidents which started after November 11,
 *     2018.
 *   * `start<=2018-11-28` - matches incidents which started on or before
 *     November 11, 2018.
 *   * `start:2018-11-28` - matches incidents which started on November 11,
 *     2018.
 *   * `start>7d` - matches incidents which started after the point in time 7*24
 *     hours ago
 *   * `start>180d` - similar to 7d, but likely to cross the daylight savings
 *     time boundary, so the end time will be 1 hour different from "now."
 *   * `foo AND start>90d AND stage<resolved` - unresolved incidents from the
 *     past 90 days containing the word "foo"
 *
 * @property {number} pageSize
 *   Number of incidents to return.
 *
 * @property {string} pageToken
 *   Page token from an earlier query, as returned in `next_page_token`.
 *
 * @property {string} timeZone
 *   The time zone name. It should be an IANA TZ name, such as
 *   "America/Los_Angeles". For more information,
 *   see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.
 *   If no time zone is specified, the default is UTC.
 *
 * @typedef SearchIncidentsRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.SearchIncidentsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const SearchIncidentsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the SearchIncidents method.
 *
 * @property {Object[]} incidents
 *   Incidents.
 *
 *   This object should have the same structure as [Incident]{@link google.cloud.irm.v1alpha2.Incident}
 *
 * @property {string} nextPageToken
 *   Page token to fetch the next set of incidents.
 *
 * @typedef SearchIncidentsResponse
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.SearchIncidentsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const SearchIncidentsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to escalate an incident.
 *
 * @property {Object} incident
 *   The incident to escalate with the new values.
 *
 *   This object should have the same structure as [Incident]{@link google.cloud.irm.v1alpha2.Incident}
 *
 * @property {Object} updateMask
 *   List of fields that should be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {Object[]} subscriptions
 *   Subscriptions to add or update. Existing subscriptions with the same
 *   channel and address as a subscription in the list will be updated.
 *
 *   This object should have the same structure as [Subscription]{@link google.cloud.irm.v1alpha2.Subscription}
 *
 * @property {Object[]} tags
 *   Tags to add. Tags identical to existing tags will be ignored.
 *
 *   This object should have the same structure as [Tag]{@link google.cloud.irm.v1alpha2.Tag}
 *
 * @property {Object[]} roles
 *   Roles to add or update. Existing roles with the same type (and title, for
 *   TYPE_OTHER roles) will be updated.
 *
 *   This object should have the same structure as [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}
 *
 * @property {Object[]} artifacts
 *   Artifacts to add. All artifacts are added without checking for duplicates.
 *
 *   This object should have the same structure as [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}
 *
 * @typedef EscalateIncidentRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.EscalateIncidentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const EscalateIncidentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for EscalateIncident.
 *
 * @property {Object} incident
 *   The escalated incident.
 *
 *   This object should have the same structure as [Incident]{@link google.cloud.irm.v1alpha2.Incident}
 *
 * @property {Object[]} subscriptions
 *   New or modified subscriptions.
 *
 *   This object should have the same structure as [Subscription]{@link google.cloud.irm.v1alpha2.Subscription}
 *
 * @property {Object[]} tags
 *   New or modified tags.
 *
 *   This object should have the same structure as [Tag]{@link google.cloud.irm.v1alpha2.Tag}
 *
 * @property {Object[]} roles
 *   New or modified roles.
 *
 *   This object should have the same structure as [IncidentRole]{@link google.cloud.irm.v1alpha2.IncidentRole}
 *
 * @property {Object[]} artifacts
 *   New or modified artifacts.
 *
 *   This object should have the same structure as [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}
 *
 * @typedef EscalateIncidentResponse
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.EscalateIncidentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const EscalateIncidentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the CreateArtifact method.
 *
 * @property {string} parent
 *   Resource name of the incident, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @property {Object} artifact
 *   The artifact to create.
 *
 *   This object should have the same structure as [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}
 *
 * @typedef CreateArtifactRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.CreateArtifactRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const CreateArtifactRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the ListArtifacts method.
 *
 * @property {string} parent
 *   Resource name of the incident, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @property {number} pageSize
 *   Number of artifacts to return.
 *
 * @property {string} pageToken
 *   Page token from an earlier query, as returned in `next_page_token`.
 *
 * @typedef ListArtifactsRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListArtifactsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListArtifactsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the ListArtifacts method.
 *
 * @property {Object[]} artifacts
 *   List of artifacts.
 *
 *   This object should have the same structure as [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}
 *
 * @property {string} nextPageToken
 *   Page token to fetch the next set of artifacts.
 *
 * @typedef ListArtifactsResponse
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListArtifactsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListArtifactsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the UpdateArtifact method.
 *
 * @property {Object} artifact
 *   The artifact to update with the new values.
 *
 *   This object should have the same structure as [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}
 *
 * @property {Object} updateMask
 *   List of fields that should be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateArtifactRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.UpdateArtifactRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const UpdateArtifactRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for deleting an artifact.
 *
 * @property {string} name
 *   Resource name of the artifact.
 *
 * @typedef DeleteArtifactRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.DeleteArtifactRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const DeleteArtifactRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * GetShiftHandoffPresets RPC request.
 *
 * @property {string} parent
 *   Resource name of the Stackdriver project that the presets belong to. e.g.
 *   `projects/{project_id}`
 *
 * @typedef GetShiftHandoffPresetsRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.GetShiftHandoffPresetsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const GetShiftHandoffPresetsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * GetShiftHandoffPresets RPC response.
 *
 * @property {string[]} recipients
 *   The recipients that the user might want to send the shift handoff to, in
 *   the form of email addresses, e.g. "user@example.com". Can be empty.
 *
 * @property {string[]} cc
 *   The recipients that the user might want to CC on the shift handoff, in the
 *   form of email addresses, e.g. "user@example.com". Can be empty.
 *
 * @property {string} subject
 *   A suggested subject for the shift handoff email. Can be empty.
 *
 * @typedef ShiftHandoffPresets
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ShiftHandoffPresets definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ShiftHandoffPresets = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SendShiftHandoff and PreviewShiftHandoff RPC request.
 *
 * @property {string} parent
 *   The resource name of the Stackdriver project that the handoff is being sent
 *   from. e.g. `projects/{project_id}`
 *
 * @property {string[]} recipients
 *   Email addresses of the recipients of the handoff, e.g. "user@example.com".
 *   Must contain at least one entry.
 *
 * @property {string[]} cc
 *   Email addresses that should be CC'd on the handoff. Optional.
 *
 * @property {string} subject
 *   The subject of the email. Required.
 *
 * @property {string} notesContentType
 *   Content type string, e.g. 'text/plain' or 'text/html'.
 *
 * @property {string} notesContent
 *   Additional notes to be included in the handoff. Optional.
 *
 * @property {Object[]} incidents
 *   The set of incidents that should be included in the handoff. Optional.
 *
 *   This object should have the same structure as [Incident]{@link google.cloud.irm.v1alpha2.Incident}
 *
 * @property {boolean} previewOnly
 *   If set to true a ShiftHandoffResponse will be returned but the handoff
 *   will not actually be sent.
 *
 * @typedef SendShiftHandoffRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.SendShiftHandoffRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const SendShiftHandoffRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Describes an incident for inclusion in the handoff.
   * This is wrapped in a message to provide flexibility for potentially
   * attaching additional data to each incident in the future.
   *
   * @property {string} name
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   *
   * @typedef Incident
   * @memberof google.cloud.irm.v1alpha2
   * @see [google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
   */
  Incident: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * SendShiftHandoff and PreviewShiftHandoff RPC response.
 *
 * @property {string} contentType
 *   Content type string, e.g. 'text/plain' or 'text/html'.
 *
 * @property {string} content
 *   The contents of the handoff that was sent or would have been sent (if the
 *   request was preview_only).
 *   This will typically contain a full HTML document.
 *
 * @typedef SendShiftHandoffResponse
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.SendShiftHandoffResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const SendShiftHandoffResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the CreateSubscription method.
 *
 * @property {string} parent
 *   Resource name of the incident, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @property {Object} subscription
 *   The subscription to create.
 *
 *   This object should have the same structure as [Subscription]{@link google.cloud.irm.v1alpha2.Subscription}
 *
 * @typedef CreateSubscriptionRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.CreateSubscriptionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const CreateSubscriptionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the ListSubscriptions method.
 *
 * @property {string} parent
 *   Resource name of the incident, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @property {number} pageSize
 *   Number of subscriptions to return.
 *
 * @property {string} pageToken
 *   Page token from an earlier query, as returned in `next_page_token`.
 *
 * @typedef ListSubscriptionsRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListSubscriptionsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListSubscriptionsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the ListSubscriptions method.
 *
 * @property {Object[]} subscriptions
 *   List of subscriptions.
 *
 *   This object should have the same structure as [Subscription]{@link google.cloud.irm.v1alpha2.Subscription}
 *
 * @property {string} nextPageToken
 *   Page token to fetch the next set of subscriptions.
 *
 * @typedef ListSubscriptionsResponse
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListSubscriptionsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListSubscriptionsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for deleting a subscription.
 *
 * @property {string} name
 *   Resource name of the subscription.
 *
 * @typedef DeleteSubscriptionRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.DeleteSubscriptionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const DeleteSubscriptionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for creating a role assignment.
 *
 * @property {string} parent
 *   Resource name of the incident, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @property {Object} incidentRoleAssignment
 *   Role assignment to create.
 *
 *   This object should have the same structure as [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}
 *
 * @typedef CreateIncidentRoleAssignmentRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const CreateIncidentRoleAssignmentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for deleting a role assignment.
 *
 * @property {string} name
 *   Resource name of the role assignment.
 *
 * @typedef DeleteIncidentRoleAssignmentRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const DeleteIncidentRoleAssignmentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to list role assignments of an incident.
 *
 * @property {string} parent
 *   Resource name of the incident, e.g.
 *   "projects/{project_id}/incidents/{incident_id}".
 *
 * @property {number} pageSize
 *   Number of assignments to return.
 *
 * @property {string} pageToken
 *   Page token from an earlier query, as returned in `next_page_token`.
 *
 * @typedef ListIncidentRoleAssignmentsRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListIncidentRoleAssignmentsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the ListIncidentRoleAssignments method.
 *
 * @property {Object[]} incidentRoleAssignments
 *   List of assignments.
 *
 *   This object should have the same structure as [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}
 *
 * @property {string} nextPageToken
 *   Page token to fetch the next set of assignments.
 *
 * @typedef ListIncidentRoleAssignmentsResponse
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ListIncidentRoleAssignmentsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to start a role handover.
 *
 * @property {string} name
 *   Resource name of the role assignment.
 *
 * @property {Object} newAssignee
 *   The proposed assignee.
 *
 *   This object should have the same structure as [User]{@link google.cloud.irm.v1alpha2.User}
 *
 * @typedef RequestIncidentRoleHandoverRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const RequestIncidentRoleHandoverRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to confirm a role handover.
 *
 * @property {string} name
 *   Resource name of the role assignment.
 *
 * @property {Object} newAssignee
 *   The proposed assignee, who will now be the assignee. This should be the
 *   current user; otherwise ForceRoleHandover should be called.
 *
 *   This object should have the same structure as [User]{@link google.cloud.irm.v1alpha2.User}
 *
 * @typedef ConfirmIncidentRoleHandoverRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ConfirmIncidentRoleHandoverRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to force a role handover.
 *
 * @property {string} name
 *   Resource name of the role assignment.
 *
 * @property {Object} newAssignee
 *   The proposed assignee, who will now be the assignee. This should not be
 *   the current user; otherwise ConfirmRoleHandover should be called.
 *
 *   This object should have the same structure as [User]{@link google.cloud.irm.v1alpha2.User}
 *
 * @typedef ForceIncidentRoleHandoverRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const ForceIncidentRoleHandoverRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to cancel a role handover.
 *
 * @property {string} name
 *   Resource name of the role assignment.
 *
 * @property {Object} newAssignee
 *   Person who was proposed as the next assignee (i.e.
 *   IncidentRoleAssignment.proposed_assignee) and whose proposal is being
 *   cancelled.
 *
 *   This object should have the same structure as [User]{@link google.cloud.irm.v1alpha2.User}
 *
 * @typedef CancelIncidentRoleHandoverRequest
 * @memberof google.cloud.irm.v1alpha2
 * @see [google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/irm/v1alpha2/incidents_service.proto}
 */
const CancelIncidentRoleHandoverRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};