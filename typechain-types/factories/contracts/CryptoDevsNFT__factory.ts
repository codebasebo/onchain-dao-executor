/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CryptoDevsNFT,
  CryptoDevsNFTInterface,
} from "../../contracts/CryptoDevsNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxNfts",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_NFTS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620037553803806200375583398181016040528101906200003791906200029b565b6040518060400160405280600b81526020017f43727970746f20446576730000000000000000000000000000000000000000008152506040518060400160405280600581526020017f43444e46540000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb929190620001d4565b508060019080519060200190620000d4929190620001d4565b505050620000f7620000eb6200010660201b60201c565b6200010e60201b60201c565b80608081815250505062000350565b600033905090565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001e290620002d1565b90600052602060002090601f01602090048101928262000206576000855562000252565b82601f106200022157805160ff191683800117855562000252565b8280016001018555821562000252579182015b828111156200025157825182559160200191906001019062000234565b5b50905062000261919062000265565b5090565b5b808211156200028057600081600090555060010162000266565b5090565b600081519050620002958162000336565b92915050565b600060208284031215620002ae57600080fd5b6000620002be8482850162000284565b91505092915050565b6000819050919050565b60006002820490506001821680620002ea57607f821691505b6020821081141562000301576200030062000307565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6200034181620002c7565b81146200034d57600080fd5b50565b6080516133e26200037360003960008181610562015261086701526133e26000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80635b70ea9f116100b857806395d89b411161007c57806395d89b411461033c578063a22cb4651461035a578063b88d4fde14610376578063c87b56dd14610392578063e985e9c5146103c2578063f2fde38b146103f257610137565b80635b70ea9f146102aa5780636352211e146102b457806370a08231146102e4578063715018a6146103145780638da5cb5b1461031e57610137565b806318160ddd116100ff57806318160ddd146101f457806323b872dd146102125780632f745c591461022e57806342842e0e1461025e5780634f6ccce71461027a57610137565b806301ffc9a71461013c57806306fdde031461016c578063081812fc1461018a578063093d8c64146101ba578063095ea7b3146101d8575b600080fd5b61015660048036038101906101519190612587565b61040e565b60405161016391906129b0565b60405180910390f35b610174610488565b60405161018191906129cb565b60405180910390f35b6101a4600480360381019061019f91906125d9565b61051a565b6040516101b19190612949565b60405180910390f35b6101c2610560565b6040516101cf9190612c0d565b60405180910390f35b6101f260048036038101906101ed919061254b565b610584565b005b6101fc61069c565b6040516102099190612c0d565b60405180910390f35b61022c60048036038101906102279190612445565b6106a9565b005b6102486004803603810190610243919061254b565b610709565b6040516102559190612c0d565b60405180910390f35b61027860048036038101906102739190612445565b6107ae565b005b610294600480360381019061028f91906125d9565b6107ce565b6040516102a19190612c0d565b60405180910390f35b6102b2610865565b005b6102ce60048036038101906102c991906125d9565b6108ef565b6040516102db9190612949565b60405180910390f35b6102fe60048036038101906102f991906123e0565b610976565b60405161030b9190612c0d565b60405180910390f35b61031c610a2e565b005b610326610a42565b6040516103339190612949565b60405180910390f35b610344610a6c565b60405161035191906129cb565b60405180910390f35b610374600480360381019061036f919061250f565b610afe565b005b610390600480360381019061038b9190612494565b610b14565b005b6103ac60048036038101906103a791906125d9565b610b76565b6040516103b991906129cb565b60405180910390f35b6103dc60048036038101906103d79190612409565b610bde565b6040516103e991906129b0565b60405180910390f35b61040c600480360381019061040791906123e0565b610c72565b005b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610481575061048082610cf6565b5b9050919050565b60606000805461049790612dab565b80601f01602080910402602001604051908101604052809291908181526020018280546104c390612dab565b80156105105780601f106104e557610100808354040283529160200191610510565b820191906000526020600020905b8154815290600101906020018083116104f357829003601f168201915b5050505050905090565b600061052582610dd8565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061058f826108ef565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610600576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f790612b6d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661061f610e23565b73ffffffffffffffffffffffffffffffffffffffff16148061064e575061064d81610648610e23565b610bde565b5b61068d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068490612b8d565b60405180910390fd5b6106978383610e2b565b505050565b6000600880549050905090565b6106ba6106b4610e23565b82610ee4565b6106f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f0906129ed565b60405180910390fd5b610704838383610f79565b505050565b600061071483610976565b8210610755576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074c90612a0d565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b6107c983838360405180602001604052806000815250610b14565b505050565b60006107d861069c565b8210610819576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081090612bad565b60405180910390fd5b60088281548110610853577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b7f0000000000000000000000000000000000000000000000000000000000000000600b54106108c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c090612bed565b60405180910390fd5b600b60008154809291906108dc90612e0e565b91905055506108ed33600b54611273565b565b6000806108fb83611291565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561096d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096490612b4d565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109de90612aed565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a366112ce565b610a40600061134c565b565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610a7b90612dab565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa790612dab565b8015610af45780601f10610ac957610100808354040283529160200191610af4565b820191906000526020600020905b815481529060010190602001808311610ad757829003601f168201915b5050505050905090565b610b10610b09610e23565b8383611412565b5050565b610b25610b1f610e23565b83610ee4565b610b64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5b906129ed565b60405180910390fd5b610b708484848461157f565b50505050565b6060610b8182610dd8565b6000610b8b6115db565b90506000815111610bab5760405180602001604052806000815250610bd6565b80610bb5846115f2565b604051602001610bc6929190612925565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610c7a6112ce565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce190612a4d565b60405180910390fd5b610cf38161134c565b50565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610dc157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610dd15750610dd082611716565b5b9050919050565b610de181611780565b610e20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1790612b4d565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610e9e836108ef565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610ef0836108ef565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610f325750610f318185610bde565b5b80610f7057508373ffffffffffffffffffffffffffffffffffffffff16610f588461051a565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610f99826108ef565b73ffffffffffffffffffffffffffffffffffffffff1614610fef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe690612a6d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561105f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105690612aad565b60405180910390fd5b61106c83838360016117c1565b8273ffffffffffffffffffffffffffffffffffffffff1661108c826108ef565b73ffffffffffffffffffffffffffffffffffffffff16146110e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d990612a6d565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461126e8383836001611921565b505050565b61128d828260405180602001604052806000815250611927565b5050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6112d6610e23565b73ffffffffffffffffffffffffffffffffffffffff166112f4610a42565b73ffffffffffffffffffffffffffffffffffffffff161461134a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134190612b2d565b60405180910390fd5b565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611481576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147890612acd565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161157291906129b0565b60405180910390a3505050565b61158a848484610f79565b61159684848484611982565b6115d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115cc90612a2d565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161160184611b19565b01905060008167ffffffffffffffff811115611646577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156116785781602001600182028036833780820191505090505b509050600082602001820190505b60011561170b578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816116f5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b04945060008514156117065761170b565b611686565b819350505050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166117a283611291565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6117cd84848484611d50565b6001811115611811576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161180890612bcd565b60405180910390fd5b6000829050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156118595761185481611d56565b611898565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611897576118968582611d9f565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156118db576118d681611f0c565b61191a565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461191957611918848261204f565b5b5b5050505050565b50505050565b61193183836120ce565b61193e6000848484611982565b61197d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161197490612a2d565b60405180910390fd5b505050565b60006119a38473ffffffffffffffffffffffffffffffffffffffff166122ec565b15611b0c578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026119cc610e23565b8786866040518563ffffffff1660e01b81526004016119ee9493929190612964565b602060405180830381600087803b158015611a0857600080fd5b505af1925050508015611a3957506040513d601f19601f82011682018060405250810190611a3691906125b0565b60015b611abc573d8060008114611a69576040519150601f19603f3d011682016040523d82523d6000602084013e611a6e565b606091505b50600081511415611ab4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aab90612a2d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611b11565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611b9d577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611b93577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611c00576d04ee2d6d415b85acef81000000008381611bf6577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506020810190505b662386f26fc100008310611c5557662386f26fc100008381611c4b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506010810190505b6305f5e1008310611ca4576305f5e1008381611c9a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506008810190505b6127108310611cef576127108381611ce5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506004810190505b60648310611d385760648381611d2e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506002810190505b600a8310611d47576001810190505b80915050919050565b50505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001611dac84610976565b611db69190612cc1565b9050600060076000848152602001908152602001600020549050818114611e9b576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600880549050611f209190612cc1565b9050600060096000848152602001908152602001600020549050600060088381548110611f76577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490508060088381548110611fbe577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020018190555081600960008381526020019081526020016000208190555060096000858152602001908152602001600020600090556008805480612033577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600061205a83610976565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561213e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161213590612b0d565b60405180910390fd5b61214781611780565b15612187576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161217e90612a8d565b60405180910390fd5b6121956000838360016117c1565b61219e81611780565b156121de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121d590612a8d565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46122e8600083836001611921565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061232261231d84612c4d565b612c28565b90508281526020810184848401111561233a57600080fd5b612345848285612d69565b509392505050565b60008135905061235c81613350565b92915050565b60008135905061237181613367565b92915050565b6000813590506123868161337e565b92915050565b60008151905061239b8161337e565b92915050565b600082601f8301126123b257600080fd5b81356123c284826020860161230f565b91505092915050565b6000813590506123da81613395565b92915050565b6000602082840312156123f257600080fd5b60006124008482850161234d565b91505092915050565b6000806040838503121561241c57600080fd5b600061242a8582860161234d565b925050602061243b8582860161234d565b9150509250929050565b60008060006060848603121561245a57600080fd5b60006124688682870161234d565b93505060206124798682870161234d565b925050604061248a868287016123cb565b9150509250925092565b600080600080608085870312156124aa57600080fd5b60006124b88782880161234d565b94505060206124c98782880161234d565b93505060406124da878288016123cb565b925050606085013567ffffffffffffffff8111156124f757600080fd5b612503878288016123a1565b91505092959194509250565b6000806040838503121561252257600080fd5b60006125308582860161234d565b925050602061254185828601612362565b9150509250929050565b6000806040838503121561255e57600080fd5b600061256c8582860161234d565b925050602061257d858286016123cb565b9150509250929050565b60006020828403121561259957600080fd5b60006125a784828501612377565b91505092915050565b6000602082840312156125c257600080fd5b60006125d08482850161238c565b91505092915050565b6000602082840312156125eb57600080fd5b60006125f9848285016123cb565b91505092915050565b61260b81612cf5565b82525050565b61261a81612d07565b82525050565b600061262b82612c7e565b6126358185612c94565b9350612645818560208601612d78565b61264e81612ee4565b840191505092915050565b600061266482612c89565b61266e8185612ca5565b935061267e818560208601612d78565b61268781612ee4565b840191505092915050565b600061269d82612c89565b6126a78185612cb6565b93506126b7818560208601612d78565b80840191505092915050565b60006126d0602d83612ca5565b91506126db82612ef5565b604082019050919050565b60006126f3602b83612ca5565b91506126fe82612f44565b604082019050919050565b6000612716603283612ca5565b915061272182612f93565b604082019050919050565b6000612739602683612ca5565b915061274482612fe2565b604082019050919050565b600061275c602583612ca5565b915061276782613031565b604082019050919050565b600061277f601c83612ca5565b915061278a82613080565b602082019050919050565b60006127a2602483612ca5565b91506127ad826130a9565b604082019050919050565b60006127c5601983612ca5565b91506127d0826130f8565b602082019050919050565b60006127e8602983612ca5565b91506127f382613121565b604082019050919050565b600061280b602083612ca5565b915061281682613170565b602082019050919050565b600061282e602083612ca5565b915061283982613199565b602082019050919050565b6000612851601883612ca5565b915061285c826131c2565b602082019050919050565b6000612874602183612ca5565b915061287f826131eb565b604082019050919050565b6000612897603d83612ca5565b91506128a28261323a565b604082019050919050565b60006128ba602c83612ca5565b91506128c582613289565b604082019050919050565b60006128dd603583612ca5565b91506128e8826132d8565b604082019050919050565b6000612900601283612ca5565b915061290b82613327565b602082019050919050565b61291f81612d5f565b82525050565b60006129318285612692565b915061293d8284612692565b91508190509392505050565b600060208201905061295e6000830184612602565b92915050565b60006080820190506129796000830187612602565b6129866020830186612602565b6129936040830185612916565b81810360608301526129a58184612620565b905095945050505050565b60006020820190506129c56000830184612611565b92915050565b600060208201905081810360008301526129e58184612659565b905092915050565b60006020820190508181036000830152612a06816126c3565b9050919050565b60006020820190508181036000830152612a26816126e6565b9050919050565b60006020820190508181036000830152612a4681612709565b9050919050565b60006020820190508181036000830152612a668161272c565b9050919050565b60006020820190508181036000830152612a868161274f565b9050919050565b60006020820190508181036000830152612aa681612772565b9050919050565b60006020820190508181036000830152612ac681612795565b9050919050565b60006020820190508181036000830152612ae6816127b8565b9050919050565b60006020820190508181036000830152612b06816127db565b9050919050565b60006020820190508181036000830152612b26816127fe565b9050919050565b60006020820190508181036000830152612b4681612821565b9050919050565b60006020820190508181036000830152612b6681612844565b9050919050565b60006020820190508181036000830152612b8681612867565b9050919050565b60006020820190508181036000830152612ba68161288a565b9050919050565b60006020820190508181036000830152612bc6816128ad565b9050919050565b60006020820190508181036000830152612be6816128d0565b9050919050565b60006020820190508181036000830152612c06816128f3565b9050919050565b6000602082019050612c226000830184612916565b92915050565b6000612c32612c43565b9050612c3e8282612ddd565b919050565b6000604051905090565b600067ffffffffffffffff821115612c6857612c67612eb5565b5b612c7182612ee4565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612ccc82612d5f565b9150612cd783612d5f565b925082821015612cea57612ce9612e57565b5b828203905092915050565b6000612d0082612d3f565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612d96578082015181840152602081019050612d7b565b83811115612da5576000848401525b50505050565b60006002820490506001821680612dc357607f821691505b60208210811415612dd757612dd6612e86565b5b50919050565b612de682612ee4565b810181811067ffffffffffffffff82111715612e0557612e04612eb5565b5b80604052505050565b6000612e1982612d5f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612e4c57612e4b612e57565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b7f455243373231456e756d657261626c653a20636f6e736563757469766520747260008201527f616e7366657273206e6f7420737570706f727465640000000000000000000000602082015250565b7f4d41585f535550504c595f524541434845440000000000000000000000000000600082015250565b61335981612cf5565b811461336457600080fd5b50565b61337081612d07565b811461337b57600080fd5b50565b61338781612d13565b811461339257600080fd5b50565b61339e81612d5f565b81146133a957600080fd5b5056fea26469706673582212200c7694e4f9450c11761619abe9988300d354ad02abcc43d67c184f3a7eca2eac64736f6c63430008040033";

type CryptoDevsNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CryptoDevsNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CryptoDevsNFT__factory extends ContractFactory {
  constructor(...args: CryptoDevsNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    maxNfts: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CryptoDevsNFT> {
    return super.deploy(maxNfts, overrides || {}) as Promise<CryptoDevsNFT>;
  }
  override getDeployTransaction(
    maxNfts: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(maxNfts, overrides || {});
  }
  override attach(address: string): CryptoDevsNFT {
    return super.attach(address) as CryptoDevsNFT;
  }
  override connect(signer: Signer): CryptoDevsNFT__factory {
    return super.connect(signer) as CryptoDevsNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CryptoDevsNFTInterface {
    return new utils.Interface(_abi) as CryptoDevsNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CryptoDevsNFT {
    return new Contract(address, _abi, signerOrProvider) as CryptoDevsNFT;
  }
}
