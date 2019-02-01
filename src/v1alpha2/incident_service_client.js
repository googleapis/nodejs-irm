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

'use strict';

const gapicConfig = require('./incident_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The Incident API for Incident Response & Management.
 *
 * @class
 * @memberof v1alpha2
 */
class IncidentServiceClient {
  /**
   * Construct an instance of IncidentServiceClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {function} [options.promise] - Custom promise module to use instead
   *     of native Promises.
   * @param {string} [options.servicePath] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    this._descriptors = {};

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath: this.constructor.servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    const gaxGrpc = new gax.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [
      `gl-node/${process.version}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    const protos = merge(
      {},
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/cloud/irm/v1alpha2/incidents_service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate(
        'projects/{project}'
      ),
      incidentPathTemplate: new gax.PathTemplate(
        'projects/{project}/incidents/{incident}'
      ),
      annotationPathTemplate: new gax.PathTemplate(
        'projects/{project}/incidents/{incident}/annotations/{annotation}'
      ),
      artifactPathTemplate: new gax.PathTemplate(
        'projects/{project}/incidents/{incident}/artifacts/{artifact}'
      ),
      roleAssignmentPathTemplate: new gax.PathTemplate(
        'projects/{project}/incidents/{incident}/roleAssignments/{role_assignment}'
      ),
      subscriptionPathTemplate: new gax.PathTemplate(
        'projects/{project}/incidents/{incident}/subscriptions/{subscription}'
      ),
      tagPathTemplate: new gax.PathTemplate(
        'projects/{project}/incidents/{incident}/tags/{tag}'
      ),
      signalPathTemplate: new gax.PathTemplate(
        'projects/{project}/signals/{signal}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      searchIncidents: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'incidents'
      ),
      searchSimilarIncidents: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'results'
      ),
      listAnnotations: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'annotations'
      ),
      listTags: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'tags'
      ),
      listSignals: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'signals'
      ),
      listArtifacts: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'artifacts'
      ),
      listSubscriptions: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'subscriptions'
      ),
      listIncidentRoleAssignments: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'incidentRoleAssignments'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.irm.v1alpha2.IncidentService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.irm.v1alpha2.IncidentService.
    const incidentServiceStub = gaxGrpc.createStub(
      protos.google.cloud.irm.v1alpha2.IncidentService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const incidentServiceStubMethods = [
      'createIncident',
      'getIncident',
      'searchIncidents',
      'updateIncident',
      'searchSimilarIncidents',
      'createAnnotation',
      'listAnnotations',
      'updateAnnotation',
      'createTag',
      'deleteTag',
      'listTags',
      'createSignal',
      'listSignals',
      'getSignal',
      'updateSignal',
      'acknowledgeSignal',
      'escalateIncident',
      'createArtifact',
      'listArtifacts',
      'updateArtifact',
      'deleteArtifact',
      'getShiftHandoffPresets',
      'sendShiftHandoff',
      'createSubscription',
      'listSubscriptions',
      'deleteSubscription',
      'createIncidentRoleAssignment',
      'deleteIncidentRoleAssignment',
      'listIncidentRoleAssignments',
      'requestIncidentRoleHandover',
      'confirmIncidentRoleHandover',
      'forceIncidentRoleHandover',
      'cancelIncidentRoleHandover',
    ];
    for (const methodName of incidentServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        incidentServiceStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
        defaults[methodName],
        this._descriptors.page[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'irm.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return [
    ];
  }

  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback) {
    return this.auth.getProjectId(callback);
  }

  // -------------------
  // -- Service calls --
  // -------------------

  /**
   * Creates a new incident.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.incident
   *   The incident to create.
   *
   *   This object should have the same structure as [Incident]{@link google.cloud.irm.v1alpha2.Incident}
   * @param {string} request.parent
   *   The resource name of the hosting Stackdriver project which the incident
   *   belongs to.
   *   The name is of the form `projects/{project_id_or_number}`
   *   .
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Incident]{@link google.cloud.irm.v1alpha2.Incident}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Incident]{@link google.cloud.irm.v1alpha2.Incident}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const incident = {};
   * const formattedParent = client.projectPath('[PROJECT]');
   * const request = {
   *   incident: incident,
   *   parent: formattedParent,
   * };
   * client.createIncident(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createIncident(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createIncident(request, options, callback);
  }

  /**
   * Returns an incident by name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Incident]{@link google.cloud.irm.v1alpha2.Incident}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Incident]{@link google.cloud.irm.v1alpha2.Incident}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * client.getIncident({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getIncident(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getIncident(request, options, callback);
  }

  /**
   * Returns a list of incidents.
   * Incidents are ordered by start time, with the most recent incidents first.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the hosting Stackdriver project which requested
   *   incidents belong to.
   * @param {string} [request.query]
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
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.timeZone]
   *   The time zone name. It should be an IANA TZ name, such as
   *   "America/Los_Angeles". For more information,
   *   see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.
   *   If no time zone is specified, the default is UTC.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Incident]{@link google.cloud.irm.v1alpha2.Incident}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [SearchIncidentsResponse]{@link google.cloud.irm.v1alpha2.SearchIncidentsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Incident]{@link google.cloud.irm.v1alpha2.Incident}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Incident]{@link google.cloud.irm.v1alpha2.Incident} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [SearchIncidentsResponse]{@link google.cloud.irm.v1alpha2.SearchIncidentsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.searchIncidents({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.searchIncidents(nextRequest, options).then(callback);
   *   }
   * }
   * client.searchIncidents({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  searchIncidents(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.searchIncidents(request, options, callback);
  }

  /**
   * Equivalent to {@link searchIncidents}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link searchIncidents} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the hosting Stackdriver project which requested
   *   incidents belong to.
   * @param {string} [request.query]
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
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.timeZone]
   *   The time zone name. It should be an IANA TZ name, such as
   *   "America/Los_Angeles". For more information,
   *   see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.
   *   If no time zone is specified, the default is UTC.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Incident]{@link google.cloud.irm.v1alpha2.Incident} on 'data' event.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.searchIncidentsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  searchIncidentsStream(request, options) {
    options = options || {};

    return this._descriptors.page.searchIncidents.createStream(
      this._innerApiCalls.searchIncidents,
      request,
      options
    );
  };

  /**
   * Updates an existing incident.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.incident
   *   The incident to update with the new values.
   *
   *   This object should have the same structure as [Incident]{@link google.cloud.irm.v1alpha2.Incident}
   * @param {Object} [request.updateMask]
   *   List of fields that should be updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Incident]{@link google.cloud.irm.v1alpha2.Incident}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Incident]{@link google.cloud.irm.v1alpha2.Incident}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const incident = {};
   * client.updateIncident({incident: incident})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateIncident(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateIncident(request, options, callback);
  }

  /**
   * Returns a list of incidents that are "similar" to the specified incident
   * or signal. This functionality is provided on a best-effort basis and the
   * definition of "similar" is subject to change.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the incident or signal, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Result]{@link google.cloud.irm.v1alpha2.Result}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [SearchSimilarIncidentsResponse]{@link google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Result]{@link google.cloud.irm.v1alpha2.Result}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Result]{@link google.cloud.irm.v1alpha2.Result} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [SearchSimilarIncidentsResponse]{@link google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedName = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   * client.searchSimilarIncidents({name: formattedName})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedName = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.searchSimilarIncidents(nextRequest, options).then(callback);
   *   }
   * }
   * client.searchSimilarIncidents({name: formattedName}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  searchSimilarIncidents(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.searchSimilarIncidents(request, options, callback);
  }

  /**
   * Equivalent to {@link searchSimilarIncidents}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link searchSimilarIncidents} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the incident or signal, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Result]{@link google.cloud.irm.v1alpha2.Result} on 'data' event.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * client.searchSimilarIncidentsStream({name: formattedName})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  searchSimilarIncidentsStream(request, options) {
    options = options || {};

    return this._descriptors.page.searchSimilarIncidents.createStream(
      this._innerApiCalls.searchSimilarIncidents,
      request,
      options
    );
  };

  /**
   * Creates an annotation on an existing incident. Only 'text/plain' and
   * 'text/markdown' annotations can be created via this method.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {Object} request.annotation
   *   Only annotation.content is an input argument.
   *
   *   This object should have the same structure as [Annotation]{@link google.cloud.irm.v1alpha2.Annotation}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Annotation]{@link google.cloud.irm.v1alpha2.Annotation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Annotation]{@link google.cloud.irm.v1alpha2.Annotation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * const annotation = {};
   * const request = {
   *   parent: formattedParent,
   *   annotation: annotation,
   * };
   * client.createAnnotation(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createAnnotation(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createAnnotation(request, options, callback);
  }

  /**
   * Lists annotations that are part of an incident. No assumptions should be
   * made on the content-type of the annotation returned.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Annotation]{@link google.cloud.irm.v1alpha2.Annotation}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListAnnotationsResponse]{@link google.cloud.irm.v1alpha2.ListAnnotationsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Annotation]{@link google.cloud.irm.v1alpha2.Annotation}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Annotation]{@link google.cloud.irm.v1alpha2.Annotation} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListAnnotationsResponse]{@link google.cloud.irm.v1alpha2.ListAnnotationsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   * client.listAnnotations({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listAnnotations(nextRequest, options).then(callback);
   *   }
   * }
   * client.listAnnotations({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listAnnotations(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listAnnotations(request, options, callback);
  }

  /**
   * Equivalent to {@link listAnnotations}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listAnnotations} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Annotation]{@link google.cloud.irm.v1alpha2.Annotation} on 'data' event.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * client.listAnnotationsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listAnnotationsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listAnnotations.createStream(
      this._innerApiCalls.listAnnotations,
      request,
      options
    );
  };

  /**
   * Updates an annotation on an existing incident.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.annotation
   *   The annotation to update with the new values.
   *
   *   This object should have the same structure as [Annotation]{@link google.cloud.irm.v1alpha2.Annotation}
   * @param {Object} [request.updateMask]
   *   List of fields that should be updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Annotation]{@link google.cloud.irm.v1alpha2.Annotation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Annotation]{@link google.cloud.irm.v1alpha2.Annotation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const annotation = {};
   * client.updateAnnotation({annotation: annotation})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateAnnotation(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateAnnotation(request, options, callback);
  }

  /**
   * Creates a tag on an existing incident.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {Object} request.tag
   *   Tag to create. Only tag.display_name is an input argument.
   *
   *   This object should have the same structure as [Tag]{@link google.cloud.irm.v1alpha2.Tag}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Tag]{@link google.cloud.irm.v1alpha2.Tag}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Tag]{@link google.cloud.irm.v1alpha2.Tag}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * const tag = {};
   * const request = {
   *   parent: formattedParent,
   *   tag: tag,
   * };
   * client.createTag(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createTag(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createTag(request, options, callback);
  }

  /**
   * Deletes an existing tag.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the tag.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.tagPath('[PROJECT]', '[INCIDENT]', '[TAG]');
   * client.deleteTag({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteTag(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteTag(request, options, callback);
  }

  /**
   * Lists tags that are part of an incident.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Tag]{@link google.cloud.irm.v1alpha2.Tag}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListTagsResponse]{@link google.cloud.irm.v1alpha2.ListTagsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Tag]{@link google.cloud.irm.v1alpha2.Tag}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Tag]{@link google.cloud.irm.v1alpha2.Tag} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListTagsResponse]{@link google.cloud.irm.v1alpha2.ListTagsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   * client.listTags({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listTags(nextRequest, options).then(callback);
   *   }
   * }
   * client.listTags({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listTags(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listTags(request, options, callback);
  }

  /**
   * Equivalent to {@link listTags}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listTags} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Tag]{@link google.cloud.irm.v1alpha2.Tag} on 'data' event.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * client.listTagsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listTagsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listTags.createStream(
      this._innerApiCalls.listTags,
      request,
      options
    );
  };

  /**
   * Creates a new signal.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the hosting Stackdriver project which requested
   *   signal belongs to.
   * @param {Object} request.signal
   *   The signal to create.
   *
   *   This object should have the same structure as [Signal]{@link google.cloud.irm.v1alpha2.Signal}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Signal]{@link google.cloud.irm.v1alpha2.Signal}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Signal]{@link google.cloud.irm.v1alpha2.Signal}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const signal = {};
   * const request = {
   *   parent: formattedParent,
   *   signal: signal,
   * };
   * client.createSignal(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createSignal(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createSignal(request, options, callback);
  }

  /**
   * Lists signals that are part of an incident.
   * Signals are returned in reverse chronological order.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the hosting Stackdriver project which requested
   *   incidents belong to.
   * @param {string} [request.filter]
   *   Filter to specify which signals should be returned.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Signal]{@link google.cloud.irm.v1alpha2.Signal}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListSignalsResponse]{@link google.cloud.irm.v1alpha2.ListSignalsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Signal]{@link google.cloud.irm.v1alpha2.Signal}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Signal]{@link google.cloud.irm.v1alpha2.Signal} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListSignalsResponse]{@link google.cloud.irm.v1alpha2.ListSignalsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listSignals({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listSignals(nextRequest, options).then(callback);
   *   }
   * }
   * client.listSignals({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listSignals(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listSignals(request, options, callback);
  }

  /**
   * Equivalent to {@link listSignals}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listSignals} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the hosting Stackdriver project which requested
   *   incidents belong to.
   * @param {string} [request.filter]
   *   Filter to specify which signals should be returned.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Signal]{@link google.cloud.irm.v1alpha2.Signal} on 'data' event.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.listSignalsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listSignalsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listSignals.createStream(
      this._innerApiCalls.listSignals,
      request,
      options
    );
  };

  /**
   * Returns a signal by name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the Signal resource, e.g.
   *   "projects/{project_id}/signals/{signal_id}".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Signal]{@link google.cloud.irm.v1alpha2.Signal}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Signal]{@link google.cloud.irm.v1alpha2.Signal}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.signalPath('[PROJECT]', '[SIGNAL]');
   * client.getSignal({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getSignal(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getSignal(request, options, callback);
  }

  /**
   * Updates an existing signal (e.g. to assign/unassign it to an
   * incident).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.signal
   *   The signal to update with the new values.
   *
   *   This object should have the same structure as [Signal]{@link google.cloud.irm.v1alpha2.Signal}
   * @param {Object} [request.updateMask]
   *   List of fields that should be updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Signal]{@link google.cloud.irm.v1alpha2.Signal}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Signal]{@link google.cloud.irm.v1alpha2.Signal}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const signal = {};
   * client.updateSignal({signal: signal})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateSignal(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateSignal(request, options, callback);
  }

  /**
   * Acks a signal. This acknowledges the signal in the underlying system,
   * indicating that the caller takes responsibility for looking into this.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the Signal resource, e.g.
   *   "projects/{project_id}/signals/{signal_id}".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AcknowledgeSignalResponse]{@link google.cloud.irm.v1alpha2.AcknowledgeSignalResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AcknowledgeSignalResponse]{@link google.cloud.irm.v1alpha2.AcknowledgeSignalResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.signalPath('[PROJECT]', '[SIGNAL]');
   * client.acknowledgeSignal({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  acknowledgeSignal(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.acknowledgeSignal(request, options, callback);
  }

  /**
   * Escalates an incident.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.incident
   *   The incident to escalate with the new values.
   *
   *   This object should have the same structure as [Incident]{@link google.cloud.irm.v1alpha2.Incident}
   * @param {Object} [request.updateMask]
   *   List of fields that should be updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object[]} [request.subscriptions]
   *   Subscriptions to add or update. Existing subscriptions with the same
   *   channel and address as a subscription in the list will be updated.
   *
   *   This object should have the same structure as [Subscription]{@link google.cloud.irm.v1alpha2.Subscription}
   * @param {Object[]} [request.tags]
   *   Tags to add. Tags identical to existing tags will be ignored.
   *
   *   This object should have the same structure as [Tag]{@link google.cloud.irm.v1alpha2.Tag}
   * @param {Object[]} [request.roles]
   *   Roles to add or update. Existing roles with the same type (and title, for
   *   TYPE_OTHER roles) will be updated.
   *
   *   This object should have the same structure as [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}
   * @param {Object[]} [request.artifacts]
   *   Artifacts to add. All artifacts are added without checking for duplicates.
   *
   *   This object should have the same structure as [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [EscalateIncidentResponse]{@link google.cloud.irm.v1alpha2.EscalateIncidentResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [EscalateIncidentResponse]{@link google.cloud.irm.v1alpha2.EscalateIncidentResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const incident = {};
   * client.escalateIncident({incident: incident})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  escalateIncident(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.escalateIncident(request, options, callback);
  }

  /**
   * Creates a new artifact.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {Object} request.artifact
   *   The artifact to create.
   *
   *   This object should have the same structure as [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * const artifact = {};
   * const request = {
   *   parent: formattedParent,
   *   artifact: artifact,
   * };
   * client.createArtifact(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createArtifact(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createArtifact(request, options, callback);
  }

  /**
   * Returns a list of artifacts for an incident.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListArtifactsResponse]{@link google.cloud.irm.v1alpha2.ListArtifactsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Artifact]{@link google.cloud.irm.v1alpha2.Artifact} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListArtifactsResponse]{@link google.cloud.irm.v1alpha2.ListArtifactsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   * client.listArtifacts({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listArtifacts(nextRequest, options).then(callback);
   *   }
   * }
   * client.listArtifacts({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listArtifacts(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listArtifacts(request, options, callback);
  }

  /**
   * Equivalent to {@link listArtifacts}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listArtifacts} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Artifact]{@link google.cloud.irm.v1alpha2.Artifact} on 'data' event.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * client.listArtifactsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listArtifactsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listArtifacts.createStream(
      this._innerApiCalls.listArtifacts,
      request,
      options
    );
  };

  /**
   * Updates an existing artifact.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.artifact
   *   The artifact to update with the new values.
   *
   *   This object should have the same structure as [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}
   * @param {Object} [request.updateMask]
   *   List of fields that should be updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Artifact]{@link google.cloud.irm.v1alpha2.Artifact}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const artifact = {};
   * client.updateArtifact({artifact: artifact})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateArtifact(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateArtifact(request, options, callback);
  }

  /**
   * Deletes an existing artifact.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the artifact.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.artifactPath('[PROJECT]', '[INCIDENT]', '[ARTIFACT]');
   * client.deleteArtifact({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteArtifact(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteArtifact(request, options, callback);
  }

  /**
   * Returns "presets" specific to shift handoff (see SendShiftHandoff), e.g.
   * default values for handoff message fields.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the Stackdriver project that the presets belong to. e.g.
   *   `projects/{project_id}`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ShiftHandoffPresets]{@link google.cloud.irm.v1alpha2.ShiftHandoffPresets}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ShiftHandoffPresets]{@link google.cloud.irm.v1alpha2.ShiftHandoffPresets}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.getShiftHandoffPresets({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getShiftHandoffPresets(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getShiftHandoffPresets(request, options, callback);
  }

  /**
   * Sends a summary of the shift for oncall handoff.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the Stackdriver project that the handoff is being sent
   *   from. e.g. `projects/{project_id}`
   * @param {string[]} request.recipients
   *   Email addresses of the recipients of the handoff, e.g. "user@example.com".
   *   Must contain at least one entry.
   * @param {string} request.subject
   *   The subject of the email. Required.
   * @param {string[]} [request.cc]
   *   Email addresses that should be CC'd on the handoff. Optional.
   * @param {string} [request.notesContentType]
   *   Content type string, e.g. 'text/plain' or 'text/html'.
   * @param {string} [request.notesContent]
   *   Additional notes to be included in the handoff. Optional.
   * @param {Object[]} [request.incidents]
   *   The set of incidents that should be included in the handoff. Optional.
   *
   *   This object should have the same structure as [Incident]{@link google.cloud.irm.v1alpha2.Incident}
   * @param {boolean} [request.previewOnly]
   *   If set to true a ShiftHandoffResponse will be returned but the handoff
   *   will not actually be sent.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [SendShiftHandoffResponse]{@link google.cloud.irm.v1alpha2.SendShiftHandoffResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SendShiftHandoffResponse]{@link google.cloud.irm.v1alpha2.SendShiftHandoffResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const recipients = [];
   * const subject = '';
   * const request = {
   *   parent: formattedParent,
   *   recipients: recipients,
   *   subject: subject,
   * };
   * client.sendShiftHandoff(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  sendShiftHandoff(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.sendShiftHandoff(request, options, callback);
  }

  /**
   * Creates a new subscription.
   * This will fail if:
   *    a. there are too many (50) subscriptions in the incident already
   *    b. a subscription using the given channel already exists
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {Object} request.subscription
   *   The subscription to create.
   *
   *   This object should have the same structure as [Subscription]{@link google.cloud.irm.v1alpha2.Subscription}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Subscription]{@link google.cloud.irm.v1alpha2.Subscription}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Subscription]{@link google.cloud.irm.v1alpha2.Subscription}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * const subscription = {};
   * const request = {
   *   parent: formattedParent,
   *   subscription: subscription,
   * };
   * client.createSubscription(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createSubscription(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createSubscription(request, options, callback);
  }

  /**
   * Returns a list of subscriptions for an incident.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Subscription]{@link google.cloud.irm.v1alpha2.Subscription}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListSubscriptionsResponse]{@link google.cloud.irm.v1alpha2.ListSubscriptionsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Subscription]{@link google.cloud.irm.v1alpha2.Subscription}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Subscription]{@link google.cloud.irm.v1alpha2.Subscription} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListSubscriptionsResponse]{@link google.cloud.irm.v1alpha2.ListSubscriptionsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   * client.listSubscriptions({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listSubscriptions(nextRequest, options).then(callback);
   *   }
   * }
   * client.listSubscriptions({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listSubscriptions(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listSubscriptions(request, options, callback);
  }

  /**
   * Equivalent to {@link listSubscriptions}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listSubscriptions} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Subscription]{@link google.cloud.irm.v1alpha2.Subscription} on 'data' event.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * client.listSubscriptionsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listSubscriptionsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listSubscriptions.createStream(
      this._innerApiCalls.listSubscriptions,
      request,
      options
    );
  };

  /**
   * Deletes an existing subscription.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the subscription.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.subscriptionPath('[PROJECT]', '[INCIDENT]', '[SUBSCRIPTION]');
   * client.deleteSubscription({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteSubscription(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteSubscription(request, options, callback);
  }

  /**
   * Creates a role assignment on an existing incident. Normally, the user field
   * will be set when assigning a role to oneself, and the next field will be
   * set when proposing another user as the assignee. Setting the next field
   * directly to a user other than oneself is equivalent to proposing and
   * force-assigning the role to the user.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {Object} request.incidentRoleAssignment
   *   Role assignment to create.
   *
   *   This object should have the same structure as [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * const incidentRoleAssignment = {};
   * const request = {
   *   parent: formattedParent,
   *   incidentRoleAssignment: incidentRoleAssignment,
   * };
   * client.createIncidentRoleAssignment(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createIncidentRoleAssignment(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createIncidentRoleAssignment(request, options, callback);
  }

  /**
   * Deletes an existing role assignment.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the role assignment.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.roleAssignmentPath('[PROJECT]', '[INCIDENT]', '[ROLE_ASSIGNMENT]');
   * client.deleteIncidentRoleAssignment({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteIncidentRoleAssignment(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteIncidentRoleAssignment(request, options, callback);
  }

  /**
   * Lists role assignments that are part of an incident.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListIncidentRoleAssignmentsResponse]{@link google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListIncidentRoleAssignmentsResponse]{@link google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   * client.listIncidentRoleAssignments({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listIncidentRoleAssignments(nextRequest, options).then(callback);
   *   }
   * }
   * client.listIncidentRoleAssignments({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listIncidentRoleAssignments(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listIncidentRoleAssignments(request, options, callback);
  }

  /**
   * Equivalent to {@link listIncidentRoleAssignments}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listIncidentRoleAssignments} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the incident, e.g.
   *   "projects/{project_id}/incidents/{incident_id}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment} on 'data' event.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
   * client.listIncidentRoleAssignmentsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listIncidentRoleAssignmentsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listIncidentRoleAssignments.createStream(
      this._innerApiCalls.listIncidentRoleAssignments,
      request,
      options
    );
  };

  /**
   * Starts a role handover. The proposed assignee will receive an email
   * notifying them of the assignment. This will fail if a role handover is
   * already pending.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the role assignment.
   * @param {Object} request.newAssignee
   *   The proposed assignee.
   *
   *   This object should have the same structure as [User]{@link google.cloud.irm.v1alpha2.User}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.roleAssignmentPath('[PROJECT]', '[INCIDENT]', '[ROLE_ASSIGNMENT]');
   * const newAssignee = {};
   * const request = {
   *   name: formattedName,
   *   newAssignee: newAssignee,
   * };
   * client.requestIncidentRoleHandover(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  requestIncidentRoleHandover(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.requestIncidentRoleHandover(request, options, callback);
  }

  /**
   * Confirms a role handover. This will fail if the 'proposed_assignee' field
   * of the IncidentRoleAssignment is not equal to the 'new_assignee' field of
   * the request. If the caller is not the new_assignee,
   * ForceIncidentRoleHandover should be used instead.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the role assignment.
   * @param {Object} request.newAssignee
   *   The proposed assignee, who will now be the assignee. This should be the
   *   current user; otherwise ForceRoleHandover should be called.
   *
   *   This object should have the same structure as [User]{@link google.cloud.irm.v1alpha2.User}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.roleAssignmentPath('[PROJECT]', '[INCIDENT]', '[ROLE_ASSIGNMENT]');
   * const newAssignee = {};
   * const request = {
   *   name: formattedName,
   *   newAssignee: newAssignee,
   * };
   * client.confirmIncidentRoleHandover(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  confirmIncidentRoleHandover(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.confirmIncidentRoleHandover(request, options, callback);
  }

  /**
   * Forces a role handover. This will fail if the 'proposed_assignee' field of
   * the IncidentRoleAssignment is not equal to the 'new_assignee' field of the
   * request. If the caller is the new_assignee, ConfirmIncidentRoleHandover
   * should be used instead.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the role assignment.
   * @param {Object} request.newAssignee
   *   The proposed assignee, who will now be the assignee. This should not be
   *   the current user; otherwise ConfirmRoleHandover should be called.
   *
   *   This object should have the same structure as [User]{@link google.cloud.irm.v1alpha2.User}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.roleAssignmentPath('[PROJECT]', '[INCIDENT]', '[ROLE_ASSIGNMENT]');
   * const newAssignee = {};
   * const request = {
   *   name: formattedName,
   *   newAssignee: newAssignee,
   * };
   * client.forceIncidentRoleHandover(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  forceIncidentRoleHandover(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.forceIncidentRoleHandover(request, options, callback);
  }

  /**
   * Cancels a role handover. This will fail if the 'proposed_assignee' field of
   * the IncidentRoleAssignment is not equal to the 'new_assignee' field of the
   * request.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the role assignment.
   * @param {Object} request.newAssignee
   *   Person who was proposed as the next assignee (i.e.
   *   IncidentRoleAssignment.proposed_assignee) and whose proposal is being
   *   cancelled.
   *
   *   This object should have the same structure as [User]{@link google.cloud.irm.v1alpha2.User}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [IncidentRoleAssignment]{@link google.cloud.irm.v1alpha2.IncidentRoleAssignment}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const irm = require('@google-cloud/irm');
   *
   * const client = new irm.v1alpha2.IncidentServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.roleAssignmentPath('[PROJECT]', '[INCIDENT]', '[ROLE_ASSIGNMENT]');
   * const newAssignee = {};
   * const request = {
   *   name: formattedName,
   *   newAssignee: newAssignee,
   * };
   * client.cancelIncidentRoleHandover(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  cancelIncidentRoleHandover(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.cancelIncidentRoleHandover(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {String} project
   * @returns {String}
   */
  projectPath(project) {
    return this._pathTemplates.projectPathTemplate.render({
      project: project,
    });
  }

  /**
   * Return a fully-qualified incident resource name string.
   *
   * @param {String} project
   * @param {String} incident
   * @returns {String}
   */
  incidentPath(project, incident) {
    return this._pathTemplates.incidentPathTemplate.render({
      project: project,
      incident: incident,
    });
  }

  /**
   * Return a fully-qualified annotation resource name string.
   *
   * @param {String} project
   * @param {String} incident
   * @param {String} annotation
   * @returns {String}
   */
  annotationPath(project, incident, annotation) {
    return this._pathTemplates.annotationPathTemplate.render({
      project: project,
      incident: incident,
      annotation: annotation,
    });
  }

  /**
   * Return a fully-qualified artifact resource name string.
   *
   * @param {String} project
   * @param {String} incident
   * @param {String} artifact
   * @returns {String}
   */
  artifactPath(project, incident, artifact) {
    return this._pathTemplates.artifactPathTemplate.render({
      project: project,
      incident: incident,
      artifact: artifact,
    });
  }

  /**
   * Return a fully-qualified role_assignment resource name string.
   *
   * @param {String} project
   * @param {String} incident
   * @param {String} roleAssignment
   * @returns {String}
   */
  roleAssignmentPath(project, incident, roleAssignment) {
    return this._pathTemplates.roleAssignmentPathTemplate.render({
      project: project,
      incident: incident,
      role_assignment: roleAssignment,
    });
  }

  /**
   * Return a fully-qualified subscription resource name string.
   *
   * @param {String} project
   * @param {String} incident
   * @param {String} subscription
   * @returns {String}
   */
  subscriptionPath(project, incident, subscription) {
    return this._pathTemplates.subscriptionPathTemplate.render({
      project: project,
      incident: incident,
      subscription: subscription,
    });
  }

  /**
   * Return a fully-qualified tag resource name string.
   *
   * @param {String} project
   * @param {String} incident
   * @param {String} tag
   * @returns {String}
   */
  tagPath(project, incident, tag) {
    return this._pathTemplates.tagPathTemplate.render({
      project: project,
      incident: incident,
      tag: tag,
    });
  }

  /**
   * Return a fully-qualified signal resource name string.
   *
   * @param {String} project
   * @param {String} signal
   * @returns {String}
   */
  signalPath(project, signal) {
    return this._pathTemplates.signalPathTemplate.render({
      project: project,
      signal: signal,
    });
  }

  /**
   * Parse the projectName from a project resource.
   *
   * @param {String} projectName
   *   A fully-qualified path representing a project resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProjectName(projectName) {
    return this._pathTemplates.projectPathTemplate
      .match(projectName)
      .project;
  }

  /**
   * Parse the incidentName from a incident resource.
   *
   * @param {String} incidentName
   *   A fully-qualified path representing a incident resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromIncidentName(incidentName) {
    return this._pathTemplates.incidentPathTemplate
      .match(incidentName)
      .project;
  }

  /**
   * Parse the incidentName from a incident resource.
   *
   * @param {String} incidentName
   *   A fully-qualified path representing a incident resources.
   * @returns {String} - A string representing the incident.
   */
  matchIncidentFromIncidentName(incidentName) {
    return this._pathTemplates.incidentPathTemplate
      .match(incidentName)
      .incident;
  }

  /**
   * Parse the annotationName from a annotation resource.
   *
   * @param {String} annotationName
   *   A fully-qualified path representing a annotation resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromAnnotationName(annotationName) {
    return this._pathTemplates.annotationPathTemplate
      .match(annotationName)
      .project;
  }

  /**
   * Parse the annotationName from a annotation resource.
   *
   * @param {String} annotationName
   *   A fully-qualified path representing a annotation resources.
   * @returns {String} - A string representing the incident.
   */
  matchIncidentFromAnnotationName(annotationName) {
    return this._pathTemplates.annotationPathTemplate
      .match(annotationName)
      .incident;
  }

  /**
   * Parse the annotationName from a annotation resource.
   *
   * @param {String} annotationName
   *   A fully-qualified path representing a annotation resources.
   * @returns {String} - A string representing the annotation.
   */
  matchAnnotationFromAnnotationName(annotationName) {
    return this._pathTemplates.annotationPathTemplate
      .match(annotationName)
      .annotation;
  }

  /**
   * Parse the artifactName from a artifact resource.
   *
   * @param {String} artifactName
   *   A fully-qualified path representing a artifact resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromArtifactName(artifactName) {
    return this._pathTemplates.artifactPathTemplate
      .match(artifactName)
      .project;
  }

  /**
   * Parse the artifactName from a artifact resource.
   *
   * @param {String} artifactName
   *   A fully-qualified path representing a artifact resources.
   * @returns {String} - A string representing the incident.
   */
  matchIncidentFromArtifactName(artifactName) {
    return this._pathTemplates.artifactPathTemplate
      .match(artifactName)
      .incident;
  }

  /**
   * Parse the artifactName from a artifact resource.
   *
   * @param {String} artifactName
   *   A fully-qualified path representing a artifact resources.
   * @returns {String} - A string representing the artifact.
   */
  matchArtifactFromArtifactName(artifactName) {
    return this._pathTemplates.artifactPathTemplate
      .match(artifactName)
      .artifact;
  }

  /**
   * Parse the roleAssignmentName from a role_assignment resource.
   *
   * @param {String} roleAssignmentName
   *   A fully-qualified path representing a role_assignment resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromRoleAssignmentName(roleAssignmentName) {
    return this._pathTemplates.roleAssignmentPathTemplate
      .match(roleAssignmentName)
      .project;
  }

  /**
   * Parse the roleAssignmentName from a role_assignment resource.
   *
   * @param {String} roleAssignmentName
   *   A fully-qualified path representing a role_assignment resources.
   * @returns {String} - A string representing the incident.
   */
  matchIncidentFromRoleAssignmentName(roleAssignmentName) {
    return this._pathTemplates.roleAssignmentPathTemplate
      .match(roleAssignmentName)
      .incident;
  }

  /**
   * Parse the roleAssignmentName from a role_assignment resource.
   *
   * @param {String} roleAssignmentName
   *   A fully-qualified path representing a role_assignment resources.
   * @returns {String} - A string representing the role_assignment.
   */
  matchRoleAssignmentFromRoleAssignmentName(roleAssignmentName) {
    return this._pathTemplates.roleAssignmentPathTemplate
      .match(roleAssignmentName)
      .role_assignment;
  }

  /**
   * Parse the subscriptionName from a subscription resource.
   *
   * @param {String} subscriptionName
   *   A fully-qualified path representing a subscription resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromSubscriptionName(subscriptionName) {
    return this._pathTemplates.subscriptionPathTemplate
      .match(subscriptionName)
      .project;
  }

  /**
   * Parse the subscriptionName from a subscription resource.
   *
   * @param {String} subscriptionName
   *   A fully-qualified path representing a subscription resources.
   * @returns {String} - A string representing the incident.
   */
  matchIncidentFromSubscriptionName(subscriptionName) {
    return this._pathTemplates.subscriptionPathTemplate
      .match(subscriptionName)
      .incident;
  }

  /**
   * Parse the subscriptionName from a subscription resource.
   *
   * @param {String} subscriptionName
   *   A fully-qualified path representing a subscription resources.
   * @returns {String} - A string representing the subscription.
   */
  matchSubscriptionFromSubscriptionName(subscriptionName) {
    return this._pathTemplates.subscriptionPathTemplate
      .match(subscriptionName)
      .subscription;
  }

  /**
   * Parse the tagName from a tag resource.
   *
   * @param {String} tagName
   *   A fully-qualified path representing a tag resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromTagName(tagName) {
    return this._pathTemplates.tagPathTemplate
      .match(tagName)
      .project;
  }

  /**
   * Parse the tagName from a tag resource.
   *
   * @param {String} tagName
   *   A fully-qualified path representing a tag resources.
   * @returns {String} - A string representing the incident.
   */
  matchIncidentFromTagName(tagName) {
    return this._pathTemplates.tagPathTemplate
      .match(tagName)
      .incident;
  }

  /**
   * Parse the tagName from a tag resource.
   *
   * @param {String} tagName
   *   A fully-qualified path representing a tag resources.
   * @returns {String} - A string representing the tag.
   */
  matchTagFromTagName(tagName) {
    return this._pathTemplates.tagPathTemplate
      .match(tagName)
      .tag;
  }

  /**
   * Parse the signalName from a signal resource.
   *
   * @param {String} signalName
   *   A fully-qualified path representing a signal resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromSignalName(signalName) {
    return this._pathTemplates.signalPathTemplate
      .match(signalName)
      .project;
  }

  /**
   * Parse the signalName from a signal resource.
   *
   * @param {String} signalName
   *   A fully-qualified path representing a signal resources.
   * @returns {String} - A string representing the signal.
   */
  matchSignalFromSignalName(signalName) {
    return this._pathTemplates.signalPathTemplate
      .match(signalName)
      .signal;
  }
}


module.exports = IncidentServiceClient;
