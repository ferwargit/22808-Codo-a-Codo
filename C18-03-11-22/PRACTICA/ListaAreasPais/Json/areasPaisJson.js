import argentina from './argentina.json' assert { type: "json" };

argentina.map((item) => {
  console.log(item.LocalizedName);
})