export async function fetchFloorArr(address) {
    if (address.length <= 0) return({success: false, floorArr: []});
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) return({success: false, floorArr: []});

    const fetchAssetsRequest = await fetch(`https://api.opensea.io/api/v1/assets/?owner=${address}&order_direction=desc`);
    const assetsData = await fetchAssetsRequest.json();
    const floorArr = [];
    
    async function fetchFloorPrice(element) {
      const fetchFloorRequest = await fetch(`https://api.opensea.io/api/v1/collection/${element.collection.slug}/stats`);
      const floorData = await fetchFloorRequest.json();

      const floorElement = {
        image_url: element.collection.image_url,
        name: (element.name !== null ? element.name : `${element.collection.name} #${element.token_id}`),
        id: element.id,
        token: element.token_id,
        collection: element.collection.name,
        contract: element.asset_contract.address,
        description: element.collection.description,
        banner_image_url: element.collection.banner_image_url,
        slug: element.collection.slug,
        floor: (floorData.stats.floor_price !== null ? floorData.stats.floor_price : 0)
      };

      return floorArr.push(floorElement);
    };

    for (let i = 0; i < assetsData.assets.length; i++) {
      await fetchFloorPrice(assetsData.assets[i]);
    };

    return({
      success: true,
      floorArr: floorArr
    });
};

// NEW FUNCTION (MIGHT CHANGE API)

export async function ethereumFloors(address) {
    if (!address ||address === null || address === "") return({ success: false, total: 0, assets: [] });

    const api = `https://api.opensea.io/api/v1/assets/?owner=${address}`;
    const ethereumAssetsRequest = await fetch(api);
    const ethereumAssetsData = await ethereumAssetsRequest.json();
    const assets = [];
    let total = 0;

    await ethereumAssetsData.forEach((element) => {
        const asset = {
          collection: element.collection.name,
          name: (element.name !== null ? element.name : `${element.collection.name} #${element.token_id}`),
          contract: element.asset_contract.address,
          //floor: parseFloat(element.sold_price / 1000000000),
          image: element.collection.image_url
        };
        //total += parseFloat(element.sold_price / 1000000000);
        assets.push(asset);
    });

    return ({ success: true, total: total, assets: assets });
};