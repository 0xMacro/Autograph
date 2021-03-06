/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Subscriptions, SubscriptionsInterface } from "../Subscriptions";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "OutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "SubscriptionNotFound",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "book",
        type: "address",
      },
    ],
    name: "Subscribed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "book",
        type: "address",
      },
    ],
    name: "Unsubscribed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "book",
        type: "address",
      },
    ],
    name: "_indexOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getSubscriptions",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "book",
        type: "address",
      },
    ],
    name: "subscribe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "subscriptions",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "book",
        type: "address",
      },
    ],
    name: "unsubscribe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610726806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80635e709f98116100505780635e709f98146100aa578063623da3d1146100d25780637262561c1461010a57600080fd5b806341a7726a1461006c5780635d6a441314610081575b600080fd5b61007f61007a36600461059d565b61011d565b005b61009461008f36600461059d565b6101f1565b6040516100a191906105bf565b60405180910390f35b6100bd6100b836600461059d565b61027f565b604080519283529015156020830152016100a1565b6100e56100e0366004610619565b610325565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a1565b61007f61011836600461059d565b61036a565b60006101288261027f565b9150508015610163576040517f1a00354f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b33600081815260208181526040808320805460018101825590845291832090910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff871690811790915590519092917f5af76814d21ef4a656d75bdbdb9cc3efa85af5efca9dbca0397824217d9344b791a35050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081815260409182902080548351818402810184019094528084526060939283018282801561027357602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610248575b50505050509050919050565b60008060005b3360009081526020819052604090205481101561031957336000908152602081905260409020805473ffffffffffffffffffffffffffffffffffffffff86169190839081106102d6576102d6610643565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1603610307579360019350915050565b80610311816106a1565b915050610285565b50600093849350915050565b6000602052816000526040600020818154811061034157600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b6000806103768361027f565b91509150806103b1576040517f1a00354f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ba82610402565b60405173ffffffffffffffffffffffffffffffffffffffff84169033907f7773c30acd0762ed6b4b92a9aa2c6b3c074e29ad93b334cbed8ba807c596f13a90600090a3505050565b33600090815260208190526040902054811061044a576040517fb4120f1400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b33600090815260208190526040812054610466906001906106d9565b905080821461051e5733600090815260208190526040902080548290811061049057610490610643565b6000918252602080832090910154338352908290526040909120805473ffffffffffffffffffffffffffffffffffffffff90921691849081106104d5576104d5610643565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b33600090815260208190526040902080548290811061053f5761053f610643565b600091825260209091200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461059857600080fd5b919050565b6000602082840312156105af57600080fd5b6105b882610574565b9392505050565b6020808252825182820181905260009190848201906040850190845b8181101561060d57835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016105db565b50909695505050505050565b6000806040838503121561062c57600080fd5b61063583610574565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036106d2576106d2610672565b5060010190565b6000828210156106eb576106eb610672565b50039056fea2646970667358221220142c8dbfa3d80ba8f49b462a9f72f2a18276be87debbba0c555dcfdbfd74354664736f6c634300080d0033";

type SubscriptionsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubscriptionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Subscriptions__factory extends ContractFactory {
  constructor(...args: SubscriptionsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Subscriptions> {
    return super.deploy(overrides || {}) as Promise<Subscriptions>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Subscriptions {
    return super.attach(address) as Subscriptions;
  }
  override connect(signer: Signer): Subscriptions__factory {
    return super.connect(signer) as Subscriptions__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubscriptionsInterface {
    return new utils.Interface(_abi) as SubscriptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Subscriptions {
    return new Contract(address, _abi, signerOrProvider) as Subscriptions;
  }
}
