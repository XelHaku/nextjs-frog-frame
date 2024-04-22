import pinataSDK from "@pinata/sdk";
import fetch from "node-fetch";
import { Readable } from "stream"; // Import the Readable module to convert buffer to streamimport { PinataPinOptions } from "@pinata/sdk";
import { PinataPinOptions } from "@pinata/sdk";
import Jimp from "jimp";

// Full list of Crypto Conexion card names
const cardNames = [
  "El Minero",
  "El Scammer",
  "La Degen",
  "El Degen",
  "La Wallet",
  "La Developer",
  "La Blockchain",
  "Los Noggles",
  "El NFT",
  "El Fantasma",
  "El Bitcoin",
  "El Buidler",
  "El Gorrito",
  "El Rugpull",
  "El Panda",
  "El Gas",
  "El Bear",
  "El Bull",
  "La Ardilla Voladora",
  "El Pajaro",
  "El Puente",
  "La Bota",
  "La Luna",
  "El Ambassador",
  "El Bro",
  "El Maxi",
  "El Corazón",
  "La Loba",
  "Los Layers",
  "El Pingüino",
  "Las Velas",
  "La DJ",
  "Los Nodos",
  "El Hodler",
  "La Estrella",
  "El Bucket Hat",
  "El Mundo",
  "El Robot",
  "Los Tippers",
  "La Runn3r",
  "El Lente",
  "La Calavera",
  "La Campana",
  "El Base",
  "El Shiba",
  "La Sunny",
  "La Corona",
  "El Voyager",
  "El Diamante",
  "El Dodge",
  "El Regen",
  "El Frutero",
  "El Bot",
  "La Rana",
];

// Function to process image using Jimp and return a lower resolution version
async function processImageForLowRes(imageBuffer) {
  try {
    // Load the image from the provided buffer
    const image = await Jimp.read(imageBuffer);

    // Resize the image to 1/8th of its original size for the animation URL
    const processedImage = await image.resize(
      image.bitmap.width / 8,
      Jimp.AUTO
    );

    // Save processed image to buffer in PNG format
    const processedBuffer = await processedImage.getBufferAsync(Jimp.MIME_PNG);

    // Optionally, convert buffer to Data URL if needed for direct embedding
    const dataUrl = `data:image/png;base64,${processedBuffer.toString(
      "base64"
    )}`;
    return dataUrl; // You can also return the buffer if you need to upload it somewhere else
  } catch (error) {
    console.error("Failed to process image:", error);
    throw error;
  }
}

export async function tokenUri(sequence, imagePath, tokenId) {
  console.log("Sequence:", sequence, "Image Path:", imagePath);
  if (sequence.length !== 16) {
    return "Invalid Sequence";
  }

  // need new keyword here
  const pinata = new pinataSDK({
    pinataApiKey: process.env.PINATA_API_KEY,
    pinataSecretApiKey: process.env.PINATA_SECRET_API_KEY,
  });

  try {
    const optionsOriginal: PinataPinOptions = {
      pinataMetadata: { name: "High Resolution Board" },
      pinataOptions: { cidVersion: 0 },
    };

    const response = await fetch(imagePath);
    const imageBuffer = await response.buffer();

    const imageStream = new Readable();
    imageStream.push(imageBuffer);
    imageStream.push(null);

    const originalImageResult = await pinata.pinFileToIPFS(
      imageStream,
      optionsOriginal
    );
    console.log("Original image pinned to IPFS:", tokenId, originalImageResult);

    // Get the animation URL by processing the image
    const LowRes = await processImageForLowRes(imageBuffer);

    let attributes = sequence.map((cardIndex, index) => ({
      trait_type: `Card ${index < 9 ? "0" + (index + 1) : index + 1}`,
      value: cardNames[cardIndex - 1],
    }));

    attributes = attributes.concat([
      { trait_type: "Sequence", value: sequence.join(",") },

      ...sequence.map((cardIndex) => ({
        trait_type: `${cardNames[cardIndex - 1]}`,
        value: "1",
      })),
    ]);

    const metadata = {
      name: `Onchain Loteria ${tokenId}`,
      description:
        "Step into the enchanting world of Lotería reimagined for the Web3 generation! Each card features dynamic characters from the Web3 universe, including the Degen, Regen, Buidler, Developer, and the mischievous Gas. This game blends tradition with technology, offering a gateway to explore blockchain concepts through play. Join us for a chance to support public good projects while engaging in a thrilling game of skill and chance.",
      image: "ipfs://" + LowRes.IpfsHash,
      external_url: "https://loteria.cryptoconexion.com/",
      animation_url: "ipfs://" + originalImageResult.IpfsHash,
      collaborators: JSON.stringify([
        "0x7fe8959aD2cd65eF87a25d4A2ae310c2027BE13e",
      ]),
      attributes, // Ensure attributes are included in the metadata
    };

    const metadataResult = await pinata.pinJSONToIPFS(
      metadata,
      optionsOriginal
    );
    console.log("Metadata pinned to IPFS:", tokenId, metadataResult);
    return `ipfs://${metadataResult.IpfsHash}`;
  } catch (error: any) {
    console.error("Error in pinning data to IPFS:", error.message);
    throw error;
  }
}
