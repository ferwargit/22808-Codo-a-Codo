import pronoDia from "./prono1Dia.json" assert { type: "json" };

// console.log(pronoDia);
// console.log(pronoDia.Headline);
console.log('Desde: ' + pronoDia.Headline.EffectiveDate)
console.log('Hasta: ' + pronoDia.Headline.EndDate)
console.log('Info: ' + pronoDia.Headline.Text);
pronoDia.DailyForecasts.map((item) => {
  // console.log(item);
  console.log('Día: ' + item.Day.IconPhrase);
  console.log('Precipitación: ' + item.Day.HasPrecipitation);
  console.log('Noche: ' + item.Night.IconPhrase);
  console.log('Precipitación: ' + item.Night.HasPrecipitation);
  console.log('Temp. Máx.: ' + Math.round((item.Temperature.Maximum.Value - 32) * 5/9) + ' °C')
  console.log('Temp. Min.: ' + Math.round((item.Temperature.Minimum.Value - 32) * 5/9) + ' °C')
});
