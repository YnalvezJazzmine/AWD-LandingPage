function showBox(day, color, button) {
    var box = document.getElementById('box');
  
    box.style.backgroundColor = color;
    button.style.backgroundColor = color;
  
  
    box.style.display = 'block';
    box.style.transform = 'translateY(-500px)'; 
  
  
    box.style.transition = 'transform 1s ease';
  
    setTimeout(function() {
      box.style.transform = 'translateY(0)'; 
    }, 100);
  }