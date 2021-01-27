const uretici = require('randomstring');
const fs = require('fs').promises;

const şifre = uretici.generate({length: 30})
async function openFile() {
    try {
      await fs.writeFile('şifre.txt', `${şifre}`);
      console.log("Ahhh Tamam Şifre Mi İstedin? Tamam bruhboy345 Senin İçin 30 Rakamlık Bir Şifre Oluşturuyor.. Oluşturdu! Buyur:\n\n\n" + şifre)
    } catch (error) {
      console.error(`Oh Bir Hata Oluştur Sanırım Kontrol Etsen İyi Olucak: ${error.message}`);
    }
  }
  openFile();
//bruhboy345 - Barış Kaya
