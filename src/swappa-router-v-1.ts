import { BigInt } from "@graphprotocol/graph-ts"
import {
  SwappaRouterV1,
  FeeChanged,
  OwnershipTransferred,
  Swap 
} from "../generated/SwappaRouterV1/SwappaRouterV1"
import { ExampleEntity, SwapEntity } from "../generated/schema"

export function handleFeeChanged(event: FeeChanged): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.partnerId = event.params.partnerId
  entity.initiator = event.params.initiator

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.FEE_DENOMINATOR(...)
  // - contract.defaultAdminFee(...)
  // - contract.owner(...)
  // - contract.getOutputAmount(...)
  // - contract.swapExactInputForOutput(...)
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleSwap(event: Swap): void {
  let swapentity = SwapEntity.load(event.transaction.from.toHex())

  if (!swapentity){
    swapentity = new SwapEntity(event.transaction.from.toHex())
  } 

  // QUESTION: WHY ISNT THE GRAPH UPDATING IN WEBSITE ?? 
  swapentity.id = "hello" // REMOVE THIS 
  // swapentity.sender = (event.params.sender).toHexString()
  // swapentity.input =  (event.params.input).toHexString()
  // swapentity.output = (event.params.output).toHexString()
  // swapentity.inputAmount =  event.params.inputAmount
  // swapentity.outputAmount =  event.params.outputAmount
  swapentity.save()



}
