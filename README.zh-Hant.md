# Elechid 音立 CCTV 錄影容量計算器

[開始計算](https://elechid.github.io/cctv-storage-calculator/?lang=zh) · [English documentation](README.md)

輸入鏡頭數量、每部鏡頭錄影時的平均碼率（Mbps）、保留日數、錄影時間比例和預留容量。不同碼率的鏡頭可分組計算，再把容量加起來。

**例子：** 4 部鏡頭，每部 4 Mbps，連續錄影 30 日約需 **5.184 TB**，另加 20% 預留容量即約 **6.221 TB**。選購前請核對錄影機實際碼率和支援的硬碟容量。

每日容量（GB）= 鏡頭數量 × Mbps × 86,400 ÷ 8,000 × 錄影時間比例。再乘保留天數及（1＋預留容量比例），即得規劃容量。1 TB = 1,000 GB。

所有計算均在瀏覽器完成。由香港 [Elechid 音立](https://elechid.com/) 維護，採用 [MIT 開源授權](LICENSE)。

[官網 CCTV 錄影容量指南](https://elechid.com/blogs/news/cctv-recording-days-storage-calculator-hong-kong)
