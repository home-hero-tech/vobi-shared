// package: 
// file: generic.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AddToRefurbishRequest extends jspb.Message { 
    getIdCompany(): number;
    setIdCompany(value: number): AddToRefurbishRequest;
    getIdRefurbish(): number;
    setIdRefurbish(value: number): AddToRefurbishRequest;
    getIdParentLevel(): number;
    setIdParentLevel(value: number): AddToRefurbishRequest;
    getExternalBaseCode(): string;
    setExternalBaseCode(value: string): AddToRefurbishRequest;
    getIdParent(): number;
    setIdParent(value: number): AddToRefurbishRequest;
    getLinkId(): number;
    setLinkId(value: number): AddToRefurbishRequest;
    getQuantityParent(): number;
    setQuantityParent(value: number): AddToRefurbishRequest;
    getFixedBdi(): number;
    setFixedBdi(value: number): AddToRefurbishRequest;
    getIsTemplate(): boolean;
    setIsTemplate(value: boolean): AddToRefurbishRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddToRefurbishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddToRefurbishRequest): AddToRefurbishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddToRefurbishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddToRefurbishRequest;
    static deserializeBinaryFromReader(message: AddToRefurbishRequest, reader: jspb.BinaryReader): AddToRefurbishRequest;
}

export namespace AddToRefurbishRequest {
    export type AsObject = {
        idCompany: number,
        idRefurbish: number,
        idParentLevel: number,
        externalBaseCode: string,
        idParent: number,
        linkId: number,
        quantityParent: number,
        fixedBdi: number,
        isTemplate: boolean,
    }
}

export class AddToLibraryRequest extends jspb.Message { 
    getIdCompany(): number;
    setIdCompany(value: number): AddToLibraryRequest;
    getExternalBaseCode(): string;
    setExternalBaseCode(value: string): AddToLibraryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddToLibraryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddToLibraryRequest): AddToLibraryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddToLibraryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddToLibraryRequest;
    static deserializeBinaryFromReader(message: AddToLibraryRequest, reader: jspb.BinaryReader): AddToLibraryRequest;
}

export namespace AddToLibraryRequest {
    export type AsObject = {
        idCompany: number,
        externalBaseCode: string,
    }
}

export class Void extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Void.AsObject;
    static toObject(includeInstance: boolean, msg: Void): Void.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Void, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Void;
    static deserializeBinaryFromReader(message: Void, reader: jspb.BinaryReader): Void;
}

export namespace Void {
    export type AsObject = {
    }
}
