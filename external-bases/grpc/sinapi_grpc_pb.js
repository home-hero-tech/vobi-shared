// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sinapi_pb = require('./sinapi_pb.js');
var generic_pb = require('./generic_pb.js');

function serialize_GetAllRequest(arg) {
  if (!(arg instanceof sinapi_pb.GetAllRequest)) {
    throw new Error('Expected argument of type GetAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetAllRequest(buffer_arg) {
  return sinapi_pb.GetAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetAllResponse(arg) {
  if (!(arg instanceof sinapi_pb.GetAllResponse)) {
    throw new Error('Expected argument of type GetAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetAllResponse(buffer_arg) {
  return sinapi_pb.GetAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetSinapiMonthsAvailableResponse(arg) {
  if (!(arg instanceof sinapi_pb.GetSinapiMonthsAvailableResponse)) {
    throw new Error('Expected argument of type GetSinapiMonthsAvailableResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetSinapiMonthsAvailableResponse(buffer_arg) {
  return sinapi_pb.GetSinapiMonthsAvailableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Void(arg) {
  if (!(arg instanceof generic_pb.Void)) {
    throw new Error('Expected argument of type Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Void(buffer_arg) {
  return generic_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var SinapiService = exports.SinapiService = {
  getAll: {
    path: '/Sinapi/getAll',
    requestStream: false,
    responseStream: false,
    requestType: sinapi_pb.GetAllRequest,
    responseType: sinapi_pb.GetAllResponse,
    requestSerialize: serialize_GetAllRequest,
    requestDeserialize: deserialize_GetAllRequest,
    responseSerialize: serialize_GetAllResponse,
    responseDeserialize: deserialize_GetAllResponse,
  },
  getMonthsAvailable: {
    path: '/Sinapi/getMonthsAvailable',
    requestStream: false,
    responseStream: false,
    requestType: generic_pb.Void,
    responseType: sinapi_pb.GetSinapiMonthsAvailableResponse,
    requestSerialize: serialize_Void,
    requestDeserialize: deserialize_Void,
    responseSerialize: serialize_GetSinapiMonthsAvailableResponse,
    responseDeserialize: deserialize_GetSinapiMonthsAvailableResponse,
  },
};

exports.SinapiClient = grpc.makeGenericClientConstructor(SinapiService);
