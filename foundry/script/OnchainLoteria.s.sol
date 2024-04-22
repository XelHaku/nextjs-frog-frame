//  ██████╗ ███╗   ██╗ ██████╗██╗  ██╗ █████╗ ██╗███╗   ██╗
// ██╔═══██╗████╗  ██║██╔════╝██║  ██║██╔══██╗██║████╗  ██║
// ██║   ██║██╔██╗ ██║██║     ███████║███████║██║██╔██╗ ██║
// ██║   ██║██║╚██╗██║██║     ██╔══██║██╔══██║██║██║╚██╗██║
// ╚██████╔╝██║ ╚████║╚██████╗██║  ██║██║  ██║██║██║ ╚████║
//  ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

// ██╗      ██████╗ ████████╗███████╗██████╗ ██╗ █████
// ██║     ██╔═══██╗╚══██╔══╝██╔════╝██╔══██╗██║██╔══██╗
// ██║     ██║   ██║   ██║   █████╗  ██████╔╝██║███████║
// ██║     ██║   ██║   ██║   ██╔══╝  ██╔══██╗██║██╔══██║
// ███████╗╚██████╔╝   ██║   ███████╗██║  ██║██║██║  ██║
// ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝

// SPDX-License-Identifier: MIT License
pragma solidity ^0.8.23;

import "forge-std/src/Script.sol";
import "forge-std/src/console.sol";
import "../src/OnchainLoteria.sol";

contract scriptOnchainLoteria is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("OWNER_KEY");
        vm.startBroadcast(deployerPrivateKey);
        // Instantiate the OnchainLoteria contract with an IPFS link as constructor argument
        OnchainLoteria chalupa = new OnchainLoteria(
            "ipfs:QmZWV38CqAwSk64jkjHHVf4HbbutXDoW41s5EqLB4m9nk4"
        );

        // Add authorized addresses to the contract
        chalupa.addAuthorizedAddress(
            0xceA4A865E91c4f99D32F09EB9Cd94e34345661cC
        );
        chalupa.addAuthorizedAddress(
            0x35BB6B2757C004A1662e83FdA9a034f4aFbBEdb3
        );

        // Log the deployed contract address
        console.log("\nOnchainLoteria deployed at address: ", address(chalupa));
        vm.stopBroadcast();
    }
}
