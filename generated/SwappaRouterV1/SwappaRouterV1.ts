// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FeeChanged extends ethereum.Event {
  get params(): FeeChanged__Params {
    return new FeeChanged__Params(this);
  }
}

export class FeeChanged__Params {
  _event: FeeChanged;

  constructor(event: FeeChanged) {
    this._event = event;
  }

  get partnerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get initiator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get isAdminFee(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get oldFee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get newFee(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get input(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get output(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get inputAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get outputAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class SwappaRouterV1__swapExactInputForOutputInputDetailsStruct extends ethereum.Tuple {
  get path(): Array<Address> {
    return this[0].toAddressArray();
  }

  get pairs(): Array<Address> {
    return this[1].toAddressArray();
  }

  get extras(): Array<Bytes> {
    return this[2].toBytesArray();
  }

  get inputAmount(): BigInt {
    return this[3].toBigInt();
  }

  get minOutputAmount(): BigInt {
    return this[4].toBigInt();
  }

  get expectedOutputAmount(): BigInt {
    return this[5].toBigInt();
  }

  get to(): Address {
    return this[6].toAddress();
  }

  get deadline(): BigInt {
    return this[7].toBigInt();
  }

  get partner(): BigInt {
    return this[8].toBigInt();
  }

  get sig(): Bytes {
    return this[9].toBytes();
  }
}

export class SwappaRouterV1 extends ethereum.SmartContract {
  static bind(address: Address): SwappaRouterV1 {
    return new SwappaRouterV1("SwappaRouterV1", address);
  }

  FEE_DENOMINATOR(): BigInt {
    let result = super.call(
      "FEE_DENOMINATOR",
      "FEE_DENOMINATOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_FEE_DENOMINATOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "FEE_DENOMINATOR",
      "FEE_DENOMINATOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  defaultAdminFee(): BigInt {
    let result = super.call(
      "defaultAdminFee",
      "defaultAdminFee():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_defaultAdminFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "defaultAdminFee",
      "defaultAdminFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getOutputAmount(
    path: Array<Address>,
    pairs: Array<Address>,
    extras: Array<Bytes>,
    inputAmount: BigInt
  ): BigInt {
    let result = super.call(
      "getOutputAmount",
      "getOutputAmount(address[],address[],bytes[],uint256):(uint256)",
      [
        ethereum.Value.fromAddressArray(path),
        ethereum.Value.fromAddressArray(pairs),
        ethereum.Value.fromBytesArray(extras),
        ethereum.Value.fromUnsignedBigInt(inputAmount)
      ]
    );

    return result[0].toBigInt();
  }

  try_getOutputAmount(
    path: Array<Address>,
    pairs: Array<Address>,
    extras: Array<Bytes>,
    inputAmount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getOutputAmount",
      "getOutputAmount(address[],address[],bytes[],uint256):(uint256)",
      [
        ethereum.Value.fromAddressArray(path),
        ethereum.Value.fromAddressArray(pairs),
        ethereum.Value.fromBytesArray(extras),
        ethereum.Value.fromUnsignedBigInt(inputAmount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swapExactInputForOutput(
    details: SwappaRouterV1__swapExactInputForOutputInputDetailsStruct
  ): BigInt {
    let result = super.call(
      "swapExactInputForOutput",
      "swapExactInputForOutput((address[],address[],bytes[],uint256,uint256,uint256,address,uint256,uint256,bytes)):(uint256)",
      [ethereum.Value.fromTuple(details)]
    );

    return result[0].toBigInt();
  }

  try_swapExactInputForOutput(
    details: SwappaRouterV1__swapExactInputForOutputInputDetailsStruct
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "swapExactInputForOutput",
      "swapExactInputForOutput((address[],address[],bytes[],uint256,uint256,uint256,address,uint256,uint256,bytes)):(uint256)",
      [ethereum.Value.fromTuple(details)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class RecoverAdminFeeCall extends ethereum.Call {
  get inputs(): RecoverAdminFeeCall__Inputs {
    return new RecoverAdminFeeCall__Inputs(this);
  }

  get outputs(): RecoverAdminFeeCall__Outputs {
    return new RecoverAdminFeeCall__Outputs(this);
  }
}

export class RecoverAdminFeeCall__Inputs {
  _call: RecoverAdminFeeCall;

  constructor(call: RecoverAdminFeeCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get reciever(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RecoverAdminFeeCall__Outputs {
  _call: RecoverAdminFeeCall;

  constructor(call: RecoverAdminFeeCall) {
    this._call = call;
  }
}

export class SetAdminCall extends ethereum.Call {
  get inputs(): SetAdminCall__Inputs {
    return new SetAdminCall__Inputs(this);
  }

  get outputs(): SetAdminCall__Outputs {
    return new SetAdminCall__Outputs(this);
  }
}

export class SetAdminCall__Inputs {
  _call: SetAdminCall;

  constructor(call: SetAdminCall) {
    this._call = call;
  }

  get addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get isAdmin(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetAdminCall__Outputs {
  _call: SetAdminCall;

  constructor(call: SetAdminCall) {
    this._call = call;
  }
}

export class SetPartnerAdminCall extends ethereum.Call {
  get inputs(): SetPartnerAdminCall__Inputs {
    return new SetPartnerAdminCall__Inputs(this);
  }

  get outputs(): SetPartnerAdminCall__Outputs {
    return new SetPartnerAdminCall__Outputs(this);
  }
}

export class SetPartnerAdminCall__Inputs {
  _call: SetPartnerAdminCall;

  constructor(call: SetPartnerAdminCall) {
    this._call = call;
  }

  get partnerId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get admin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetPartnerAdminCall__Outputs {
  _call: SetPartnerAdminCall;

  constructor(call: SetPartnerAdminCall) {
    this._call = call;
  }
}

export class SetPartnerFeeCall extends ethereum.Call {
  get inputs(): SetPartnerFeeCall__Inputs {
    return new SetPartnerFeeCall__Inputs(this);
  }

  get outputs(): SetPartnerFeeCall__Outputs {
    return new SetPartnerFeeCall__Outputs(this);
  }
}

export class SetPartnerFeeCall__Inputs {
  _call: SetPartnerFeeCall;

  constructor(call: SetPartnerFeeCall) {
    this._call = call;
  }

  get partnerId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get feeNumerator(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetPartnerFeeCall__Outputs {
  _call: SetPartnerFeeCall;

  constructor(call: SetPartnerFeeCall) {
    this._call = call;
  }
}

export class SetAdminFeeCall extends ethereum.Call {
  get inputs(): SetAdminFeeCall__Inputs {
    return new SetAdminFeeCall__Inputs(this);
  }

  get outputs(): SetAdminFeeCall__Outputs {
    return new SetAdminFeeCall__Outputs(this);
  }
}

export class SetAdminFeeCall__Inputs {
  _call: SetAdminFeeCall;

  constructor(call: SetAdminFeeCall) {
    this._call = call;
  }

  get partnerId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get feeNumerator(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetAdminFeeCall__Outputs {
  _call: SetAdminFeeCall;

  constructor(call: SetAdminFeeCall) {
    this._call = call;
  }
}

export class SwapExactInputForOutputCall extends ethereum.Call {
  get inputs(): SwapExactInputForOutputCall__Inputs {
    return new SwapExactInputForOutputCall__Inputs(this);
  }

  get outputs(): SwapExactInputForOutputCall__Outputs {
    return new SwapExactInputForOutputCall__Outputs(this);
  }
}

export class SwapExactInputForOutputCall__Inputs {
  _call: SwapExactInputForOutputCall;

  constructor(call: SwapExactInputForOutputCall) {
    this._call = call;
  }

  get details(): SwapExactInputForOutputCallDetailsStruct {
    return changetype<SwapExactInputForOutputCallDetailsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class SwapExactInputForOutputCall__Outputs {
  _call: SwapExactInputForOutputCall;

  constructor(call: SwapExactInputForOutputCall) {
    this._call = call;
  }

  get outputAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SwapExactInputForOutputCallDetailsStruct extends ethereum.Tuple {
  get path(): Array<Address> {
    return this[0].toAddressArray();
  }

  get pairs(): Array<Address> {
    return this[1].toAddressArray();
  }

  get extras(): Array<Bytes> {
    return this[2].toBytesArray();
  }

  get inputAmount(): BigInt {
    return this[3].toBigInt();
  }

  get minOutputAmount(): BigInt {
    return this[4].toBigInt();
  }

  get expectedOutputAmount(): BigInt {
    return this[5].toBigInt();
  }

  get to(): Address {
    return this[6].toAddress();
  }

  get deadline(): BigInt {
    return this[7].toBigInt();
  }

  get partner(): BigInt {
    return this[8].toBigInt();
  }

  get sig(): Bytes {
    return this[9].toBytes();
  }
}