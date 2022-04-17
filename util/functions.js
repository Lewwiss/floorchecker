export async function fetchFloorArr(address, start) {
    const fetchAssetsRequest = await fetch(`https://api.opensea.io/api/v1/assets/?owner=${address}&order_direction=asc&limit=10`);
    const assetsData = await fetchAssetsRequest.json();
    const floorArr = [];
    
    async function fetchFloorPrice(element) {
      const fetchFloorRequest = await fetch(`https://api.opensea.io/api/v1/collection/${element.collection.slug}/stats`);
      const floorData = await fetchFloorRequest.json();

      const floorElement = {
        image_url: element.image_url,
        name: element.name,
        collection: element.collection.name,
        description: element.collection.description,
        banner_image_url: element.collection.banner_image_url,
        slug: element.collection.slug,
        floor: (floorData.stats.floor_price !== null ? floorData.stats.floor_price : 0)
      };

      return floorArr.push(floorElement);
    };

    assetsData.assets.forEach((element) => {
      fetchFloorPrice(element);
    });

    return floorArr;
};