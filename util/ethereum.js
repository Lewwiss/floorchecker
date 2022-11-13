export async function ethereumFloors(address) {
    if (!address ||address === null || address === "") return({ success: false, total: 0, assets: [] });
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) return({ success: false, total: 0, assets: [] });

    const api = `https://api.opensea.io/api/v1/assets/?owner=${address}`;
    const ethereumAssetsRequest = await fetch(api);
    const ethereumAssetsData = await ethereumAssetsRequest.json();
    const assets = [];
    let total = 0;

    async function ethereumAssetLoop(element) {
        const ethereumFloorRequest = await fetch(`https://api.opensea.io/api/v1/collection/${element.collection.slug}/stats`);
        const ethereumFloorData = await ethereumFloorRequest.json();
        const floorValue = parseFloat(ethereumFloorData.stats.floor_price !== null ? ethereumFloorData.stats.floor_price : 0);
        const asset = {
          collection: element.collection.name,
          name: (element.name !== null ? element.name : `${element.collection.name} #${element.token_id}`),
          contract: element.asset_contract.address,
          floor: floorValue,
          image: element.collection.image_url
        };
        total += floorValue;
        assets.push(asset);
    };

    await ethereumAssetsData.assets.forEach((element) => {
        ethereumAssetLoop(element);
    });

    return ({ success: true, total: total.toFixed(2), assets: assets });
};