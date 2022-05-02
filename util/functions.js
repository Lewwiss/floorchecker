export async function fetchFloorArr(address) {
    if (address.length <= 0) return({success: false, floorArr: []});
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) return({success: false, floorArr: []});

    const fetchAssetsRequest = await fetch(`https://api.opensea.io/api/v1/assets/?owner=${address}&order_direction=asc&limit=50`);
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