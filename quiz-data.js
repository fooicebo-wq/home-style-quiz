/* ============================================================
   集思居家風格測驗 — 資料檔
   這裡放：品牌設定、預設插圖、題目、16 種原型
   照片與文字的「抽換」請用 admin.html 後台，不要直接改這裡
   ============================================================ */

/* ---------- 品牌設定：LINE 官方帳號、官網 ---------- */
const CONFIG = {
  brand:   "集思室內設計",
  brandEn: "GIS INTERIOR",
  motto:   "聽 · 想 · 畫 · 做 · 陪",
  lineOA:  "%40608iofzm",            // LINE 官方帳號 ID（@ 要寫成 %40）
  website: "https://www.gisinterior.com/",
  hashtag: "#集思居家風格測驗 #集思室內設計",

  // ▼ 測驗紀錄與名單收集（Code.gs 部署後把網址貼進來）
  //   留空＝完全不記錄，測驗照常運作
  gasUrl:  "https://script.google.com/macros/s/AKfycbxo42EJgQYNspipHgQ4ZECQuxl8rXmWLvQojBUVup7Og4sVcRLJjrOt8POsEArDuMIJZw/exec"
};

/* ---------- 共用繪圖工具（預設插圖，沒放照片時就用這個） ---------- */
const SV = (inner, bg) => '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" fill="'+(bg||'#EDE9E1')+'"/>'+inner+'</svg>';
const WIN = scene => SV('<g clip-path="url(#win)">'+scene+'</g><g stroke="#CFC8B8" stroke-width="4.5" fill="none"><rect x="18" y="14" width="84" height="92" rx="2"/><path d="M60 14V106M18 60h84"/></g>', '#E8E4DC');
const ART = art => SV('<rect x="24" y="16" width="72" height="88" rx="1" fill="#FFFDF9" stroke="#C9BFA9" stroke-width="2.5"/>'+art, '#EDE9E1');
const DOOR = h => SV('<rect x="12" y="12" width="96" height="96" rx="3" fill="#E3DCCD"/>'+h, '#EDE9E1');

/* ---------- 預設插圖庫 ---------- */
const G = {
  /* 畫作 */
  art1: ART('<rect x="28" y="20" width="64" height="80" fill="#E9CBA9"/><rect x="28" y="58" width="64" height="42" fill="#D9A87E"/><rect x="28" y="84" width="64" height="16" fill="#B98A63"/>'),
  art2: ART('<rect x="28" y="20" width="64" height="80" fill="#C9BB90"/><ellipse cx="76" cy="38" rx="10" ry="9" fill="#EEE1B4"/><path d="M28 76q22-18 40-2t24-6v32H28z" fill="#6E6B45"/><path d="M40 78q2-16 6-18 4 2 6 18z" fill="#4B4A2E"/>'),
  art3: ART('<rect x="28" y="20" width="64" height="80" fill="#FBFAF6"/><path d="M32 76 48 50l12 18 10-14 18 22" fill="none" stroke="#5A5A56" stroke-width="1.8"/><path d="M34 88h52" stroke="#A29E93" stroke-width="1.3"/><circle cx="76" cy="34" r="6" fill="none" stroke="#B3574B" stroke-width="1.5"/>'),
  art4: ART('<rect x="28" y="20" width="64" height="80" fill="#F6F3EC"/><circle cx="52" cy="45" r="17" fill="#D9482F" opacity=".88"/><rect x="58" y="55" width="30" height="35" fill="#1F5FA8" opacity=".85"/><path d="M32 92q18-26 34-6" stroke="#F2B705" stroke-width="6.5" fill="none" stroke-linecap="round"/>'),
  art5: ART('<rect x="28" y="20" width="64" height="80" fill="#F2F1EE"/><g stroke="#22221F" stroke-width="1.7" fill="none"><path d="M36 98V44l24-14 24 14v54"/><path d="M36 62h48M36 80h48M52 44v54M68 44v54"/></g>'),
  art6: ART('<rect x="28" y="20" width="64" height="80" fill="#FAF7EF"/><g stroke="#4E6B4A" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M60 98V36"/><path d="M60 56q-14-8-16-21 14 3 16 19"/><path d="M60 70q14-9 16-23-14 4-16 21"/><path d="M60 84q-12-7-14-17 12 3 14 15"/></g>'),
  art7: ART('<rect x="28" y="20" width="64" height="80" fill="#F4EFE4"/><g fill="none" stroke="#22221F" stroke-width="1.8"><circle cx="60" cy="50" r="18"/><path d="M34 82h52M46 92h28"/></g>'),
  art8: ART('<rect x="28" y="20" width="64" height="80" fill="#F2E7DC"/><path d="M48 98q0-30 12-30t12 30" fill="none" stroke="#3A332C" stroke-width="2"/><circle cx="60" cy="46" r="13" fill="none" stroke="#3A332C" stroke-width="2"/><path d="M55 44q5 7 10 0" stroke="#B0563F" stroke-width="1.8" fill="none"/>'),

  /* 椅子 */
  ch1: SV('<path d="M22 74 72 62l2 9L24 83z" fill="#7A4A2B"/><path d="M68 65 90 32l7 5-22 34z" fill="#8A5734"/><g stroke="#2B2723" stroke-width="3" stroke-linecap="round"><path d="M28 82 26 100M70 71 74 96"/></g>', '#EFEBE3'),
  ch2: SV('<path d="M40 98V56q0-15 20-15t20 15v42z" fill="#6B4A55"/><rect x="34" y="64" width="9" height="26" rx="4.5" fill="#563B45"/><rect x="77" y="64" width="9" height="26" rx="4.5" fill="#563B45"/><g stroke="#3A2A31" stroke-width="3.5" stroke-linecap="round"><path d="M43 98v8M77 98v8"/></g>', '#EFEBE3'),
  ch3: SV('<path d="M28 98q-5-32 22-40 28-8 38 13 9 21-11 27z" fill="#BBAB90"/><path d="M36 96q10-7 30-7 16 0 22 7" fill="none" stroke="#8E805F" stroke-width="1.8"/>', '#EFEBE3'),
  ch4: SV('<path d="M32 98V70q0-28 27-28 23 0 23 23 0 15-15 17h-9v16z" fill="#414B44"/><path d="M50 82h20" stroke="#5E6B63" stroke-width="2"/>', '#EFEBE3'),
  ch5: SV('<path d="M38 96V58q0-16 22-16t22 16v38z" fill="#DBC59D"/><g stroke="#A98F63" stroke-width="1.3"><path d="M38 60h44M38 72h44M38 84h44M50 44v52M60 42v54M70 44v52"/></g><g stroke="#7A6647" stroke-width="3" stroke-linecap="round"><path d="M43 96v9M77 96v9"/></g>', '#EFEBE3'),
  ch6: SV('<path d="M20 82h78v11H20z" fill="#6E3B4A"/><path d="M20 82q0-25 14-25 11 0 11 13v12z" fill="#7E4557"/><g stroke="#3A2028" stroke-width="3.2" stroke-linecap="round"><path d="M26 93v9M92 93v9"/></g>', '#EFEBE3'),
  ch7: SV('<g fill="none" stroke="#70757A" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"><path d="M44 38v32h34"/><path d="M78 70v28"/><path d="M44 70q-15 0-15 14t15 14h34"/></g>', '#EFEBE3'),
  ch8: SV('<g stroke="#8A6A45" stroke-width="4.5" stroke-linecap="round" fill="none"><path d="M44 38v34M76 38v34"/><path d="M46 46h28M46 58h28"/><path d="M38 74h44"/><path d="M43 76v24M77 76v24"/></g>', '#EFEBE3'),

  /* 燈具 */
  lp1: SV('<path d="M60 34V12" stroke="#8E8577" stroke-width="1.6"/><circle cx="60" cy="60" r="26" fill="#F7F0DA" stroke="#D9CDAA" stroke-width="1.6"/><g stroke="#DFD2B1" stroke-width="1.1"><path d="M35 52h50M35 68h50M40 40h40M40 80h40"/></g>', '#EFEBE3'),
  lp2: SV('<path d="M60 12v14" stroke="#8E8577" stroke-width="1.6"/><path d="M34 40h52L74 58H46z" fill="#EADEBF" stroke="#C6B181" stroke-width="1.3"/><g stroke="#D5BE8A" stroke-width="1.3"><path d="M44 58v14M52 58v20M60 58v26M68 58v20M76 58v14"/></g><g fill="#F2E6C7"><circle cx="44" cy="74" r="3.4"/><circle cx="52" cy="80" r="3.4"/><circle cx="60" cy="86" r="4"/><circle cx="68" cy="80" r="3.4"/><circle cx="76" cy="74" r="3.4"/></g>', '#EFEBE3'),
  lp3: SV('<g fill="#F3E4B8" opacity=".5"><path d="M24 62 12 102h34z"/><path d="M54 62 42 102h34z"/><path d="M84 62 72 102h34z"/></g><rect x="16" y="28" width="88" height="7" rx="3" fill="#4A4E50"/><g fill="#3D4143"><rect x="28" y="35" width="4" height="11"/><rect x="22" y="46" width="16" height="16" rx="4"/><rect x="58" y="35" width="4" height="11"/><rect x="52" y="46" width="16" height="16" rx="4"/><rect x="88" y="35" width="4" height="11"/><rect x="82" y="46" width="16" height="16" rx="4"/></g>', '#EFEBE3'),
  lp4: SV('<g fill="#B08D57"><rect x="50" y="88" width="20" height="7" rx="3"/><rect x="56.5" y="50" width="7" height="38"/><ellipse cx="60" cy="50" rx="10" ry="4.5"/></g><path d="M60 46q-7-9 0-18 7 9 0 18z" fill="#F0C86A"/>', '#EFEBE3'),
  lp5: SV('<path d="M68 46h16l16 50H52z" fill="#F3E4B8" opacity=".5"/><g stroke="#3D4143" stroke-width="3.4" fill="none" stroke-linecap="round"><path d="M44 102h30M60 102V42q0-10 12-10"/></g><path d="M62 28h28l-6 18H68z" fill="#3D4143"/>', '#EFEBE3'),
  lp6: SV('<g fill="#F0E4CC" stroke="#C9B896" stroke-width="1.4"><ellipse cx="60" cy="88" rx="21" ry="12"/><ellipse cx="60" cy="67" rx="16" ry="11"/><ellipse cx="60" cy="48" rx="11" ry="9"/><ellipse cx="60" cy="33" rx="6.5" ry="6.5"/></g>', '#EFEBE3'),
  lp7: SV('<path d="M42 94q0-24 18-26 18 2 18 26z" fill="#C08B63"/><path d="M38 62h44l-7-26H45z" fill="#F0E1C6" stroke="#CBB78F" stroke-width="1.4"/>', '#EFEBE3'),
  lp8: SV('<path d="M60 10v20" stroke="#8E8577" stroke-width="1.6"/><path d="M32 80q0-50 28-50t28 50z" fill="#DEC89E"/><g stroke="#A98F63" stroke-width="1.2" fill="none"><path d="M39 46h42M34 60h52M32 74h56M48 31q-7 25-7 49M72 31q7 25 7 49"/></g>', '#EFEBE3'),

  /* 餐桌花器 */
  vs1: SV('<path d="M47 96q-5-26 4-30h18q9 4 4 30z" fill="#BBAA8E"/><g stroke="#6E6350" stroke-width="1.5" fill="none" stroke-linecap="round"><path d="M60 66V30M60 46 46 34M60 56l14-14M60 38l-9-13"/></g>', '#EFEBE3'),
  vs2: SV('<path d="M50 96q-7-21 2-25h16q9 4 2 25z" fill="#E9F0F3" stroke="#BFCDD6" stroke-width="1.3"/><g fill="#E4A7B4"><circle cx="50" cy="48" r="11"/><circle cx="71" cy="44" r="12"/><circle cx="60" cy="30" r="9.5"/></g><g fill="#F1CCD3"><circle cx="50" cy="48" r="4"/><circle cx="71" cy="44" r="4.5"/><circle cx="60" cy="30" r="3.5"/></g>', '#EFEBE3'),
  vs3: SV('<path d="M51 96V54h18v42z" fill="#FCFBF7" stroke="#D6D2C6" stroke-width="1.4"/><g stroke="#6E7A4E" stroke-width="1.6" fill="none"><path d="M57 54q-6-24-1-32M63 54q4-22 11-28"/></g><path d="M50 26q5-14 11-7-2 12-11 7z" fill="#FDFCF8" stroke="#D8D3C3" stroke-width="1.2"/><path d="M70 20q7-12 11-3-5 11-11 3z" fill="#FDFCF8" stroke="#D8D3C3" stroke-width="1.2"/>', '#EFEBE3'),
  vs4: SV('<path d="M50 96q-5-28 4-32h12q9 4 4 32z" fill="#DDEAE7" opacity=".85" stroke="#B7C9C5" stroke-width="1.3"/><g stroke="#7E8F5E" stroke-width="1.3" fill="none"><path d="M58 64V36M62 64q5-19 11-25M56 64q-7-15-13-19"/></g><circle cx="58" cy="34" r="4.5" fill="#E8C25E"/><circle cx="74" cy="38" r="4" fill="#E8C25E"/><circle cx="42" cy="44" r="4" fill="#C98BA4"/>', '#EFEBE3'),
  vs5: SV('<path d="M50 96q-5-19 2-23h16q7 4 2 23z" fill="#B08D57"/><circle cx="60" cy="46" r="17" fill="#B7C3D6"/><g fill="#CED8E7"><circle cx="52" cy="40" r="5.5"/><circle cx="67" cy="39" r="5.5"/><circle cx="60" cy="53" r="5.5"/><circle cx="49" cy="53" r="4.5"/><circle cx="71" cy="51" r="4.5"/></g>', '#EFEBE3'),
  vs6: SV('<path d="M51 96V56h18v40z" fill="#3F4A45"/><path d="M60 58V32" stroke="#4E6B4A" stroke-width="1.8"/><path d="M60 40q-23-6-25-23 23 0 25 21z" fill="#5C7A55"/><path d="M60 32q23-8 27-25-25 2-27 23z" fill="#6E8A61"/>', '#EFEBE3'),
  vs7: SV('<g fill="#E9F0ED" stroke="#BDCCC7" stroke-width="1.2"><rect x="43" y="46" width="9" height="34" rx="4.5"/><rect x="55.5" y="40" width="9" height="40" rx="4.5"/><rect x="68" y="48" width="9" height="32" rx="4.5"/></g><g stroke="#6E8A61" stroke-width="1.6" fill="none"><path d="M47.5 46V28M60 40V24M72.5 48V32"/></g><g fill="#6E8A61"><ellipse cx="47.5" cy="26" rx="4" ry="6.5"/><ellipse cx="60" cy="22" rx="4" ry="6.5"/><ellipse cx="72.5" cy="30" rx="4" ry="6.5"/></g><rect x="34" y="72" width="52" height="5" rx="2.5" fill="#B08D57"/><rect x="34" y="86" width="52" height="5" rx="2.5" fill="#B08D57"/>', '#EFEBE3'),
  vs8: SV('<path d="M50 96q-5-23 2-27h16q7 4 2 27z" fill="#C4A98A"/><g stroke="#9A8467" stroke-width="1.4" fill="none"><path d="M58 68V38M62 68q7-17 15-24M56 68q-9-13-15-17"/></g><g fill="#C9A9A0"><ellipse cx="58" cy="34" rx="5" ry="9"/><ellipse cx="77" cy="44" rx="4" ry="7.5" transform="rotate(32 77 44)"/><ellipse cx="41" cy="50" rx="4" ry="7.5" transform="rotate(-32 41 50)"/></g>', '#EFEBE3'),

  /* 杯子 */
  cp1: SV('<path d="M38 54q0 36 22 36t22-36z" fill="#E8F0F3" opacity=".9" stroke="#B9CBD2" stroke-width="1.5"/><path d="M40 66q20 8 40 0" fill="none" stroke="#C6D5DB" stroke-width="1.2"/>', '#EFEBE3'),
  cp2: SV('<path d="M45 30h30l-5 62H50z" fill="#E8F0F3" opacity=".9" stroke="#B9CBD2" stroke-width="1.5"/><g stroke="#C6D5DB" stroke-width="1.1"><path d="M52 32 54 90M60 31v60M68 32 66 90"/></g>', '#EFEBE3'),
  cp3: SV('<path d="M43 40h34v52H43z" fill="#E8F0F3" opacity=".9" stroke="#B9CBD2" stroke-width="1.5"/><rect x="43" y="76" width="34" height="16" fill="#CFDEE4" opacity=".9"/>', '#EFEBE3'),
  cp4: SV('<g fill="#E8F0F3" opacity=".92" stroke="#B9CBD2" stroke-width="1.5"><path d="M34 32h52L63 62h-6z"/><path d="M57 62h6v28h-6z"/><path d="M44 90h32v5H44z"/></g><circle cx="72" cy="41" r="4.5" fill="#8FA85E"/>', '#EFEBE3'),
  cp5: SV('<g fill="#E8F0F3" opacity=".92" stroke="#B9CBD2" stroke-width="1.5"><path d="M40 38q0 24 20 24t20-24z"/><path d="M57 62h6v28h-6z"/><path d="M44 90h32v5H44z"/></g><g fill="#DCE9EE"><circle cx="52" cy="50" r="2"/><circle cx="62" cy="46" r="1.7"/><circle cx="68" cy="53" r="1.7"/></g>', '#EFEBE3'),
  cp6: SV('<path d="M42 32h36v46q0 9-18 9t-18-9z" fill="#EEF4F7" opacity=".92" stroke="#BCC9D0" stroke-width="1.5"/><g stroke="#C9D6DC" stroke-width="1.1"><path d="M50 32v50M60 32v54M70 32v50M42 50h36M42 66h36"/></g>', '#EFEBE3'),
  cp7: SV('<g fill="#EEF4F7" opacity=".92" stroke="#BCC9D0" stroke-width="1.5"><path d="M42 20q0 36 18 36t18-36z"/><path d="M57 56h6v32h-6z"/><path d="M43 88h34v5H43z"/></g><path d="M44 38q3 16 16 16t16-16z" fill="#8E3247" opacity=".72"/>', '#EFEBE3'),
  cp8: SV('<path d="M78 54q13 3 11 15-3 11-13 9" fill="none" stroke="#C08B63" stroke-width="6"/><path d="M40 46q-2 44 20 44t20-44z" fill="#C08B63"/><path d="M40 46q20 7 40 0" fill="none" stroke="#A9744E" stroke-width="1.5"/><path d="M46 62q14 5 28 0" fill="none" stroke="#B07F58" stroke-width="1.3"/>', '#EFEBE3'),

  /* 窗景 */
  vw1: WIN('<rect x="18" y="14" width="84" height="92" fill="#CBD8DC"/><path d="M18 78 44 44l20 28 16-20 22 30v24H18z" fill="#94A2A3"/><path d="M18 88 40 66l22 24 22-20 20 22v24H18z" fill="#63736F"/>'),
  vw2: WIN('<rect x="18" y="14" width="84" height="92" fill="#BFD8E4"/><circle cx="80" cy="36" r="10" fill="#F2DFAF"/><rect x="18" y="64" width="84" height="42" fill="#4E7E96"/><g stroke="#8FBACB" stroke-width="1.8" stroke-linecap="round"><path d="M22 74h20M52 82h24M28 92h30M70 96h22"/></g>'),
  vw3: WIN('<rect x="18" y="14" width="84" height="92" fill="#1E2733"/><g fill="#2E3948"><rect x="20" y="52" width="15" height="54"/><rect x="39" y="36" width="17" height="70"/><rect x="60" y="60" width="13" height="46"/><rect x="77" y="28" width="19" height="78"/></g><g fill="#F0CE7A"><rect x="24" y="58" width="3.5" height="4.5"/><rect x="30" y="68" width="3.5" height="4.5"/><rect x="43" y="44" width="3.5" height="4.5"/><rect x="50" y="58" width="3.5" height="4.5"/><rect x="43" y="72" width="3.5" height="4.5"/><rect x="63" y="68" width="3.5" height="4.5"/><rect x="81" y="36" width="3.5" height="4.5"/><rect x="89" y="48" width="3.5" height="4.5"/><rect x="81" y="64" width="3.5" height="4.5"/></g>'),
  vw4: WIN('<rect x="18" y="14" width="84" height="92" fill="#D8E2CE"/><rect x="18" y="82" width="84" height="24" fill="#7E9464"/><rect x="35" y="72" width="5" height="18" fill="#6B5A3E"/><rect x="69" y="66" width="6" height="24" fill="#6B5A3E"/><circle cx="37" cy="64" r="17" fill="#4E6B4A"/><circle cx="72" cy="56" r="21" fill="#5C7A55"/>'),
  vw5: WIN('<rect x="18" y="14" width="84" height="92" fill="#DED3BE"/><g fill="#B99C77"><rect x="18" y="32" width="31" height="74"/><rect x="73" y="24" width="29" height="82"/></g><g fill="#8A6E4E"><rect x="25" y="44" width="11" height="15"/><rect x="25" y="70" width="11" height="15"/><rect x="82" y="38" width="11" height="15"/><rect x="82" y="66" width="11" height="15"/></g><rect x="49" y="86" width="24" height="20" fill="#A28A66"/><path d="M49 86h24l-4-8H53z" fill="#7E6647"/>'),
  vw6: WIN('<rect x="18" y="14" width="84" height="92" fill="#2B3444"/><circle cx="77" cy="33" r="9" fill="#E9EEF5" opacity=".92"/><path d="M18 84q22-13 40 0t44-5v27H18z" fill="#DCE3EC"/><g fill="#EEF3F8"><circle cx="32" cy="30" r="2.2"/><circle cx="48" cy="46" r="1.7"/><circle cx="62" cy="24" r="1.9"/><circle cx="40" cy="62" r="1.7"/><circle cx="88" cy="60" r="1.9"/><circle cx="26" cy="52" r="1.5"/><circle cx="70" cy="66" r="1.6"/></g>'),
  vw7: WIN('<rect x="18" y="14" width="84" height="92" fill="#DCE6E8"/><circle cx="34" cy="32" r="8.5" fill="#F0E2B4"/><rect x="18" y="60" width="84" height="46" fill="#C6B978"/><path d="M18 62q30-9 84 0v-6q-52-10-84 0z" fill="#9FB27A"/><g stroke="#A8974F" stroke-width="1.5"><path d="M18 74h84M18 86h84M18 98h84"/></g>'),
  vw8: WIN('<rect x="18" y="14" width="84" height="92" fill="#2F4436"/><g stroke="#6E9166" stroke-width="1.6"><path d="M34 26v28M82 21v26M60 51v30M30 73v26"/></g><g fill="#4A7050"><ellipse cx="34" cy="38" rx="23" ry="12"/><ellipse cx="83" cy="32" rx="21" ry="11"/><ellipse cx="60" cy="66" rx="27" ry="13"/><ellipse cx="29" cy="88" rx="21" ry="11"/><ellipse cx="89" cy="82" rx="19" ry="10"/></g>'),

  /* 門把 */
  hd1: DOOR('<circle cx="60" cy="58" r="17" fill="#B08D57"/><circle cx="54" cy="52" r="5.5" fill="#DCC08A" opacity=".7"/><rect x="53" y="76" width="14" height="9" rx="3.5" fill="#96763F"/>'),
  hd2: DOOR('<rect x="32" y="51" width="56" height="15" rx="7.5" fill="#96763F"/><circle cx="38" cy="58.5" r="10" fill="#B08D57"/><circle cx="82" cy="58.5" r="10" fill="#B08D57"/><g stroke="#DCC08A" stroke-width="1.3"><path d="M46 55h28M46 62h28"/></g>'),
  hd3: DOOR('<g fill="#8E9498"><rect x="43" y="30" width="13" height="7" rx="3.5"/><rect x="43" y="83" width="13" height="7" rx="3.5"/></g><rect x="52" y="26" width="11" height="68" rx="5.5" fill="#A9AEB2"/><rect x="55" y="26" width="3.5" height="68" fill="#D4D8DB"/>'),
  hd4: DOOR('<rect x="46" y="38" width="28" height="44" rx="5" fill="#C8C0AE"/><rect x="50" y="42" width="20" height="36" rx="4" fill="#B0A794"/><rect x="50" y="42" width="20" height="7" rx="3" fill="#9C9280"/>'),
  hd5: DOOR('<path d="M40 84q-7-32 15-36 19-4 21 12 2 15-13 17 11 6 6 13" fill="none" stroke="#3F4A45" stroke-width="8.5" stroke-linecap="round"/>'),
  hd6: DOOR('<rect x="38" y="50" width="44" height="17" rx="8.5" fill="#A57C4E"/><g stroke="#8A6539" stroke-width="1.3"><path d="M43 56h34M43 62h34"/></g><rect x="48" y="67" width="7" height="11" rx="2.5" fill="#8A6539"/><rect x="65" y="67" width="7" height="11" rx="2.5" fill="#8A6539"/>'),
  hd7: DOOR('<g fill="#8E9498"><rect x="51" y="32" width="18" height="11" rx="3.5"/><rect x="51" y="76" width="18" height="11" rx="3.5"/></g><path d="M60 43v33" stroke="#7A5237" stroke-width="11" stroke-linecap="round"/><g stroke="#C6A177" stroke-width="1.3" stroke-dasharray="3.5 3.5"><path d="M56.5 46v27M63.5 46v27"/></g>'),
  hd8: DOOR('<circle cx="44" cy="58" r="11" fill="#B4B9BD"/><rect x="44" y="52" width="42" height="12" rx="6" fill="#C2C7CB"/><rect x="44" y="52" width="42" height="4.5" rx="2.2" fill="#DEE2E5"/>')
};

/* ============================================================
   題目：每個選項綁 2 個價值（主 +2、副 +1，再乘題目權重 w）
   價值共 10 軸：沉靜 秩序 溫度 自然 工藝 個性 玩心 社交 質感 機能
   ============================================================ */
const QUIZ = [
{ id:"art", w:1.3, title:"哪一幅畫，你會掛在自己家？", options:[
  {g:"art1", label:"暖調色塊",  v:["溫度","沉靜"]},
  {g:"art2", label:"古典風景",  v:["質感","溫度"]},
  {g:"art3", label:"水墨遠山",  v:["沉靜","自然"]},
  {g:"art4", label:"大膽當代",  v:["個性","玩心"]},
  {g:"art5", label:"黑白建築",  v:["秩序","個性"]},
  {g:"art6", label:"植物圖鑑",  v:["自然","工藝"]},
  {g:"art7", label:"幾何線條",  v:["秩序","沉靜"]},
  {g:"art8", label:"抽象人物",  v:["個性","溫度"]}]},

{ id:"chair", w:1.3, title:"下班回到家，你最想坐哪一張？", options:[
  {g:"ch1", label:"經典躺椅",   v:["質感","沉靜"]},
  {g:"ch2", label:"古典扶手椅", v:["工藝","溫度"]},
  {g:"ch3", label:"懶骨頭",     v:["玩心","溫度"]},
  {g:"ch4", label:"雕塑感單椅", v:["個性","玩心"]},
  {g:"ch5", label:"藤編椅",     v:["自然","溫度"]},
  {g:"ch6", label:"絨布貴妃椅", v:["社交","質感"]},
  {g:"ch7", label:"鋼管椅",     v:["秩序","機能"]},
  {g:"ch8", label:"實木單椅",   v:["工藝","自然"]}]},

{ id:"lamp", w:1.0, title:"夜裡，你想點哪一盞燈？", options:[
  {g:"lp1", label:"和紙球燈",   v:["沉靜","自然"]},
  {g:"lp2", label:"水晶吊燈",   v:["社交","質感"]},
  {g:"lp3", label:"軌道投射燈", v:["機能","秩序"]},
  {g:"lp4", label:"黃銅燭台",   v:["工藝","溫度"]},
  {g:"lp5", label:"閱讀立燈",   v:["沉靜","機能"]},
  {g:"lp6", label:"雕塑造型燈", v:["個性","玩心"]},
  {g:"lp7", label:"陶土桌燈",   v:["工藝","沉靜"]},
  {g:"lp8", label:"藤編吊燈",   v:["自然","社交"]}]},

{ id:"vase", w:1.0, title:"餐桌上，你想擺哪一組？", options:[
  {g:"vs1", label:"素陶枯枝",   v:["沉靜","自然"]},
  {g:"vs2", label:"水晶牡丹",   v:["社交","質感"]},
  {g:"vs3", label:"白瓷海芋",   v:["秩序","質感"]},
  {g:"vs4", label:"玻璃野花",   v:["玩心","自然"]},
  {g:"vs5", label:"黃銅繡球",   v:["工藝","質感"]},
  {g:"vs6", label:"熱帶葉材",   v:["個性","自然"]},
  {g:"vs7", label:"試管單葉",   v:["秩序","機能"]},
  {g:"vs8", label:"乾燥花束",   v:["溫度","工藝"]}]},

{ id:"cup", w:0.9, title:"每天早上，你想用哪一只杯子？", options:[
  {g:"cp1", label:"圓潤矮杯",   v:["溫度","沉靜"]},
  {g:"cp2", label:"直紋高杯",   v:["秩序","機能"]},
  {g:"cp3", label:"方形厚底",   v:["質感","秩序"]},
  {g:"cp4", label:"馬丁尼杯",   v:["社交","質感"]},
  {g:"cp5", label:"香檳杯",     v:["社交","玩心"]},
  {g:"cp6", label:"刻花水晶",   v:["工藝","質感"]},
  {g:"cp7", label:"長梗紅酒杯", v:["社交","溫度"]},
  {g:"cp8", label:"手作陶杯",   v:["工藝","自然"]}]},

{ id:"color", w:0.8, type:"swatch", title:"哪一組顏色，最像你想住的家？", options:[
  {label:"奶霧裸色", hex:["#F1EBE0","#E4D7C6","#D8C9B8","#C8B7A4","#B3A08C"], v:["溫度","沉靜"]},
  {label:"大地木石", hex:["#8A7357","#A98F6F","#6B5B45","#C4B49A","#4F463A"], v:["自然","工藝"]},
  {label:"暗夜奢華", hex:["#1A1A1A","#33363C","#4A2B33","#2E3440","#7A6A55"], v:["質感","秩序"]},
  {label:"柔霧粉彩", hex:["#F3D9DA","#DCE7E2","#E8E0EE","#F5EAD6","#D3E2EF"], v:["溫度","個性"]},
  {label:"撞色大膽", hex:["#D94F30","#1F5FA8","#F2B705","#177E63","#8E3B8E"], v:["個性","玩心"]},
  {label:"清爽北歐", hex:["#F7F7F4","#CFE0DC","#A8C3BC","#7FA8A0","#E4EBE8"], v:["秩序","沉靜"]},
  {label:"復古黃銅", hex:["#7A4A2B","#9C6B3C","#5C3A2E","#B08D57","#3E2F2A"], v:["工藝","質感"]},
  {label:"明亮活潑", hex:["#FF6F61","#FFD23F","#4FC1E9","#A0D468","#F78FB3"], v:["玩心","社交"]}]},

{ id:"view", w:0.7, title:"醒來時，你想看見哪一片窗景？", options:[
  {g:"vw1", label:"遠山",     v:["沉靜","自然"]},
  {g:"vw2", label:"海景",     v:["玩心","社交"]},
  {g:"vw3", label:"城市夜景", v:["質感","秩序"]},
  {g:"vw4", label:"庭院綠意", v:["自然","溫度"]},
  {g:"vw5", label:"老街巷弄", v:["工藝","溫度"]},
  {g:"vw6", label:"雪夜",     v:["沉靜","個性"]},
  {g:"vw7", label:"田野",     v:["自然","玩心"]},
  {g:"vw8", label:"叢林",     v:["個性","自然"]}]},

{ id:"handle", w:0.6, title:"最後一題：哪個門把，你想天天握著？", options:[
  {g:"hd1", label:"手工黃銅",   v:["工藝","質感"]},
  {g:"hd2", label:"古典銅雕",   v:["工藝","溫度"]},
  {g:"hd3", label:"不鏽鋼長把", v:["秩序","機能"]},
  {g:"hd4", label:"隱藏暗把",   v:["秩序","質感"]},
  {g:"hd5", label:"造型雕塑",   v:["個性","玩心"]},
  {g:"hd6", label:"實木把手",   v:["自然","溫度"]},
  {g:"hd7", label:"皮革繩把",   v:["質感","溫度"]},
  {g:"hd8", label:"標準鋁製",   v:["機能","秩序"]}]}
];

/* ============================================================
   16 種居家原型
   ============================================================ */
const ARCH = [
{no:1, zh:"靜白留白派", en:"Quiet Canvas", v:["沉靜","秩序"],
 tag:"留白，是你給自己的奢侈",
 desc:"你要的不是空，是安靜的密度。一個什麼都不做、也不會覺得無聊的家——對你來說，留白本身就是最貴的一種裝修。",
 traits:["把留白當成一種奢侈","獨處的時候最自在","在意空間的氣，勝過物件的多"],
 kw:["無主燈設計","乾淨立面","一個放空的角落"],
 mat:"低對比單一色階、微水泥、宣紙質感塗料；金屬收在細節裡不外顯",
 dir:"少而精。一件對的東西，勝過十件剛好的。"},

{no:2, zh:"侘寂原生派", en:"Wabi Native", v:["沉靜","自然"],
 tag:"不完美，才是你要的完美",
 desc:"你喜歡有時間感的東西。手工的痕跡、不均勻的釉色、會隨光線變化的牆面——你要的家會老，而且愈老愈好看。",
 traits:["偏好有時間感與手作痕跡","對過度精緻反而不自在","接受材質自然變化"],
 kw:["原始質感牆面","自然採光","可以留下痕跡的材質"],
 mat:"礦物塗料、原石、未上釉陶、老木；粗糙面與柔光的對話",
 dir:"別把牆做太平。留一點手的溫度給時間去完成。"},

{no:3, zh:"暖巢安居派", en:"Warm Nest", v:["溫度","沉靜"],
 tag:"把重量，放心交出去",
 desc:"家，是你可以把一天的重量整個放下的地方。柔軟、溫暖、被包覆——你要的精緻不必被看見，藏在你每天摸得到的地方就好。",
 traits:["家是能真正鬆掉的地方","舒適與安心感優先","重視家人相處的距離"],
 kw:["加深沙發","圓角傢俱","層次間接照明"],
 mat:"溫潤木質、織品層疊、地毯；圓角、柔軟、包覆感",
 dir:"把預算放在身體會碰到的地方——坐的、躺的、踩的。"},

{no:4, zh:"木作職人派", en:"Wood Artisan", v:["工藝","自然"],
 tag:"好東西，值得等",
 desc:"你不追流行，你追做工。一道漂亮的收邊、一塊有紋理的實木，你可以看很久——你的家該由懂手感的人來做。",
 traits:["以做工而非價格做判斷","偏好天然材與唯一性","挑很久，但用很多年"],
 kw:["全屋木作計畫","天然木皮","觸感優先"],
 mat:"實木與厚木皮、粗獷石材、藤與亞麻；金屬用黃銅原色",
 dir:"把預算集中在會被反覆觸摸的地方——把手、檯面、地板。"},

{no:5, zh:"精工細節派", en:"Precision Craft", v:["工藝","秩序"],
 tag:"細節不對，全部都不對",
 desc:"你看得到別人看不到的地方：對縫有沒有對齊、線條有沒有斷、插座有沒有歪。對你來說，工藝不是裝飾，是紀律。",
 traits:["對縫線與收邊極度敏感","研究型、重邏輯","看不見的地方也要求"],
 kw:["對縫計畫","無把手門片","線性嵌燈"],
 mat:"單一材質語彙、精準對縫、隱藏式五金；克制而準確",
 dir:"先把所有分割線畫清楚，再談用什麼材質。"},

{no:6, zh:"老件收藏派", en:"Heritage Keeper", v:["工藝","溫度"],
 tag:"有故事的，才值得留下",
 desc:"你偏愛有來歷的東西。老件、傳下來的傢俱、旅行帶回的物件——你的家，是替回憶留位置的地方。經典永遠比流行走得遠。",
 traits:["偏愛有故事與出處的物件","重傳承與情感連結","經典勝於流行"],
 kw:["展示與藏品照明","老件混新作","書房或收藏牆"],
 mat:"線板、深色木作、黃銅、皮革；古典或新古典語彙",
 dir:"先替有記憶的東西找到位置，其他再繞著它設計。"},

{no:7, zh:"飯店規格派", en:"Hotel Standard", v:["質感","秩序"],
 tag:"你的家，是只屬於你的酒店",
 desc:"你喜歡秩序，也享受質感。你的家像一間只屬於你的飯店：俐落、對稱、連燈光場景都預設好，回到家不必再做任何決定。",
 traits:["喜歡秩序與掌控感","低調但講究格調","時間寶貴，討厭失控"],
 kw:["對稱軸線","隱藏式收納","預設燈光情境"],
 mat:"深色石材大板、深木、金屬點綴；飯店式精緻收邊",
 dir:"把家規劃成一間只有你能入住的精品飯店。"},

{no:8, zh:"低調奢華派", en:"Quiet Luxe", v:["質感","沉靜"],
 tag:"最好的，你留給自己",
 desc:"你把最好的留給自己。不必給別人看，只要你知道——努力值得一場安靜的慶祝，而那場慶祝就在你家裡。",
 traits:["把最好的留給自己","品質是給自己的交代","低調但有儀式感"],
 kw:["主臥套房化","獨處角落","高規格收邊"],
 mat:"精緻收邊、一兩處貴氣細節、高級織品；內斂不外顯",
 dir:"把全屋最好的那一角，留給一個人的時光。"},

{no:9, zh:"宴客主人派", en:"Grand Host", v:["社交","質感"],
 tag:"家，是你的舞台",
 desc:"家對你來說是舞台。你享受款待、享受有人舉杯的夜晚——你的家要能為熱鬧發光，也要讓客人一進門就記住。",
 traits:["家是社交舞台","享受款待與宴客","願意為視覺效果投資"],
 kw:["中島吧台","入場序列","多情境燈光"],
 mat:"金屬光澤、亮面材質、戲劇性主燈；公領域是主角",
 dir:"從玄關開始設計一段序列，讓客人走進來像走進一個場景。"},

{no:10, zh:"長桌慢食派", en:"Slow Table", v:["社交","溫度"],
 tag:"把時間，慢慢醒開",
 desc:"你要的是把時間慢下來。一張夠長的桌、一盞可以調暗的燈、一杯慢慢醒的酒——生活的濃度，急不得。",
 traits:["重過程與氛圍勝過效率","餐桌與深度交談是核心","討厭被催促"],
 kw:["長桌與酒櫃","可調光設計","餐廚合一"],
 mat:"溫潤木質、有表情的石材；光影層次豐富，餐廳是全屋核心",
 dir:"用一個場景定調全屋：週五晚上，燈調到三成的那張桌子。"},

{no:11, zh:"個性主張派", en:"Bold Statement", v:["個性","玩心"],
 tag:"要別人家沒有的",
 desc:"你要別人家沒有的。你的家最怕被說「很像樣品屋」——它應該是一件只有你能定義的作品，走進來就知道是你。",
 traits:["要別人家沒有的東西","有玩心、自我認同強","最怕跟別人一樣"],
 kw:["一面主視覺牆","訂製與孤品","大膽色彩"],
 mat:"混搭、跳色、藝術品；一處放大膽，其餘收斂托住它",
 dir:"選一個地方放肆，其他地方全部替它讓路。"},

{no:12, zh:"藝廊居住派", en:"Gallery Living", v:["個性","秩序"],
 tag:"住在自己的展覽裡",
 desc:"你有主張，但你的主張需要秩序來襯。白牆、精準的軸線、打好的光——你的家是一個展場，而展的是你的品味。",
 traits:["有明確美學主張","需要留白托住主角","對陳列位置很挑剔"],
 kw:["展示牆與投射燈","乾淨背景","藝廊式陳列"],
 mat:"大面留白、無縫地坪、精準投射照明；材質退到後面",
 dir:"先決定要展什麼，牆和光再照著它長出來。"},

{no:13, zh:"綠意療癒派", en:"Green Healer", v:["自然","溫度"],
 tag:"家，是第二層皮膚",
 desc:"家是你的第二層皮膚。你要的是綠意、光、風——一個能讓身體真正呼吸的地方，而不只是好看的地方。",
 traits:["家是身心的第二層皮膚","親近自然與慢步調","材質要有生命感"],
 kw:["窗景與陽台","綠植計畫","通透採光"],
 mat:"木、石、藤、亞麻；大量自然光與植栽，材質會呼吸",
 dir:"把捨不得的那片窗景，當成整個設計的錨點。"},

{no:14, zh:"隨性生活派", en:"Easy Living", v:["玩心","自然"],
 tag:"美，像隨手發生",
 desc:"美，對你來說要像隨手發生。你討厭被安排得太滿——你的家可以被弄亂，然後還是好看，這才是你要的耐看。",
 traits:["美要像隨手發生","拒絕過度安排","生活感勝過完成度"],
 kw:["可變動佈局","開放層架","可移動傢俱"],
 mat:"自然無修飾材、耐用不怕碰；留白比收納更重要",
 dir:"留餘裕給生活發生——別把每一格都設計死。"},

{no:15, zh:"高效機能派", en:"Smart Function", v:["機能","秩序"],
 tag:"好用，就是最好的設計",
 desc:"好用就是你心中最好的設計。你不為裝飾買單，你為「順手」買單——每一個櫃子都要說得出為什麼在那裡。",
 traits:["好用就是最好的設計","重耐用度與維護成本","不為純裝飾買單"],
 kw:["最短動線","好清潔面材","收納量最大化"],
 mat:"耐用標準材、好維護表面、系統櫃整合；務實不花俏",
 dir:"每個設計先回答「為什麼需要」，再談要多好看。"},

{no:16, zh:"童心繽紛派", en:"Playful Color", v:["玩心","社交"],
 tag:"家，要好玩才行",
 desc:"你討厭無聊，勝過討厭出錯。你的家要有顏色、要有互動、要能讓人笑出來——生活本來就該留一點童心。",
 traits:["討厭無聊勝過討厭出錯","喜歡顏色與互動","家要能一起玩"],
 kw:["亮色點綴","造型燈具","遊戲與共讀角落"],
 mat:"白底承載彩色、造型單品、圓潤形體；活潑但不視覺疲勞",
 dir:"讓家好玩起來——顏色放在對的地方，不會顯得幼稚。"}
];

/* ---------- 套用後台匯出的覆寫內容 ---------- */
/* content.js 會設定 window.GIS_CONTENT，格式：
   { brand:      { lineOA:"...", website:"..." },
     questions:  { art:{ title:"...", options:[{label:"...", img:"data:image/..."}] } },
     archetypes: { "4":{ zh:"...", en:"...", tag:"...", desc:"...",
                         traits:["","",""], kw:["","",""], mat:"...", dir:"..." } } }   */
function applyContent(c){
  if(!c) return;
  if(c.brand) Object.assign(CONFIG, c.brand);

  if(c.questions) QUIZ.forEach(q=>{
    const o = c.questions[q.id];
    if(!o) return;
    if(o.title) q.title = o.title;
    if(Array.isArray(o.options)) o.options.forEach((ov,i)=>{
      if(!ov || !q.options[i]) return;
      if(ov.label) q.options[i].label = ov.label;
      if(ov.img)   q.options[i].img   = ov.img;
    });
  });

  if(c.archetypes) ARCH.forEach(a=>{
    const o = c.archetypes[a.no];
    if(!o) return;
    // room = 結果卡的客廳圖，沒指定時自動用 images/room/arch-<編號>.jpg
    ['zh','en','tag','desc','mat','dir','room'].forEach(k=>{ if(o[k]) a[k] = o[k]; });
    ['traits','kw'].forEach(k=>{
      if(!Array.isArray(o[k])) return;
      o[k].forEach((v,i)=>{ if(v) a[k][i] = v; });
    });
  });
}
