import africa from './africa.json' assert { type: "json" };

africa.map((pais) => {
  // console.log(pais.ID);
  // console.log(pais.LocalizedName);
  console.log('Código de país: ' + pais.ID + ' País: ' + pais.LocalizedName)
})