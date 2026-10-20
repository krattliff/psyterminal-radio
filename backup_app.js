/* ===========================
   PsyTerminal Radio — app.js
   =========================== */

const MIXES = [
  {
    id: "047",
    title: "Full Moon Forest Set",
    date: "Jun 2026",
    bpm: "138–148 BPM",
    duration: "2:14:07",
    genre: "Psytrance",
    tagClass: "tag-psytrance",
    description:
      "Recorded live at a forest gathering outside Portland, OR. This set leans deep and hypnotic — layered pads, psychedelic arpeggios, and basslines that roll hard across the valley floor. Built for sunrise hours when the trees start to glow.",
    tracklist: [
      { artist: "Vini Vici & Avalon", title: "Magic Kingdom", time: "0:00" },
      { artist: "Ace Ventura", title: "Chromatic", time: "7:22" },
      { artist: "Astrix", title: "Deep Jungle Walk", time: "14:55" },
      { artist: "Neelix", title: "Just Go With It", time: "22:10" },
      { artist: "Infected Mushroom", title: "Converting Vegetarians", time: "30:44" },
      { artist: "Protoculture", title: "Reboot", time: "40:08" },
      { artist: "Burn in Noise", title: "Freedom", time: "49:31" },
      { artist: "Liquid Soul", title: "Universe Inside", time: "58:17" },
      { artist: "Scatterbrain", title: "Alchemy", time: "1:07:00" },
      { artist: "Tristan", title: "Welcome to the Machine", time: "1:16:45" },
      { artist: "Merkaba", title: "The River", time: "1:27:02" },
      { artist: "SFX", title: "Psycho Acoustic", time: "1:36:19" },
      { artist: "Avalon & Talamasca", title: "People Can Fly", time: "1:46:44" },
      { artist: "Shpongle", title: "Nothing is Something Worth Doing", time: "1:57:30" },
      { artist: "Vini Vici", title: "The Tribe", time: "2:06:50" },
    ],
  },
  {
    id: "046",
    title: "Dark Matter",
    date: "May 2026",
    bpm: "142 BPM",
    duration: "1:48:33",
    genre: "Techno",
    tagClass: "tag-techno",
    description:
      "A descent into the hard end of the spectrum. Industrial textures, reduced kick architectures, and a total absence of mercy. Recorded in a single take at 2am. This one goes to a dark place and stays there.",
    tracklist: [
      { artist: "Charlotte de Witte", title: "Sgat", time: "0:00" },
      { artist: "Paula Temple", title: "End of Anger", time: "6:50" },
      { artist: "Alignment", title: "Pluto", time: "13:40" },
      { artist: "Blawan", title: "Getting Me Down", time: "21:15" },
      { artist: "Surgeon", title: "Force + Form", time: "28:55" },
      { artist: "Phase Fatale", title: "Onyx", time: "36:00" },
      { artist: "Ben Klock", title: "Subzero", time: "44:10" },
      { artist: "Headless Horseman", title: "Machine V", time: "52:40" },
      { artist: "Dax J", title: "Execution of Justice", time: "1:01:15" },
      { artist: "Ø [Phase]", title: "WRXT", time: "1:09:30" },
      { artist: "Ancient Methods", title: "Regler 013", time: "1:17:44" },
      { artist: "SPFDJ", title: "Skaville", time: "1:26:00" },
      { artist: "Reutoff", title: "Dusk", time: "1:35:50" },
      { artist: "Paula Temple", title: "Colonised", time: "1:42:20" },
    ],
  },
  {
    id: "045",
    title: "Spiral Drift",
    date: "Apr 2026",
    bpm: "134–140 BPM",
    duration: "2:02:18",
    genre: "Progressive",
    tagClass: "tag-progressive",
    description:
      "A slower burn — progressive layers that build across two hours. Melodic leads woven through driving percussive structures. Made for the long haul: the kind of mix you put on when the night still has hours left in it.",
    tracklist: [
      { artist: "Guy J", title: "Lemon Tree", time: "0:00" },
      { artist: "John Tejada", title: "Sweat on the Walls", time: "8:10" },
      { artist: "Hernan Cattaneo", title: "Arp Story", time: "16:30" },
      { artist: "Sasha", title: "Wavy Gravy", time: "25:00" },
      { artist: "Digweed & Muir", title: "Horizon", time: "33:44" },
      { artist: "Nick Warren", title: "The Confluence", time: "42:05" },
      { artist: "Mr. Bill & Arovane", title: "Celesta", time: "51:20" },
      { artist: "Guy J", title: "Aleka", time: "59:55" },
      { artist: "Satoshi Tomiie", title: "Full Lick", time: "1:08:30" },
      { artist: "Hernan Cattaneo", title: "Ashes to Ashes", time: "1:17:00" },
      { artist: "John Digweed", title: "Shadows", time: "1:25:40" },
      { artist: "Sasha", title: "Xpander", time: "1:34:15" },
      { artist: "Guy Mantzur", title: "The Gloaming", time: "1:42:55" },
      { artist: "Hernan Cattaneo", title: "Point to Point", time: "1:51:30" },
    ],
  },
  {
    id: "044",
    title: "Subterranean",
    date: "Mar 2026",
    bpm: "145 BPM",
    duration: "1:55:44",
    genre: "Techno",
    tagClass: "tag-techno",
    description:
      "Deep beneath the surface. A claustrophobic, tunnel-driven techno set recorded for a basement event in SE Portland. Raw and functional — built for a room with no windows and no idea what time it is outside.",
    tracklist: [
      { artist: "Perc", title: "The Power and the Glory", time: "0:00" },
      { artist: "Speedy J", title: "De-Orbit", time: "7:30" },
      { artist: "Stef Mendesidis", title: "Ares", time: "14:50" },
      { artist: "Truncate", title: "Axis", time: "22:00" },
      { artist: "Jeff Mills", title: "The Bells", time: "30:10" },
      { artist: "Planetary Assault Systems", title: "Permanent Hold", time: "39:20" },
      { artist: "Terence Fixmer", title: "Electric City", time: "47:55" },
      { artist: "Dj Stingray", title: "Urban Warfare", time: "56:30" },
      { artist: "Rebekah", title: "Body Hammer", time: "1:05:00" },
      { artist: "DVS1", title: "Desire", time: "1:13:45" },
      { artist: "Alan Fitzpatrick", title: "We Do What We Want", time: "1:22:10" },
      { artist: "Truncate", title: "Motion", time: "1:31:00" },
      { artist: "Octave One", title: "Blackwater", time: "1:39:30" },
      { artist: "Planetary Assault Systems", title: "Temporary Suspension", time: "1:48:00" },
    ],
  },
  {
    id: "043",
    title: "Ether & Light",
    date: "Feb 2026",
    bpm: "Ambient / 90 BPM",
    duration: "1:20:09",
    genre: "Ambient",
    tagClass: "tag-ambient",
    description:
      "The outlier in the archive. An 80-minute ambient journey — slow-morphing textures, field recordings from the Oregon coast, and harmonic drones. Recorded on a winter afternoon. Something to come down to.",
    tracklist: [
      { artist: "Brian Eno", title: "An Ending (Ascent)", time: "0:00" },
      { artist: "Stars of the Lid", title: "Apreludes", time: "7:45" },
      { artist: "Harold Budd & Eno", title: "The Plateaux of Mirror", time: "15:20" },
      { artist: "Tim Hecker", title: " Aurora", time: "23:00" },
      { artist: "Olan Mill", title: "Paeo", time: "31:10" },
      { artist: "William Basinski", title: "Disintegration Loop 1.1", time: "38:30" },
      { artist: "Grouper", title: "Dragging a Dead Deer Up a Hill", time: "47:00" },
      { artist: "Stars of the Lid", title: "Even If You're Never Awake", time: "55:15" },
      { artist: "Brian Eno", title: "Thursday Afternoon", time: "1:03:40" },
      { artist: "Tim Hecker", title: "In the Fog", time: "1:12:00" },
    ],
  },
  {
    id: "042",
    title: "Signal One",
    date: "Jan 2026",
    bpm: "138 BPM",
    duration: "2:30:00",
    genre: "Psytrance",
    tagClass: "tag-psytrance",
    description:
      "The first transmission. Where it all started — a marathon opening set recorded for the inaugural PsyTerminal broadcast. Euphoric, energetic, and unashamedly full-on. Two and a half hours of pure signal.",
    tracklist: [
      { artist: "Vini Vici", title: "Nova", time: "0:00" },
      { artist: "Ace Ventura & Vertical Mode", title: "Contact", time: "8:00" },
      { artist: "Liquid Soul & Zyce", title: "Anjuna", time: "16:30" },
      { artist: "Astrix & Ace Ventura", title: "Life on Mars", time: "25:00" },
      { artist: "GMS", title: "Open Your Eyes", time: "33:15" },
      { artist: "Protoculture & Vini Vici", title: "Namaste", time: "42:00" },
      { artist: "Infected Mushroom", title: "Deeply Disturbed", time: "50:30" },
      { artist: "Astrix", title: "Red Means Distortion", time: "59:10" },
      { artist: "Vini Vici & Infected Mushroom", title: "More & More", time: "1:07:45" },
      { artist: "Neelix", title: "Far Too Late", time: "1:16:20" },
      { artist: "Ace Ventura", title: "Levitation", time: "1:24:55" },
      { artist: "Liquid Soul", title: "Soul Resonator", time: "1:33:30" },
      { artist: "GMS & Vini Vici", title: "Tribe of the Sun", time: "1:42:00" },
      { artist: "Astrix", title: "Trip to Mars", time: "1:50:40" },
      { artist: "Vini Vici & Big Fish", title: "Hidup", time: "1:59:15" },
      { artist: "Protoculture", title: "One Last Kiss", time: "2:08:00" },
      { artist: "Infected Mushroom", title: "Becoming Insane", time: "2:17:30" },
      { artist: "Vini Vici", title: "The Tribe (Reprise)", time: "2:24:00" },
    ],
  },
];

/* ---- RENDER MIXES ---- */

function renderMixes() {
  const list = document.getElementById("mix-list");
  const count = document.getElementById("mix-count");
  count.textContent = MIXES.length + " mixes";

  list.innerHTML = MIXES.map((mix) => `
    <li class="mix-row" data-id="${mix.id}" onclick="handleRowClick(event, '${mix.id}')">
      <span class="mix-num">${mix.id}</span>
      <span class="mix-play" aria-hidden="true">&#9654;</span>
      <div class="mix-info">
        <h3>${mix.title}</h3>
        <p class="mix-description">${mix.description}</p>
        <div class="mix-meta">
          <span>${mix.date}</span>
          <span>&bull; ${mix.bpm}</span>
        </div>
      </div>
      <div class="mix-right">
        <span class="mix-tag ${mix.tagClass}">${mix.genre}</span>
        <span class="mix-duration">${mix.duration}</span>
        <button class="mix-tracklist-btn" aria-label="View tracklist for ${mix.title}">Tracklist</button>
      </div>
    </li>
  `).join("");
}

function handleRowClick(e, id) {
  // If the tracklist button was clicked, open modal instead of selecting mix
  if (e.target.classList.contains("mix-tracklist-btn")) {
    openModal(id);
    return;
  }
  selectMix(id);
}

/* ---- PLAYER ---- */

let playing = false;
let currentId = "047";

function selectMix(id) {
  currentId = id;
  const mix = MIXES.find((m) => m.id === id);
  if (!mix) return;
  document.getElementById("player-title").textContent =
    "Transmission " + mix.id + " — " + mix.title;
  document.getElementById("player-genre").textContent = mix.genre;
  document.getElementById("prog-time").textContent = "0:00:00 / " + mix.duration;
  document.getElementById("prog-fill").style.width = "0%";
  setPlaying(true);
}

function setPlaying(state) {
  playing = state;
  const btn = document.getElementById("play-btn");
  const viz = document.getElementById("viz");
  btn.innerHTML = playing ? "&#9646;&#9646;" : "&#9654;";
  viz.style.display = playing ? "flex" : "none";
}

document.getElementById("play-btn").addEventListener("click", () => setPlaying(!playing));

/* ---- MODAL ---- */

function openModal(id) {
  const mix = MIXES.find((m) => m.id === id);
  if (!mix) return;

  document.getElementById("modal-num").textContent = "Transmission " + mix.id;
  document.getElementById("modal-title").textContent = mix.title;
  document.getElementById("modal-meta").innerHTML =
    "<span>" + mix.date + "</span><span>&bull; " + mix.bpm + "</span><span>&bull; " + mix.duration + "</span>";
  document.getElementById("modal-description").textContent = mix.description;

  const tagEl = document.getElementById("modal-tag");
  tagEl.textContent = mix.genre;
  tagEl.className = "mix-tag " + mix.tagClass;

  document.getElementById("modal-track-count").textContent =
    mix.tracklist.length + " tracks";

  const ol = document.getElementById("modal-tracklist");
  ol.innerHTML = mix.tracklist.map((t) => `
    <li>
      <div class="track-info">
        <span class="track-title">${t.title}</span>
        <span class="track-artist">${t.artist}</span>
      </div>
      <span class="track-time">${t.time}</span>
    </li>
  `).join("");

  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-overlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ---- UPLOAD ---- */

const uploadZone = document.getElementById("upload-zone");
const fileInput = document.getElementById("file-input");
const uploadStatus = document.getElementById("upload-status");

uploadZone.addEventListener("click", () => fileInput.click());
uploadZone.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") fileInput.click();
});

uploadZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadZone.classList.add("dragover");
});

uploadZone.addEventListener("dragleave", () => {
  uploadZone.classList.remove("dragover");
});

uploadZone.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadZone.classList.remove("dragover");
  const file = e.dataTransfer.files[0];
  if (file) processUpload(file);
});

fileInput.addEventListener("change", () => {
  if (fileInput.files[0]) processUpload(fileInput.files[0]);
});

function processUpload(file) {
  const sizeMB = (file.size / 1024 / 1024).toFixed(1);
  uploadStatus.textContent = "> Uploading: " + file.name + " (" + sizeMB + " MB)...";
  setTimeout(() => {
    uploadStatus.textContent = "> Transmission received. Processing audio...";
    setTimeout(() => {
      uploadStatus.textContent =
        "> Done. Your mix will appear in the archive shortly.";
    }, 1800);
  }, 1200);
}

/* ---- INIT ---- */

renderMixes();
