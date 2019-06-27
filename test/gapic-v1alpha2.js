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

const assert = require('assert');

const irmModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('IncidentServiceClient', () => {
  it('has servicePath', () => {
    const servicePath = irmModule.v1alpha2.IncidentServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = irmModule.v1alpha2.IncidentServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = irmModule.v1alpha2.IncidentServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new irmModule.v1alpha2.IncidentServiceClient();
    assert(client);
  });

  describe('createIncident', () => {
    it('invokes createIncident without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const incident = {};
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        incident: incident,
        parent: formattedParent,
      };

      // Mock response
      const name = 'name3373707';
      const title = 'title110371416';
      const etag = 'etag3123477';
      const duplicateIncident = 'duplicateIncident-316496506';
      const expectedResponse = {
        name: name,
        title: title,
        etag: etag,
        duplicateIncident: duplicateIncident,
      };

      // Mock Grpc layer
      client._innerApiCalls.createIncident = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createIncident(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createIncident with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const incident = {};
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        incident: incident,
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createIncident = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createIncident(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getIncident', () => {
    it('invokes getIncident without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const title = 'title110371416';
      const etag = 'etag3123477';
      const duplicateIncident = 'duplicateIncident-316496506';
      const expectedResponse = {
        name: name2,
        title: title,
        etag: etag,
        duplicateIncident: duplicateIncident,
      };

      // Mock Grpc layer
      client._innerApiCalls.getIncident = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getIncident(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getIncident with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getIncident = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getIncident(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('searchIncidents', () => {
    it('invokes searchIncidents without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const incidentsElement = {};
      const incidents = [incidentsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        incidents: incidents,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchIncidents = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.incidents);
      };

      client.searchIncidents(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.incidents);
        done();
      });
    });

    it('invokes searchIncidents with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchIncidents = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchIncidents(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateIncident', () => {
    it('invokes updateIncident without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const incident = {};
      const request = {
        incident: incident,
      };

      // Mock response
      const name = 'name3373707';
      const title = 'title110371416';
      const etag = 'etag3123477';
      const duplicateIncident = 'duplicateIncident-316496506';
      const expectedResponse = {
        name: name,
        title: title,
        etag: etag,
        duplicateIncident: duplicateIncident,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateIncident = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateIncident(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateIncident with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const incident = {};
      const request = {
        incident: incident,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateIncident = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateIncident(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('searchSimilarIncidents', () => {
    it('invokes searchSimilarIncidents without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const nextPageToken = '';
      const resultsElement = {};
      const results = [resultsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        results: results,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchSimilarIncidents = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.results);
      };

      client.searchSimilarIncidents(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.results);
        done();
      });
    });

    it('invokes searchSimilarIncidents with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchSimilarIncidents = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchSimilarIncidents(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createAnnotation', () => {
    it('invokes createAnnotation without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const annotation = {};
      const request = {
        parent: formattedParent,
        annotation: annotation,
      };

      // Mock response
      const name = 'name3373707';
      const content = 'content951530617';
      const contentType = 'contentType831846208';
      const expectedResponse = {
        name: name,
        content: content,
        contentType: contentType,
      };

      // Mock Grpc layer
      client._innerApiCalls.createAnnotation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createAnnotation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createAnnotation with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const annotation = {};
      const request = {
        parent: formattedParent,
        annotation: annotation,
      };

      // Mock Grpc layer
      client._innerApiCalls.createAnnotation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createAnnotation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listAnnotations', () => {
    it('invokes listAnnotations without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const annotationsElement = {};
      const annotations = [annotationsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        annotations: annotations,
      };

      // Mock Grpc layer
      client._innerApiCalls.listAnnotations = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.annotations);
      };

      client.listAnnotations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.annotations);
        done();
      });
    });

    it('invokes listAnnotations with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listAnnotations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listAnnotations(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createTag', () => {
    it('invokes createTag without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const tag = {};
      const request = {
        parent: formattedParent,
        tag: tag,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTag = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createTag(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createTag with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const tag = {};
      const request = {
        parent: formattedParent,
        tag: tag,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTag = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createTag(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteTag', () => {
    it('invokes deleteTag without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tagPath('[PROJECT]', '[INCIDENT]', '[TAG]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTag = mockSimpleGrpcMethod(request);

      client.deleteTag(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteTag with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tagPath('[PROJECT]', '[INCIDENT]', '[TAG]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTag = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteTag(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listTags', () => {
    it('invokes listTags without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const tagsElement = {};
      const tags = [tagsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        tags: tags,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTags = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.tags);
      };

      client.listTags(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.tags);
        done();
      });
    });

    it('invokes listTags with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTags = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listTags(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createSignal', () => {
    it('invokes createSignal without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const signal = {};
      const request = {
        parent: formattedParent,
        signal: signal,
      };

      // Mock response
      const name = 'name3373707';
      const etag = 'etag3123477';
      const incident = 'incident86983890';
      const title = 'title110371416';
      const contentType = 'contentType831846208';
      const content = 'content951530617';
      const expectedResponse = {
        name: name,
        etag: etag,
        incident: incident,
        title: title,
        contentType: contentType,
        content: content,
      };

      // Mock Grpc layer
      client._innerApiCalls.createSignal = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createSignal(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createSignal with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const signal = {};
      const request = {
        parent: formattedParent,
        signal: signal,
      };

      // Mock Grpc layer
      client._innerApiCalls.createSignal = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createSignal(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('searchSignals', () => {
    it('invokes searchSignals without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const signalsElement = {};
      const signals = [signalsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        signals: signals,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchSignals = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.signals);
      };

      client.searchSignals(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.signals);
        done();
      });
    });

    it('invokes searchSignals with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchSignals = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchSignals(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getSignal', () => {
    it('invokes getSignal without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.signalPath('[PROJECT]', '[SIGNAL]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const etag = 'etag3123477';
      const incident = 'incident86983890';
      const title = 'title110371416';
      const contentType = 'contentType831846208';
      const content = 'content951530617';
      const expectedResponse = {
        name: name2,
        etag: etag,
        incident: incident,
        title: title,
        contentType: contentType,
        content: content,
      };

      // Mock Grpc layer
      client._innerApiCalls.getSignal = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getSignal(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getSignal with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.signalPath('[PROJECT]', '[SIGNAL]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getSignal = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getSignal(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('lookupSignal', () => {
    it('invokes lookupSignal without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const name = 'name3373707';
      const etag = 'etag3123477';
      const incident = 'incident86983890';
      const title = 'title110371416';
      const contentType = 'contentType831846208';
      const content = 'content951530617';
      const expectedResponse = {
        name: name,
        etag: etag,
        incident: incident,
        title: title,
        contentType: contentType,
        content: content,
      };

      // Mock Grpc layer
      client._innerApiCalls.lookupSignal = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.lookupSignal(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes lookupSignal with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.lookupSignal = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.lookupSignal(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateSignal', () => {
    it('invokes updateSignal without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const signal = {};
      const request = {
        signal: signal,
      };

      // Mock response
      const name = 'name3373707';
      const etag = 'etag3123477';
      const incident = 'incident86983890';
      const title = 'title110371416';
      const contentType = 'contentType831846208';
      const content = 'content951530617';
      const expectedResponse = {
        name: name,
        etag: etag,
        incident: incident,
        title: title,
        contentType: contentType,
        content: content,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateSignal = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateSignal(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateSignal with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const signal = {};
      const request = {
        signal: signal,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateSignal = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateSignal(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('escalateIncident', () => {
    it('invokes escalateIncident without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const incident = {};
      const request = {
        incident: incident,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.escalateIncident = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.escalateIncident(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes escalateIncident with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const incident = {};
      const request = {
        incident: incident,
      };

      // Mock Grpc layer
      client._innerApiCalls.escalateIncident = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.escalateIncident(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createArtifact', () => {
    it('invokes createArtifact without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const artifact = {};
      const request = {
        parent: formattedParent,
        artifact: artifact,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const etag = 'etag3123477';
      const url = 'url116079';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        etag: etag,
        url: url,
      };

      // Mock Grpc layer
      client._innerApiCalls.createArtifact = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createArtifact(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createArtifact with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const artifact = {};
      const request = {
        parent: formattedParent,
        artifact: artifact,
      };

      // Mock Grpc layer
      client._innerApiCalls.createArtifact = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createArtifact(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listArtifacts', () => {
    it('invokes listArtifacts without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const artifactsElement = {};
      const artifacts = [artifactsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        artifacts: artifacts,
      };

      // Mock Grpc layer
      client._innerApiCalls.listArtifacts = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.artifacts);
      };

      client.listArtifacts(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.artifacts);
        done();
      });
    });

    it('invokes listArtifacts with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listArtifacts = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listArtifacts(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateArtifact', () => {
    it('invokes updateArtifact without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const artifact = {};
      const request = {
        artifact: artifact,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const etag = 'etag3123477';
      const url = 'url116079';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        etag: etag,
        url: url,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateArtifact = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateArtifact(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateArtifact with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const artifact = {};
      const request = {
        artifact: artifact,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateArtifact = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateArtifact(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteArtifact', () => {
    it('invokes deleteArtifact without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.artifactPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ARTIFACT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteArtifact = mockSimpleGrpcMethod(request);

      client.deleteArtifact(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteArtifact with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.artifactPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ARTIFACT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteArtifact = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteArtifact(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('sendShiftHandoff', () => {
    it('invokes sendShiftHandoff without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const recipients = [];
      const subject = 'subject-1867885268';
      const request = {
        parent: formattedParent,
        recipients: recipients,
        subject: subject,
      };

      // Mock response
      const contentType = 'contentType831846208';
      const content = 'content951530617';
      const expectedResponse = {
        contentType: contentType,
        content: content,
      };

      // Mock Grpc layer
      client._innerApiCalls.sendShiftHandoff = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.sendShiftHandoff(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes sendShiftHandoff with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const recipients = [];
      const subject = 'subject-1867885268';
      const request = {
        parent: formattedParent,
        recipients: recipients,
        subject: subject,
      };

      // Mock Grpc layer
      client._innerApiCalls.sendShiftHandoff = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.sendShiftHandoff(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createSubscription', () => {
    it('invokes createSubscription without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const subscription = {};
      const request = {
        parent: formattedParent,
        subscription: subscription,
      };

      // Mock response
      const name = 'name3373707';
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.createSubscription = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createSubscription(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createSubscription with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const subscription = {};
      const request = {
        parent: formattedParent,
        subscription: subscription,
      };

      // Mock Grpc layer
      client._innerApiCalls.createSubscription = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createSubscription(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateSubscription', () => {
    it('invokes updateSubscription without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const subscription = {};
      const request = {
        subscription: subscription,
      };

      // Mock response
      const name = 'name3373707';
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateSubscription = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateSubscription(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateSubscription with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const subscription = {};
      const request = {
        subscription: subscription,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateSubscription = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateSubscription(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listSubscriptions', () => {
    it('invokes listSubscriptions without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const subscriptionsElement = {};
      const subscriptions = [subscriptionsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        subscriptions: subscriptions,
      };

      // Mock Grpc layer
      client._innerApiCalls.listSubscriptions = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.subscriptions);
      };

      client.listSubscriptions(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.subscriptions);
        done();
      });
    });

    it('invokes listSubscriptions with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listSubscriptions = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listSubscriptions(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteSubscription', () => {
    it('invokes deleteSubscription without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.subscriptionPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[SUBSCRIPTION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteSubscription = mockSimpleGrpcMethod(request);

      client.deleteSubscription(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteSubscription with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.subscriptionPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[SUBSCRIPTION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteSubscription = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteSubscription(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createIncidentRoleAssignment', () => {
    it('invokes createIncidentRoleAssignment without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const incidentRoleAssignment = {};
      const request = {
        parent: formattedParent,
        incidentRoleAssignment: incidentRoleAssignment,
      };

      // Mock response
      const name = 'name3373707';
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.createIncidentRoleAssignment = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createIncidentRoleAssignment(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createIncidentRoleAssignment with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const incidentRoleAssignment = {};
      const request = {
        parent: formattedParent,
        incidentRoleAssignment: incidentRoleAssignment,
      };

      // Mock Grpc layer
      client._innerApiCalls.createIncidentRoleAssignment = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createIncidentRoleAssignment(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteIncidentRoleAssignment', () => {
    it('invokes deleteIncidentRoleAssignment without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.roleAssignmentPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ROLE_ASSIGNMENT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteIncidentRoleAssignment = mockSimpleGrpcMethod(
        request
      );

      client.deleteIncidentRoleAssignment(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteIncidentRoleAssignment with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.roleAssignmentPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ROLE_ASSIGNMENT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteIncidentRoleAssignment = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteIncidentRoleAssignment(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listIncidentRoleAssignments', () => {
    it('invokes listIncidentRoleAssignments without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const incidentRoleAssignmentsElement = {};
      const incidentRoleAssignments = [incidentRoleAssignmentsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        incidentRoleAssignments: incidentRoleAssignments,
      };

      // Mock Grpc layer
      client._innerApiCalls.listIncidentRoleAssignments = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.incidentRoleAssignments);
      };

      client.listIncidentRoleAssignments(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(
          response,
          expectedResponse.incidentRoleAssignments
        );
        done();
      });
    });

    it('invokes listIncidentRoleAssignments with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.incidentPath('[PROJECT]', '[INCIDENT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listIncidentRoleAssignments = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listIncidentRoleAssignments(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('requestIncidentRoleHandover', () => {
    it('invokes requestIncidentRoleHandover without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.roleAssignmentPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ROLE_ASSIGNMENT]'
      );
      const newAssignee = {};
      const request = {
        name: formattedName,
        newAssignee: newAssignee,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name2,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.requestIncidentRoleHandover = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.requestIncidentRoleHandover(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes requestIncidentRoleHandover with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.roleAssignmentPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ROLE_ASSIGNMENT]'
      );
      const newAssignee = {};
      const request = {
        name: formattedName,
        newAssignee: newAssignee,
      };

      // Mock Grpc layer
      client._innerApiCalls.requestIncidentRoleHandover = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.requestIncidentRoleHandover(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('confirmIncidentRoleHandover', () => {
    it('invokes confirmIncidentRoleHandover without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.roleAssignmentPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ROLE_ASSIGNMENT]'
      );
      const newAssignee = {};
      const request = {
        name: formattedName,
        newAssignee: newAssignee,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name2,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.confirmIncidentRoleHandover = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.confirmIncidentRoleHandover(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes confirmIncidentRoleHandover with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.roleAssignmentPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ROLE_ASSIGNMENT]'
      );
      const newAssignee = {};
      const request = {
        name: formattedName,
        newAssignee: newAssignee,
      };

      // Mock Grpc layer
      client._innerApiCalls.confirmIncidentRoleHandover = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.confirmIncidentRoleHandover(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('forceIncidentRoleHandover', () => {
    it('invokes forceIncidentRoleHandover without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.roleAssignmentPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ROLE_ASSIGNMENT]'
      );
      const newAssignee = {};
      const request = {
        name: formattedName,
        newAssignee: newAssignee,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name2,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.forceIncidentRoleHandover = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.forceIncidentRoleHandover(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes forceIncidentRoleHandover with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.roleAssignmentPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ROLE_ASSIGNMENT]'
      );
      const newAssignee = {};
      const request = {
        name: formattedName,
        newAssignee: newAssignee,
      };

      // Mock Grpc layer
      client._innerApiCalls.forceIncidentRoleHandover = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.forceIncidentRoleHandover(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('cancelIncidentRoleHandover', () => {
    it('invokes cancelIncidentRoleHandover without error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.roleAssignmentPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ROLE_ASSIGNMENT]'
      );
      const newAssignee = {};
      const request = {
        name: formattedName,
        newAssignee: newAssignee,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name2,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelIncidentRoleHandover = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.cancelIncidentRoleHandover(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes cancelIncidentRoleHandover with error', done => {
      const client = new irmModule.v1alpha2.IncidentServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.roleAssignmentPath(
        '[PROJECT]',
        '[INCIDENT]',
        '[ROLE_ASSIGNMENT]'
      );
      const newAssignee = {};
      const request = {
        name: formattedName,
        newAssignee: newAssignee,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelIncidentRoleHandover = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.cancelIncidentRoleHandover(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});

function mockSimpleGrpcMethod(expectedRequest, response, error) {
  return function(actualRequest, options, callback) {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
