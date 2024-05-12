let totalNFTs = 0;


function mintNFT(name, rarity, bling) {
   
    const newNFT = {
        name: name,
        rarity: rarity,
        bling:  bling
        
    };
    
   
    totalNFTs++;
    
   
    return newNFT;
}

function listNFTs(NFTs) {
    NFTs.forEach((nft, index) => {
        console.log(`TOKEN ${index + 1}:`);
        console.log("Name:", nft.name);
        console.log("Rarity:", nft.rarity);
        console.log("Bling:", nft.bling);

        console.log("----------------------");
    });
}

function getTotalSupply() {
    console.log("Total NFTs minted:", totalNFTs);
}

const myNFTs = [];

myNFTs.push(mintNFT("Franco", "1/1", "GOLD EARRINGS"));
myNFTs.push(mintNFT("Bob",  "Rare", "SILVER CHAINS"));
myNFTs.push(mintNFT("John",  "Common", "FAKE WATCH"));
myNFTs.push(mintNFT("Vince",  "Rare", "GOLD TEETH "));


listNFTs(myNFTs);

getTotalSupply();
