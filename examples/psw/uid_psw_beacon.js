var eddystoneBeacon = require('eddystone-beacon');

var options = {
  name: 'Beacon',    // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

var namespaceId = '00000001000000000000'; // ONTO_ID (4B) + Resource_ID (6B) 
var instanceId = '001122334455'; // MAC Address (6B) [00:11:22:33:44:55]
eddystoneBeacon.advertisePswUid(namespaceId, instanceId, [options]);

console.log("Eddystone PSW Uid-Beacon published!");