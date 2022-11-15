export async function solanaFloors(address) {
    if (!address ||address === null || address === "") return({ success: false, total: 0, assets: [] });

    const api = `https://pro-api.solscan.io/v1.0/wallet/nft/${address}`
    const solanaAssetsRequest = await fetch(api);
    const solanaAssetsData = await solanaAssetsRequest.json();
    const assets = [];
    let total = 0;

    async function solanaAssetLoop(element) {
        const asset = {
            collection: element.nft_collection_name,
            name: element.nft_name,
            contract: element.token_address,
            floor: parseFloat(element.sold_price / 1000000000).toFixed(2),
            image: element.nft_image
        };
        total += parseFloat(element.sold_price / 1000000000);
        assets.push(asset);
    };

    for (let i = 0; i < solanaAssetsData.data.list_nfts.length; i++) {
        await solanaAssetLoop(solanaAssetsData.data.list_nfts[i]);
    };

    return ({ success: true, total: total.toFixed(2), assets: assets });
};