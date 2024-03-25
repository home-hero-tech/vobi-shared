// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var generic_pb = require('./generic_pb.js');

function serialize_AddToLibraryRequest(arg) {
  if (!(arg instanceof generic_pb.AddToLibraryRequest)) {
    throw new Error('Expected argument of type AddToLibraryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddToLibraryRequest(buffer_arg) {
  return generic_pb.AddToLibraryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AddToRefurbishRequest(arg) {
  if (!(arg instanceof generic_pb.AddToRefurbishRequest)) {
    throw new Error('Expected argument of type AddToRefurbishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddToRefurbishRequest(buffer_arg) {
  return generic_pb.AddToRefurbishRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var GenericService = exports.GenericService = {
  addToRefurbish: {
    path: '/Generic/addToRefurbish',
    requestStream: false,
    responseStream: false,
    requestType: generic_pb.AddToRefurbishRequest,
    responseType: generic_pb.Void,
    requestSerialize: serialize_AddToRefurbishRequest,
    requestDeserialize: deserialize_AddToRefurbishRequest,
    responseSerialize: serialize_Void,
    responseDeserialize: deserialize_Void,
  },
  addToLibrary: {
    path: '/Generic/addToLibrary',
    requestStream: false,
    responseStream: false,
    requestType: generic_pb.AddToLibraryRequest,
    responseType: generic_pb.Void,
    requestSerialize: serialize_AddToLibraryRequest,
    requestDeserialize: deserialize_AddToLibraryRequest,
    responseSerialize: serialize_Void,
    responseDeserialize: deserialize_Void,
  },
};

exports.GenericClient = grpc.makeGenericClientConstructor(GenericService);
