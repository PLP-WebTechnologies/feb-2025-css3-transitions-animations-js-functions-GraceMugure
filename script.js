function saveUserPreference(key, value) {
    localStorage.setItem(key, value);
  }
  
  function getUserPreference(key) {
    return localStorage.getItem(key);
  }

document.getElementById('hoverBtn').addEventListener('mouseenter', () => {
    document.getElementById('fadeInImage').classList.add('visible');
  });
  
document.getElementById('hoverBtn').addEventListener('mouseleave', () => {
    document.getElementById('fadeInImage').classList.remove('visible');
  });
  