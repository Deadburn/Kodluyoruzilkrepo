const fs = require('fs');


//(CREATE)
fs.appendFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if(err) console.log(err)
    console.log("DOSYA BAŞARILI BİR ŞEKİLDE OLUŞTURULDU")
});

//(READ)
fs.readFile('employees.json', 'utf8', (err, data) => {
    if(err) console.log(err)
    console.log(data)
    console.log('DOSYA OKUNDU')
})

// VERİ GÜNCELLEME
fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000},', (err) => {
    if(err) console.log(err)
    console.log("Yeni veri eklendi")
})

//DOSYA SILMEK
fs.unlink('employees.json', (err) => {
    if(err) console.log(err)
    console.log('DOSYA SILINDI')
})