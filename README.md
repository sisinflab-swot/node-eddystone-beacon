# psw-node-eddystone-beacon

Create an [Eddystone](https://github.com/google/eddystone) Beacon using Node.js

[Eddystone-URL](https://github.com/google/eddystone/tree/master/eddystone-url) beacons can be used with the [Physical Web](http://google.github.io/physical-web/).

_Eddystone-URL-PSW_ and _Eddystone-UID-PSW_ beacons proposed with the [Physical Semantic Web](http://sisinflab.poliba.it/swottools/physicalweb/) project.

## Prerequisites

See [bleno prerequisites](https://github.com/sandeepmistry/bleno#prerequisites).

### OS X

OS X 10.10 or above, with Bluetooth 4.0 Hardware.

### Linux

You __need__ to run with ```sudo``` or as ```root```. See [bleno - Running on Linux](https://github.com/sandeepmistry/bleno#running-on-linux) for more info.

Have an older machine or Raspberry Pi? Add a [Bluetooth 4.0 USB Adapter](http://www.adafruit.com/products/1327).

### Windows

See [bleno Windows prerequisites](https://github.com/sandeepmistry/bleno#windows).

## Install

```sh
npm install eddystone-beacon
```

## Usage

```javascript
var eddystoneBeacon = require('eddystone-beacon');

```

### Options

```javascript
var options = {
  name: 'Beacon',    // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};
```

__Note__: an advertising interval of 100ms is used.

### Eddystone-URL-PSW

```javascript
var url = 'http://goo.gl/OydkqE'; // SisInfLab - Physical Semantic Web

eddystoneBeacon.advertisePswUrl(url, [options]);
```

### Eddystone-UID-PSW

```javascript
var namespaceId = '00000001000000000000'; // ONTO_ID (4B) + Resource_ID (6B) 
var instanceId = '001122334455'; // MAC address of a Bluetooth Device (6B)

eddystoneBeacon.advertisePswUid(namespaceId, instanceId, [options]);
```

### [Eddystone-URL](https://github.com/google/eddystone/tree/master/eddystone-url)

```javascript
var url = 'http://example.com';

eddystoneBeacon.advertiseUrl(url, [options]);
```

If your encoded URL is too long, try a URL shortener like [goo.gl](https://goo.gl) or [bit.ly](https://bit.ly).

### [Eddystone-UID](https://github.com/google/eddystone/tree/master/eddystone-uid)

```javascript
var namespaceId = '00010203040506070809';
var instanceId = 'aabbccddeeff';

eddystoneBeacon.advertiseUid(namespaceId, instanceId, [options]);
```

### TLM data

Use with interleaved TLM mode, see options above.

#### Battery Voltage

```javascript
var batteryVoltage = 500; // between 500 and 10,000 mV

eddystoneBeacon.setBatteryVoltage(batteryVoltage);
```

#### Temperature

```javascript
var temperature = 22.0; // between -128.0 and 128.0

eddystoneBeacon.setTemperature(temperature);
```

### Examples

 * Eddystone-PSW
   * [url_psw_beacons](examples/psw/url_psw_beacon.js) - create a Eddystone-URL-PSW Beacon
   * [uid_psw_beacons](examples/psw/uid_psw_beacon.js) - create a Eddystone-UID-PSW Beacon
 * [Eddystone-URL](https://github.com/google/eddystone/tree/master/eddystone-url)
   * [simple](examples/url/simple.js) - easiest way to create a Eddystone-URL Beacon
   * [power-level](examples/url/power-level.js) - create a Eddystone-URL Beacon specifying txPowerLevel
   * [name](examples/url/name.js) - create a Eddystone-URL Beacon specifying device name
 * [Eddystone-UID](https://github.com/google/eddystone/tree/master/eddystone-uid)
   * [simple](examples/uid/simple.js) - easiest way to create a Eddystone-UID Beacon
   * [with-tlm](examples/uid/with-tlm.js) - create a Eddystone-UID Beacon with interleaved TLM data
   * [name](examples/uid/name.js) - create a Eddystone-UID Beacon specifying device name
 * [Eddystone-TLM](https://github.com/google/eddystone/tree/master/eddystone-tlm)
   * [simple](examples/tlm/simple.js) - example with random data in TLM
 * [Connectable](https://github.com/google/eddystone/tree/master/connectable)
   * [connectable](examples/connectable/connectable.js) - beacon using eddystone with [bleno](https://github.com/sandeepmistry/bleno)
   
## Development

### Install the dependencies

```sh
npm install
```

### Run tests

```sh
npm test
```
