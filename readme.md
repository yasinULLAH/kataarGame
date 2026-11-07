# 👑 Katar (قطار) & Navakankari (نوکنکری) — Royal Board Game Studio
### *Ancient Pashtun & South Asian Strategic Tabletop Games on Modern Web Architecture*

[License: MIT](https://www.google.com/search?q=LICENSE)
[](index.html)
[](index.html)
[](index.html)
[](index.html)

---

### 👨‍💻 Creator & Dedication
* **Lead Architect & Developer:** **Yasin Ullah**
* **Software Firm:** **Bannu Software Solutions**
* **Location:** Bannu, Khyber Pakhtunkhwa, Pakistan
* **Official WhatsApp:** **0336-1593533**
* **Heartfelt Dedication:** *Specially dedicated with endless love to my little brother **Muhib Ullah** ❤️*

---

## 📑 Table of Contents / فہرست مضامین
1. [English Documentation](#-english-documentation)
   * [1. Project Overview & Cultural Heritage](#1-project-overview--cultural-heritage)
   * [2. Complete Catalog of 14+ Traditional Board Games](#2-complete-catalog-of-14-traditional-board-games)
   * [3. Game Rules, Topologies & Capture Mechanics](#3-game-rules-topologies--capture-mechanics)
   * [4. Tactical Studio & Rule Customization Engine](#4-tactical-studio--rule-customization-engine)
   * [5. Turn Clocks, Overall Match Timers & Tiebreak Rules](#5-turn-clocks-overall-match-timers--tiebreak-rules)
   * [6. Mid-Game Leave, Disconnect Grace & Abandonment Forfeits](#6-mid-game-leave-disconnect-grace--abandonment-forfeits)
   * [7. Mid-Game Action Guard, Game Lock & Match Stashing](#7-mid-game-action-guard-game-lock--match-stashing)
   * [8. 4-Tier Strategic AI Engine Architecture](#8-4-tier-strategic-ai-engine-architecture)
   * [9. Multiplayer & Wireless Connectivity (Global PeerJS, WebRTC, QR, MQTT)](#9-multiplayer--wireless-connectivity-webrtc-qr-mqtt)
   * [10. Player Profile, Lifetime Career Stats & Portable Backups](#10-player-profile-lifetime-career-stats--portable-backups)
   * [11. Immersive Fullscreen Mode, Movable Dock & Zen Mode](#11-immersive-fullscreen-mode-movable-dock--zen-mode)
   * [12. Visual Styling, Canvas Engine & Procedural Audio/Haptics](#12-visual-styling-canvas-engine--procedural-audiohaptics)
   * [13. PWA Installation & 100% Offline Standalone Execution](#13-pwa-installation--100-offline-standalone-execution)
2. [اردو تفصیلی گائیڈ و مکمل رہنمائی (Urdu Comprehensive Documentation)](#-اردو-تفصیلی-گائیڈ-و-مکمل-رہنمائی)
   * [1. تعارف و تاریخی پس منظر](#1-تعارف-و-تاریخی-پس-منظر)
   * [2. ایپ میں موجود 14 سے زیادہ کھیلوں کی مکمل تفصیل](#2-ایپ-میں-موجود-14-سے-زیادہ-کھیلوں-کی-مکمل-تفصیل)
   * [3. اصول و قواعد اور چال چلنے کا طریقہ](#3-اصول-و-قواعد-اور-چال-چلنے-کا-طریقہ)
   * [4. سیٹنگز، گوٹیاں کھانے کا انداز اور کسٹم بورڈ](#4-سیٹنگز-گوٹیاں-کھانے-کا-انداز-اور-کسٹم-بورڈ)
   * [5. ٹائمر، میچ کلاک اور ٹائی بریک](#5-ٹائمر-میچ-کلاک-اور-ٹائی-بریک)
   * [6. گیم کے دوران کھلاڑی کا غائب ہونا (Away Timer) اور فتح کا اصول](#6-گیم-کے-دوران-کھلاڑی-کا-غائب-ہونا-away-timer-اور-فتح-کا-اصول)
   * [7. گیم لاک اور پرانی گیم محفوظ رکھنا (Stash Match)](#7-گیم-لاک-اور-پرانی-گیم-محفوظ-رکھنا-stash-match)
   * [8. چار درجاتی کمپیوٹر (AI) کی خصوصیات](#8-چار-درجاتی-کمپیوٹر-ai-کی-خصوصیات)
   * [9. بغیر انٹرنیٹ دو موبائلوں کو جوڑنے کا مکمل طریقہ](#9-بغیر-انٹرنیٹ-دو-موبائلوں-کو-جوڑنے-کا-مکمل-طریقہ)
   * [10. پروفائل، شاہی نشان، لائف ٹائم ریکارڈ اور بیک اپ](#10-پروفائل-شاہی-نشان-لائف-ٹائم-ریکارڈ-اور-بیک-اپ)
   * [11. فل اسکرین (Immersive) اور زین موڈ](#11-فل-اسکرین-immersive-اور-زین-موڈ)
   * [12. انسٹالیشن اور موبائل ہوم اسکرین گائیڈ](#12-انسٹالیشن-اور-موبائل-ہوم-اسکرین-گائیڈ)

---

# 🇬🇧 English Documentation

## 1. Project Overview & Cultural Heritage
**Katar (قطار) & Navakankari (نوکنکری) Royal Board Game Studio** is a unified, high-performance web and mobile application designed to preserve, celebrate, and modernize the ancient tabletop strategy games of Khyber Pakhtunkhwa, the Pashtun heartland, the broader Indian Subcontinent, Central Asia, the Middle East, and Madagascar.

Historically played on sandy courtyards, village chauks (hujras), woven rugs, and carved stones using dry clay beads, river pebbles, and date seeds, these games represent centuries of military strategy, geometric intellect, and social fellowship. 

This studio digitalizes these games within a responsive, 60 FPS HTML5 Canvas engine, featuring procedural visual themes, a pure Web Audio API synthesizer, an offline WebRTC peer-to-peer multiplayer stack, and an advanced 4-tier Minimax artificial intelligence.

---

## 2. Complete Catalog of 14+ Traditional Board Games

The app implements a flexible mathematical graph representation (`Nodes`, `Edges`, `Adjacency`, `CollinearJumps`, and `MillLines`) supporting the following game topologies:

### 1. 6×6 Katar Classic (36 Intersections • 18v18 Beads)
* **Cultural Origin:** Traditional Pashtun battle-lines game played across Bannu, Waziristan, and Khyber Pakhtunkhwa.
* **Layout:** A 6×6 grid (36 nodes) with 8-way diagonal connectivity.
* **Setup:** 18 beads per player (16 deployed on North/South ranks, 2 in reserve; central 4-node square open).
* **Objective:** Capture all opponent beads via collinear leap-and-capture.

### 2. Navakankari / Nine Men's Morris (24 Nodes • 9 Beads)
* **Cultural Origin:** Ancient South Asian & Roman Empire mill game.
* **Layout:** 3 concentric squares connected at the midpoints of their 4 sides (24 intersections).
* **Setup:** 9 beads per player in hand.
* **Objective:** Place beads, slide along connected lines, form 3-in-a-row Katar lines, and remove opponent beads until the opponent has fewer than 3 beads or no legal moves.

### 3. 12-Men's Katar Mill (24 Nodes + 4 Corner Diagonals • 12 Beads)
* **Cultural Origin:** South Asian regional variant of Morabaraba / 12-Men's Morris.
* **Layout:** 3 concentric squares with 4 corner diagonal lines linking the vertices (total 20 mill lines).
* **Setup:** 12 beads per player.
* **Objective:** Form 3-in-a-row lines along orthogonals or corner diagonals to capture enemy beads.

### 4. Teen Guti / Three Men's Morris (9 Nodes • 3v3 Beads)
* **Cultural Origin:** South Asian village fast-blitz game.
* **Layout:** 3×3 grid (9 nodes) with orthogonal and diagonal lines (8 mill lines).
* **Setup:** 3 beads per player.
* **Objective:** First player to align all 3 beads in a straight row wins instantly.

### 5. Chhah Guti / Six Men's Morris (16 Nodes • 6v6 Beads)
* **Cultural Origin:** Medieval and South Asian classic.
* **Layout:** 2 concentric squares linked at the 4 midpoints (16 nodes, 8 mill lines).
* **Setup:** 6 beads per player.

### 6. Bagh-Chal / Tigers and Goats (25 Nodes • 4 Tigers vs 20 Goats)
* **Cultural Origin:** National game of Nepal and Northern Pakistan / Punjab.
* **Layout:** 5×5 Alquerque grid with full diagonal connectivity (25 nodes).
* **Setup:** 4 Tigers placed at the four corners; 20 Goats in Player 1's reserve hand.
* **Objective:** Goats win by surrounding and immobilizing all 4 Tigers; Tigers win by capturing 5 Goats.

### 7. Aadu Puli Attam / South Indian Goat & Tiger (23 Nodes • 3 Tigers vs 15 Goats)
* **Cultural Origin:** Ancient Tamil Nadu & South Asian asymmetric hunting game.
* **Layout:** Triangular apex board with 4 crossbars and 4 radial spines extending to a curved base (23 nodes).
* **Setup:** 3 Tigers stationed at the top apex and upper junctions; 15 Goats in hand.
* **Objective:** Tigers hunt Goats (target: 5 eaten); Goats surround and trap all 3 Tigers.

### 8. Lau Kata Kati / Kowwa Dunk (19 Nodes • 9v9 Beads)
* **Cultural Origin:** Indian & Bengali double-triangle butterfly game.
* **Layout:** Two opposing triangles meeting at a single central nexus node (19 nodes).
* **Setup:** 9 North beads (Player 2), 9 South beads (Player 1), center node 9 open.
* **Objective:** Leap-capture opponent pieces across straight spinal rays and horizontal crossbars.

### 9. Pretwa / Circular Katar (19 Nodes • 9v9 Beads)
* **Cultural Origin:** Ancient Indian circular war game (Bihar / Central India).
* **Layout:** 3 concentric circular rings intersected by 3 continuous diameter lines (6 radial spokes) through a central hub (19 nodes).
* **Setup:** Center hub open; 9 beads per player occupying opposing semi-circular spokes.
* **Objective:** Move along circular perimeters and radial spokes; leap over adjacent enemy beads into empty nodes beyond.

### 10. Fanorona 5×5 (12v12) & Fanorona 5×9 Grand Lattice (22v22)
* **Cultural Origin:** National board game of Madagascar with historical Austronesian / Arab roots.
* **Layout:** 5×5 or 5×9 Alquerque grid with alternating diagonal lattices.
* **Setup:** North ranks occupied by Player 2, South ranks by Player 1; center rank alternates with central point empty.
* **Objective:** Approach & Withdrawal captures! Move toward an enemy line to capture it, or step away from an enemy line to capture it.

### 11. Seega 5×5 (12v12 Beads)
* **Cultural Origin:** Ancient Egyptian and Bedouin desert game.
* **Layout:** 5×5 orthogonal grid (25 nodes). Center node 12 is a protected safe sanctuary.
* **Setup:** Phase 1: Players alternate placing 2 beads per turn on empty nodes (center must remain empty). Phase 2: Players slide orthogonally to flank and "sandwich" enemy beads (Custodian capture).

### 12. Dama / Turkish Draughts 8×8 (64 Nodes • 24v24 Pieces)
* **Cultural Origin:** Middle Eastern, Mediterranean, and Central Asian draughts.
* **Layout:** 8×8 grid (64 nodes).
* **Setup:** 24 pieces per player on ranks 2-3 and 6-7.
* **Objective:** Move forward or sideways (never backward). Reaching the 8th rank crowns a piece into a **King (♛)**, unlocking long-range flying moves and omnidirectional jumps!

### 13. Gomoku / Five-in-a-Row (9×9, 7×7, 6×6 Grids)
* **Cultural Origin:** Ancient Asian line-formation strategy.
* **Layout:** 9×9 grid (81 intersections).
* **Setup:** Clean empty board.
* **Objective:** Place stones turn-by-turn. The first player to align 5 unbroken stones horizontally, vertically, or diagonally wins immediately.

### 14. 37-Point Sholo Guti (5×5 Grid + 2 Triangular Camps • 16v16 Beads)
* **Cultural Origin:** Traditional South Asian & Bengali classic.
* **Layout:** Central 5×5 Alquerque board flanked by 6-node triangular forts/camps on the North and South ends (total 37 nodes).
* **Setup:** 16 pieces per player; center horizontal rank is open.

### 15. Custom R×C Battlefield Studio
* **Layout:** Fully customizable rectangular grids from 4×4 up to 9×9.
* **Options:** Toggle triangular camps, configure diagonal lattice connectivity, select open-center layouts, adjust bead counts from 3 to 36, and toggle back-rank reserve deployments.

---

## 3. Game Rules, Topologies & Capture Mechanics

### Movement Rules
* **Orthogonal & Diagonal Stepping:** A bead slides along any connected line to an adjacent vacant intersection.
* **Restricted Stepping (Dama & Forward/Side Mode):** Ordinary pieces can only step forward or sideways, restricting retreat until crowned as a King.
* **Navakankari Sliding:** Beads slide strictly along lines of 3-in-a-row squares.
* **3-Bead Flying Phase:** In Navakankari, when a player is reduced to their last 3 beads, if European Flying is enabled, their beads can hop to any empty intersection on the board.

### Capture Styles
1. **Collinear Leap Capture (Katar, Sholo Guti, Pretwa, Lau Kata Kati):**  
   If an enemy bead is adjacent and the node immediately beyond it along the same straight line is vacant, your bead leaps over the enemy into the vacant node, removing the enemy bead.
2. **Mill Formation (Navakankari, 12-Men, Teen Guti, Chhah Guti):**  
   Aligning 3 beads of your color in a straight line forms a **Katar (Mill)**. Upon formation, you select and remove one opponent bead from anywhere on the board.
3. **Approach & Withdrawal Capture (Fanorona):**  
   * *Approach:* Stepping toward an adjacent enemy bead captures that bead and all contiguous enemy beads behind it along that line.  
   * *Withdrawal:* Stepping directly away from an adjacent enemy bead captures that bead and all contiguous enemy beads behind it in the line you moved away from.
4. **Custodian Sandwich Capture (Seega):**  
   Moving your bead so that an enemy bead is trapped orthogonally between two of your beads captures the sandwiched enemy bead. The central node (sanctuary) is permanently immune to capture.
5. **Crowned King Leaps (Dama):**  
   Crowned Kings slide across any number of vacant squares along straight orthogonal lines and leap over enemy pieces from any distance, landing on any vacant square beyond.

---

## 4. Tactical Studio & Rule Customization Engine

Accessible via the top bar and the **Grid & Settings Studio modal**, users can customize rules:

* **Capture Style:**
  * `⚡ Multi-Eat`: Multiple consecutive jump captures in a single bari (turn) are permitted.
  * `1️⃣ 1 Bead/Bari`: Strictly one capture per bari. The turn ends immediately after one jump.
* **Mandatory (Forced) Capture:**
  * `⚔️ Free Capture`: Capturing is optional; players can choose a peaceful step even if a jump is open.
  * `🎯 Forced Capture`: If any jump capture is available, the player MUST capture.
* **Navakankari Removal Rule:**
  * `🎯 Kill Any Bead (Local Area Rule)`: Players can kill ANY opponent bead, even one inside an existing 3-in-a-row line.
  * `🛡️ Protect 3-in-Row (Classic Rule)`: Opponent beads that form a completed mill cannot be removed unless no other beads exist.
* **Navakankari Drop Phase:**
  * `🔄 1-by-1 Lay`: Players alternate placing 1 bead per turn.
  * `📦 Lay All Beads First`: Player 1 lays all 9 beads first, then Player 2 lays all 9 beads.
* **Navakankari Landing Mill:**
  * `⭐ Katar on Land: ON`: Forming a 3-in-a-row mill during the initial drop phase immediately triggers a bead removal.
  * `🚫 No Katar on Land`: Mills formed during the drop phase do not trigger removals until the sliding phase begins.
* **Dama King Range:**
  * `👑 Flying Kings`: Crowned kings slide across long empty lines.
  * `👑 1-Step Kings`: Crowned kings move one step in all directions.
* **Diagonal Connectivity:**
  * Full 8-Way Star, Alternating Alquerque, Major Corner Diagonals, or 4-Way Orthogonal.
* **Open Center Geometry:**
  * 4-Node Open Square, 2-Node Central Nexus, Full Middle Rank Open, Single Center Node.

---

## 5. Turn Clocks, Overall Match Timers & Tiebreak Rules

* **Turn Timer (Per-Bari Clock):**  
  Settings: `Untimed`, `10s`, `15s`, `20s`, `30s`, `45s`, `60s`, `90s`. If the clock expires, an auto-move is played if possible; otherwise, the turn is forfeited.
* **Overall Match Timer (Maximum Game Clock):**  
  Settings: `Untimed`, `1m`, `2m`, `3m`, `5m`, `8m`, `10m`, `15m`.  
  **Fair Tiebreak Protocol upon Expiration:**
  1. The player with the **highest number of remaining active beads** immediately wins the game.
  2. If active beads are equal, the player with the **highest number of captured enemy beads** wins.
  3. If both remaining beads and captures are identical, the match is declared a **Stalemate Draw**.

---

## 6. Mid-Game Leave, Disconnect Grace & Abandonment Forfeits

Online and local tabletop games are frequently interrupted by phone calls, messages, or prayer times. The app features a **Mid-Game Leave & Disconnect Grace System**:
* **Automatic Interruption Detection:** Triggered whenever a player switches apps, minimizes the browser, experiences Wi-Fi hotspot drops, or disconnects.
* **Return Window:** Configurable from 15s to 180s (default: 60s).
* **Live Banner & Progress Bar:** Displays an animated countdown banner with an active progress bar and "Waiting for Player to Return..." alert.
* **Manual "Away Timer" Button:** Lets a player deliberately pause for a quick break.
* **"I'm Back (Resume)" Button:** Clears the countdown and resumes normal game clocks.
* **Abandonment Forfeit:** If the away player fails to return before the countdown reaches 0s, victory is awarded to the waiting player by forfeit!
* **Online Fairness:** In a Global match, an explicit quit (`🏳️ Leave`) forfeits immediately. A network drop starts the same grace window on both devices; if both links stay down for the whole window, the match ends without a false winner instead of awarding both players a win. Reopening the app on the same device auto-rejoins the room and restores the board for up to 15 minutes.

---

## 7. Mid-Game Action Guard, Game Lock & Match Stashing

* **Mid-Game Action Guard:** If an active match is in progress and a user taps a different game preset or restart, a protection modal appears with three options:
  1. `💾 Save (Stash) Current Match & Switch`: Preserves the active match into a dedicated memory slot (`katar_stashed_match_v1`).
  2. `🔄 Discard Current Match & Proceed`: Wipes the match and starts the new game.
  3. `↩️ Cancel & Keep Playing`: Returns safely to the match.
* **One-Tap Match Resumption:** Stashed games can be resumed anytime via the top-bar button `📂 Resume Saved`.
* **Hardware Back-Button Shield:** Intercepts Android hardware back gestures and browser back navigation using `window.history.pushState` to prevent accidental exits.
* **Game Lock Toggle (`🔓 / 🔒`):** Locks all grid presets and configurations to prevent accidental taps by children or players.

---

## 8. 4-Tier Strategic AI Engine Architecture

* **Easy AI (Novice / Casual 🌱):** Plays random legal moves with basic capture opportunism. Perfect for children and beginners.
* **Medium AI (Tactical Sparring ⚔️):** Uses heuristic piece evaluation, center-proximity weighting, fork detection, and immediate threat blocking.
* **Hard AI (Sardar Commander 🛡️):** Minimax search with Alpha-Beta pruning, mobility scoring, and dynamic simulation of chain jump combinations.
* **Hardest AI (Khan Minimax Master 🔥):**
  * Employs an in-memory Transposition Table (`MorrisTT`) caching board states up to 45,000 entries.
  * Iterative deepening with time-budgeted cutoffs to prevent UI freezing.
  * Mill-line weighting, see-saw mill formation detection, and endgame 3-bead trapping routines.

---

## 9. Multiplayer & Wireless Connectivity (WebRTC, QR, MQTT)

### 1. 2-Player Pass & Play (Local Single Phone)
* Play face-to-face on one mobile or tablet.
* Optional **Auto-Rotate (180°)** flips board perspective to face each player on their turn.

### 2. 100% Offline 2-Phone Wireless P2P (WebRTC DataChannel over Wi-Fi Hotspot)
* **Zero Internet Required:** Phone 1 turns on **Personal Hotspot**; Phone 2 connects via Wi-Fi.
* **Compact QR Handshake:** Phone 1 generates a Host Offer QR; Phone 2 scans it with its camera to generate an Answer QR; Phone 1 scans the return code.
* **Pako Deflate Compression:** Compresses SDP credentials into ultra-short `pk:...` tokens for reliable, rapid camera scanning.
* **PC Clipboard Fallback:** Devices without cameras can use `Copy Code` and `Paste Code` buttons or press &lt;kbd&gt;Ctrl+V&lt;/kbd&gt;.

### 3. Shared Wi-Fi / LAN MQTT Auto-Lobby
* When connected to local Wi-Fi, devices automatically join a public WebSocket MQTT lobby (`broker.emqx.io:8084`).
* Displays a live list of nearby players with their avatars, names, and platform tags (`📱 Mobile` / `💻 PC`).
* Tap `⚔️ Send Request` to dispatch an instant challenge; the other device receives a prompt to Accept and start the match with zero QR codes.

### 4. 🌍 Global Online Matches (PeerJS + Direct WebRTC)
* **Worldwide Pairing:** Open **Mode / P2P → 🌍 Global**. Phone 1 taps **👑 Host World Room** to get a 6-character room code and QR; Phone 2 types the code, scans the QR, or opens the shared invite link (`...#join=CODE`).
* **Signaling Only:** The free public PeerJS cloud (or your own PeerServer configured under **⚙️ PeerJS Server & TURN Settings**) introduces the two devices. Gameplay itself is a direct encrypted WebRTC DataChannel — no server sees the moves.
* **Same-Wi-Fi Internet Failover:** The host keeps a second direct LAN WebRTC data channel warm. If the internet disappears, the app promotes that link automatically and the match continues over Wi-Fi/Hotspot with no lost move.
* **Resume After Reload / App Close:** A mid-game snapshot stores the room code, role, and board. Reopening the game within 15 minutes re-hosts or rejoins the same room automatically; the host resends authoritative state so both boards match exactly.
* **Strict Side Lock:** Each player is locked to their own side. Locally, turns you do not own are blocked. Remotely, every packet is checked against the peer's role and a regenerated legal-move list (`authorizeRemoteAction`), so spoofed coordinates, captures, or out-of-turn moves are rejected.
* **Disconnect Policy:** Explicit `🏳️ Leave` sends an immediate forfeit to the opponent. A network drop, crash, or backgrounding starts the configurable Return Window; reconnecting cancels it and resumes. If both devices stay offline past the window, the match ends without awarding a false win.
* **Anti-Replay:** Packets carry a sender ID and monotonic sequence number; replays are dropped, and the host is the only authority for full board state (guests may only request a resync).

---

## 10. Player Profile, Lifetime Career Stats & Portable Backups

* **Identity Onboarding:** Choose an emblem (👑, 🦅, 🦁, ⚔️, 💎, 🐯, 🛡️, 🌙), enter your player name, and pick an honorific title (Sardar, Khan, Malik, Ghazi, Ustad, Warrior).
* **Career Tracking:** Tracks lifetime matches, wins, losses, draws, win streaks, and total beads eaten.
* **Complete System Backup (`.json` & `KATAR-BK:...`):** Exports profile, career records, game settings, remembered devices, and stashed games into a downloadable JSON file or portable text code for instant transfer to new devices.

---

## 11. Immersive Fullscreen Mode, Movable Dock & Zen Mode

* **Fullscreen Immersion:** One-tap distraction-free view hiding all headers, ribbons, and panels to maximize board size.
* **Floating Minimal HUD:** Semi-transparent top bar displaying names, live scores, active turn dot, and countdown timers.
* **Movable Controls Dock:** Reposition the floating toolbar between **Right Rail**, **Left Rail**, and **Bottom Bar**.
* **Collapsible Dock:** Minimize the toolbar into a tiny pill button to clear screen space.
* **Zen Mode:** Hides all floating HUD elements for an unencumbered focus on the board.
* **Auto-Dimming:** HUD automatically dims after 2.5 seconds of inactivity and restores upon touch or pointer movement.

---

## 12. Visual Styling, Canvas Engine & Procedural Audio/Haptics

* **4 Tabletop Surfaces:**
  1. *Royal Parchment & Walnut:* Warm bright parchment with carved walnut lines.
  2. *Carved Peshawar Teak Wood:* Polished wood tones with rich brown engravings.
  3. *Royal Emerald Palace Felt:* Deep green casino felt with golden linework.
  4. *Midnight Marble Slate:* Dark slate with high-contrast glowing lines.
* **4 Piece Themes:** Feroza Beads vs Sang Stones, Royal Cobalt vs Crimson Ruby, Imperial Jade vs Sun Gold, and Carved Ivory vs Royal Onyx.
* **Procedural Web Audio Synthesizer:** Uses custom audio oscillators (zero audio files to download):
  * *Select:* Sine pitch slide (520Hz → 660Hz)
  * *Move:* Soft triangle pop (280Hz → 190Hz)
  * *Capture:* Resonant harmonic dual-pulse (440Hz + 660Hz)
  * *Mill Formed:* 3-tone royal fanfare
  * *Victory:* 4-note arpeggio celebration (440Hz, 554Hz, 659Hz, 880Hz)
  * *Invalid:* Sawtooth warning buzz
* **Android Haptic Feedback:** Triggers tactile pulse patterns on moves, captures, and victories via `navigator.vibrate`.

---

## 13. PWA Installation & 100% Offline Standalone Execution

* **Progressive Web App (PWA):** Features a full `manifest.webmanifest` and service worker (`sw.js`).
* **Standalone Execution:** Tapping **"Install App"** installs Katar as a native home-screen app on Android, iOS, Windows, macOS, and Linux.
* **Offline Cache:** After opening once in a browser, all assets are cached and operate 100% offline indefinitely.

---

# 🇵🇰 اردو تفصیلی گائیڈ و مکمل رہنمائی

## 1. تعارف و تاریخی پس منظر
**قطار (Katar) اور نوکنکری (Navakankari) رائل بورڈ گیم اسٹوڈیو** پشتون ثقافت، بنوں، خیبر پختونخوا اور برصغیر پاک و ہند کے روایتی کھلیانوں، حجروں اور بیٹھکوں کے تاریخی کھیلوں کو جدید ڈیجیٹل دور میں زندہ کرنے کا ایک شاہکار منصوبہ ہے۔

پرانے زمانوں میں ہمارے بزرگ زمین پر لکیریں کھینچ کر پتھروں، مٹی کی گولیوں اور لکڑی کے ٹکڑوں سے جو تاریخی کھیل کھیلتے تھے، اس ایپ میں ان تمام کھیلوں کو انتہائی خوبصورت گرافکس، بغیر انٹرنیٹ کے دو موبائلوں کے رابطے اور انتہائی ذہین کمپیوٹر (AI) کے ساتھ یکجا کر دیا گیا ہے۔

یہ ایپ معروف سافٹ ویئر انجینئر **یاسین اللہ (Yasin Ullah) – بنوں سافٹ ویئر سلوشنز (Bannu Software Solutions)** نے اپنے پیارے چھوٹے بھائی **محب اللہ (Muhib Ullah)** کے نام بنائی ہے۔

---

## 2. ایپ میں موجود 14 سے زیادہ کھیلوں کی مکمل تفصیل

1. **6×6 قطار (Katar Classic - 36 خانے • 18v18 گوٹیاں):** پشتونوں کا روایتی کھیل جس میں ایک گوٹی دوسری پر سے چھلانگ لگا کر اسے مارتی ہے۔
2. **نوکنکری (Navakankari - 24 خانے • 9v9 گوٹیاں):** تین چوکور لکیروں پر اپنی 3 گوٹیاں ایک سیدھی قطار میں لائیں اور دشمن کی ایک گوٹی باہر نکالیں۔
3. **12 گوٹیوں والی قطار (12-Men's Katar Mill):** نوکنکری کی طرح مگر اس میں چاروں کونوں پر ترچھی لکیریں ہوتی ہیں اور گوٹیاں 12 ہوتی ہیں۔
4. **تین گوٹی (Teen Guti - 3v3):** 3×3 کا چھوٹا تختہ، جو پہلے اپنی 3 گوٹیاں سیدھی لکیر میں لائے گا وہ جیت جائے گا۔
5. **چھ گوٹی (Chhah Guti - 6v6):** 16 خانوں کا کھیل جس میں 6، 6 گوٹیاں ہوتی ہیں۔
6. **باغ چال / شیر اور بکریاں (Bagh-Chal - 4 شیر بمقابلہ 20 بکریاں):** بکریاں شیروں کو گھیر کر بند کرتی ہیں اور شیر بکریوں کو کھا کر جیتنے کی کوشش کرتے ہیں۔
7. **آڈو پولی آٹم (Aadu Puli Attam - 3 شیر بمقابلہ 15 بکریاں):** تکون نما پہاڑی نقشہ جہاں 3 شیر 15 بکریوں کا شکار کرتے ہیں۔
8. **لاؤ کاٹا کاٹی / کوا ڈنک (Lau Kata Kati - 19 خانے):** تتلی کے پروں جیسا نقشہ جس میں 9 بمقابلہ 9 گوٹیاں ماری جاتی ہیں۔
9. **پریٹوا (Pretwa - گول دائروں والی قطار - 19 خانے):** تین گول دائرے اور چھ لکیریں، گوٹیاں گول چکر میں بھی چلتی ہیں اور سیدھی لکیر میں بھی۔
10. **فینورونا (Fanorona - 5×5 اور 5×9):** مڈغاسکر کا روایتی کھیل جہاں دشمن کی طرف آگے بڑھ کر بھی گوٹیاں ماری جاتی ہیں اور پیچھے ہٹ کر بھی۔
11. **سیگا (Seega - 5×5):** عرب صحرا کا کھیل جہاں پہلے باری باری 2، 2 گوٹیاں رکھی جاتی ہیں اور پھر دشمن کی گوٹی کو اپنے دو دانوں کے درمیان دبا کر مارا جاتا ہے۔
12. **داما (Dama - 8×8):** گوٹیاں آگے اور دائیں بائیں چلتی ہیں۔ آخری لائن تک پہنچنے والی گوٹی **بادشاہ (King 👑)** بن کر پورے بورڈ پر اڑنے لگتی ہے!
13. **گوموکُو (Gomoku - 9×9):** بغیر کوئی گوٹی مارے، جو کھلاڑی سب سے پہلے اپنی 5 گوٹیاں ایک سیدھی لائن میں لگا لے گا وہ جیت جائے گا۔
14. **37 پوائنٹ شولو گوٹی (Sholo Guti):** خیموں اور کیمپوں والا بڑا میدان۔
15. **اپنی مرضی کا تختہ (Custom Grid):** 4×4 سے 9×9 تک جتنا بڑا چاہیں تختہ خود تیار کریں۔

---

## 3. اصول و قواعد اور چال چلنے کا طریقہ
* **سادہ چال:** اپنی گوٹی کو چھوئیں، وہ چمکنے لگے گی۔ جڑے ہوئے خالی خانے پر انگلی رکھیں، گوٹی وہاں چلی جائے گی۔
* **چھلانگ لگا کر گوٹی مارنا:** اگر دشمن کی گوٹی آپ کے بالکل آگے ہو اور اس کے پیچھے والا خانہ خالی ہو، تو آپ کی گوٹی اس پر سے پھلانگ کر اسے مار دے گی۔
* **نوکنکری میں قطار بنانا:** جب بھی آپ کی 3 گوٹیاں سیدھی لائن میں آ جائیں گی، گھنٹی بجے گی اور آپ دشمن کی ایک گوٹی بورڈ سے ہٹا سکیں گے۔

---

## 4. سیٹنگز، گوٹیاں کھانے کا انداز اور کسٹم بورڈ
* **لگاتار گوٹیاں کھانا (Multi-Eat):** ایک باری میں لگاتار کئی گوٹیاں کھائی جا سکتی ہیں۔
* **ایک گوٹی کھانے کا موڈ (1 Bead/Bari):** ایک باری میں صرف ایک ہی گوٹی ماری جا سکتی ہے۔
* **زبردستی مارنا (Forced Capture):** اگر کوئی گوٹی مر رہی ہو تو لازمی مارنی پڑے گی۔
* **قطار توڑنے کا اصول (Kill Any Bead):** مخالف کی 3 گوٹیوں کی بنی ہوئی قطار میں سے بھی گوٹی توڑی جا سکتی ہے۔
* **3 گوٹیوں کا اڑنا (Flying Rule):** نوکنکری میں جب آخری 3 گوٹیاں رہ جائیں تو وہ کسی بھی خالی خانے پر اڑ کر جا سکتی ہیں۔

---

## 5. ٹائمر، میچ کلاک اور ٹائی بریک
* **فی باری کا ٹائمر:** 10 سیکنڈ سے 90 سیکنڈ تک فی چال کا وقت رکھا جا سکتا ہے۔
* **پورے میچ کا ٹائمر:** 1 منٹ سے 15 منٹ تک کا میچ کلاک۔ اگر وقت ختم ہو جائے تو جس کی زیادہ گوٹیاں بچی ہوں گی وہ جیت جائے گا!

---

## 6. گیم کے دوران کھلاڑی کا غائب ہونا (Away Timer) اور فتح کا اصول
اگر کسی کھلاڑی کو فون آ جائے یا وہ اٹھ کر چلا جائے، تو **Away Timer** بٹن دبائیں۔ 60 سیکنڈ کی الٹی گنتی شروع ہو جائے گی۔ اگر وہ وقت پر واپس آ جائے تو میچ دوبارہ شروع ہو جائے گا، ورنہ حاضر کھلاڑی کو خود بخود **فاتح** قرار دے دیا جائے گا!

---

## 7. گیم لاک اور پرانی گیم محفوظ رکھنا (Stash Match)
* **گیم لاک (🔒):** دورانِ کھیل کوئی بھی بٹن دبنے سے گیم تبدیل نہیں ہوگی۔
* **میچ محفوظ رکھنا (Stash):** ادھورا میچ محفوظ کر کے دوسرا کھیل شروع کریں، بعد میں **"📂 Resume Saved"** دبا کر وہیں سے کھیل دوبارہ شروع کریں!

---

## 8. چار درجاتی کمپیوٹر (AI) کی خصوصیات
1. **Easy (سبز پودا 🌱):** آسان لیول، بچوں اور نئے کھلاڑیوں کے لیے۔
2. **Medium (تلواریں ⚔️):** درمیانہ ہوشیار لیول۔
3. **Hard (ڈھال 🛡️):** سردار لیول، گہری سوچ بچار والا کمپیوٹر۔
4. **Hardest (خان لیول 🔥):** ماسٹر لیول، جو ٹرانسپوزیشن ٹیبل کے ذریعے چالیس چالیں پہلے سوچ لیتا ہے!

---

## 9. بغیر انٹرنیٹ دو موبائلوں کو جوڑنے کا مکمل طریقہ
1. موبائل 1 کا **ہاٹ اسپاٹ (Hotspot)** آن کریں۔
2. موبائل 2 کا **وائی فائی (Wi-Fi)** آن کر کے موبائل 1 سے جوڑ لیں۔ (انٹرنیٹ کی ضرورت نہیں!)
3. دونوں موبائلوں پر گیم کھول کر **"Mode / P2P"** دبائیں۔
4. موبائل 1 پر **"👑 Host Match"** دبائیں (کیو آر کوڈ سامنے آ جائے گا)۔
5. موبائل 2 پر **"📷 Scan QR"** دبا کر کیمرے سے وہ کوڈ اسکین کر لیں۔
6. دونوں موبائل فوراً وائرلیس جڑ جائیں گے اور آپ مزے سے بغیر انٹرنیٹ آمنے سامنے کھیل سکتے ہیں!

**🌍 گلوبل آن لائن میچ (Global Online):** اب آپ دنیا کے کسی بھی کونے میں موجود دوست کے ساتھ بھی کھیل سکتے ہیں۔ "Mode / P2P" میں **🌍 Global** ٹیب کھولیں۔ موبائل 1 پر **👑 Host World Room** دبائیں تو 6 حروف کا روم کوڈ اور کیو آر کوڈ بنے گا۔ موبائل 2 پر وہی کوڈ لکھیں، کیو آر اسکین کریں، یا دعوتی لنک (`#join=CODE`) کھول لیں۔ کھیل کی ہر چال دونوں موبائلوں کے درمیان براہِ راست خفیہ WebRTC لنک پر جاتی ہے۔ اگر انٹرنیٹ چلا جائے مگر دونوں موبائل ایک ہی وائی فائی/ہاٹ اسپاٹ پر ہوں تو ایپ خود بخود LAN لنک پر منتقل ہو جاتی ہے اور کھیل رکتا نہیں۔ ایپ بند ہو جانے یا نیٹ ورک ٹوٹنے پر 15 منٹ تک دوبارہ کھولنے پر وہی روم اور وہی بورڈ بحال ہو جاتا ہے۔ 🏳️ Leave دبانے پر فوراً ہار/جیت ہو جاتی ہے، جبکہ نیٹ ورک کے غائب ہونے پر مقررہ وقت کی مہلت ملتی ہے۔

---

## 10. پروفائل، شاہی نشان، لائف ٹائم ریکارڈ اور بیک اپ
* اپنا شاہی نشان چنیں: 👑، 🦅، 🦁، ⚔️، 💎، 🐯، 🛡️، 🌙۔
* اپنا نام اور لقب منتخب کریں (سردار، خان، ملک، غازی، استاد)۔
* اپنے تمام میچوں کا ریکارڈ دیکھیں: کل میچ، جیت، ہار، مسلسل فتوحات (Streak)۔
* **Backup & Restore:** اپنا تمام ریکارڈ فائل یا کوڈ کی صورت میں ڈاؤن لوڈ کریں اور نئے موبائل میں ایک سیکنڈ میں بحال کریں۔

---

## 11. فل اسکرین (Immersive) اور زین موڈ
* **Play Fullscreen** کا بٹن دبانے سے تمام فالتو مینو چھپ جاتے ہیں اور پورے موبائل پر صرف شاندار لکڑی کا بورڈ نظر آتا ہے۔
* کنٹرولز والے ڈبے کو دائیں، بائیں یا نیچے منتقل کیا جا سکتا ہے یا چھوٹا کیا جا سکتا ہے۔
* **Zen Mode** سے تمام بٹن غائب ہو جاتے ہیں اور صرف کھیل پر توجہ مرکوز رہتی ہے۔

---

## 12. انسٹالیشن اور موبائل ہوم اسکرین گائیڈ
* اوپر **"Install App"** کا بٹن دبائیں۔
* گیم بغیر پلے سٹور کے براہِ راست آپ کے موبائل کی ہوم سکرین پر عام ایپس کی طرح انسٹال ہو جائے گی۔
* ایک بار کھلنے کے بعد یہ ہمیشہ کے لیے 100 فیصد آف لائن چلے گی!

---

&lt;div align=&quot;center&quot;&gt;

### 🏆 روایتی کھیلیں • ہمارا فخر اور پہچان
**یاسین اللہ – بنوں سافٹ ویئر سلوشنز**  
📱 واٹس ایپ: **0336-1593533**  
*Dedicated with love to my little brother **Muhib Ullah** ❤️*

&lt;/div&gt;
