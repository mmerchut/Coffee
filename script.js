function startAnimacje() {
    const niebo = document.getElementById('niebo');
    const slonce = document.getElementById('slonce');
    const ksiezyc = document.getElementById('ksiezyc');

    // Animacja dnia
    niebo.style.backgroundColor = '#87CEEB'; 
    slonce.style.top = '20px'; 
    slonce.style.opacity = '1'; 
    ksiezyc.style.top = '150px'; 
    ksiezyc.style.opacity = '0'; 

    setTimeout(() => {

        niebo.style.backgroundColor = '#2C3E50';
        slonce.style.top = '100px'; 
        slonce.style.opacity = '0'; 
        ksiezyc.style.top = '20px'; 
        ksiezyc.style.opacity = '1'; 
    }, 4000); 
}
