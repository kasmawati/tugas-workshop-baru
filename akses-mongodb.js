var databaseUrl = "localhost/kasmadb";
var collections = ["penduduk"];
var db = require("mongojs").connect(databaseUrl, collections);

// mencari data penduduk
db.penduduk.find({nama: "emeralda"}, function(err, penduduk) {
  if( err || !penduduk) console.log("ada nama emeralda");
  else penduduk.forEach( function(as) {
    console.log(as);
  });
});

// menyimpan data penduduk: saras
db.penduduk.save({nama : "saras", alamat : "Janti, umur: "20", jenis_kelamin: "Perempuan"}, function(err, saved) {
  if( err || !saved ) console.log("penduduk'saras' gagal disimpan");
  else console.log("Data penduduk 'saras' tersimpan");
});

// mengupdate data penduduk: annisa
db.penduduk.update({nama : "annisa"}, {$set: {alamat: "Janti"}}, function(err, updated) {
  if( err || !updated ) console.log("Data penduduk 'annisa' gagal diperbaharui");
  else console.log("Data 'saras' berhasil diperbaharui");
});


