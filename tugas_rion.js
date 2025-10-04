const dataMatkul = {

    hari : [
        "Senin", "Selasa", "Rabu", "Rabu", "Jumat", "Jumat"
    ],

    kode : [
        "TIF3103", "SAE3108", "ILK2106", "ILK2104", "ILK2108", "ILK2109"
    ],

    mataKuliah : [
        "Desain Interaksi", "IELTS Preparation", "Pemrograman Web", 
        "Basis Data", "Wirausaha Digital", "Struktur Data"
    ],

    sks : [2, 2, 3, 3, 2, 3],

    ruangan : [
        //  1       2        3         3      5        5
        "C-101", "D-101", "D-103", "D-103","D-104", "D-101"
    ],

    waktu : [
        "10:30 - 12:10",  "10:30 - 12:10", "08:00 - 10:30",  
        "14:40 - 17:10",  "08:00 - 09:40",  "13:50 - 16:20"
    ],

    dosen : [
        "Fanindia Purnamasari S.TI., M.IT",
        "Drs. Yulianus Harefa GradDipEd TESOL., MEd TESOL",
        "Dr. Dewi Sartika Br Ginting S.Kom., M.Kom, <br>Nurrahmadayeni M.Kom",
        "Dr. Dewi Sartika Br Ginting S.Kom., M.Kom, <br>Insidini Fawwaz M.Kom",
        "Dr. T. Henny Febriana Harumy S.Kom., M.Kom, <br>Dr. Fauzan Nurahmadi S.Kom., M.Cs",
        "Anandhini Medianty Nababan S.Kom., M.T, <br>Insidini Fawwaz M.Kom"
    ]

}

function jadwalKuliahRion() {
    buatkanHeaderTabel();
    const banyak = dataMatkul.hari.length;
    for (let i = 0; i < banyak; i++) {
        buatkanTabel(i)
    }

    function buatkanHeaderTabel() {
        const parentTabel = document.getElementById('matkul');

        const header = document.createElement('tr');
        header.innerHTML = `
            <th>Hari</th>
            <th>Kode</th>
            <th>Mata Kuliah</th>
            <th>SKS</th>
            <th>Ruangan</th>
            <th>Waktu</th>
            <th>Dosen</th>
        `;

        parentTabel.appendChild(header);

    }

    function buatkanTabel(i) {
        const parentTabel = document.getElementById('matkul');
        const isi_tabel = document.createElement('tr');

        isi_tabel.innerHTML = `
            <td>${dataMatkul.hari[i]}</td>
            <td>${dataMatkul.kode[i]}</td>
            <td>${dataMatkul.mataKuliah[i]}</td>
            <td>${dataMatkul.sks[i]}</td>
            <td>${dataMatkul.ruangan[i]}</td>
            <td>${dataMatkul.waktu[i]}</td>
            <td>${dataMatkul.dosen[i]}</td>
        `;
        parentTabel.appendChild(isi_tabel);
    }
}

jadwalKuliahRion();