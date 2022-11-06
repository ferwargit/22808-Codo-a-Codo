import regions from './regions.json' assert { type: "json" };

regions.map((region) => {
  // console.log(region);
  console.log(region.LocalizedName);
})
