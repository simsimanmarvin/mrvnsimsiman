const NFTs = []

function mintNFT (_name, _eyecolor, _shirtType, _bling) {
    const NFT = {
        "name": _name,
        "eyeColor": _eyecolor,
        "shirtType": _shirtType,
        "bling": _bling
    }
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

function listNFTs () {
    for (i = 0; i < NFTs.length; i++) {
        console.log(NFTs[i]);
    }
}


function getTotalSupply() {
    console.log(NFTs.length);
}

mintNFT("Ceb", "Brown", "Tanktop", "Chains");
listNFTs();
getTotalSupply();
