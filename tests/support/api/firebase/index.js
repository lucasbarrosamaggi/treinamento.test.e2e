const admin = require("firebase-admin");
const serviceAccount = require("./treinamento-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://treinamento.firebaseio.com/",
});

async function obterRates() {
  const snapshot = await admin.database().ref("rates").once("value");

  if (snapshot) {
    return snapshot.val();
  }

  throw new Error("Não foi possivel autenticar no firebase");
}

async function obterCommodities() {
  const snapshot = await admin.database().ref("commodities").once("value");

  if (snapshot) {
    return snapshot.val();
  }

  throw new Error("Não foi possivel autenticar no firebase");
}

async function obterWheater() {
  const snapshot = await admin.database().ref("weather").once("value");

  if (snapshot) {
    return snapshot.val();
  }

  throw new Error("Não foi possivel autenticar no firebase");
}

module.exports = {
  obterRates,
  obterCommodities,
  obterWheater,
};

// exemplo
async function runFirebase() {
  let rates = await obterRates();
  console.log("rates", rates);
  let commodities = await obterCommodities();
  console.log("commodities", commodities);
  let weather = await obterWheater();
  console.log("weather", weather);
}

runFirebase();

/*
// rates type;

interface Rates {
  EUR: Rate;
  USD: Rate;
  date: DateString;
}

interface Rate {
  value: number;
  float: "up" | "down" | "neutral";
}

// commodities type

interface Commodities {
  [key: string]: Commodity;
}

interface Commodity {
  DataPublicacao: DateString;
  valor: number;
  id: string;
  produto: string;
  quantidade: string;
}

// weather types

interface WeatherList {
  [key: string]: Weather;
}

interface Weather {
  date: DateString;
  name: string;
  state: EstadoBrasileiro;
  today: WeatherDetail;
}

interface WeatherDetail {
  chuva: number;
  climaId: WeatherConditionId;
  data: DateString;
  temperatura: { min: number; max: number; atual: number };
  umidade: number;
  vento: { angulo: number; velocidade: number };
}

// common types

type DateString = string;

type EstadoBrasileiro =
  | "AC"
  | "AL"
  | "AP"
  | "AM"
  | "BA"
  | "CE"
  | "DF"
  | "ES"
  | "GO"
  | "MA"
  | "MT"
  | "MS"
  | "MG"
  | "PA"
  | "PB"
  | "PR"
  | "PE"
  | "PI"
  | "RJ"
  | "RN"
  | "RS"
  | "RO"
  | "RR"
  | "SC"
  | "SP"
  | "SE"
  | "TO";

type WeatherConditionId =
  | 200
  | 201
  | 202
  | 210
  | 211
  | 212
  | 221
  | 230
  | 231
  | 232
  | 300
  | 301
  | 302
  | 310
  | 311
  | 312
  | 313
  | 314
  | 321
  | 500
  | 501
  | 502
  | 503
  | 504
  | 511
  | 520
  | 521
  | 522
  | 531
  | 600
  | 601
  | 602
  | 611
  | 612
  | 613
  | 615
  | 616
  | 620
  | 621
  | 622
  | 701
  | 711
  | 721
  | 731
  | 741
  | 751
  | 761
  | 762
  | 771
  | 781
  | 800
  | 801
  | 802
  | 803
  | 804;


  */
