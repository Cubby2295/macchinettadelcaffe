function gestoreCaffeInserito(){
	try{
		CaffeInseriti = nodoCaffeInserito.value;
		SaldoCialde += parseInt(CaffeInseriti);
		nodoSaldoCialde.value = SaldoCialde;
	}
	catch ( e ){
		alert ("gestoreCaffeInserito" + e);
	}
}

function gestoreCaffeDaErogare(){
	try{
		if (parseInt(nodoCaffeDaErogare.value) <= parseInt(nodoSaldoCialde.value)){
			nodoSaldoCialde.value -= nodoCaffeDaErogare.value;
			
			if ([nodoCodice.value] in ListaCodici == false){
				ListaCodici [nodoCodice.value] = parseInt(nodoCaffeDaErogare.value);
				return;
			}
			else {
				ListaCodici [nodoCodice.value] += parseInt(nodoCaffeDaErogare.value);
				return;
			}
		}
		else{
			alert ("Aggiungi prima più cialde");
		}
	}
	catch ( e ){
		alert ("gestoreCaffeDaErogare" + e);
	}
}

function gestoreControlloCodice(){
	try{
		if ([nodoCodice2.value] in ListaCodici == true){
			nodoCaffeAddebitati.value= ListaCodici[nodoCodice2.value];
			}
		else 
			alert("Prima registrati");
		}
	catch ( e ){
		alert ("gestoreControlloCodice" + e);
	}
}

var nodoCaffeInserito;
var nodoButtonCaffeInserito;
var nodoSaldoCialde;
var nodoCaffeDaErogare;
var nodoCodice;
var nodoButtonCaffeDaErogare;
var nodoCodice;
var nodoButtonCaffeDaErogare;
var nodoCodice2;
var nodoButtonControlloCodice;
var nodoCaffeAddebitati;

var ListaCodici;
var CaffeInseriti;
var Saldo;
var SaldoCialde;

function gestoreLoad (){
	try{
		nodoCaffeInserito= "";
		nodoSaldoCialde= "";
		nodoCaffeDaErogare= "";
		nodoCodice= "";
		nodoCodice2= "";
		nodoCaffeAddebitati= "";
		
		nodoCaffeInserito=document.getElementById("CaffeInserito");
		nodoButtonCaffeInserito= document.getElementById("ButtonCaffeInserito");
		nodoSaldoCialde= document.getElementById("SaldoCialde");
		nodoCaffeDaErogare= document.getElementById("CaffeDaErogare");
		nodoCodice= document.getElementById("Codice");
		nodoButtonCaffeDaErogare= document.getElementById("ButtonCaffeDaErogare");
		nodoCodice2= document.getElementById("Codice2");
		nodoButtonControlloCodice= document.getElementById("ButtonControlloCodice");
		nodoCaffeAddebitati= document.getElementById("CaffeAddebitati");
		
		nodoButtonCaffeInserito.onclick= gestoreCaffeInserito;
		nodoButtonCaffeDaErogare.onclick= gestoreCaffeDaErogare;
		nodoButtonControlloCodice.onclick= gestoreControlloCodice;
		
		ListaCodici = {};
		SaldoCialde = 0;
	}
	catch ( e ){
		alert ("gestoreLoad" + e);
	}
}

window.onload = gestoreLoad;