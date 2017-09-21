// Asjad, olemas joonega maha ja halliks
$("ul").on("click", "li", function(){
	$(this).toggleClass("tehtud");
});

// Klikk ristil kustutab eseme
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	e.stopPropagation();
});

// Teksti kasti kirjutades ja enterit vajutades lisatakse ese
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//võtan inputi väärtuse, ehk mis on sinna kirjutatud
		var tekst = $(this).val();
		$(this).val("");
		//uus li ja läheb listi koos uue väärtusega
		$("ul").append("<li><span><i class='fa fa-trash-o fa-lg'></i></span> " + tekst + "</li>");
	}
});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});