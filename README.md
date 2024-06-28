<div align="center">
  <img src="./image/logo.svg" alt="Split Lines Logo" width="220"/>
  <h1>Split Lines</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/split-lines/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/split-lines/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/split-lines/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/split-lines/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-lines"><img src="https://img.shields.io/npm/v/@barudakrosul/split-lines" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/split-lines" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-lines"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fsplit-lines" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/split-lines/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/split-lines?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/split-lines/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/split-lines?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/split-lines/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/split-lines" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Berkontribusi](#berkontribusi)
6. [Lisensi](#lisensi)
7. [Penghargaan](#penghargaan)
8. [Donasi](#donasi)
9. [Catatan Perubahan](#catatan-perubahan)

## Pendahuluan

Split Lines adalah sebuah ekstensi JavaScript yang memisahkan string menjadi array berdasarkan baris, dengan opsi untuk menyertakan atau menghapus karakter pemisah baris. Ini dibuat semirip mungkin dengan `splitlines()` di Python.

## Fitur

Split Lines menawarkan fitur-fitur berikut:

- Memisahkan string menjadi array berdasarkan pemisah baris.
- Terdapat opsi untuk menyertakan atau menghilangkan pemisah baris dalam hasil.
- Dapat di integrasikan ke dalam kode TypeScript.

## Instalasi

Untuk menginstal Split Lines secara lokal, ikuti langkah instalasi ini:

```shell
npm install @barudakrosul/split-lines
```

## Penggunaan

Untuk memulai menggunakan Split Lines, import modulnya terlebuh dahulu:

**1\. CommonJS**
```javascript
require("@barudakrosul/split-lines");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import "@barudakrosul/split-lines";
```

**3\. TypeScript**
```typescript
import "@barudakrosul/split-lines";
```

Contoh penggunaan:

```javascript
let text = "List fruit names:\nApple\nBanana\nAvocado\nPapaya\nBlueBerry\netc.";
console.log(text.splitLines());

// Result:
// [
//   'List fruit names:',
//   'Apple',
//   'Banana',
//   'Avocado',
//   'Papaya',
//   'BlueBerry',
//   'etc.'
// ]
```

Contoh jika opsi `keeplinebreaks` di setel ke `true`:

```javascript
let text = "List fruit names:\nApple\nBanana\nAvocado\nPapaya\nBlueBerry\netc.";
console.log(text.splitLines(true));

// Result:
// [
//   'List fruit names:\n',
//   'Apple\n',
//   'Banana\n',
//   'Avocado\n',
//   'Papaya\n',
//   'BlueBerry\n',
//   'etc.'
// ]
```

## Berkontribusi

Kontribusi pada Split Lines sangat dihargai! Baik melaporkan bug, menyarankan fitur baru, atau berkontribusi pada perbaikan kode.

## Lisensi

Split Lines dilisensikan di bawah Lisensi Apache-2.0 - lihat berkas [LICENSE](/LICENSE) untuk detailnya.

## Penghargaan

Split Lines menghargai dukungan dan kontribusi dari individu dan proyek sumber terbuka berikut:

- [@FajarKim](https://github.com/FajarKim) - Pengembang utama dan pencipta aplikasi.
- Komunitas sumber terbuka - Untuk kontribusi berharga pada alat dan perpustakaan yang digunakan dalam proyek ini.

## Donasi

Kami sangat menghargai dukungan Anda untuk terus mengembangkan proyek ini. Jika Anda merasa proyek ini bermanfaat, Anda dapat mendukung kami dengan donasi:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Setiap donasi, berapapun jumlahnya, sangat berarti bagi kami. Terima kasih atas dukungan Anda! ❤️

## Catatan Perubahan

Terus ikuti perubahan dan pembaruan terbaru Split Lines dengan mengacu ke [Catatan Perubahan](https://github.com/BarudakRosul/split-lines/releases).

Terima kasih telah memilih Split Lines! Kami bertujuan untuk memberikan solusi yang mudah untuk mengubah string ke dalam array berdasarkan pemisah baris.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)