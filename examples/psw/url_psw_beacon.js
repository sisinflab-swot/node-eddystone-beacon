var eddystoneBeacon = require('eddystone-beacon');

var options = {
  name: 'Beacon',    // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

eddystoneBeacon.advertisePswUrl("http://goo.gl/dwT0yQ"); // ZoneA

console.log("Eddystone PSW Url-Beacon published!");

//eddystoneBeacon.advertiseUrl("http://goo.gl/OydkqE"); // SisInfLab - Physical Semantic Web
//eddystoneBeacon.advertiseUrl("http://goo.gl/dwT0yQ"); // ZoneA
//eddystoneBeacon.advertiseUrl("http://goo.gl/stNbJr"); // ZoneB
//eddystoneBeacon.advertiseUrl("http://goo.gl/8qPRgm"); // ZoneC