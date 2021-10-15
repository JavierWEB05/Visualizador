function changeClass() {

    document.getElementById("sidebar").classList.add('sidebar__x');
    
    document.getElementById("sidebar").classList.remove('sidebar__y');
    
    document.getElementById("sidebar").classList.toggle('sidebar__y');

    document.getElementById("father__sidebar").classList.add('flex');
    
}

function changeClassBack() {
    document.getElementById("sidebar").classList.remove('sidebar__x');
    
    document.getElementById("sidebar").classList.add('sidebar__y');
        
    document.getElementById("sidebar").classList.toggle('sidebar__x');

    document.getElementById("father__sidebar").classList.remove('flex');
}


function showDescripcion() {
    document.getElementById("multimedia").style.display = 'none';
    document.getElementById("descripcion").style.display = 'block';
}

function showMultimedia() {
    document.getElementById("descripcion").style.display = 'none';
    document.getElementById("multimedia").style.display = 'block';
}

function quitParrafos() {
    document.getElementById("descripcion").style.display = 'none';
    document.getElementById("multimedia").style.display = 'none';
}