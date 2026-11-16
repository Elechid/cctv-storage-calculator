import { estimate } from './calculator.mjs';

const byId = (id) => document.getElementById(id);
const fields = ['cameras', 'bitrate', 'days', 'duty', 'reserve'].map(byId);
const translations = {
  title: 'CCTV 錄影容量計算器',
  intro: '估算連續錄影或事件錄影所需的儲存容量。請輸入每部鏡頭錄影時的平均碼率。',
  'cameras-label': '鏡頭數量',
  'bitrate-label': '每部鏡頭碼率（Mbps）',
  'days-label': '錄影保留日數',
  'duty-label': '實際錄影時間比例（%）',
  'reserve-label': '額外預留容量（%）',
  'daily-label': '每日用量',
  'total-label': '保留期總用量',
  'planned-label': '連預留容量',
  error: '請在每一欄輸入有效數值。',
  notes: '24 小時連續錄影請填 100%。事件錄影請估算實際錄到的時間比例，計入觸發前後的片段。實際用量會受畫面活動、收音、編碼設定及錄影機額外用量影響。1 TB = 1,000 GB。',
  guide: 'Elechid 錄影容量選購指南',
  code: '原始碼',
};
const english = Object.fromEntries(Object.keys(translations).map(id => [id, byId(id).textContent]));
const guidePath = '/blogs/news/cctv-recording-days-storage-calculator-hong-kong';

function render() {
  const valid = fields.every(field => field.validity.valid);
  const results = valid ? estimate(...fields.map(field => field.valueAsNumber)) : {};
  const format = new Intl.NumberFormat(document.documentElement.lang, { maximumFractionDigits: 3 });
  for (const key of ['daily', 'total', 'planned']) {
    const gb = results[key];
    byId(key).textContent = !valid ? '—' : gb >= 1000
      ? format.format(gb / 1000) + ' TB'
      : gb > 0 && gb < 0.001 ? '<0.001 GB' : format.format(gb) + ' GB';
  }
  byId('error').hidden = valid;
}

function applyLanguage(chinese) {
  const copy = chinese ? translations : english;
  const prefix = chinese ? '' : '/en';
  document.documentElement.lang = chinese ? 'zh-Hant' : 'en';
  for (const node of document.querySelectorAll('[data-example-en]')) {
    node.textContent = chinese ? node.dataset.exampleZh : node.dataset.exampleEn;
  }
  document.title = copy.title + ' | Elechid 音立';
  for (const [id, value] of Object.entries(copy)) byId(id).textContent = value;
  byId('language').textContent = chinese ? 'English' : '繁體中文';
  byId('language').lang = chinese ? 'en' : 'zh-Hant';
  byId('brand').href = 'https://elechid.com' + prefix + '/';
  byId('guide').href = 'https://elechid.com' + prefix + guidePath;
  render();
}

byId('inputs').addEventListener('input', render);
byId('inputs').addEventListener('submit', event => event.preventDefault());
byId('language').addEventListener('click', () => {
  const chinese = document.documentElement.lang === 'en';
  const url = new URL(location.href);
  if (chinese) url.searchParams.set('lang', 'zh');
  else if (url.pathname.endsWith('/zh.html')) url.searchParams.set('lang', 'en');
  else url.searchParams.delete('lang');
  history.replaceState(null, '', url);
  applyLanguage(chinese);
});
applyLanguage((new URLSearchParams(location.search).get('lang') ?? (location.pathname.endsWith('/zh.html') ? 'zh' : 'en')) === 'zh');
