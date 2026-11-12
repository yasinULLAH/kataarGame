# Third-Party Notices

**Katar (قطار) & Navakankari — Royal Board Game**
Copyright © 2026 **Yasin Ullah**. All Rights Reserved.

The game bundles the following third-party components. They remain the
property of their respective authors and are used under their own licenses.
These licenses do **not** grant any rights to the game itself; see `LICENSE`.

| Component | File in this project | License | Copyright / Source |
|---|---|---|---|
| Tailwind CSS (Play CDN browser build) | `tailwind.min.js` | MIT | © Tailwind Labs — https://tailwindcss.com |
| pako (zlib port) | `pako.min.js` | MIT | © Vitaly Puzrin, Andrei Tuputcyn — https://github.com/nodeca/pako |
| qrcodejs | `qrcode.min.js` | MIT | © davidshimjs — https://github.com/davidshimjs/qrcodejs |
| jsQR | `jsqr.min.js` | Apache-2.0 | © Cosmo Wolfe — https://github.com/cozmo/jsQR |
| MQTT.js | `mqtt.min.js` | MIT | © MQTT.js contributors — https://github.com/mqttjs/MQTT.js |
| PeerJS | `peerjs.min.js` | MIT | © Michelle Bu, Eric Zhang — https://github.com/peers/peerjs |
| Cinzel | `fonts/cinzel.woff2` | SIL Open Font License 1.1 | © Natanael Gama — https://fonts.google.com/specimen/Cinzel |
| Inter | `fonts/inter.woff2` | SIL Open Font License 1.1 | © Rasmus Andersson — https://fonts.google.com/specimen/Inter |
| JetBrains Mono | `fonts/jetbrains-mono.woff2` | SIL Open Font License 1.1 | © JetBrains — https://fonts.google.com/specimen/JetBrains+Mono |
| Capacitor Core (`@capacitor/core`) | `node_modules/@capacitor/core` (`package.json`) | MIT | © Ionic / Drifty Co. — https://capacitorjs.com |
| Capacitor CLI (`@capacitor/cli`) | `node_modules/@capacitor/cli` (`package.json`) | MIT | © Ionic / Drifty Co. — https://capacitorjs.com |
| Capacitor Android (`@capacitor/android`) | `node_modules/@capacitor/android` (`package.json`) | MIT | © Ionic / Drifty Co. — https://capacitorjs.com |
| Puter.js (optional cloud AI SDK) | Loaded at runtime from `https://js.puter.com/v2/` — **not bundled** | Puter's own terms | © Puter Technologies — https://puter.com |

Notes:

- Puter.js is loaded only while the device is online. It is optional and is
  not required for offline play; the built-in AI engine works fully offline.
- No third-party library listed here is modified by this project except for
  being served locally for offline reliability.
