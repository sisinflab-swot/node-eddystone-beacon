var eddystoneBeacon = require('eddystone-beacon');

var options = {
  name: 'Beacon',    // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

eddystoneBeacon.advertisePswUrl("http://goo.gl/ujNAaj"); // OWL annotation of Karlskirche (Wien)

eddystoneBeacon.advertisePswUrl("http://goo.gl/3XAOix"); // OWL annotation of Parlamentsgebäude (Wien)
eddystoneBeacon.advertisePswUrl("http://goo.gl/9CXnz7"); // OWL annotation of Augustinerkirche (Wien)

console.log("Eddystone PSW Url-Beacon published!");