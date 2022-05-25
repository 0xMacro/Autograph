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

export declare namespace IAddressBook {
  export type EntryStruct = {
    name: string;
    tipology: BigNumberish;
    entryAddress: string;
    labels: string[];
  };

  export type EntryStructOutput = [string, number, string, string[]] & {
    name: string;
    tipology: number;
    entryAddress: string;
    labels: string[];
  };
}

export interface AddressBookInterface extends utils.Interface {
  functions: {
    "addEntries(string[],uint8[],address[],string[][])": FunctionFragment;
    "addEntry(string,uint8,address,string[])": FunctionFragment;
    "deleteEntry(uint256)": FunctionFragment;
    "entries(uint256)": FunctionFragment;
    "getEntries()": FunctionFragment;
    "getEntry(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "updateEntry(uint256,string,uint8,address,string[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addEntries"
      | "addEntry"
      | "deleteEntry"
      | "entries"
      | "getEntries"
      | "getEntry"
      | "owner"
      | "updateEntry"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addEntries",
    values: [string[], BigNumberish[], string[], string[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "addEntry",
    values: [string, BigNumberish, string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteEntry",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "entries",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEntries",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntry",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateEntry",
    values: [BigNumberish, string, BigNumberish, string, string[]]
  ): string;

  decodeFunctionResult(functionFragment: "addEntries", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addEntry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deleteEntry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "entries", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getEntries", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getEntry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateEntry",
    data: BytesLike
  ): Result;

  events: {
    "EntryAdded(address,uint256,tuple)": EventFragment;
    "EntryDeleted(address,uint256,tuple)": EventFragment;
    "EntryUpdated(address,uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EntryAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EntryDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EntryUpdated"): EventFragment;
}

export interface EntryAddedEventObject {
  addressBook: string;
  index: BigNumber;
  entry: IAddressBook.EntryStructOutput;
}
export type EntryAddedEvent = TypedEvent<
  [string, BigNumber, IAddressBook.EntryStructOutput],
  EntryAddedEventObject
>;

export type EntryAddedEventFilter = TypedEventFilter<EntryAddedEvent>;

export interface EntryDeletedEventObject {
  addressBook: string;
  index: BigNumber;
  entry: IAddressBook.EntryStructOutput;
}
export type EntryDeletedEvent = TypedEvent<
  [string, BigNumber, IAddressBook.EntryStructOutput],
  EntryDeletedEventObject
>;

export type EntryDeletedEventFilter = TypedEventFilter<EntryDeletedEvent>;

export interface EntryUpdatedEventObject {
  addressBook: string;
  index: BigNumber;
  entry: IAddressBook.EntryStructOutput;
}
export type EntryUpdatedEvent = TypedEvent<
  [string, BigNumber, IAddressBook.EntryStructOutput],
  EntryUpdatedEventObject
>;

export type EntryUpdatedEventFilter = TypedEventFilter<EntryUpdatedEvent>;

export interface AddressBook extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AddressBookInterface;

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
    addEntries(
      names: string[],
      tipologies: BigNumberish[],
      entryAddresses: string[],
      labels: string[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addEntry(
      name: string,
      tipology: BigNumberish,
      entryAddress: string,
      labels: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteEntry(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    entries(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, number, string] & {
        name: string;
        tipology: number;
        entryAddress: string;
      }
    >;

    getEntries(
      overrides?: CallOverrides
    ): Promise<[IAddressBook.EntryStructOutput[]]>;

    getEntry(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[IAddressBook.EntryStructOutput]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    updateEntry(
      index: BigNumberish,
      name: string,
      tipology: BigNumberish,
      entryAddress: string,
      labels: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addEntries(
    names: string[],
    tipologies: BigNumberish[],
    entryAddresses: string[],
    labels: string[][],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addEntry(
    name: string,
    tipology: BigNumberish,
    entryAddress: string,
    labels: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteEntry(
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  entries(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, number, string] & {
      name: string;
      tipology: number;
      entryAddress: string;
    }
  >;

  getEntries(
    overrides?: CallOverrides
  ): Promise<IAddressBook.EntryStructOutput[]>;

  getEntry(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IAddressBook.EntryStructOutput>;

  owner(overrides?: CallOverrides): Promise<string>;

  updateEntry(
    index: BigNumberish,
    name: string,
    tipology: BigNumberish,
    entryAddress: string,
    labels: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addEntries(
      names: string[],
      tipologies: BigNumberish[],
      entryAddresses: string[],
      labels: string[][],
      overrides?: CallOverrides
    ): Promise<IAddressBook.EntryStructOutput[]>;

    addEntry(
      name: string,
      tipology: BigNumberish,
      entryAddress: string,
      labels: string[],
      overrides?: CallOverrides
    ): Promise<IAddressBook.EntryStructOutput>;

    deleteEntry(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IAddressBook.EntryStructOutput>;

    entries(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, number, string] & {
        name: string;
        tipology: number;
        entryAddress: string;
      }
    >;

    getEntries(
      overrides?: CallOverrides
    ): Promise<IAddressBook.EntryStructOutput[]>;

    getEntry(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IAddressBook.EntryStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    updateEntry(
      index: BigNumberish,
      name: string,
      tipology: BigNumberish,
      entryAddress: string,
      labels: string[],
      overrides?: CallOverrides
    ): Promise<IAddressBook.EntryStructOutput>;
  };

  filters: {
    "EntryAdded(address,uint256,tuple)"(
      addressBook?: string | null,
      index?: BigNumberish | null,
      entry?: null
    ): EntryAddedEventFilter;
    EntryAdded(
      addressBook?: string | null,
      index?: BigNumberish | null,
      entry?: null
    ): EntryAddedEventFilter;

    "EntryDeleted(address,uint256,tuple)"(
      addressBook?: string | null,
      index?: BigNumberish | null,
      entry?: null
    ): EntryDeletedEventFilter;
    EntryDeleted(
      addressBook?: string | null,
      index?: BigNumberish | null,
      entry?: null
    ): EntryDeletedEventFilter;

    "EntryUpdated(address,uint256,tuple)"(
      addressBook?: string | null,
      index?: BigNumberish | null,
      entry?: null
    ): EntryUpdatedEventFilter;
    EntryUpdated(
      addressBook?: string | null,
      index?: BigNumberish | null,
      entry?: null
    ): EntryUpdatedEventFilter;
  };

  estimateGas: {
    addEntries(
      names: string[],
      tipologies: BigNumberish[],
      entryAddresses: string[],
      labels: string[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addEntry(
      name: string,
      tipology: BigNumberish,
      entryAddress: string,
      labels: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteEntry(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    entries(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getEntries(overrides?: CallOverrides): Promise<BigNumber>;

    getEntry(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    updateEntry(
      index: BigNumberish,
      name: string,
      tipology: BigNumberish,
      entryAddress: string,
      labels: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addEntries(
      names: string[],
      tipologies: BigNumberish[],
      entryAddresses: string[],
      labels: string[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addEntry(
      name: string,
      tipology: BigNumberish,
      entryAddress: string,
      labels: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteEntry(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    entries(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEntries(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEntry(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateEntry(
      index: BigNumberish,
      name: string,
      tipology: BigNumberish,
      entryAddress: string,
      labels: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}