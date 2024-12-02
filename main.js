document.getElementById('body').addEventListener('click', function(e) {
  const navHome = document.querySelector('#nav-home')
  const navServ = document.querySelector('#nav-service')
  const navProd = document.querySelector('#nav-products')
  const navGuests = document.querySelector('#nav-guests')
  const navWork = document.querySelector('#nav-workshops')
  const navAbout = document.querySelector('#nav-about')
  const navCon = document.querySelector('#nav-contact')
  // Changes Color of Currently Selected Nav //
  if (e.target.classList.contains('nav-item') && e.target.classList !== 'current-selection') {
    navHome.classList.remove('current-selection')
    navServ.classList.remove('current-selection')
    navProd.classList.remove('current-selection')
    navGuests.classList.remove('current-selection')
    navWork.classList.remove('current-selection')
    navAbout.classList.remove('current-selection')
    navCon.classList.remove('current-selection')
    e.target.classList.add('current-selection')
  }
})

