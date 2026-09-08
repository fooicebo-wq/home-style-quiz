// 集思室內設計 - 居家風格原型測驗 後端
// 部署方式：Google Apps Script > 部署 > 新增部署作業 > 類型選「網頁應用程式」
//           執行身分：我；具有存取權的使用者：任何人 > 部署 > 複製網址
// 第一次部署後，把網址貼到 quiz-data.js 的 CONFIG.gasUrl

// 留空的話，第一次有人測完會自動幫你開一個新的試算表，並把網址寄到你信箱。
// 想指定既有試算表，就把 ID 填進來。
const SHEET_ID   = '1dJGM5AX_ojuw9s25sePBGbv7ulEG_d9zHGZT7c0QG6o';
const SHEET_NAME = '測驗紀錄';
const OWNER_EMAIL = 'fooicebo@gmail.com';

const HEADERS = ['時間', '居家原型', '英文名', '你的另一面',
                 '稱呼', '電話／LINE', '想聊的',
                 '作答路徑', '來源', '裝置', '測驗ID', '處理狀態'];

function doPost(e) {
  const p = (e && e.parameter) || {};
  try {
    const sh = getSheet_();

    // 同一個人測完會先送一筆（type=done），留資料時再送一筆（type=lead）。
    // 用 sid 找回原本那列去更新，而不是新增第二列。
    const row = p.sid ? findRowBySid_(sh, p.sid) : 0;

    if (p.type === 'lead' && row) {
      sh.getRange(row, 5).setValue(p.name || '');
      sh.getRange(row, 6).setValue(p.contact || '');
      sh.getRange(row, 7).setValue(p.message || '');
      sh.getRange(row, 12).setValue('未處理');
      try { notifyOwner_(p); } catch (err) { Logger.log('通知信失敗: ' + err); }
    } else if (row) {
      // 同一個 sid 重複送 done（重新整理），不再新增
      Logger.log('重複的 sid，略過: ' + p.sid);
    } else {
      sh.appendRow([
        new Date(),
        p.result || '',
        p.result_en || '',
        p.alt || '',
        p.name || '',
        p.contact || '',
        p.message || '',
        p.path || '',
        p.ref || '',
        p.ua || '',
        p.sid || '',
        p.type === 'lead' ? '未處理' : ''
      ]);
      if (p.type === 'lead') {
        try { notifyOwner_(p); } catch (err) { Logger.log('通知信失敗: ' + err); }
      }
    }
  } catch (err) {
    Logger.log('doPost 失敗: ' + err);
  }
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

// 瀏覽器直接開這個網址時，回一句話方便你確認有沒有部署成功
// 加上 ?check=gis2026 可以看目前收了幾筆（刻意不回傳任何個資）
function doGet(e) {
  const q = (e && e.parameter) || {};
  if (q.check === 'gis2026') {
    try {
      const sh = getSheet_();
      const last = sh.getLastRow();
      const rows = Math.max(0, last - 1);
      let lastSid = '', leads = 0;
      if (rows > 0) {
        lastSid = String(sh.getRange(last, 11).getValue() || '');
        const st = sh.getRange(2, 12, rows, 1).getValues();
        leads = st.filter(r => String(r[0]).trim() !== '').length;
      }
      return ContentService.createTextOutput(JSON.stringify({
        ok: true, 總筆數: rows, 有留聯絡方式: leads, 最後一筆sid: lastSid
      })).setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, err: String(err) }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  return ContentService.createTextOutput('集思居家風格測驗後端運作中');
}

function getSheet_() {
  const props = PropertiesService.getScriptProperties();
  let id = SHEET_ID || props.getProperty('SHEET_ID');

  if (!id) {
    const ss = SpreadsheetApp.create('集思居家風格測驗 · 測驗紀錄');
    id = ss.getId();
    props.setProperty('SHEET_ID', id);
    try {
      MailApp.sendEmail({
        to: OWNER_EMAIL,
        subject: '【集思】居家風格測驗 · 紀錄表已建立',
        body: '測驗紀錄試算表已自動建立：\n\n' + ss.getUrl() +
              '\n\n之後每一筆測驗結果都會寫進這裡。\n' +
              '有人留下聯絡方式時，你會另外收到一封通知信。',
        name: '集思室內設計'
      });
    } catch (err) { Logger.log('建立通知信失敗: ' + err); }
  }

  const ss = SpreadsheetApp.openById(id);
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    // 自動建立的試算表會有一張空的預設工作表，順手刪掉
    const first = ss.getSheets()[0];
    if (first.getName() !== SHEET_NAME && first.getLastRow() === 0) ss.deleteSheet(first);
  }
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#EFEDE6');
    sh.setFrozenRows(1);
    sh.setColumnWidth(1, 150);   // 時間
    sh.setColumnWidth(8, 320);   // 作答路徑
    sh.setColumnWidth(10, 200);  // 裝置
  }
  return sh;
}

function findRowBySid_(sh, sid) {
  const last = sh.getLastRow();
  if (last < 2) return 0;
  const col = sh.getRange(2, 11, last - 1, 1).getValues();  // 第 11 欄 = 測驗ID
  for (let i = col.length - 1; i >= 0; i--) {   // 由後往前找，最近的優先
    if (String(col[i][0]) === String(sid)) return i + 2;
  }
  return 0;
}

// 有人留下聯絡方式時通知你
function notifyOwner_(p) {
  const body =
    '有人做完居家風格測驗並留下聯絡方式！\n\n' +
    '稱呼：' + (p.name || '（未填）') + '\n' +
    '電話／LINE：' + (p.contact || '（未填）') + '\n' +
    '測出的原型：' + (p.result || '') + '（' + (p.result_en || '') + '）\n' +
    '另一面：' + (p.alt || '') + '\n' +
    '想聊的：' + (p.message || '（未填）') + '\n\n' +
    '作答路徑：' + (p.path || '') + '\n' +
    '來源：' + (p.ref || '直接進入') + '\n\n' +
    '完整名單：' + getSheetUrl_();
  MailApp.sendEmail({
    to: OWNER_EMAIL,
    subject: '【集思】新名單 · ' + (p.name || '匿名') + '（' + (p.result || '') + '）',
    body: body,
    name: '集思室內設計'
  });
}

function getSheetUrl_() {
  try {
    const id = SHEET_ID || PropertiesService.getScriptProperties().getProperty('SHEET_ID');
    return id ? SpreadsheetApp.openById(id).getUrl() : '（尚未建立）';
  } catch (err) { return '（讀取失敗）'; }
}

// ─────────────────────────────────────────────
// 在 GAS 編輯器裡手動執行這個，可以確認整條路徑通不通（會寫一筆測試資料）
function 測試寫入() {
  doPost({ parameter: {
    type: 'lead', sid: 'TEST-' + Date.now(),
    result: '木作職人派', result_en: 'Wood Artisan', alt: '綠意療癒派',
    name: '測試用', contact: '0900-000-000', message: '這是一筆測試資料，可以直接刪掉',
    path: 'art:植物圖鑑|chair:實木單椅', ref: '手動測試', ua: 'GAS 編輯器'
  }});
  Logger.log('已寫入測試資料：' + getSheetUrl_());
}
