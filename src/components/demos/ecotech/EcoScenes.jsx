import { useId } from "react";

function CenaSelo() {
  return (
    <span className="eco-cena-selo">Cena ilustrativa · dados fictícios</span>
  );
}

export function EcoHeroScene() {
  const uid = useId().replace(/:/g, "");
  const sky = `ecoHeroSky-${uid}`;
  const sun = `ecoHeroSun-${uid}`;
  const hillA = `ecoHeroHillA-${uid}`;
  const hillB = `ecoHeroHillB-${uid}`;
  const hillC = `ecoHeroHillC-${uid}`;
  const panel = `ecoHeroPanel-${uid}`;

  return (
    <div className="eco-cena eco-cena--hero" aria-hidden="true">
      <svg viewBox="0 0 760 620" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7f4e9" />
            <stop offset="52%" stopColor="#dfe9d8" />
            <stop offset="100%" stopColor="#c5d9c2" />
          </linearGradient>
          <radialGradient id={sun} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f7d97f" />
            <stop offset="62%" stopColor="#e6b955" />
            <stop offset="100%" stopColor="#dfa942" />
          </radialGradient>
          <linearGradient id={hillA} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bfd3b9" />
            <stop offset="100%" stopColor="#a9c3a4" />
          </linearGradient>
          <linearGradient id={hillB} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9ab795" />
            <stop offset="100%" stopColor="#7ea17f" />
          </linearGradient>
          <linearGradient id={hillC} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a9d7b" />
            <stop offset="100%" stopColor="#5f8768" />
          </linearGradient>
          <linearGradient id={panel} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1d4c5d" />
            <stop offset="100%" stopColor="#102e3a" />
          </linearGradient>
        </defs>

        <rect width="760" height="620" fill={`url(#${sky})`} />

        <circle cx="592" cy="112" r="105" fill="#f4df9f" opacity=".28" />
        <circle cx="592" cy="112" r="76" fill="#f2df9d" opacity=".26" />
        <circle cx="592" cy="112" r="54" fill={`url(#${sun})`} />
        <g stroke="#e2b453" strokeWidth="2" strokeLinecap="round" opacity=".55">
          <path d="M592 30v-12M592 206v-12M510 112h-12M686 112h-12M534 54l-9-9M659 179l-9-9M650 54l9-9M525 179l-9-9" />
        </g>

        <path
          d="M0 364c82-52 148-31 224-55 84-27 137-12 210 13 75 26 146 14 326-7v305H0Z"
          fill={`url(#${hillA})`}
        />
        <path
          d="M0 431c103-49 178-20 271-54 97-35 164 12 245 27 85 16 164-15 244-40v256H0Z"
          fill={`url(#${hillB})`}
          opacity=".94"
        />
        <path
          d="M0 525c111-50 198-31 291-49 109-22 198-3 275 18 69 19 129 8 194-6v132H0Z"
          fill={`url(#${hillC})`}
        />

        <g opacity=".5" fill="#f7f4e9">
          <ellipse cx="137" cy="125" rx="47" ry="16" />
          <ellipse cx="175" cy="116" rx="29" ry="12" />
          <ellipse cx="693" cy="252" rx="40" ry="13" />
          <ellipse cx="665" cy="245" rx="24" ry="9" />
        </g>

        <g>
          <path d="M118 423c7-50 8-102 5-151" stroke="#5b4432" strokeWidth="10" strokeLinecap="round" fill="none" />
          <circle cx="102" cy="272" r="34" fill="#356a4e" />
          <circle cx="133" cy="249" r="30" fill="#467d59" />
          <circle cx="158" cy="281" r="27" fill="#2f6047" />
          <circle cx="118" cy="231" r="22" fill="#578d65" />
        </g>

        <g>
          <path d="M123 525c14-39 16-63 15-81" stroke="#4b3c2d" strokeWidth="7" strokeLinecap="round" fill="none" />
          <circle cx="101" cy="450" r="22" fill="#4b7c58" />
          <circle cx="128" cy="432" r="25" fill="#3f704f" />
          <circle cx="147" cy="458" r="20" fill="#578d65" />
        </g>

        <path
          d="M292 485c40 31 56 73 61 135H183c18-43 53-78 109-135Z"
          fill="#e8dfc6"
          opacity=".7"
        />

        <g>
          <rect x="212" y="337" width="208" height="139" rx="3" fill="#f4eddb" />
          <rect x="212" y="337" width="208" height="139" rx="3" fill="none" stroke="#d6ccae" />
          <path d="M190 342 316 253l126 89Z" fill="#234d3d" />
          <path d="M202 339 316 261l114 78" fill="none" stroke="#356a52" strokeWidth="3" />
          <path d="M262 253v-33h20v47" fill="#9a7f60" />

          <g>
            <path d="M244 326 285 298l27 17-41 29Z" fill={`url(#${panel})`} stroke="#92b8c3" strokeWidth="1.5" />
            <path d="M290 295 331 268l27 17-41 29Z" fill={`url(#${panel})`} stroke="#92b8c3" strokeWidth="1.5" />
            <path d="M336 265 377 238l27 17-41 29Z" fill={`url(#${panel})`} stroke="#92b8c3" strokeWidth="1.5" />
            <g stroke="#47798a" strokeWidth="1" opacity=".7">
              <path d="m255 320 13 9M269 312l13 9M283 304l13 9M301 310l13 9M315 302l13 9M329 294l13 9M347 280l13 9M361 272l13 9M375 264l13 9" />
            </g>
          </g>

          <rect x="235" y="383" width="50" height="47" rx="2" fill="#c2d7c4" />
          <rect x="235" y="383" width="50" height="47" rx="2" fill="none" stroke="#9eb89e" />
          <path d="M260 383v47M235 406h50" stroke="#eaf0df" strokeWidth="2" />
          <rect x="312" y="381" width="60" height="53" rx="2" fill="#e3c178" opacity=".85" />
          <rect x="312" y="381" width="60" height="53" rx="2" fill="none" stroke="#b5945d" />
          <path d="M342 381v53M312 407h60" stroke="#f6e7bf" strokeWidth="2" />
          <rect x="381" y="405" width="27" height="71" rx="2" fill="#38604a" />
          <circle cx="402" cy="442" r="2.2" fill="#d8c58d" />
          <path d="M213 476h208" stroke="#d6ccae" strokeWidth="4" />
          <g fill="#3e6f51">
            <path d="M221 477c-3-17 7-25 15-25 2 10-2 20-15 25Z" />
            <path d="M240 477c-1-14 6-21 13-22 2 9-2 17-13 22Z" />
            <path d="M404 477c2-14-5-22-13-23-1 9 3 18 13 23Z" />
          </g>
        </g>

        <g>
          <path d="M454 560 475 470h180l25 90Z" fill="#d9cfb5" opacity=".55" />
          <g>
            <path d="M491 462 551 447l40 31-66 18Z" fill="#173e4d" stroke="#8cb5c2" strokeWidth="1.5" />
            <path d="M538 451 598 436l40 31-66 18Z" fill="#173e4d" stroke="#8cb5c2" strokeWidth="1.5" />
            <path d="M585 440 645 425l40 31-66 18Z" fill="#173e4d" stroke="#8cb5c2" strokeWidth="1.5" />
            <g stroke="#4c7f90" strokeWidth="1" opacity=".75">
              <path d="m510 459 20 9M535 452l20 9M560 445l20 9M557 448l20 9M582 441l20 9M607 434l20 9M603 437l20 9M628 430l20 9" />
            </g>
            <path d="M500 480v68M534 472v79M646 450v72M679 442v82" stroke="#6e6555" strokeWidth="4" />
            <path d="M480 554h220" stroke="#5f8768" strokeWidth="3" />
            <path d="M484 554c18-14 42-14 61 0M568 554c15-12 34-12 50 0M626 554c14-10 31-10 45 0" fill="#4d7859" />
          </g>
        </g>

        <g fill="#c8df7a">
          <circle cx="92" cy="534" r="3" />
          <circle cx="108" cy="558" r="2.3" />
          <circle cx="734" cy="468" r="2.7" />
          <circle cx="704" cy="535" r="2.2" />
          <circle cx="55" cy="580" r="2.6" />
        </g>

        <g stroke="#4b7658" strokeWidth="2" strokeLinecap="round" opacity=".75">
          <path d="M702 400v54M696 417c-11-2-16-8-17-18 10 0 16 5 17 18ZM708 433c11-2 16-9 16-19-11 0-17 6-16 19Z" />
          <path d="M59 474v48M53 489c-9-1-14-7-14-15 9 0 14 5 14 15ZM65 506c9-2 13-8 13-16-9 0-14 5-13 16Z" />
        </g>
      </svg>

      <div className="eco-hero-flutuante eco-hero-flutuante--status">
        <span className="eco-hero-flutuante-icone"><span /></span>
        <div>
          <small>Sistema ativo</small>
          <strong>4,8 kW agora</strong>
        </div>
        <span className="eco-mini-barras" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </span>
      </div>

      <div className="eco-hero-flutuante eco-hero-flutuante--impacto">
        <span className="eco-hero-impacto-icone" aria-hidden="true">CO₂</span>
        <div>
          <small>CO₂ evitado no mês*</small>
          <strong>0,8 t</strong>
        </div>
      </div>

      <span className="eco-hero-selo">100% solar</span>
      <CenaSelo />
    </div>
  );
}

export function EcoCenaResidencial() {
  const uid = useId().replace(/:/g, "");
  const sky = `ecoResSky-${uid}`;
  const sun = `ecoResSun-${uid}`;
  const panel = `ecoResPanel-${uid}`;

  return (
    <div className="eco-cena eco-cena--projeto eco-cena--residencial" aria-hidden="true">
      <svg viewBox="0 0 640 440" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f2f0e3" />
            <stop offset="100%" stopColor="#c8dcc3" />
          </linearGradient>
          <radialGradient id={sun} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f8df91" />
            <stop offset="100%" stopColor="#e0ac48" />
          </radialGradient>
          <linearGradient id={panel} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1c4a5a" />
            <stop offset="100%" stopColor="#102e39" />
          </linearGradient>
        </defs>

        <rect width="640" height="440" fill={`url(#${sky})`} />
        <circle cx="520" cy="88" r="44" fill={`url(#${sun})`} />
        <circle cx="520" cy="88" r="63" fill="#f2dda0" opacity=".25" />
        <path d="M0 302c106-43 181-26 266-50 104-29 177 12 374-17v205H0Z" fill="#a9c5a5" />
        <path d="M0 367c94-35 167-11 265-38 104-29 207-3 375 17v94H0Z" fill="#7ea183" />
        <path d="M0 404c128-32 232-17 331-9 109 9 198-8 309-4v49H0Z" fill="#5f8768" />

        <g>
          <rect x="168" y="242" width="280" height="167" fill="#f3ecda" />
          <path d="M146 250 309 157l162 93Z" fill="#244f3e" />
          <path d="M156 250 309 167l153 83" fill="none" stroke="#3c7055" strokeWidth="3" />
          <path d="M300 158v-31h21v47" fill="#9b8061" />

          <g>
            <path d="M206 234 259 199l31 19-54 36Z" fill={`url(#${panel})`} stroke="#91b7c1" strokeWidth="1.4" />
            <path d="M263 198 316 163l31 19-54 36Z" fill={`url(#${panel})`} stroke="#91b7c1" strokeWidth="1.4" />
            <path d="M320 162 373 127l31 19-54 36Z" fill={`url(#${panel})`} stroke="#91b7c1" strokeWidth="1.4" />
            <g stroke="#47798a" strokeWidth="1" opacity=".7">
              <path d="m220 228 16 11M240 214l16 11M260 200l16 11M277 207l16 11M297 193l16 11M317 179l16 11M334 186l16 11M354 172l16 11M374 158l16 11" />
            </g>
          </g>

          <rect x="195" y="290" width="57" height="48" fill="#c0d7c3" />
          <path d="M223 290v48M195 314h57" stroke="#edf2e3" strokeWidth="2" />
          <rect x="296" y="286" width="72" height="59" fill="#e5c37b" opacity=".9" />
          <path d="M332 286v59M296 315h72" stroke="#f8ebc9" strokeWidth="2" />
          <rect x="397" y="310" width="32" height="99" fill="#39624d" />
          <circle cx="421" cy="359" r="2.3" fill="#dac78f" />
          <path d="M168 409h280" stroke="#d3c7aa" strokeWidth="4" />
          <g fill="#3f7052">
            <path d="M179 409c-3-19 7-29 17-30 2 12-3 23-17 30Z" />
            <path d="M203 409c-1-16 7-25 15-25 1 10-3 19-15 25Z" />
            <path d="M427 409c3-16-5-25-14-27-1 10 4 21 14 27Z" />
          </g>
        </g>

        <g>
          <path d="M96 385c8-52 10-86 5-130" stroke="#554131" strokeWidth="9" strokeLinecap="round" />
          <circle cx="77" cy="234" r="33" fill="#386c50" />
          <circle cx="107" cy="214" r="29" fill="#4a805b" />
          <circle cx="132" cy="246" r="24" fill="#2e5e45" />
        </g>

        <g stroke="#4b7658" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".8">
          <path d="M548 300v91M539 324c-12-3-18-10-18-22 11 0 18 7 18 22ZM557 348c12-4 18-12 17-24-12 0-18 8-17 24Z" />
          <path d="M72 332v63M65 348c-9-2-14-8-14-17 9 0 14 6 14 17ZM80 366c9-2 14-9 13-18-9 0-14 6-13 18Z" />
        </g>
        <g fill="#c8df7a">
          <circle cx="510" cy="352" r="3" />
          <circle cx="489" cy="380" r="2.2" />
          <circle cx="574" cy="401" r="2.4" />
          <circle cx="138" cy="393" r="2.2" />
        </g>
      </svg>
    </div>
  );
}

export function EcoCenaCondominio() {
  const uid = useId().replace(/:/g, "");
  const sky = `ecoCondSky-${uid}`;
  const sun = `ecoCondSun-${uid}`;
  const panel = `ecoCondPanel-${uid}`;

  return (
    <div className="eco-cena eco-cena--projeto eco-cena--condominio" aria-hidden="true">
      <svg viewBox="0 0 640 440" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eef1e4" />
            <stop offset="100%" stopColor="#bed4b8" />
          </linearGradient>
          <radialGradient id={sun} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f7d986" />
            <stop offset="100%" stopColor="#dfa943" />
          </radialGradient>
          <linearGradient id={panel} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1d4b5c" />
            <stop offset="100%" stopColor="#102f3b" />
          </linearGradient>
        </defs>

        <rect width="640" height="440" fill={`url(#${sky})`} />
        <circle cx="102" cy="92" r="46" fill={`url(#${sun})`} />
        <circle cx="102" cy="92" r="67" fill="#f0db9b" opacity=".25" />

        <g fill="#c6d8bf" opacity=".8">
          <path d="M0 251c83-33 151-14 222-29 99-21 159 10 220 24 66 15 122 2 198-18v212H0Z" />
        </g>
        <path d="M0 340c102-29 174-11 271-28 111-20 216 5 369 19v109H0Z" fill="#8cac89" />
        <path d="M0 396c116-24 214-11 320-6 113 5 210-10 320-2v52H0Z" fill="#5f8768" />

        <g>
          <rect x="118" y="171" width="158" height="235" fill="#e8e1cd" />
          <rect x="118" y="171" width="158" height="235" fill="none" stroke="#cfc5aa" />
          <rect x="286" y="208" width="184" height="198" fill="#f0e9d7" />
          <rect x="286" y="208" width="184" height="198" fill="none" stroke="#d3c9ae" />

          <path d="M112 174 199 121l82 53Z" fill="#2b5644" />
          <path d="M282 211 378 150l92 61Z" fill="#37654d" />

          <g>
            <path d="M140 165 185 137l25 16-46 29Z" fill={`url(#${panel})`} stroke="#90b6c0" strokeWidth="1.4" />
            <path d="M188 136 233 108l25 16-46 29Z" fill={`url(#${panel})`} stroke="#90b6c0" strokeWidth="1.4" />
            <path d="M310 201 355 173l26 17-47 29Z" fill={`url(#${panel})`} stroke="#90b6c0" strokeWidth="1.4" />
            <path d="M359 172 404 144l26 17-47 29Z" fill={`url(#${panel})`} stroke="#90b6c0" strokeWidth="1.4" />
          </g>

          <g fill="#bfd5c1" stroke="#9fb99f">
            <rect x="139" y="198" width="31" height="36" />
            <rect x="186" y="198" width="31" height="36" />
            <rect x="233" y="198" width="31" height="36" />
            <rect x="139" y="254" width="31" height="36" />
            <rect x="186" y="254" width="31" height="36" />
            <rect x="233" y="254" width="31" height="36" />
            <rect x="139" y="310" width="31" height="36" />
            <rect x="186" y="310" width="31" height="36" />
            <rect x="233" y="310" width="31" height="36" />
            <rect x="308" y="236" width="38" height="41" />
            <rect x="365" y="236" width="38" height="41" />
            <rect x="422" y="236" width="38" height="41" />
            <rect x="308" y="298" width="38" height="41" />
            <rect x="365" y="298" width="38" height="41" />
            <rect x="422" y="298" width="38" height="41" />
          </g>
          <g fill="#dcc07b" opacity=".75">
            <rect x="139" y="198" width="31" height="16" />
            <rect x="233" y="254" width="31" height="17" />
            <rect x="365" y="298" width="38" height="18" />
            <rect x="422" y="236" width="38" height="18" />
          </g>

          <rect x="199" y="348" width="32" height="58" fill="#315b48" />
          <rect x="370" y="354" width="28" height="52" fill="#315b48" />
          <path d="M110 406h370" stroke="#d4c7aa" strokeWidth="4" />
        </g>

        <g>
          <path d="M74 406c5-43 6-68 4-102" stroke="#594532" strokeWidth="8" strokeLinecap="round" />
          <circle cx="57" cy="302" r="30" fill="#3c6e51" />
          <circle cx="84" cy="283" r="26" fill="#4c815b" />
          <circle cx="108" cy="309" r="22" fill="#356148" />
        </g>

        <g>
          <path d="M540 405c4-34 4-54 2-80" stroke="#594532" strokeWidth="7" strokeLinecap="round" />
          <circle cx="524" cy="318" r="24" fill="#467a56" />
          <circle cx="548" cy="304" r="20" fill="#5b8c64" />
          <circle cx="566" cy="326" r="18" fill="#3b6a4e" />
        </g>

        <g stroke="#4d7859" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".7">
          <path d="M481 262c8-8 18-7 25 0M493 254c3 8 3 14 0 20" />
          <path d="M118 148c9-8 19-7 26 0M130 140c3 8 3 14 0 20" />
        </g>

        <g fill="#c8df7a">
          <circle cx="486" cy="390" r="2.4" />
          <circle cx="512" cy="414" r="2" />
          <circle cx="91" cy="391" r="2.2" />
          <circle cx="596" cy="382" r="2.6" />
        </g>
      </svg>
    </div>
  );
}

export function EcoCenaEstacao() {
  const uid = useId().replace(/:/g, "");
  const sky = `ecoEstSky-${uid}`;
  const sun = `ecoEstSun-${uid}`;
  const panel = `ecoEstPanel-${uid}`;

  return (
    <div className="eco-cena eco-cena--projeto eco-cena--estacao" aria-hidden="true">
      <svg viewBox="0 0 640 440" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5f2e5" />
            <stop offset="100%" stopColor="#c4d8bd" />
          </linearGradient>
          <radialGradient id={sun} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f9df8c" />
            <stop offset="100%" stopColor="#dfa83f" />
          </radialGradient>
          <linearGradient id={panel} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e4d5e" />
            <stop offset="100%" stopColor="#0f2d38" />
          </linearGradient>
        </defs>

        <rect width="640" height="440" fill={`url(#${sky})`} />
        <circle cx="528" cy="90" r="45" fill={`url(#${sun})`} />
        <circle cx="528" cy="90" r="66" fill="#f2dda0" opacity=".28" />

        <path d="M0 249c83-39 144-28 216-59 87-37 160-10 228 8 75 20 132 3 196-20v262H0Z" fill="#adc6a8" />
        <path d="M0 305c101-24 174-10 267-37 108-31 190 1 373 9v163H0Z" fill="#90b08c" />
        <path d="M0 370c125-22 210-7 319-8 119-1 206-12 321-3v81H0Z" fill="#6f9477" />

        <g opacity=".55" fill="#f7f4e9">
          <ellipse cx="142" cy="104" rx="43" ry="14" />
          <ellipse cx="174" cy="96" rx="28" ry="10" />
          <ellipse cx="355" cy="72" rx="35" ry="11" />
        </g>

        <g>
          <path d="M62 354 118 304l46 17 9 24-111 9Z" fill="#d9cfb4" opacity=".4" />
          <g>
            <path d="M81 363 137 307l53 21-60 57Z" fill={`url(#${panel})`} stroke="#8ab3bf" strokeWidth="1.4" />
            <path d="M150 357 206 301l53 21-60 57Z" fill={`url(#${panel})`} stroke="#8ab3bf" strokeWidth="1.4" />
            <path d="M219 351 275 295l53 21-60 57Z" fill={`url(#${panel})`} stroke="#8ab3bf" strokeWidth="1.4" />
            <path d="M288 345 344 289l53 21-60 57Z" fill={`url(#${panel})`} stroke="#8ab3bf" strokeWidth="1.4" />
            <g stroke="#4c7f90" strokeWidth="1" opacity=".8">
              <path d="m101 358 17 7M130 339l17 7M159 320l17 7M170 352l17 7M199 333l17 7M228 314l17 7M239 346l17 7M268 327l17 7M297 308l17 7M308 340l17 7M337 321l17 7M366 302l17 7" />
            </g>
            <path d="M98 372v20M155 363v24M218 353v25M285 344v26" stroke="#6f6554" strokeWidth="3" />
          </g>

          <g>
            <path d="M366 389 414 343l45 18-51 49Z" fill={`url(#${panel})`} stroke="#8ab3bf" strokeWidth="1.3" />
            <path d="M426 383 474 337l45 18-51 49Z" fill={`url(#${panel})`} stroke="#8ab3bf" strokeWidth="1.3" />
            <path d="M486 377 534 331l45 18-51 49Z" fill={`url(#${panel})`} stroke="#8ab3bf" strokeWidth="1.3" />
            <g stroke="#4c7f90" strokeWidth="1" opacity=".8">
              <path d="m383 384 14 6M407 362l14 6M431 340l14 6M443 378l14 6M467 356l14 6M491 334l14 6M503 372l14 6M527 350l14 6" />
            </g>
            <path d="M380 397v12M438 391v14M498 385v15" stroke="#6f6554" strokeWidth="3" />
          </g>
        </g>

        <g>
          <rect x="542" y="284" width="74" height="81" fill="#f2ebd9" />
          <path d="M530 288 579 250l62 38Z" fill="#2d5946" />
          <rect x="558" y="315" width="17" height="22" fill="#bcd3bd" />
          <rect x="586" y="315" width="17" height="22" fill="#bcd3bd" />
          <rect x="570" y="342" width="18" height="23" fill="#345e4a" />
          <path d="M536 365h86" stroke="#d5c9ab" strokeWidth="3" />
        </g>

        <g>
          <path d="M62 432c4-54 5-82 2-118" stroke="#584531" strokeWidth="8" strokeLinecap="round" />
          <circle cx="42" cy="300" r="31" fill="#3d6f52" />
          <circle cx="72" cy="279" r="28" fill="#4b815c" />
          <circle cx="98" cy="305" r="23" fill="#326048" />
        </g>

        <g>
          <path d="M610 434c-2-38-1-60 1-86" stroke="#584531" strokeWidth="7" strokeLinecap="round" />
          <circle cx="598" cy="335" r="22" fill="#467a57" />
          <circle cx="619" cy="320" r="19" fill="#5c8c64" />
        </g>

        <path d="M0 412c120-15 207 4 314 2 113-2 206-13 326-1v27H0Z" fill="#557d61" />
        <g fill="#c8df7a">
          <circle cx="127" cy="405" r="2.4" />
          <circle cx="158" cy="420" r="2" />
          <circle cx="456" cy="410" r="2.2" />
          <circle cx="510" cy="424" r="2.5" />
          <circle cx="302" cy="414" r="2" />
        </g>
        <g stroke="#4d7859" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".7">
          <path d="M247 243c8-7 17-7 24 0M258 236c3 7 3 13 0 18" />
          <path d="M396 251c7-6 15-6 21 0M406 245c2 6 2 11 0 16" />
        </g>
      </svg>
    </div>
  );
}

const CENAS = {
  residencial: EcoCenaResidencial,
  condominio: EcoCenaCondominio,
  estacao: EcoCenaEstacao,
};

export function EcoProjectScene({ tipo }) {
  const Cena = CENAS[tipo] || EcoCenaResidencial;
  return <Cena />;
}
