function seleccionarTodos(opcion){
	for (i = 1; i <= 5; i++) {
		if(opcion){
			document.getElementById("ch"+i).checked = true;
		}else{
			document.getElementById("ch"+i).checked = false;
		}	
	}
}