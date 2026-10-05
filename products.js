// Data toko. Dikelola lewat Panel Admin (simpan otomatis ke GitHub).
let storeLogoUrl = "https://cdn.vectorstock.com/i/1000v/08/10/atk-monogram-logo-vector-44760810.jpg";

let products = [
    {
        "id": 106,
        "name": "Penghapus Faber Castell",
        "price": 2000,
        "category": "Alat Tulis",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IaCUCfo2AAVFOzdDMu8PGJBhAo3HQVNAbWBahBswiQ&s=10"
    },
    {
        "id": 1791124087856,
        "name": "buku sidu",
        "price": 4000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7rasf-m3ssw6ezgesuda@resize_w450_nl.webp"
    },
    {
        "id": 107,
        "name": "Map Biola Tulang Biru",
        "price": 5000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-822wl-mny2ki6zz56rad"
    },
    {
        "id": 108,
        "name": "Map Amplop Tali",
        "price": 3000,
        "category": "Alat Tulis",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpEdQXi_xymI1PNmb5jkz5CIbsJctkWbzzQRpZ2tkVQ&s=10"
    },
    {
        "id": 109,
        "name": "Kamus 3 Bahasa",
        "price": 50000,
        "category": "Alat Tulis",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3uVIrTg2yaYrMKgjhRzBhb_kvuDVSWjQpz_mb8_RUjA&s=10"
    },
    {
        "id": 110,
        "name": "Map Ziper Resleting",
        "price": 15000,
        "category": "Alat Tulis",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTjLPlaQCZhDU1f5sjOChW7EoPBa8FMH4Y_lr5niRWw&s=10"
    },
    {
        "id": 111,
        "name": "Spidol hitam",
        "price": 10000,
        "category": "Alat Tulis",
        "image": "https://siplah.blibli.com/data/images/SBST-0001-00004/2d4af39e-ac03-4a79-a8da-b9a7147a7ad2.jpg"
    },
    {
        "id": 112,
        "name": "Penggaris Besi",
        "price": 8000,
        "category": "Alat Tulis",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYgDsP3winFGNUdt5sq0mKBzt3BKMefKGUaTMx7mjwg&s=10"
    },
    {
        "id": 113,
        "name": "Al Qur'an Besar",
        "price": 75000,
        "category": "Kertas & Buku",
        "image": "https://img.lazcdn.com/g/p/c3c6a4c08881705a0879444e52c9f1f4.jpg_720x720q80.jpg"
    },
    {
        "id": 114,
        "name": "Al Qur'an Sedang",
        "price": 55000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-8224o-mg1u3l4qpczxe4@resize_w450_nl.webp"
    },
    {
        "id": 115,
        "name": "Al Qur'an Kecil",
        "price": 45000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-8224v-mknli9a8bzeqf9@resize_w450_nl.webp"
    },
    {
        "id": 116,
        "name": "Kamus Bahasa Arab",
        "price": 50000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-81zte-mqcrspe66n0ud2@resize_w450_nl.webp"
    },
    {
        "id": 117,
        "name": "Iqro' Besar",
        "price": 15000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7ra0u-mdpi5m9e2jrj79.webp"
    },
    {
        "id": 118,
        "name": "Kamus Bahasa Inggris",
        "price": 40000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134201-81ztn-mt9bu3hncmiyf1@resize_w450_nl.webp"
    },
    {
        "id": 119,
        "name": "Iqro' Kecil",
        "price": 10000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-822wh-mn78qpqjaccmca@resize_w450_nl.webp"
    },
    {
        "id": 120,
        "name": "Buku Paperlin Panjang",
        "price": 20000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-8224u-mg6dvvfup1xk13@resize_w450_nl.webp"
    },
    {
        "id": 121,
        "name": "Tuntutan Solat",
        "price": 10000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-81ztp-mr70mq6srbpice.webp"
    },
    {
        "id": 122,
        "name": "Solat Lengkap",
        "price": 15000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lrmwfkuhpf7qf9@resize_w450_nl.webp"
    },
    {
        "id": 123,
        "name": "Buku Paperlin Sedang",
        "price": 15000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7rbk1-ma7yuf81umxt04.webp"
    },
    {
        "id": 124,
        "name": "Buku Paperlin Kecil",
        "price": 8000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7rbke-m9obot7arbp75d.webp"
    },
    {
        "id": 125,
        "name": "Nota 1 Play",
        "price": 5000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-8224p-mftp4htc5csv21.webp"
    },
    {
        "id": 126,
        "name": "Nota 2 Play",
        "price": 5000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-8224p-mftp4htc5csv21.webp"
    },
    {
        "id": 127,
        "name": "Buku Tajwid",
        "price": 10000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-8224u-mgzpu8jszf9rc4@resize_w450_nl.webp"
    },
    {
        "id": 128,
        "name": "Buku Skola",
        "price": 3000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-822ws-mov5iecbcpotbc@resize_w450_nl.webp"
    },
    {
        "id": 129,
        "name": "Buku Skola 1 Pak",
        "price": 28000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lvifvnj95ln66f@resize_w450_nl.webp"
    },
    {
        "id": 130,
        "name": "Papan Alas Ujian",
        "price": 15000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-82252-mfw81myk8g7i33.webp"
    },
    {
        "id": 131,
        "name": "Papan Alas Ujian Biasa",
        "price": 10000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/a3283b63d828472de57c541301388b14@resize_w450_nl.webp"
    },
    {
        "id": 132,
        "name": "Buku Big Boss",
        "price": 4000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/sg-11134201-23010-yr49b2via3lv8a.webp"
    },
    {
        "id": 133,
        "name": "MC 3 Bahasa",
        "price": 35000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lmsgsqn7o8av11@resize_w450_nl.webp"
    },
    {
        "id": 134,
        "name": "Lem Glue",
        "price": 5000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/a88939a9340a46423d3f6b3026c5d82b@resize_w450_nl.webp"
    },
    {
        "id": 135,
        "name": "Karton Warna",
        "price": 4000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/a9467dea6f54196dfd01a623f225f769.webp"
    },
    {
        "id": 136,
        "name": "Kertas Kado",
        "price": 2000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134201-81zti-ms2w5827x5af39@resize_w450_nl.webp"
    },
    {
        "id": 137,
        "name": "Map Biasa",
        "price": 2000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98z-llna3bhptfku75@resize_w450_nl.webp"
    },
    {
        "id": 138,
        "name": "Map Plastik Tulang Biru",
        "price": 5000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-81ztf-msf9k45bylfl2c@resize_w450_nl.webp"
    },
    {
        "id": 139,
        "name": "Map Plastik Tulang Kuning",
        "price": 5000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-81ztd-msf9vh5qez9kf1@resize_w450_nl.webp"
    },
    {
        "id": 140,
        "name": "Map Plastik Tulang Hijau",
        "price": 5000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lwcgjqb4jrm241@resize_w450_nl.webp"
    },
    {
        "id": 141,
        "name": "Map Plastik Tulang Merah",
        "price": 5000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98r-ll647miwa5g27d@resize_w450_nl.webp"
    },
    {
        "id": 142,
        "name": "Map Plastik Tulang Putih",
        "price": 5000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m5a5v3s4kja5be@resize_w450_nl.webp"
    },
    {
        "id": 143,
        "name": "Lem Glue Panjang",
        "price": 7000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7rbka-m8lnvkotvghk31@resize_w450_nl.webp"
    },
    {
        "id": 144,
        "name": "Pensil 2B",
        "price": 2000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-81ztl-ms3oeerxoqa00e@resize_w450_nl.webp"
    },
    {
        "id": 145,
        "name": "Twinpen",
        "price": 5000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/b9ac9324bdf1af85185fb59de85839f2@resize_w450_nl.webp"
    },
    {
        "id": 146,
        "name": "Tipe-X",
        "price": 8000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/e9083d1e4d90ba5a3ff1e1298f60f4a9@resize_w450_nl.webp"
    },
    {
        "id": 147,
        "name": "Buku Gambar A3",
        "price": 12000,
        "category": "Kertas & Buku",
        "image": "https://down-id.img.susercontent.com/file/id-11134201-81ztg-ms3yfs9tj01tf4@resize_w450_nl.webp"
    },
    {
        "id": 148,
        "name": "Penghapus Papan Tulis",
        "price": 10000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/sg-11134201-7rbl9-m600hdqtml0e5e@resize_w450_nl.webp"
    },
    {
        "id": 149,
        "name": "ID Card Kulit",
        "price": 10000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/e265dcaa25697a28ccf20c753b29aaf2@resize_w450_nl.webp"
    },
    {
        "id": 150,
        "name": "Pisau Cutter Isi Ulang Besar",
        "price": 20000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/97420348532e080aef18589a074a4d05@resize_w450_nl.webp"
    },
    {
        "id": 151,
        "name": "Pisau Cutter Isi Ulang Kecil",
        "price": 8000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-8224z-mgxrcnnegxl7e7@resize_w450_nl.webp"
    },
    {
        "id": 152,
        "name": "Lem Fox",
        "price": 15000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134201-81ztp-msjhnotyf75xc9@resize_w450_nl.webp"
    },
    {
        "id": 153,
        "name": "Penggaris Plastik",
        "price": 3000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lr4855np2sfxfb@resize_w450_nl.webp"
    },
    {
        "id": 154,
        "name": "Lem Alteco",
        "price": 5000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-m66ct2gsyuf69b.webp"
    },
    {
        "id": 155,
        "name": "Lem Setan",
        "price": 8000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-23020-wn99tdyde1mvff@resize_w450_nl.webp"
    },
    {
        "id": 156,
        "name": "Cutter Biasa",
        "price": 3000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-82252-mgg7knxq1jpp0d@resize_w450_nl.webp"
    },
    {
        "id": 157,
        "name": "Gunting Besar",
        "price": 15000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mrrfm8bho8w21b@resize_w450_nl.webp"
    },
    {
        "id": 158,
        "name": "Gunting Sedang",
        "price": 8000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-81zte-meol2nvdmih2fa@resize_w450_nl.webp"
    },
    {
        "id": 159,
        "name": "Gunting Kecil",
        "price": 5000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-81ztn-mejuhfqll1j7d6@resize_w450_nl.webp"
    },
    {
        "id": 160,
        "name": "Isi Cutter Besar",
        "price": 10000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lo8kzma20ap072@resize_w450_nl.webp"
    },
    {
        "id": 161,
        "name": "Isi Cutter Kecil",
        "price": 5000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-81zte-mtaie9y73wu907@resize_w450_nl.webp"
    },
    {
        "id": 162,
        "name": "Pisau Buah",
        "price": 6000,
        "category": "Perlengkapan Kantor",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7qul0-lg251z83rh9l32.webp"
    },
    {
        "id": 1791128558509,
        "name": "Benang Jahit",
        "price": 2000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98w-low68zct42ml6f@resize_w450_nl.webp"
    },
    {
        "id": 1791128860565,
        "name": "Tinta Spidol",
        "price": 20000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-822wq-moxm953fl6o239@resize_w450_nl.webp"
    },
    {
        "id": 1791130230847,
        "name": "Amplop Merpati Besar",
        "price": 25000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-81zti-mrbhzc4yopa91f@resize_w450_nl.webp"
    },
    {
        "id": 1791132026457,
        "name": "Amplop Merpati Sedang (1 Pak)",
        "price": 20000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/sg-11134201-8257v-mtseno7jwsn6b5@resize_w450_nl.webp"
    },
    {
        "id": 1791174344792,
        "name": "Steples Kangaro No.10",
        "price": 20000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-81ztf-meuuxy8k6ww39a@resize_w450_nl.webp"
    },
    {
        "id": 1791174443552,
        "name": "Steples Kangaro Besar",
        "price": 50000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-822wi-mo8hktrky70l38@resize_w450_nl.webp"
    },
    {
        "id": 1791174573647,
        "name": "Isi Steples No.10",
        "price": 4000,
        "category": "Alat Tulis",
        "image": "https://down-id.img.susercontent.com/file/id-11134207-822wu-mo9bs3r6nimg88@resize_w450_nl.webp"
    },
    {
        "id": 1791175321264,
        "name": "Isi Steples No. 24/6",
        "price": 6000,
        "category": "Alat Tulis",
        "image": "images/1791175321264.webp"
    },
    {
        "id": 1791175705320,
        "name": "Lakban Hitam Besar",
        "price": 17000,
        "category": "Alat Tulis",
        "image": "images/1791175705320.webp"
    },
    {
        "id": 1791175783350,
        "name": "Lakban Hitam Sedang",
        "price": 15000,
        "category": "Alat Tulis",
        "image": "images/1791175783350.webp"
    },
    {
        "id": 1791175851563,
        "name": "Lakban Hitam Kecil",
        "price": 10000,
        "category": "Alat Tulis",
        "image": "images/1791175851563.webp"
    },
    {
        "id": 1791175929515,
        "name": "Lakban Bening Kecil",
        "price": 6000,
        "category": "Alat Tulis",
        "image": "images/1791175929515.webp"
    },
    {
        "id": 1791175976679,
        "name": "Lakban Coklat",
        "price": 15000,
        "category": "Alat Tulis",
        "image": "images/1791175976679.webp"
    },
    {
        "id": 1791176119149,
        "name": "Lakban Bening Besar",
        "price": 15000,
        "category": "Alat Tulis",
        "image": "images/1791176119149.webp"
    },
    {
        "id": 1791176193920,
        "name": "Dable Tipe Kertas Besar",
        "price": 15000,
        "category": "Alat Tulis",
        "image": "images/1791176193920.webp"
    },
    {
        "id": 1791176277387,
        "name": "Dable Tipe Kertas Sedang",
        "price": 10000,
        "category": "Alat Tulis",
        "image": "images/1791176277387.webp"
    },
    {
        "id": 1791176370135,
        "name": "Dable Tipe Kertas Kecil",
        "price": 6000,
        "category": "Alat Tulis",
        "image": "images/1791176370135.webp"
    },
    {
        "id": 1791176502787,
        "name": "Lakban kertas Besar",
        "price": 18000,
        "category": "Alat Tulis",
        "image": "images/1791176502787.webp"
    },
    {
        "id": 1791176672686,
        "name": "Lakban Bening Kecil Tipis",
        "price": 1000,
        "category": "Alat Tulis",
        "image": "images/1791176672686.webp"
    },
    {
        "id": 1791176767978,
        "name": "Lakban Bening Kecil Tebal",
        "price": 2000,
        "category": "Alat Tulis",
        "image": "images/1791176767978.webp"
    },
    {
        "id": 1791176883909,
        "name": "Lakban Warna Kecil (1 pc)",
        "price": 2000,
        "category": "Alat Tulis",
        "image": "images/1791176883909.webp"
    },
    {
        "id": 1791176991943,
        "name": "Pena Kenko Hitam",
        "price": 5000,
        "category": "Alat Tulis",
        "image": "images/1791176991943.webp"
    },
    {
        "id": 1791177066194,
        "name": "Pena Kenko Biru",
        "price": 5000,
        "category": "Alat Tulis",
        "image": "images/1791177066194.webp"
    },
    {
        "id": 1791177124572,
        "name": "Pena Kenko Merah",
        "price": 5000,
        "category": "Alat Tulis",
        "image": "images/1791177124572.webp"
    },
    {
        "id": 1791177195112,
        "name": "Pena Seribuan",
        "price": 1000,
        "category": "Alat Tulis",
        "image": "images/1791177195112.webp"
    },
    {
        "id": 1791177249300,
        "name": "Pena Seribuan (1 Pak)",
        "price": 10000,
        "category": "Alat Tulis",
        "image": "images/1791177249300.webp"
    },
    {
        "id": 1791177512447,
        "name": "Pena Joyko",
        "price": 5000,
        "category": "Alat Tulis",
        "image": "images/1791177512447.webp"
    },
    {
        "id": 1791178459788,
        "name": "Pena Pilot Hitam",
        "price": 3000,
        "category": "Alat Tulis",
        "image": "images/1791178459788.webp"
    },
    {
        "id": 1791178513068,
        "name": "Pena Pilot Biru",
        "price": 3000,
        "category": "Alat Tulis",
        "image": "images/1791178513068.webp"
    },
    {
        "id": 1791178619847,
        "name": "Pena Tizo",
        "price": 8000,
        "category": "Alat Tulis",
        "image": "images/1791178619847.webp"
    },
    {
        "id": 1791179055932,
        "name": "Pena Tinta Gold",
        "price": 8000,
        "category": "Alat Tulis",
        "image": "images/1791179055932.webp"
    },
    {
        "id": 1791179078451,
        "name": "Pena Tinta Silver",
        "price": 8000,
        "category": "Alat Tulis",
        "image": "images/1791179078451.webp"
    },
    {
        "id": 1791179338707,
        "name": "Pena Pilot Merah",
        "price": 3000,
        "category": "Alat Tulis",
        "image": "images/1791179338707.webp"
    },
    {
        "id": 1791179515216,
        "name": "Spidol Tinta Emas",
        "price": 15000,
        "category": "Alat Tulis",
        "image": "images/1791179515216.webp"
    },
    {
        "id": 1791179609167,
        "name": "Spidol Tinta Merah",
        "price": 12000,
        "category": "Alat Tulis",
        "image": "images/1791179609167.webp"
    },
    {
        "id": 1791179664180,
        "name": "Spidol Tinta Putih",
        "price": 15000,
        "category": "Alat Tulis",
        "image": "images/1791179664180.webp"
    },
    {
        "id": 1791179747955,
        "name": "Spidol Permanen Hitam Biasa",
        "price": 5000,
        "category": "Alat Tulis",
        "image": "images/1791179747955.webp"
    },
    {
        "id": 1791179808881,
        "name": "Spidol Hitam Biasa",
        "price": 5000,
        "category": "Alat Tulis",
        "image": "images/1791179808881.webp"
    },
    {
        "id": 1791179895418,
        "name": "Spidol Permanen Snowman",
        "price": 10000,
        "category": "Alat Tulis",
        "image": "images/1791179895418.webp"
    },
    {
        "id": 1791181012516,
        "name": "Map Biola Tulang Kuning",
        "price": 5000,
        "category": "Alat Tulis",
        "image": "images/1791181012516.webp"
    },
    {
        "id": 1791185738573,
        "name": "Isi lem tembak Kecil",
        "price": 2000,
        "category": "Perlengkapan Kantor",
        "image": "images/1791185738573.webp"
    },
    {
        "id": 1791185843334,
        "name": "Origami 14x14",
        "price": 5000,
        "category": "Perlengkapan Kantor",
        "image": "images/1791185843334.webp"
    },
    {
        "id": 1791185932692,
        "name": "Tinta Stempel",
        "price": 15000,
        "category": "Alat Tulis",
        "image": "images/1791185932692.webp"
    },
    {
        "id": 1791186021953,
        "name": "Krayon Grebeel",
        "price": 35000,
        "category": "Alat Tulis",
        "image": "images/1791186021953.webp"
    },
    {
        "id": 1791186097980,
        "name": "Krayon Biasa",
        "price": 20000,
        "category": "Alat Tulis",
        "image": "images/1791186097980.webp"
    },
    {
        "id": 1791186189317,
        "name": "Krayon Mini",
        "price": 13000,
        "category": "Alat Tulis",
        "image": "images/1791186189317.webp"
    },
    {
        "id": 1791186296489,
        "name": "Gantungan Kunci/Hp",
        "price": 10000,
        "category": "Alat Tulis",
        "image": "images/1791186296489.webp"
    }
];
