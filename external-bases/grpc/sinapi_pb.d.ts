// package: 
// file: sinapi.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as generic_pb from "./generic_pb";

export class GetAllRequest extends jspb.Message { 
    getState(): string;
    setState(value: string): GetAllRequest;
    getMonthReference(): string;
    setMonthReference(value: string): GetAllRequest;
    getSocialCharges(): string;
    setSocialCharges(value: string): GetAllRequest;
    getNameOrCode(): string;
    setNameOrCode(value: string): GetAllRequest;
    getType(): number;
    setType(value: number): GetAllRequest;
    getLimit(): number;
    setLimit(value: number): GetAllRequest;
    getOffset(): number;
    setOffset(value: number): GetAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllRequest): GetAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllRequest;
    static deserializeBinaryFromReader(message: GetAllRequest, reader: jspb.BinaryReader): GetAllRequest;
}

export namespace GetAllRequest {
    export type AsObject = {
        state: string,
        monthReference: string,
        socialCharges: string,
        nameOrCode: string,
        type: number,
        limit: number,
        offset: number,
    }
}

export class VobiUnits extends jspb.Message { 
    getId(): number;
    setId(value: number): VobiUnits;
    getName(): string;
    setName(value: string): VobiUnits;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VobiUnits.AsObject;
    static toObject(includeInstance: boolean, msg: VobiUnits): VobiUnits.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VobiUnits, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VobiUnits;
    static deserializeBinaryFromReader(message: VobiUnits, reader: jspb.BinaryReader): VobiUnits;
}

export namespace VobiUnits {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class SinapiItem extends jspb.Message { 
    getCode(): string;
    setCode(value: string): SinapiItem;
    getName(): string;
    setName(value: string): SinapiItem;
    getUnit(): string;
    setUnit(value: string): SinapiItem;
    getIdUnit(): number;
    setIdUnit(value: number): SinapiItem;
    getState(): string;
    setState(value: string): SinapiItem;
    getPrice(): number;
    setPrice(value: number): SinapiItem;
    getImage(): string;
    setImage(value: string): SinapiItem;
    getMonthReference(): string;
    setMonthReference(value: string): SinapiItem;
    getSocialCharges(): string;
    setSocialCharges(value: string): SinapiItem;
    getType(): number;
    setType(value: number): SinapiItem;
    getTypeText(): string;
    setTypeText(value: string): SinapiItem;
    getExternalBaseCode(): string;
    setExternalBaseCode(value: string): SinapiItem;

    hasUnits(): boolean;
    clearUnits(): void;
    getUnits(): VobiUnits | undefined;
    setUnits(value?: VobiUnits): SinapiItem;
    getOriginPrice(): string;
    setOriginPrice(value: string): SinapiItem;
    getSubtype(): string;
    setSubtype(value: string): SinapiItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SinapiItem.AsObject;
    static toObject(includeInstance: boolean, msg: SinapiItem): SinapiItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SinapiItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SinapiItem;
    static deserializeBinaryFromReader(message: SinapiItem, reader: jspb.BinaryReader): SinapiItem;
}

export namespace SinapiItem {
    export type AsObject = {
        code: string,
        name: string,
        unit: string,
        idUnit: number,
        state: string,
        price: number,
        image: string,
        monthReference: string,
        socialCharges: string,
        type: number,
        typeText: string,
        externalBaseCode: string,
        units?: VobiUnits.AsObject,
        originPrice: string,
        subtype: string,
    }
}

export class GetAllResponse extends jspb.Message { 
    getCount(): number;
    setCount(value: number): GetAllResponse;
    clearItemsList(): void;
    getItemsList(): Array<SinapiItem>;
    setItemsList(value: Array<SinapiItem>): GetAllResponse;
    addItems(value?: SinapiItem, index?: number): SinapiItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllResponse): GetAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllResponse;
    static deserializeBinaryFromReader(message: GetAllResponse, reader: jspb.BinaryReader): GetAllResponse;
}

export namespace GetAllResponse {
    export type AsObject = {
        count: number,
        itemsList: Array<SinapiItem.AsObject>,
    }
}

export class GetSinapiMonthsAvailableResponse extends jspb.Message { 
    getCount(): number;
    setCount(value: number): GetSinapiMonthsAvailableResponse;
    clearItemsList(): void;
    getItemsList(): Array<string>;
    setItemsList(value: Array<string>): GetSinapiMonthsAvailableResponse;
    addItems(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSinapiMonthsAvailableResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSinapiMonthsAvailableResponse): GetSinapiMonthsAvailableResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSinapiMonthsAvailableResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSinapiMonthsAvailableResponse;
    static deserializeBinaryFromReader(message: GetSinapiMonthsAvailableResponse, reader: jspb.BinaryReader): GetSinapiMonthsAvailableResponse;
}

export namespace GetSinapiMonthsAvailableResponse {
    export type AsObject = {
        count: number,
        itemsList: Array<string>,
    }
}
