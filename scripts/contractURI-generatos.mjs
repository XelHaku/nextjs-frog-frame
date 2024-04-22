import PinataSDK from "@pinata/sdk";
import ck from "ckey";
// Function to update and pin metadata
export async function updateAndPinMetadata() {
  console.log(
    "\n\n\nsecret",
    process.env.PINATA_API_KEY,
    process.env.PINATA_SECRET_API_KEY
  );
  const pinata = new PinataSDK({
    pinataApiKey: process.env.PINATA_API_KEY,
    pinataSecretApiKey: process.env.PINATA_SECRET_API_KEY,
  });

  const metadataToUpdate = {
    name: "Onchain Loteria",
    description:
      "Step into the enchanting world of Lotería reimagined for the Web3 generation! Each card features dynamic characters from the Web3 universe, including the Degen, Regen, Buidler, Developer, and the mischievous Gas. This game blends tradition with technology, offering a gateway to explore blockchain concepts through play. Join us for a chance to support public good projects while engaging in a thrilling game of skill and chance.",
    image: "ipfs://QmagJhijWCrF8LddMpfq8zkWouPVzTxGzMfdMKaswnFY2L",
    external_link: "https://loteria.cryptoconexion.com/",
    collaborators: JSON.stringify([
      "0x7fe8959aD2cd65eF87a25d4A2ae310c2027BE13e",
    ]),
  };

  try {
    const res = await pinata.pinJSONToIPFS(metadataToUpdate);
    console.log("Metadata update result:", res);
    const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${res.IpfsHash}`;
    console.log("IPFS URL:", ipfsUrl);
    console.log("ContractURI:", `ipfs:${res.IpfsHash}`);

    return;
  } catch (error) {
    console.error("Error updating metadata:", error);
  }
}

updateAndPinMetadata();

// ipfs:QmV3DfCALo4kPRgvW2aBAzhcQF3MFu2bYwzMwTSaRMvjre
