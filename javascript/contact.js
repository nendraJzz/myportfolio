document.getElementById('formcontact').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    let nama = document.getElementsByName('nama')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let massage = document.getElementsByName("massage")[0].value;

    // Tampilkan spinner dan teks loading
    document.getElementById('buttonText').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
  
    await fetch("https://discordapp.com/api/webhooks/1171618664190070874/J1XVY6vUq6Jz4H8iZt4j2avoqVM4hBzSPveAq_eAaBp4q4B2aP1armV47tvSFUxM-zIT?wait=1", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: `${nama} (${email})`, content: massage })
    });
  
    console.log("sukses");
    // Reset form
    document.getElementsByName("nama")[0].value = "";
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName("massage")[0].value = "";
  
    // Sembunyikan spinner dan tampilkan kembali teks tombol
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('buttonText').classList.remove('hidden');

    // Tampilkan modal
    document.getElementById('successModal').classList.remove('hidden');

    // Tutup modal setelah 3 detik
    setTimeout(function() {
        document.getElementById('successModal').classList.add('hidden');
    }, 3000); // 3000 ms = 3 detik
});
