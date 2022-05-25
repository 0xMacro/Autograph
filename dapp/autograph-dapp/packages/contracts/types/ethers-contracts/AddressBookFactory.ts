/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface AddressBookFactoryInterface extends utils.Interface {
  functions: {
    "createAddressBook()": FunctionFragment;
    "getAddressBook(address,uint256)": FunctionFragment;
    "parameters()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createAddressBook"
      | "getAddressBook"
      | "parameters"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createAddressBook",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAddressBook",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "parameters",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createAddressBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAddressBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;

  events: {
    "AddressBookCreated(address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddressBookCreated"): EventFragment;
}

export interface AddressBookCreatedEventObject {
  owner: string;
  index: BigNumber;
  book: string;
}
export type AddressBookCreatedEvent = TypedEvent<
  [string, BigNumber, string],
  AddressBookCreatedEventObject
>;

export type AddressBookCreatedEventFilter =
  TypedEventFilter<AddressBookCreatedEvent>;

export interface AddressBookFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AddressBookFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createAddressBook(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAddressBook(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    parameters(
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;
  };

  createAddressBook(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAddressBook(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  parameters(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createAddressBook(overrides?: CallOverrides): Promise<string>;

    getAddressBook(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    parameters(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AddressBookCreated(address,uint256,address)"(
      owner?: string | null,
      index?: BigNumberish | null,
      book?: null
    ): AddressBookCreatedEventFilter;
    AddressBookCreated(
      owner?: string | null,
      index?: BigNumberish | null,
      book?: null
    ): AddressBookCreatedEventFilter;
  };

  estimateGas: {
    createAddressBook(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAddressBook(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parameters(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createAddressBook(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAddressBook(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
