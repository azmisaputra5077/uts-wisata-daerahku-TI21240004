
// assets/js/main.js
document.addEventListener('DOMContentLoaded', function() {
  // Destination detail modal population
  var detailLinks = document.querySelectorAll('[data-dest]');
  detailLinks.forEach(function(link) {
    link.addEventListener('click', function(e){
      var data = JSON.parse(this.getAttribute('data-dest'));
      document.getElementById('modalTitle').textContent = data.name;
      document.getElementById('modalBody').innerHTML = '<p><strong>Lokasi:</strong> ' + data.location + '</p><p>' + data.description + '</p>';
    });
  });

  // Gallery toggle show/hide
  document.getElementById('toggleGallery').addEventListener('click', function(){
    var items = document.querySelectorAll('.gallery-item');
    var hidden = this.dataset.shown === 'true';
    items.forEach(function(it){ it.style.display = hidden ? 'none' : 'block'; });
    this.textContent = hidden ? 'Tampilkan Semua' : 'Sembunyikan Semua';
    this.dataset.shown = (!hidden).toString();
  });

  // Simple cost calculator
  document.getElementById('calcForm').addEventListener('submit', function(e){
    e.preventDefault();
    var price = parseFloat(document.getElementById('pricePerPerson').value) || 0;
    var qty = parseInt(document.getElementById('qty').value) || 1;
    var transport = parseFloat(document.getElementById('transport').value) || 0;
    var total = (price * qty) + transport;
    document.getElementById('calcResult').textContent = 'Estimasi Biaya: Rp ' + total.toLocaleString();
  });

  // Contact form validation and thank you alert
  var contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.classList.add('was-validated');
      return;
    }
    var name = document.getElementById('nama').value;
    alert('Terima kasih, ' + name + '! Ulasan Anda telah diterima.');
    contactForm.reset();
    contactForm.classList.remove('was-validated');
  }, false);
});
