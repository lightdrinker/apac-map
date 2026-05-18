// ── APAC 국가 데이터 ────────────────────────────────────
const COUNTRY_DATA = {"4":{"name":"아프가니스탄","en":"Afghanistan","emoji":"🇦🇫","region":"남아시아","tz":"Asia/Kabul","cities":["카불"]},"36":{"name":"호주","en":"Australia","emoji":"🇦🇺","region":"오세아니아","tz":"Australia/Sydney","cities":["시드니","멜버른","브리즈번","퍼스"]},"50":{"name":"방글라데시","en":"Bangladesh","emoji":"🇧🇩","region":"남아시아","tz":"Asia/Dhaka","cities":["다카","치타공"]},"64":{"name":"부탄","en":"Bhutan","emoji":"🇧🇹","region":"남아시아","tz":"Asia/Thimphu","cities":["팀부","파로"]},"96":{"name":"브루나이","en":"Brunei","emoji":"🇧🇳","region":"동남아시아","tz":"Asia/Brunei","cities":["반다르스리브가완"]},"104":{"name":"미얀마","en":"Myanmar","emoji":"🇲🇲","region":"동남아시아","tz":"Asia/Yangon","cities":["양곤","네피도","만달레이"]},"116":{"name":"캄보디아","en":"Cambodia","emoji":"🇰🇭","region":"동남아시아","tz":"Asia/Phnom_Penh","cities":["프놈펜","시엠립"]},"144":{"name":"스리랑카","en":"Sri Lanka","emoji":"🇱🇰","region":"남아시아","tz":"Asia/Colombo","cities":["콜롬보"]},"156":{"name":"중국","en":"China","emoji":"🇨🇳","region":"동아시아","tz":"Asia/Shanghai","cities":["베이징","상하이","선전","광저우","청두"]},"158":{"name":"대만","en":"Taiwan","emoji":"🇹🇼","region":"동아시아","tz":"Asia/Taipei","cities":["타이베이","가오슝","타이중"]},"242":{"name":"피지","en":"Fiji","emoji":"🇫🇯","region":"오세아니아","tz":"Pacific/Fiji","cities":["수바","난디"]},"356":{"name":"인도","en":"India","emoji":"🇮🇳","region":"남아시아","tz":"Asia/Kolkata","cities":["뭄바이","델리","벵갈루루","첸나이","하이데라바드"]},"360":{"name":"인도네시아","en":"Indonesia","emoji":"🇮🇩","region":"동남아시아","tz":"Asia/Jakarta","cities":["자카르타","발리(덴파사르)","수라바야"]},"392":{"name":"일본","en":"Japan","emoji":"🇯🇵","region":"동아시아","tz":"Asia/Tokyo","cities":["도쿄","오사카","후쿠오카","나고야"]},"398":{"name":"카자흐스탄","en":"Kazakhstan","emoji":"🇰🇿","region":"중앙아시아","tz":"Asia/Almaty","cities":["알마티","아스타나"]},"408":{"name":"북한","en":"North Korea","emoji":"🇰🇵","region":"동아시아","tz":"Asia/Pyongyang","cities":["평양"]},"410":{"name":"한국","en":"South Korea","emoji":"🇰🇷","region":"동아시아","tz":"Asia/Seoul","cities":["서울","부산","인천"]},"417":{"name":"키르기스스탄","en":"Kyrgyzstan","emoji":"🇰🇬","region":"중앙아시아","tz":"Asia/Bishkek","cities":["비슈케크"]},"418":{"name":"라오스","en":"Laos","emoji":"🇱🇦","region":"동남아시아","tz":"Asia/Vientiane","cities":["비엔티안","루앙프라방"]},"458":{"name":"말레이시아","en":"Malaysia","emoji":"🇲🇾","region":"동남아시아","tz":"Asia/Kuala_Lumpur","cities":["쿠알라룸푸르","페낭","조호바루"]},"496":{"name":"몽골","en":"Mongolia","emoji":"🇲🇳","region":"동아시아","tz":"Asia/Ulaanbaatar","cities":["울란바토르"]},"524":{"name":"네팔","en":"Nepal","emoji":"🇳🇵","region":"남아시아","tz":"Asia/Kathmandu","cities":["카트만두"]},"554":{"name":"뉴질랜드","en":"New Zealand","emoji":"🇳🇿","region":"오세아니아","tz":"Pacific/Auckland","cities":["오클랜드","웰링턴","크라이스트처치"]},"586":{"name":"파키스탄","en":"Pakistan","emoji":"🇵🇰","region":"남아시아","tz":"Asia/Karachi","cities":["카라치","이슬라마바드","라호르"]},"598":{"name":"파푸아뉴기니","en":"Papua New Guinea","emoji":"🇵🇬","region":"오세아니아","tz":"Pacific/Port_Moresby","cities":["포트모르즈비"]},"608":{"name":"필리핀","en":"Philippines","emoji":"🇵🇭","region":"동남아시아","tz":"Asia/Manila","cities":["마닐라","세부","다바오"]},"626":{"name":"동티모르","en":"Timor-Leste","emoji":"🇹🇱","region":"동남아시아","tz":"Asia/Dili","cities":["딜리"]},"702":{"name":"싱가포르","en":"Singapore","emoji":"🇸🇬","region":"동남아시아","tz":"Asia/Singapore","cities":["싱가포르"]},"704":{"name":"베트남","en":"Vietnam","emoji":"🇻🇳","region":"동남아시아","tz":"Asia/Ho_Chi_Minh","cities":["호치민","하노이","다낭"]},"762":{"name":"타지키스탄","en":"Tajikistan","emoji":"🇹🇯","region":"중앙아시아","tz":"Asia/Dushanbe","cities":["두샨베"]},"764":{"name":"태국","en":"Thailand","emoji":"🇹🇭","region":"동남아시아","tz":"Asia/Bangkok","cities":["방콕","치앙마이","푸켓"]},"795":{"name":"투르크메니스탄","en":"Turkmenistan","emoji":"🇹🇲","region":"중앙아시아","tz":"Asia/Ashgabat","cities":["아슈하바트"]},"860":{"name":"우즈베키스탄","en":"Uzbekistan","emoji":"🇺🇿","region":"중앙아시아","tz":"Asia/Tashkent","cities":["타슈켄트","사마르칸트"]}};

const REGION_CONFIG = {"동아시아":{"en":"East Asia","color":"#f87171"},"동남아시아":{"en":"Southeast Asia","color":"#34d399"},"남아시아":{"en":"South Asia","color":"#fbbf24"},"오세아니아":{"en":"Oceania","color":"#60a5fa"},"중앙아시아":{"en":"Central Asia","color":"#c084fc"}};

// GEO 데이터는 geo.json에서 로드 (파일 분리)
let GEO = null;

let selectedRegion = "";
let zoomedRegion = null;
let svgEl, gEl, pathGen, projection, zoomBehavior;
let W, H, currentScale = 1;
let activeCountry = null;
let timeInterval = null;

// ── Helpers ─────────────────────────────────────────────
function getColor(id) {
  const info = COUNTRY_DATA[String(id)];
  if (!info) return "#0e1f3a";
  if (selectedRegion && info.region !== selectedRegion) return "#0e1f3a";
  return REGION_CONFIG[info.region].color + "cc";
}

function getStroke(id) {
  const info = COUNTRY_DATA[String(id)];
  if (!info) return "#060f1e";
  if (selectedRegion && info.region !== selectedRegion) return "#060f1e";
  return "rgba(255,255,255,0.25)";
}

function getLabelOpacity(id) {
  const info = COUNTRY_DATA[String(id)];
  if (!info) return 0;
  if (selectedRegion && info.region !== selectedRegion) return 0;
  return 1;
}

// ── Map Init ────────────────────────────────────────────
function initMap() {
  const wrap = document.getElementById("map-wrap");
  W = wrap.clientWidth;
  H = Math.round(Math.min(W * 0.78, window.innerHeight * 0.52));

  const svg = d3.select("#map-svg")
    .attr("width", W).attr("height", H)
    .attr("viewBox", `0 0 ${W} ${H}`);
  svg.selectAll("*").remove();

  svg.append("rect").attr("width", W).attr("height", H).attr("fill", "#060f1e");

  const apacCollection = {
    type: "FeatureCollection",
    features: GEO.features.filter(f => COUNTRY_DATA[String(f.id)])
  };
  projection = d3.geoMercator().fitExtent([[10, 10], [W-10, H-10]], apacCollection);
  pathGen = d3.geoPath().projection(projection);

  const g = svg.append("g").attr("class", "map-g");
  gEl = g;

  g.selectAll("path.country")
    .data(GEO.features)
    .join("path")
    .attr("class", d => COUNTRY_DATA[String(d.id)] ? "country clickable" : "country")
    .attr("d", pathGen)
    .attr("fill", d => getColor(d.id))
    .attr("stroke", d => getStroke(d.id))
    .attr("stroke-width", 0.5)
    .attr("vector-effect", "non-scaling-stroke")
    .on("pointerenter", function(event, d) {
      const info = COUNTRY_DATA[String(d.id)];
      if (!info) return;
      if (selectedRegion && info.region !== selectedRegion) return;
      d3.select(this).attr("fill", REGION_CONFIG[info.region].color).attr("stroke", "#fff").attr("stroke-width", 1);
    })
    .on("pointerleave", function(event, d) {
      d3.select(this).attr("fill", getColor(d.id)).attr("stroke", getStroke(d.id)).attr("stroke-width", 0.5);
    })
    .on("click", function(event, d) {
      const info = COUNTRY_DATA[String(d.id)];
      if (!info) return;
      if (selectedRegion && info.region !== selectedRegion) return;
      openSheet(String(d.id));
    });

  g.selectAll("text.label")
    .data(GEO.features.filter(f => COUNTRY_DATA[String(f.id)]))
    .join("text")
    .attr("class", "label")
    .attr("transform", d => {
      const c = pathGen.centroid(d);
      return c && !isNaN(c[0]) ? `translate(${c[0]},${c[1]})` : "";
    })
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("font-size", 8)
    .attr("opacity", d => getLabelOpacity(d.id))
    .text(d => COUNTRY_DATA[String(d.id)].name);

  zoomBehavior = d3.zoom()
    .scaleExtent([1, 14])
    .translateExtent([[0, 0], [W, H]])
    .on("zoom", (event) => {
      currentScale = event.transform.k;
      g.attr("transform", event.transform);
      updateLabelSizes();
      document.getElementById("home-btn").classList.toggle("show", event.transform.k > 1.1 || zoomedRegion);
    });

  svg.call(zoomBehavior);
  svgEl = svg;
  updateLabelSizes();
}

function updateLabelSizes() {
  const k = currentScale;
  d3.selectAll("text.label")
    .attr("font-size", Math.max(7, Math.min(13, 8 / Math.sqrt(k) * (k > 1 ? 1.6 : 1))));
}

function refreshColors() {
  d3.selectAll("path.country")
    .attr("fill", d => getColor(d.id))
    .attr("stroke", d => getStroke(d.id))
    .attr("stroke-width", 0.5);
  d3.selectAll("text.label")
    .attr("opacity", d => getLabelOpacity(d.id));
}

// ── Region Selection ────────────────────────────────────
function selectRegion(region) {
  selectedRegion = region;
  refreshColors();

  document.querySelectorAll(".chip").forEach(c => {
    const r = c.dataset.region;
    const isActive = r === region;
    if (!r) {
      c.style.borderColor = isActive ? "#fff" : "rgba(255,255,255,0.10)";
      c.style.background = isActive ? "rgba(255,255,255,0.1)" : "transparent";
      c.style.color = isActive ? "#fff" : "var(--text-dim)";
    } else {
      const color = REGION_CONFIG[r].color;
      c.style.borderColor = isActive ? color : "rgba(255,255,255,0.10)";
      c.style.background = isActive ? color + "22" : "transparent";
      c.style.color = isActive ? color : "var(--text-dim)";
    }
    c.classList.toggle("active", isActive);
  });

  const btn = document.getElementById("zoom-region-btn");
  if (region) {
    const color = REGION_CONFIG[region].color;
    btn.style.background = `linear-gradient(135deg, ${color}, ${color}cc)`;
    btn.innerHTML = `🔍 ${region} 확대해서 보기`;
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
    if (zoomedRegion) zoomToHome();
  }
}

function zoomToRegion(region) {
  const features = GEO.features.filter(f => {
    const info = COUNTRY_DATA[String(f.id)];
    return info && info.region === region;
  });
  if (features.length === 0) return;

  const collection = { type: "FeatureCollection", features };
  const [[x0, y0], [x1, y1]] = pathGen.bounds(collection);
  const dx = x1 - x0;
  const dy = y1 - y0;
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  const scale = Math.min(10, 0.85 / Math.max(dx / W, dy / H));
  const tx = W/2 - scale * cx;
  const ty = H/2 - scale * cy;

  zoomedRegion = region;
  svgEl.transition().duration(900).ease(d3.easeCubicInOut)
    .call(zoomBehavior.transform,
      d3.zoomIdentity.translate(tx, ty).scale(scale));

  document.getElementById("zoom-region-btn").classList.remove("show");
}

function zoomToHome() {
  zoomedRegion = null;
  svgEl.transition().duration(700).ease(d3.easeCubicInOut)
    .call(zoomBehavior.transform, d3.zoomIdentity);
  setTimeout(() => {
    if (selectedRegion) document.getElementById("zoom-region-btn").classList.add("show");
  }, 100);
}

// ── Bottom Sheet ────────────────────────────────────────
function openSheet(id) {
  const info = COUNTRY_DATA[id];
  if (!info) return;
  activeCountry = info;

  document.getElementById("s-flag").textContent = info.emoji;
  document.getElementById("s-ko").textContent = info.name;
  document.getElementById("s-en").textContent = info.en;

  const color = REGION_CONFIG[info.region].color;
  const regionEn = REGION_CONFIG[info.region].en;
  const tag = document.getElementById("s-region");
  tag.innerHTML = `<span style="width:6px;height:6px;border-radius:50%;background:${color};display:inline-block"></span>${info.region} · ${regionEn}`;
  tag.style.background = color + "1f";
  tag.style.color = color;

  const cityList = document.getElementById("s-cities");
  cityList.innerHTML = "";
  info.cities.forEach((city, idx) => {
    const span = document.createElement("span");
    span.className = "city-chip" + (idx === 0 && info.cities.length > 1 ? " cap" : "");
    span.textContent = city;
    cityList.appendChild(span);
  });

  document.getElementById("s-time-flag").textContent = info.emoji;
  document.getElementById("s-time-city").textContent = info.cities[0] || info.name;

  updateTime();
  if (timeInterval) clearInterval(timeInterval);
  timeInterval = setInterval(updateTime, 1000);

  document.getElementById("backdrop").classList.add("show");
  document.getElementById("sheet").classList.add("show");
}

function closeSheet() {
  document.getElementById("backdrop").classList.remove("show");
  document.getElementById("sheet").classList.remove("show");
  if (timeInterval) { clearInterval(timeInterval); timeInterval = null; }
  activeCountry = null;
}

function formatTime(date, tz) {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
  }).format(date);
}
function formatDate(date, tz) {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: tz, weekday: "short", month: "short", day: "numeric"
  }).format(date);
}

function getOffsetHours(tz1, tz2) {
  const now = new Date();
  const fmt = (tz) => new Intl.DateTimeFormat("en-US", {
    timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
  }).formatToParts(now).reduce((acc, p) => { acc[p.type] = p.value; return acc; }, {});
  const a = fmt(tz1), b = fmt(tz2);
  const toMs = (p) => Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour === 24 ? 0 : +p.hour, +p.minute, +p.second);
  return (toMs(a) - toMs(b)) / 3600000;
}

function updateTime() {
  if (!activeCountry) return;
  const now = new Date();
  document.getElementById("s-time-kr").textContent = formatTime(now, "Asia/Seoul");
  document.getElementById("s-time-local").textContent = formatTime(now, activeCountry.tz);
  document.getElementById("s-date-kr").textContent = formatDate(now, "Asia/Seoul");
  document.getElementById("s-date-local").textContent = formatDate(now, activeCountry.tz);

  const diff = getOffsetHours(activeCountry.tz, "Asia/Seoul");
  let diffText;
  if (diff === 0) diffText = "<span class='val'>한국과 동일 시간대</span>";
  else {
    const absH = Math.abs(diff);
    const h = Math.floor(absH);
    const m = Math.round((absH - h) * 60);
    const hStr = m === 0 ? `${h}시간` : `${h}시간 ${m}분`;
    if (diff > 0) diffText = `한국보다 <span class='val'>${hStr} 빠름</span> (먼저 하루 시작)`;
    else diffText = `한국보다 <span class='val'>${hStr} 느림</span> (한국이 먼저)`;
  }
  document.getElementById("s-diff").innerHTML = diffText;
}

// ── Build Filter Chips ──────────────────────────────────
const filters = document.getElementById("filters");
Object.entries(REGION_CONFIG).forEach(([region, { en, color }]) => {
  const btn = document.createElement("button");
  btn.className = "chip";
  btn.dataset.region = region;
  btn.innerHTML = `<span>${region}</span><span class="en">${en.toUpperCase()}</span>`;
  btn.onclick = () => selectRegion(selectedRegion === region ? "" : region);
  filters.appendChild(btn);
});
document.querySelector('.chip[data-region=""]').onclick = () => selectRegion("");

// ── Build Legend ────────────────────────────────────────
const legGrid = document.getElementById("leg-grid");
Object.entries(REGION_CONFIG).forEach(([region, { en, color }]) => {
  const regionCountries = Object.entries(COUNTRY_DATA).filter(([id, c]) => c.region === region);
  const card = document.createElement("div");
  card.className = "leg-card";
  card.style.borderColor = color + "30";
  card.innerHTML = `
    <div class="leg-header" data-region="${region}">
      <div class="leg-dot" style="background:${color}"></div>
      <div class="leg-region">
        <span class="ko" style="color:${color}">${region}</span>
        <span class="en">${en}</span>
      </div>
      <div class="leg-count">${regionCountries.length}개국</div>
    </div>
    <div class="leg-countries">
      ${regionCountries.map(([id, c]) => `
        <div class="leg-country" data-id="${id}">
          <span class="flag">${c.emoji}</span>
          <span class="nm">${c.name}</span>
        </div>
      `).join("")}
    </div>
  `;
  card.querySelector(".leg-header").onclick = () => {
    selectRegion(selectedRegion === region ? "" : region);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  card.querySelectorAll(".leg-country").forEach(el => {
    el.onclick = () => openSheet(el.dataset.id);
  });
  legGrid.appendChild(card);
});

// ── Buttons ─────────────────────────────────────────────
document.getElementById("home-btn").onclick = () => zoomToHome();
document.getElementById("s-close").onclick = closeSheet;
document.getElementById("backdrop").onclick = closeSheet;

// ── Bootstrap: load GEO then render map ─────────────────
fetch("./geo.json")
  .then(r => r.json())
  .then(data => {
    GEO = data;
    document.getElementById("loading").style.display = "none";
    initMap();

    // Buttons that depend on initMap (svgEl, zoomBehavior)
    document.getElementById("zoom-region-btn").onclick = () => {
      if (selectedRegion) zoomToRegion(selectedRegion);
    };
    document.getElementById("zin").onclick = () => svgEl.transition().duration(250).call(zoomBehavior.scaleBy, 1.8);
    document.getElementById("zout").onclick = () => svgEl.transition().duration(250).call(zoomBehavior.scaleBy, 0.55);

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initMap();
        if (selectedRegion) refreshColors();
      }, 200);
    });
  })
  .catch(err => {
    document.getElementById("loading").textContent = "지도 데이터 로드 실패: " + err.message;
  });
