function actualizarSalida(){
	$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + 
		$("#cssPanel").val() + "</style></head><body>"+ $("#htmlPanel").val()) + "</body></html>";   
	 document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}


$(".boton").hover(function(){
	$(this).css('cursor', 'pointer');
	$(this).addClass("botonMarcado");
	
},function(){
	$(this).css('cursor', 'pointer');
	$(this).removeClass("botonMarcado");
	
});

$("#logo").hover(function(){
		$(this).css('cursor', 'pointer');
})
$( "#dialog" ).dialog({ autoOpen: false });
$( "#logo" ).click(function() {
  $( "#dialog" ).dialog( "open" );
});

$(".boton").click(function(){
	$(this).toggleClass("activo");
	$(this).removeClass("botonMarcado");
	var panelId = $(this).attr("id") + "Panel";
	$("#"+panelId).toggleClass("oculto");

	var numeroDePanelesActivos=4 - $('.oculto').length;
	$(".panel").width(($(window).width()/numeroDePanelesActivos)-10);
});
            //
            $(".panel").height($(window).height() -$("#barra").height()-15);
            $(".panel").width($(window).width()/2 -10);
            $("iframe").contents().find("html").html($("#htmlPanel").val()); 

            actualizarSalida();
            $("textarea").on('change keyup paste',function(){
            	actualizarSalida();
            }); 
            
            