# 👑 Katar (قطار) & Navakankari (نوکنکری) — Royal Board Game Studio
### *Ancient Pashtun & South Asian Strategic Tabletop Games on Modern Web Architecture*

[License: Proprietary — All Rights Reserved](LICENSE)
[](index.html)
[](index.html)
[](index.html)
[](index.html)

---

### © Copyright & Ownership

**Copyright © 2026 Yasin Ullah. All Rights Reserved.**

This game — including its source code, game logic, AI engine, board design,
artwork, text, audio, and branding — is the exclusive property of
**Yasin Ullah**.

Copying, reproducing, modifying, merging, publishing, distributing,
sublicensing, selling, or reusing any part of this work is **strictly
prohibited** without prior written permission from the author.

Attribution, only where written permission has been granted, must read:

> **Katar & Navakankari Game © 2026 Yasin Ullah**
> https://github.com/yasinULLAH/kataarGame

See [`LICENSE`](LICENSE) for the complete terms and
[`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md) for bundled library licenses.

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
   * [2. Complete Catalog of 36+ Traditional & Classic Board Games](#2-complete-catalog-of-36-traditional--classic-board-games)
   * [3. Game Rules, Topologies & Capture Mechanics](#3-game-rules-topologies--capture-mechanics)
   * [4. Tactical Studio, Rule Customization & Speed Pacing Engine](#4-tactical-studio-rule-customization--speed-pacing-engine)
   * [5. Turn Clocks, Overall Match Timers & Tiebreak Rules](#5-turn-clocks-overall-match-timers--tiebreak-rules)
   * [6. Mid-Game Leave, Disconnect Grace & Abandonment Forfeits](#6-mid-game-leave-disconnect-grace--abandonment-forfeits)
   * [7. Mid-Game Action Guard, Game Lock & Match Stashing](#7-mid-game-action-guard-game-lock--match-stashing)
   * [8. 4-Tier Strategic AI, AI vs AI, Adaptive Brain & Puter Cloud Real AI](#8-4-tier-strategic-ai-ai-vs-ai-adaptive-brain--puter-cloud-real-ai)
   * [9. Multiplayer & Wireless Connectivity (Global PeerJS, WebRTC, QR, MQTT)](#9-multiplayer--wireless-connectivity-webrtc-qr-mqtt)
   * [10. Player Profile, Lifetime Career Stats & Portable Backups](#10-player-profile-lifetime-career-stats--portable-backups)
   * [11. Immersive Fullscreen Mode, Movable Dock & Zen Mode](#11-immersive-fullscreen-mode-movable-dock--zen-mode)
   * [12. Visual Styling, Canvas Engine & Procedural Audio/Haptics](#12-visual-styling-canvas-engine--procedural-audiohaptics)
   * [13. PWA Installation & 100% Offline Standalone Execution](#13-pwa-installation--100-offline-standalone-execution)
   * [14. Main Menu Hub, Live Board Preview & Pause/Resume System](#14-main-menu-hub-live-board-preview--pauseresume-system)
   * [15. Fullscreen Match Replay Engine & Saved History Library](#15-fullscreen-match-replay-engine--saved-history-library)
   * [16. Native Android APK (Capacitor) & Automated GitHub Actions CI/CD](#16-native-android-apk-capacitor--automated-github-actions-cicd)
2. [اردو تفصیلی گائیڈ و مکمل رہنمائی (Urdu Comprehensive Documentation)](#-اردو-تفصیلی-گائیڈ-و-مکمل-رہنمائی)
   * [1. تعارف و تاریخی پس منظر](#1-تعارف-و-تاریخی-پس-منظر)
   * [2. ایپ میں موجود 36 سے زیادہ کھیلوں کی مکمل تفصیل](#2-ایپ-میں-موجود-36-سے-زیادہ-کھیلوں-کی-مکمل-تفصیل)
   * [3. اصول و قواعد اور چال چلنے کا طریقہ](#3-اصول-و-قواعد-اور-چال-چلنے-کا-طریقہ)
   * [4. سیٹنگز، گوٹیاں کھانے کا انداز، رفتار کنٹرول اور کسٹم بورڈ](#4-سیٹنگز-گوٹیاں-کھانے-کا-انداز-رفتار-کنٹرول-اور-کسٹم-بورڈ)
   * [5. ٹائمر، میچ کلاک اور ٹائی بریک](#5-ٹائمر-میچ-کلاک-اور-ٹائی-بریک)
   * [6. گیم کے دوران کھلاڑی کا غائب ہونا (Away Timer) اور فتح کا اصول](#6-گیم-کے-دوران-کھلاڑی-کا-غائب-ہونا-away-timer-اور-فتح-کا-اصول)
   * [7. گیم لاک اور پرانی گیم محفوظ رکھنا (Stash Match)](#7-گیم-لاک-اور-پرانی-گیم-محفوظ-رکھنا-stash-match)
   * [8. چار درجاتی کمپیوٹر (AI)، خودکار جنگ (AI vs AI)، سیکھنے والا دماغ اور کلاؤڈ Real AI](#8-چار-درجاتی-کمپیوٹر-ai-خودکار-جنگ-ai-vs-ai-سیکھنے-والا-دماغ-اور-کلاؤڈ-real-ai)
   * [9. بغیر انٹرنیٹ دو موبائلوں کو جوڑنے کا مکمل طریقہ](#9-بغیر-انٹرنیٹ-دو-موبائلوں-کو-جوڑنے-کا-مکمل-طریقہ)
   * [10. پروفائل، شاہی نشان، لائف ٹائم ریکارڈ اور بیک اپ](#10-پروفائل-شاہی-نشان-لائف-ٹائم-ریکارڈ-اور-بیک-اپ)
   * [11. فل اسکرین (Immersive) اور زین موڈ](#11-فل-اسکرین-immersive-اور-زین-موڈ)
   * [12. انسٹالیشن اور موبائل ہوم اسکرین گائیڈ](#12-انسٹالیشن-اور-موبائل-ہوم-اسکرین-گائیڈ)
   * [13. مین مینیو ہب، لائیو بورڈ پریویو، پاز/ریزیوم اور میچ ری پلے سسٹم](#13-مین-مینیو-ہب-لائیو-بورڈ-پریویو-پازریزیوم-اور-میچ-ری-پلے-سسٹم)
   * [14. اینڈرائیڈ APK ایپ (Capacitor) اور خودکار اپڈیٹ سسٹم](#14-اینڈرائیڈ-apk-ایپ-capacitor-اور-خودکار-اپڈیٹ-سسٹم)

---

# 🇬🇧 English Documentation

## 1. Project Overview & Cultural Heritage
**Katar (قطار) & Navakankari (نوکنکری) Royal Board Game Studio** is a unified, high-performance web and mobile application designed to preserve, celebrate, and modernize the ancient tabletop strategy games of Khyber Pakhtunkhwa, the Pashtun heartland, the broader Indian Subcontinent, Central Asia, the Middle East, and Madagascar.

Historically played on sandy courtyards, village chauks (hujras), woven rugs, and carved stones using dry clay beads, river pebbles, and date seeds, these games represent centuries of military strategy, geometric intellect, and social fellowship. 

This studio digitalizes these games within a responsive, 60 FPS HTML5 Canvas engine, featuring procedural visual themes, a pure Web Audio API synthesizer, an offline WebRTC & Global PeerJS multiplayer stack, a fullscreen Match Replay system, a mobile-first Main Menu Hub, an Adaptive Self-Learning AI Brain alongside optional Puter Cloud LLM opponents, and native Android APK packaging via Capacitor.

---

## 2. Complete Catalog of 36+ Traditional & Classic Board Games

The app implements a flexible mathematical graph representation (`Nodes`, `Edges`, `Adjacency`, `CollinearJumps`, and `MillLines`) organized into five Main Menu categories (**Katar**, **Mills**, **Hunt**, **Royal**, **Align**) plus Custom R×C grids, supporting the following game topologies:

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

### 16. Lasker Morris / Ten Men's Morris (24 Nodes • 10v10 Beads)
* **Cultural Origin:** Invented by World Chess Champion Emanuel Lasker as a richer evolution of Nine Men's Morris.
* **Layout:** Standard 3 concentric squares connected at side midpoints (24 nodes, 16 mill lines).
* **Setup:** 10 beads per player in reserve.
* **Objective:** From **Turn 1**, players may either drop a bead from hand OR slide an already-placed bead along connected lines to form 3-in-a-row Katar lines and remove opponent pieces.

### 17. Saat Guti / Seven Men's Morris (17 Nodes • 7v7 Beads)
* **Cultural Origin:** South Asian & Medieval European variant bridging Six and Nine Men's Morris.
* **Layout:** 2 concentric squares linked at the 4 midpoints with a central cross nexus hub (17 nodes, 10 mill lines).
* **Setup:** 7 beads per player.
* **Objective:** Form 3-in-a-row mills along perimeter rings or central axes to capture opponent beads.

### 18. Picaria / Diagonal Blitz Mill (13 Nodes • 3v3 Beads)
* **Cultural Origin:** Traditional Pueblo / Southwest Native American geometric alignment strategy.
* **Layout:** Square frame divided into 4 quadrants with intersecting internal diamonds (13 nodes).
* **Setup:** 3 beads per player in hand (dropping on the exact center node is forbidden on Turn 1).
* **Objective:** Drop and slide beads across orthogonal and diagonal intersections; first player to align 3 beads in a straight row wins.

### 19. Dara (5×6 Orthogonal Katar Mill • 30 Nodes • 12v12 Beads)
* **Cultural Origin:** Ancient West African (Niger/Nigeria) pastoral strategy classic.
* **Layout:** 5×6 orthogonal rectangular grid (30 nodes).
* **Setup:** 12 beads per player placed turn-by-turn (cannot form 3-in-a-row during initial drop placement).
* **Objective:** Slide orthogonally to form an exact 3-in-a-row line (4+ in a row is ignored as overline) to capture an opponent bead.

### 20. Sher-Bakar (37 Nodes • 1 Giant Tiger vs 16 Goats)
* **Cultural Origin:** Punjabi & North Indian traditional war hunt played on a fortified Alquerque layout.
* **Layout:** Central 5×5 Alquerque grid with 2 six-node triangular end camps (37 nodes).
* **Setup:** 1 Giant Tiger stationed at the center against 16 Goats surrounding it (capture win target: 6 Goats).
* **Objective:** The Giant Tiger leaps over **1 to 3 contiguous aligned Goats** in a single straight jump into an empty landing intersection; Goats coordinate to trap the Tiger with zero legal moves.

### 21. Rimau-Rimau (37 Nodes • 2 Tigers vs 22 Goats)
* **Cultural Origin:** Classic Malaysian twin-tiger asymmetric hunt.
* **Layout:** 37-node Alquerque grid with North and South triangular camps.
* **Setup:** 2 Tigers vs 22 Goats (9 clustered on board + 13 in reserve hand; capture win target: 8 Goats).
* **Objective:** Tigers hunt Goats via leap captures; Goats deploy carefully from reserve to block all Tiger mobility.

### 22. Fox & Geese (33 Nodes • 2 Foxes vs 15 Geese)
* **Cultural Origin:** Medieval European & Nordic asymmetric cross-board classic (Halatafl).
* **Layout:** Cruciform 33-node cross grid.
* **Setup:** 2 omnidirectional leaping Foxes vs 15 Geese restricted to moving forward or sideways (no retreating; win target: 11 Geese).
* **Objective:** Foxes win by devouring 11 Geese; Geese advance like a phalanx to hem both Foxes in completely.

### 23. Gol Ekuish Grand Wheel Katar (33 Nodes • 16v16 Beads)
* **Cultural Origin:** Traditional Bengali & Eastern Subcontinent monumental circular hunt game.
* **Layout:** 4 concentric circular rings intersected by 8 radial spokes meeting at a central hub (33 nodes).
* **Setup:** 16 beads per player with center hub open.
* **Objective:** Leap-capture across radial spokes and circular perimeters until the opponent has no pieces left.

### 24. Tablut / Royal Escort (7×7 Orthogonal • King + 8 Guards vs 16 Ambushers)
* **Cultural Origin:** Sámi & Viking Tafl family strategy recorded by Carl Linnaeus in Lapland.
* **Layout:** 7×7 orthogonal grid (49 nodes) with guarded center **Throne** and 4 **Corner Sanctuaries**.
* **Setup:** Player 1 commands 1 King + 8 Guards defending the center; Player 2 commands 16 Ambushers stationed along the outer edges.
* **Objective:** All pieces move like Chess Rooks. Guards capture Ambushers via 2-sided custodian sandwiching; the King is captured only by 4-sided encirclement (or Throne edge assistance). White wins if the King escapes to any Corner Sanctuary!

### 25. Turkish / Arab Orthogonal Dama (8×8 • 16v16 Flying Kings)
* **Cultural Origin:** Traditional Anatolian, Levantine, and Mesopotamian orthogonal draughts.
* **Layout:** 8×8 orthogonal grid (64 nodes).
* **Setup:** 16 pieces per player arranged on ranks 2–3 and 6–7.
* **Objective:** Advance or slide sideways orthogonally and jump forward/sideways; reaching the back rank promotes a piece to a **Flying Sultan King** capable of orthogonal long-range slides and 90-degree multi-capture turns.

### 26. Pente (11×11 / 9×9 • 5-in-a-Row or 5 Pair Captures)
* **Cultural Origin:** Modern international strategy evolution of Ninuki-renju / Go-Moku.
* **Layout:** Configurable 11×11 or 9×9 intersection grid.
* **Setup:** Clean empty board.
* **Objective:** Win either by aligning **5 stones in a row** OR by executing **5 custodian pair captures** (flanking exactly 2 adjacent enemy stones on both ends to remove 10 enemy stones total).

### 27. Yavalath (61-Node Hexagonal Grid • 4-in-a-Row Wins, 3-in-a-Row Loses)
* **Cultural Origin:** Computational game-design modern classic built for combinatorial hexagonal play.
* **Layout:** 61-node hexagonal lattice (radius 5 hex).
* **Setup:** Clean empty hex grid.
* **Objective:** Aligning **4 stones in a row wins immediately** — *except* forming an exact **3-in-a-row without simultaneously creating 4 loses the match immediately!**

### 28. Connect6 (11×11 / 9×9 • 2 Drops/Turn • 6-in-a-Row)
* **Cultural Origin:** Fair combinatorial connection game balancing first-player advantage.
* **Layout:** 11×11 or 9×9 grid.
* **Setup:** Clean empty board; Black places 1 stone on Turn 1, then both players place **2 stones per turn** thereafter.
* **Objective:** First player to connect **6 unbroken stones** horizontally, vertically, or diagonally wins.

### 29. Terah Tehni (37-Node Open-Center Sholo Guti • 13v13 Beads)
* **Cultural Origin:** North Indian / Pakistani village variant of Sholo Guti.
* **Layout:** 37-node camp-and-grid board with an expanded open central combat arena.
* **Setup:** 13 beads per player leaving strategic open lanes at kickoff.

### 30. Atharah Guti / 4-Camp Grand Sholo Guti (49 Nodes • 20v20 Beads)
* **Cultural Origin:** Traditional South Asian grand 4-fort battlefield.
* **Layout:** Central 5×5 Alquerque board flanked on all 4 cardinal sides (North, South, East, West) by 6-node triangular forts (49 nodes total).
* **Setup:** 20 beads per player engaging from all four compass directions.

### 31–36. Rectangular Katar Grid Presets (`6×7`, `5×5`, `5×7`, `7×7`, `8×8`, `4×4`)
* **6×7 Extended Katar (`42 Nodes • 18 On-Board`):** Extended tactical battlefield with all 18 beads placed directly on-board.
* **5×5 Baro Guti / Alquerque (`25 Nodes • 12v12`):** Classic 12-bead Alquerque duel.
* **5×7 Long Battlefield (`35 Nodes • 15v15`):** Elongated rectangular campaign board.
* **7×7 Grand Jirga Grid (`49 Nodes • 24v24`):** Large Pashtun council war grid for protracted tactical matches.
* **8×8 Commander Grid (`64 Nodes • 24v24 / 28 Beads`):** Grand commander scale skirmish.
* **4×4 Blitz Skirmish (`16 Nodes • 6v6`):** Fast compact arena ideal for rapid sparring.

---

## 3. Game Rules, Topologies & Capture Mechanics

### Movement Rules
* **Orthogonal & Diagonal Stepping:** A bead slides along any connected line to an adjacent vacant intersection.
* **Restricted Stepping (Dama, Turkish Dama & Forward/Side Mode):** Ordinary pieces can only step forward or sideways, restricting retreat until crowned as a King.
* **Rook Sliding (Tablut):** All King, Guard, and Ambusher pieces slide orthogonally any distance across unoccupied squares (without leaping over other pieces).
* **Navakankari Sliding:** Beads slide strictly along lines of 3-in-a-row squares.
* **Lasker Morris Drop-or-Slide:** Players may either drop a reserve bead or move an existing board bead starting from Move 1.
* **Picaria Turn-1 Restriction:** Opening turn drops cannot occupy the central intersection node.
* **3-Bead Flying Phase:** In Navakankari, when a player is reduced to their last 3 beads, if European Flying is enabled, their beads can hop to any empty intersection on the board.

### Capture Styles
1. **Collinear Leap Capture (Katar, Sholo Guti, Pretwa, Gol Ekuish, Terah Tehni, Atharah Guti, Lau Kata Kati):**  
   If an enemy bead is adjacent and the node immediately beyond it along the same straight line is vacant, your bead leaps over the enemy into the vacant node, removing the enemy bead.
2. **Multi-Bead Span Leap (Sher-Bakar):**  
   The Giant Tiger may leap cleanly over 1, 2, or 3 contiguous aligned Goats in a single collinear jump when the landing node immediately beyond them is empty.
3. **Mill Formation (Navakankari, 12-Men, Lasker Morris, Saat Guti, Picaria, Teen Guti, Chhah Guti, Dara):**  
   Aligning 3 beads of your color in a straight line forms a **Katar (Mill)**. Upon formation, you select and remove one opponent bead from anywhere on the board. In **Dara**, forming 3-in-a-row is blocked during initial drop placement, and only an exact 3-bead line (not 4+) triggers capture.
4. **Approach & Withdrawal Capture (Fanorona):**  
   * *Approach:* Stepping toward an adjacent enemy bead captures that bead and all contiguous enemy beads behind it along that line.  
   * *Withdrawal:* Stepping directly away from an adjacent enemy bead captures that bead and all contiguous enemy beads behind it in the line you moved away from.
5. **Custodian Sandwich Capture (Seega, Tablut, Pente):**  
   * *Seega:* Moving your bead so that an enemy bead is trapped orthogonally between two of your beads captures it; the center sanctuary is permanently immune.
   * *Tablut:* Flank an opposing warrior orthogonally against another friendly piece (or corner/empty Throne); capturing the King requires 4-sided encirclement (or 3 sides plus the Throne).
   * *Pente:* Flanking **two adjacent enemy stones** on both ends along any orthogonal or diagonal line removes both enemy stones (Pair Capture; 5 pair captures = instant win).
6. **Crowned King Leaps (Dama & Turkish Dama):**  
   Crowned Kings slide across any number of vacant squares along straight orthogonal lines and leap over enemy pieces from any distance, landing on any vacant square beyond (including 90-degree multi-capture chains in Turkish Dama).
7. **Inverse Trap Victory/Loss (Yavalath & Connect6):**  
   In Yavalath, creating an exact 3-in-a-row without a 4-in-a-row triggers an instant loss; in Connect6, double placements accelerate race-to-6 tactics.

---

## 4. Tactical Studio, Rule Customization & Speed Pacing Engine

Accessible via the top bar, Main Menu Settings, and the **Grid & Settings Studio modal**, users can customize rules and match pacing:

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
* **Movement & AI Pacing Speed Controls (`selMoveSpeedPreset`):**
  * Choose from 5 built-in tempo presets: `⚡ Default Fast` (0.48s AI / 0.18s Slide), `🐢 Slow & Relaxed` (1.10s AI / 0.45s Slide), `🎭 Dramatic & Cinematic` (1.90s AI / 0.80s Slide), `🐌 Slowest / Study Mode` (3.00s AI / 1.25s Slide), or `🎛️ Custom Time`.
  * Fine-tune **AI Thinking Delay Slider** (`100ms – 5000ms`) and **Move Animation Duration Slider** (`80ms – 2500ms`) with live persistence (`localStorage`).
* **Victory Board Inspection & Snapshot Studio:**
  * Victory modal displays a live **Final Board Snapshot PNG**, the **Last Move Badge**, the **Recent 4 Moves log**, and an **Adaptive AI Brain status banner**.
  * Tap **👁️ Board** (`btnVictoryInspectBoard`) to dismiss the modal temporarily and freely inspect the final tabletop with a slim floating **Victory Inspect Bar** (Re-open Victory Summary, Watch Fullscreen Replay, Exit to Menu).
* **Collapsible Top Controls:**
  * Toggle **Hide Bars / Show Bars** (`btnToggleTopBars`) in the header to reclaim extra vertical screen area on compact phones without entering full Zen mode.

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

## 8. 4-Tier Strategic AI, AI vs AI, Adaptive Brain & Puter Cloud Real AI

* **Easy AI (Novice / Casual 🌱):** Plays random legal moves with basic capture opportunism. Perfect for children and beginners.
* **Medium AI (Tactical Sparring ⚔️):** Uses heuristic piece evaluation, center-proximity weighting, fork detection, and immediate threat blocking.
* **Hard AI (Sardar Commander 🛡️):** Minimax search with Alpha-Beta pruning, mobility scoring, and dynamic simulation of chain jump combinations.
* **Hardest AI (Khan Minimax Master 🔥):**
  * Employs an in-memory Transposition Table (`MorrisTT`) caching board states up to 45,000 entries.
  * Iterative deepening with time-budgeted cutoffs to prevent UI freezing.
  * Mill-line weighting, see-saw mill formation detection, and endgame 3-bead trapping routines.

### 🤖⚔️🤖 AI vs AI Auto-Battle Mode
* Switch to **🤖⚔️🤖 AI vs AI Auto Battle** from the Main Menu or Mode bar to watch two autonomous AI engines spar against each other across any of the 36+ boards.
* Ideal for studying openings, stress-testing custom R×C rules, or enjoying live background tabletop spectacles combined with configurable Speed Pacing (`0.48s` to `3.00s` per move).

### 🧠 Adaptive Self-Learning AI Brain (`MorrisLearner`)
* Persistent machine-learning tactical memory stored offline under `katar_ai_brain_v4` (plus 8-fold rotational & mirror board symmetry normalization via `MorrisSymmetry`).
* **5 Intelligence Evolution Tiers:** Scales dynamically from `Lv 1: Grandmaster Khan` up to `Lv 5: Supreme Overlord AI` as total matches, states mastered, and win streaks grow.
* **12 Pre-Trained Grandmaster Archetypes (`GRANDMASTER_MORRIS_ARCHETYPES`):** Injects classic structural patterns (Double-Mill Triangle, Fork Nexus, Corner Anchor, Wing Flank, Blocking Wedge, Cross-Fork, Trap Pocket, Triple-Threat Matrix, etc.) from Turn 1.
* **Anti-Oscillation (`LoopTracker`) & Imitation Learning:** Automatically penalizes repetitive shuffle loops and learns winning opening/tactical replies observed from strong human opponents.
* **Live Telemetry & Reset:** View learned state count, tactical win-rate boost, and Grandmaster tier in the AI Brain panel and Victory banner, or clear learned weights anytime with **Reset AI Memory**.

### ☁️ Puter Cloud Real AI (`PuterAIManager`) & Live Quota Dashboard
* Select **🧠 Play with Real AI** (`btnMenuModePuter` / `btnModalSelectPuterAI`) to play against flagship cloud LLMs via optional PuterJS integration (`https://js.puter.com/v2/`, lazy-loaded only when needed so offline play never stalls).
* **Difficulty-Aware Model Routing (`selPuterModelOverride`):**
  * *Auto by Difficulty:* Uses ultra-fast low-cost models (`gpt-4o-mini`, `gemini-2.0-flash`, `deepseek-chat`) on Easy/Medium, and deep reasoning/flagship models (`o3-mini`, `deepseek-reasoner`, `claude-3-7-sonnet-latest`, `gpt-4o`) on Hard/Hardest — or pin any specific model manually.
* **Live Quota & Usage Dashboard (`modalPuterStats`):**
  * Header & menu quota badge (`Quota: ...%`) synchronized with `puter.auth.getMonthlyUsage()`, estimated remaining Real AI moves & full matches, hourly/24h/session call & token counters, average response latency, and the **Last Real AI Thought** reasoning snippet.
* **Seamless Offline Fallback:** Every move is validated against the legal move engine (`MoveGenerator`); if the network disconnects, Puter sign-in expires, a request times out, or cloud quota is depleted, the app instantly falls back to the built-in Minimax AI without interrupting the match.

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
* **Complete System Backup (`.json` & `KATAR-BK:...`):** Exports profile, career records, game settings, remembered devices, stashed games, live match state, and saved **Match Replay History** (`katar_match_history_replays_v1`) into a downloadable JSON file or portable text code for instant transfer to new devices.

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
* **Self-Hosted Offline Typography (`fonts.css`):** Bundles `Inter` and `Cinzel` `.woff2` font files directly in the app and Service Worker precache so typography renders identically offline and inside Android APKs.
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

* **Progressive Web App (PWA):** Features a full `manifest.webmanifest` and service worker (`sw.js`, generated from `sw-template.js`).
* **Standalone Execution:** Tapping **"Install App"** installs Katar as a native home-screen app on Android, iOS, Windows, macOS, and Linux.
* **Offline Cache & Share-Link Shell:** After opening once in a browser, all runtime libraries (Tailwind, Lucide, QRCode, jsQR, PeerJS, Pako, MQTT), WOFF2 fonts, and core assets are cached and operate 100% offline indefinitely—with URL query normalization (`?join=`) so shared links launch seamlessly even without connectivity.

---

## 14. Main Menu Hub, Live Board Preview & Pause/Resume System

* **Mobile-First Fullscreen Main Menu Hub (`MainMenu` / `mainMenuOverlay`):**
  * Organizes all 36+ tabletop games into 6 clean filter tabs: `👑 Katar`, `⭐ Mills`, `🐯 Hunt`, `⚔️ Royal`, `⚫ Align`, and `✨ All`.
  * Provides direct mode launchers (`🤖 Solo vs AI`, `🤖⚔️🤖 AI vs AI`, `👥 2-Player Pass & Play`, `🧠 Real AI Cloud Engine`, and `Online / P2P`), embedded **Quick Rules & Setup** controls, and a sticky mobile bottom action dock (`Play Match` / `Resume Match` / `🔄 Restart` / `🏠 End Match`).
* **Live Board Snapshot & Interactive Tap-to-Inspect (`menuBoardSnapshot`):**
  * Renders a live PNG preview of the selected board inside the Main Menu; tapping it or pressing `👁️ View Board` hides the overlay temporarily behind a compact floating **Game Preview Banner** (`gamePreviewBanner`) with a 1-tap `☰ Menu` return button.
* **Pause & Standby State Synchronization:**
  * Dedicated header `Pause` / `Play` button (`btnHeaderPause`) plus keyboard shortcuts (<kbd>Space</kbd>/<kbd>P</kbd> to pause/resume, <kbd>Esc</kbd> to toggle Main Menu) safely suspends turn/match timers in local play and synchronizes `MATCH_FLOW` pause/standby states across Global/P2P peers.

---

## 15. Fullscreen Match Replay Engine & Saved History Library

* **Automatic 25-Match Archive (`MatchHistoryManager`):**
  * Automatically records completed matches (up to 25 replays under `katar_match_history_replays_v1`) with players, game preset, outcome, move count, and full turn-by-turn state frames.
  * Accessible from the Main Menu (`🎬 Replays` button badge), Victory Modal (`🎬 Watch Fullscreen Match Replay`), Victory Inspect Bar (`🎬 Replay`), Guide & Log, and Player Profile.
* **Cinematic Replay Studio (`ReplayManager`):**
  * Scrub smoothly to any turn using the timeline slider (`rngReplayScrubber`), step frame-by-frame (`⏮`, `⏪`, `▶/⏸`, `⏹`, `⏩`, `⏭`), switch playback speeds (`0.5×`, `1×`, `2×`, `4×`), flip board perspective (`🔄`), collapse the controller pill (`▼`), and control playback via keyboard shortcuts (<kbd>Space</kbd>/<kbd>P</kbd>, <kbd>←</kbd>/<kbd>→</kbd>, <kbd>Esc</kbd>).

---

## 16. Native Android APK (Capacitor) & Automated GitHub Actions CI/CD

* **Capacitor 6 Android Shell (`com.yasin.katargame`):**
  * Packaged with `@capacitor/core`, `@capacitor/cli`, and `@capacitor/android` via `capacitor.config.json` and `prepare-www.js` (`npm run build`), bundling all local assets into `www/` and syncing natively to `android/`.
* **Immersive Native Polish (`MainActivity.java`):**
  * Configures Android edge-to-edge sticky immersive fullscreen (`SYSTEM_UI_FLAG_IMMERSIVE_STICKY`), notch cutout support (`LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES`), keeps the screen awake during matches, and requests camera/network/haptic permissions cleanly.
* **GitHub Actions Automated APK Pipeline (`.github/workflows/build-apk.yml`):**
  * Automatically syncs `www/`, sets up JDK 17 + Android SDK, compiles the signed/unsigned APK (`Katar-Game.apk`), uploads build artifacts, and publishes downloadable releases under the `latest` release tag (`v1.0.<run_number>`).

---

# 🇵🇰 اردو تفصیلی گائیڈ و مکمل رہنمائی

## 1. تعارف و تاریخی پس منظر
**قطار (Katar) اور نوکنکری (Navakankari) رائل بورڈ گیم اسٹوڈیو** پشتون ثقافت، بنوں، خیبر پختونخوا اور برصغیر پاک و ہند کے روایتی کھلیانوں، حجروں اور بیٹھکوں کے تاریخی کھیلوں کو جدید ڈیجیٹل دور میں زندہ کرنے کا ایک شاہکار منصوبہ ہے۔

پرانے زمانوں میں ہمارے بزرگ زمین پر لکیریں کھینچ کر پتھروں، مٹی کی گولیوں اور لکڑی کے ٹکڑوں سے جو تاریخی کھیل کھیلتے تھے، اس ایپ میں ان تمام کھیلوں کو انتہائی خوبصورت گرافکس، بغیر انٹرنیٹ کے دو موبائلوں کے رابطے اور انتہائی ذہین کمپیوٹر (AI) کے ساتھ یکجا کر دیا گیا ہے۔

یہ ایپ معروف سافٹ ویئر انجینئر **یاسین اللہ (Yasin Ullah) – بنوں سافٹ ویئر سلوشنز (Bannu Software Solutions)** نے اپنے پیارے چھوٹے بھائی **محب اللہ (Muhib Ullah)** کے نام بنائی ہے۔

---

## 2. ایپ میں موجود 36 سے زیادہ کھیلوں کی مکمل تفصیل

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
16. **لاسکر مورس (Lasker Morris - 24 خانے • 10v10 گوٹیاں):** عالمی شطرنج چیمپئن ایمانویل لاسکر کا تیار کردہ مورس کھیل، جس میں پہلی ہی باری سے آپ نئی گوٹی رکھ بھی سکتے ہیں یا بورڈ پر موجود گوٹی کو چلا بھی سکتے ہیں۔
17. **سات گوٹی (Saat Guti / Seven Men's Morris - 17 خانے • 7v7):** 2 چوکور دائروں اور مرکزی کراس پر مشتمل روایتی کھیل جس میں 10 قطار لائنیں ہوتی ہیں۔
18. **پیکاریا (Picaria - 13 خانے • 3v3):** ترچھی لکیروں والا تیز رفتار کھیل جس میں پہلی باری میں مرکز پر گوٹی رکھنا منع ہوتا ہے اور 3 سیدھی گوٹیاں لانے والا جیتتا ہے۔
19. **دارا (Dara - 5×6 • 30 خانے • 12v12):** مغربی افریقہ کا قدیم کھیل؛ پہلے مرحلے میں قطار نہیں بنائی جا سکتی اور چلنے کے مرحلے میں ٹھیک 3 گوٹیوں کی سیدھی قطار سے دشمن کی گوٹی ماری جاتی ہے (4 یا زیادہ پر نہیں)۔
20. **شیر بکر (Sher-Bakar - 37 خانے • 1 بڑا شیر بمقابلہ 16 بکریاں):** طاقتور شیر ایک ہی سیدھی چھلانگ میں 1 سے 3 بکریوں کے اوپر سے پھلانگ کر شکار کر سکتا ہے (ہدف: 6 بکریاں)۔
21. **ریماؤ ریماؤ (Rimau-Rimau - 37 خانے • 2 شیر بمقابلہ 22 بکریاں):** دو شیروں کا شکار اور 22 بکریوں کا حصار (9 تختے پر اور 13 ہاتھ میں؛ ہدف: 8 بکریاں)۔
22. **لومڑی اور بطخیں (Fox & Geese - 33 خانے • 2 لومڑیاں بمقابلہ 15 بطخیں):** دو چالاک لومڑیاں چاروں طرف چل کر بطخوں کو کھاتی ہیں جبکہ 15 بطخیں صرف آگے یا دائیں بائیں بڑھ کر لومڑیوں کو گھیرتی ہیں۔
23. **گول ایکوئش (Gol Ekuish Grand Wheel - 33 خانے • 16v16):** 4 بڑے گول دائروں اور 8 لکیروں پر مشتمل بنگالی و برصغیر کا شاندار پہیہ نما میدان۔
24. **تابلوٹ / شاہی قافلہ (Tablut Royal Escort - 7×7):** بادشاہ اور 8 محافظ بمقابلہ 16 حملہ آور؛ سب رخ (Rook) کی طرح سیدھا چلتے ہیں، سپاہی 2 طرف سے دبا کر اور بادشاہ 4 طرف سے گھیر کر مارا جاتا ہے، اور بادشاہ کسی کونے میں پہنچ جائے تو جیت جاتا ہے!
25. **ترکی / عربی داما (Turkish Orthogonal Dama - 8×8 • 16v16):** سیدھی لکیروں پر چلنے اور مرنے کا کلاسک داما، جس کا بادشاہ (Flying Sultan) دور تک اڑ کر 90 ڈگری مڑ کر لگاتار گوٹیاں کھاتا ہے۔
26. **پینٹے (Pente - 11×11 / 9×9):** 5 پتھر سیدھی لائن میں جوڑیں یا دشمن کے 2 جڑے ہوئے پتھروں کو دونوں طرف سے گھیر کر 5 جوڑے (کل 10 پتھر) کھا کر جیتیں!
27. **یاوالاتھ (Yavalath - 61 خانوں کا ہیکساگونل بورڈ):** 4 پتھر سیدھے جوڑنے پر فوری فتح، مگر غلطی سے ٹھیک 3 پتھر جوڑ لیے (بغیر 4 بنائے) تو فوراً شکست!
28. **کنیکٹ 6 (Connect6 - 11×11 / 9×9):** پہلی باری میں 1 پتھر اور اس کے بعد ہر باری میں 2 پتھر رکھ کر 6 سیدھے پتھر جوڑنے کا مقابلہ۔
29. **تیرہ تہنی (Terah Tehni - 37 خانے • 13v13):** کھلے مرکز کے ساتھ روایتی شولو گوٹی انداز۔
30. **اٹھارہ گوٹی (Atharah Guti - 4 خیموں والا 49 خانوں کا میدان • 20v20):** چاروں سمتوں (شمال، جنوب، مشرق، مغرب) میں خیموں والا عظیم الشان میدان۔
31–36. **مختلف سائز کے قطار بورڈز:** `6×7 توسیع شدہ (42 خانے)`، `5×5 بارو گوٹی (12v12)`، `5×7 لمبا میدان (15v15)`، `7×7 گرینڈ جرگہ (24v24)`، `8×8 کمانڈر (64 خانے)`، اور `4×4 بلٹز (6v6)`۔

---

## 3. اصول و قواعد اور چال چلنے کا طریقہ
* **سادہ چال:** اپنی گوٹی کو چھوئیں، وہ چمکنے لگے گی۔ جڑے ہوئے خالی خانے پر انگلی رکھیں، گوٹی وہاں چلی جائے گی۔
* **چھلانگ لگا کر گوٹی مارنا:** اگر دشمن کی گوٹی آپ کے بالکل آگے ہو اور اس کے پیچھے والا خانہ خالی ہو، تو آپ کی گوٹی اس پر سے پھلانگ کر اسے مار دے گی۔
* **نوکنکری میں قطار بنانا:** جب بھی آپ کی 3 گوٹیاں سیدھی لائن میں آ جائیں گی، گھنٹی بجے گی اور آپ دشمن کی ایک گوٹی بورڈ سے ہٹا سکیں گے۔

---

## 4. سیٹنگز، گوٹیاں کھانے کا انداز، رفتار کنٹرول اور کسٹم بورڈ
* **لگاتار گوٹیاں کھانا (Multi-Eat):** ایک باری میں لگاتار کئی گوٹیاں کھائی جا سکتی ہیں۔
* **ایک گوٹی کھانے کا موڈ (1 Bead/Bari):** ایک باری میں صرف ایک ہی گوٹی ماری جا سکتی ہے۔
* **زبردستی مارنا (Forced Capture):** اگر کوئی گوٹی مر رہی ہو تو لازمی مارنی پڑے گی۔
* **قطار توڑنے کا اصول (Kill Any Bead):** مخالف کی 3 گوٹیوں کی بنی ہوئی قطار میں سے بھی گوٹی توڑی جا سکتی ہے۔
* **3 گوٹیوں کا اڑنا (Flying Rule):** نوکنکری میں جب آخری 3 گوٹیاں رہ جائیں تو وہ کسی بھی خالی خانے پر اڑ کر جا سکتی ہیں۔
* **چال اور کمپیوٹر کی رفتار (Movement & AI Speed Control):** 5 تیار شدہ رفتاروں (`⚡ Default Fast` 0.48s، `🐢 Slow & Relaxed` 1.10s، `🎭 Dramatic & Cinematic` 1.90s، `🐌 Slowest / Study Mode` 3.00s، اور `🎛️ Custom Time`) یا سلائیڈرز کے ذریعے اپنی مرضی سے چال چلنے اور کمپیوٹر کے سوچنے کی رفتار کم یا زیادہ کریں۔
* **جیت کے بعد بورڈ کا معائنہ (Victory Snapshot & Inspect Board):** جیتنے پر آخری بورڈ کی تصویر (Snapshot)، آخری چال اور حالیہ 4 چالیں نظر آتی ہیں، اور **👁️ Board** دبا کر آپ پورا آخری بورڈ تسلی سے دیکھ سکتے ہیں۔
* **اوپر کی پٹیاں چھپانا (Hide Bars):** چھوٹے موبائل پر جگہ بڑھانے کے لیے اوپر کی فالتو پٹیاں ایک کلک پر بند یا کھولی جا سکتی ہیں۔

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

## 8. چار درجاتی کمپیوٹر (AI)، خودکار جنگ (AI vs AI)، سیکھنے والا دماغ اور کلاؤڈ Real AI
1. **Easy (سبز پودا 🌱):** آسان لیول، بچوں اور نئے کھلاڑیوں کے لیے۔
2. **Medium (تلواریں ⚔️):** درمیانہ ہوشیار لیول۔
3. **Hard (ڈھال 🛡️):** سردار لیول، گہری سوچ بچار والا کمپیوٹر۔
4. **Hardest (خان لیول 🔥):** ماسٹر لیول، جو ٹرانسپوزیشن ٹیبل کے ذریعے چالیس چالیں پہلے سوچ لیتا ہے!
* **کمپیوٹر بمقابلہ کمپیوٹر (`🤖⚔️🤖 AI vs AI Auto Battle`):** دونوں طرف کمپیوٹر خودکار طریقے سے ایک دوسرے کے خلاف کھیلتے ہیں تاکہ آپ نئی چالیں سیکھ سکیں یا دلچسپ مقابلہ دیکھ سکیں۔
* **سیکھنے والا ذہین دماغ (`Adaptive AI Brain • MorrisLearner`):** کمپیوٹر آپ کے کھیلنے کے انداز اور پرانے میچوں سے مستقل سیکھتا ہے (لیول 1 **Grandmaster Khan** سے لیول 5 **Supreme Overlord AI** تک)، 12 کلاسک شاہی چالوں کا علم رکھتا ہے، اور چاہیں تو **Reset AI Memory** سے یادداشت ری سیٹ بھی کر سکتے ہیں۔
* **کلاؤڈ رئیل اے آئی (`🧠 Real AI Cloud Engine • Puter`):** اگر انٹرنیٹ آن ہو تو آپ حقیقی بڑے کلاؤڈ AI ماڈلز (جیسے `gpt-4o-mini`, `gemini-2.0-flash`, `deepseek-reasoner`, `o3-mini`, `claude-3-7-sonnet`, `gpt-4o`) کے خلاف بھی کھیل سکتے ہیں۔ اس میں لائیو **Quota Stats** ڈیش بورڈ (بقیہ کوٹہ، ٹوکنز، رفتار، اور آخری چال کی سوچ) شامل ہے، اور انٹرنیٹ بند ہونے پر ایپ فوراً آف لائن AI پر منتقل ہو جاتی ہے۔

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
* **Backup & Restore:** اپنا تمام ریکارڈ، محفوظ میچ (Stash) اور **محفوظ میچ ری پلے ہسٹری** فائل (`.json`) یا کوڈ (`KATAR-BK:...`) کی صورت میں ڈاؤن لوڈ کریں اور نئے موبائل میں ایک سیکنڈ میں بحال کریں۔

---

## 11. فل اسکرین (Immersive) اور زین موڈ
* **Play Fullscreen** کا بٹن دبانے سے تمام فالتو مینو چھپ جاتے ہیں اور پورے موبائل پر صرف شاندار لکڑی کا بورڈ نظر آتا ہے۔
* کنٹرولز والے ڈبے کو دائیں، بائیں یا نیچے منتقل کیا جا سکتا ہے یا چھوٹا کیا جا سکتا ہے۔
* **Zen Mode** سے تمام بٹن غائب ہو جاتے ہیں اور صرف کھیل پر توجہ مرکوز رہتی ہے۔

---

## 12. انسٹالیشن اور موبائل ہوم اسکرین گائیڈ
* اوپر **"Install App"** کا بٹن دبائیں۔
* گیم بغیر پلے سٹور کے براہِ راست آپ کے موبائل کی ہوم سکرین پر عام ایپس کی طرح انسٹال ہو جائے گی۔
* ایک بار کھلنے کے بعد یہ ہمیشہ کے لیے 100 فیصد آف لائن چلے گی! (تمام فونٹس اور لائبریریاں ایپ کے اندر موجود ہیں)

---

## 13. مین مینیو ہب، لائیو بورڈ پریویو، پاز/ریزیوم اور میچ ری پلے سسٹم
* **موبائل فرسٹ مین مینیو ہب (`Main Menu`):** تمام 36 سے زیادہ کھیلوں کو 6 آسان زمروں (`👑 Katar`, `⭐ Mills`, `🐯 Hunt`, `⚔️ Royal`, `⚫ Align`, `✨ All`) میں ترتیب دیا گیا ہے، جہاں سے آپ ایک ٹیپ میں کھیل، موڈ، اور فوری قواعد منتخب کر سکتے ہیں۔
* **لائیو بورڈ پریویو اور معائنہ:** مین مینیو کے اندر ہی منتخب بورڈ کی لائیو تصویر نظر آتی ہے؛ اس پر یا **👁️ View Board** پر ٹیپ کر کے آپ پورا بورڈ قریب سے دیکھ سکتے ہیں۔
* **پاز اور ریزیوم (`Pause / Resume`):** اوپر **Pause** بٹن یا کی بورڈ سے `Space`/`P` دبا کر میچ روکیں، ٹائمر محفوظ رکھیں، دوبارہ چلائیں (`Resume Match`) یا میچ ختم (`End Match`) کریں۔
* **فل اسکرین میچ ری پلے اور 25 میچوں کی ہسٹری (`🎬 Replays`):** ہر مکمل ہونے والا میچ خود بخود محفوظ ہو جاتا ہے (آخری 25 میچ تک)۔ جیتنے کے بعد، مین مینیو، گائیڈ یا پروفائل سے کسی بھی میچ کا مکمل ویڈیو طرز ری پلے چلائیں — جس میں ٹائم لائن سلائیڈر، آگے/پیچھے بٹن (`⏮ ⏪ ▶/⏸ ⏹ ⏩ ⏭`)، رفتار (`0.5×`, `1×`, `2×`, `4×`) اور بورڈ گھمانے (`🔄`) کی سہولت موجود ہے۔

---

## 14. اینڈرائیڈ APK ایپ (Capacitor) اور خودکار اپڈیٹ سسٹم
* **مکمل اینڈرائیڈ APK (`Katar-Game.apk`):** اب یہ ایپ **Capacitor 6** (`com.yasin.katargame`) کے ذریعے حقیقی اینڈرائیڈ ایپ کے طور پر بھی تیار کی جاتی ہے، جس میں فل اسکرین اممرسیو ڈسپلے، نوچ سپورٹ، سکرین جاگتی رہنے کا فیچر اور کیمرہ/وائبریشن سپورٹ شامل ہے۔
* **خودکار GitHub بلڈ:** کوڈ میں ہر نئی اپڈیٹ پر GitHub Actions خودکار طریقے سے نئی `Katar-Game.apk` فائل تیار کر کے ریلیز شائع کر دیتا ہے۔

---

&lt;div align=&quot;center&quot;&gt;

### 🏆 روایتی کھیلیں • ہمارا فخر اور پہچان
**یاسین اللہ – بنوں سافٹ ویئر سلوشنز**  
📱 واٹس ایپ: **0336-1593533**  
*Dedicated with love to my little brother **Muhib Ullah** ❤️*

&lt;/div&gt;
