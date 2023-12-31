export default {
    types: {
        ShufflingSeed: {
            seed: "H256",
            proof: "H512"
        },
        Header: {
            parentHash: "Hash",
            number: "Compact<BlockNumber>",
            stateRoot: "Hash",
            extrinsicsRoot: "Hash",
            digest: "Digest",
            seed: "ShufflingSeed",
            count: "BlockNumber"
        },
        RpcAssetMetadata: {
            tokenId: "TokenId",
            decimals: "u32",
            name: "Vec<u8>",
            symbol: "Vec<u8>"
        },
        TokenId: "u32",
    }
};
