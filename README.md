# Elechid CCTV Storage Calculator｜音立 CCTV 錄影容量計算器

A free bilingual calculator for estimating the storage needed by CCTV cameras. Maintained by [Elechid 音立](https://elechid.com/en/), Hong Kong.

[English calculator](https://elechid.github.io/cctv-storage-calculator/) · [繁體中文計算器](https://elechid.github.io/cctv-storage-calculator/?lang=zh) · [繁體中文說明](README.zh-Hant.md)

Enter the camera count, average Mbps per camera while recording, retention days, recording time percentage and extra capacity. For cameras with different bitrates, calculate each group separately and add the results.

**Example:** Four cameras at 4 Mbps each, recording 24/7 for 30 days, need **5.184 TB** for recordings, or about **6.221 TB** with 20% extra capacity. Check the actual bitrate and supported disk capacity on your recorder before buying.

**Formula:** GB/day = cameras × Mbps × 86,400 ÷ 8,000 × recording fraction. Multiply by days for the total, then multiply by (1 + extra capacity fraction) for planning. The calculation uses decimal GB and TB. Budget for audio bitrate if recorded separately from the video bitrate used in the input.

All calculations run in the browser. Run locally with `python3 -m http.server` and open `http://localhost:8000`. Run the calculation tests with `node calculator.test.mjs`.

[Elechid CCTV storage guide](https://elechid.com/en/blogs/news/cctv-recording-days-storage-calculator-hong-kong) · [MIT license](LICENSE)

**繁中例子：** 4 部鏡頭，每部 4 Mbps，連續錄影 30 日約需 5.184 TB；加 20% 預留後約需 6.221 TB。

## Mobile preview｜手機預覽

<img src="mobile-preview.jpg" width="375" alt="Traditional Chinese calculator on mobile / 繁體中文計算器手機畫面">
