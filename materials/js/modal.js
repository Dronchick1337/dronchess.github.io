$(function(){function TemplateRefresh(){ModalRefresh();}
$(window).resize(function(){TemplateRefresh();});TemplateRefresh();function ModalRefresh(){if($('.modal').is(':visible')){var modalBlock=$('.modal:visible .modal-block'),width=parseInt(modalBlock.width()),height=parseInt(modalBlock.height());if($(window).height()>height+20){modalBlock.addClass('modal-top').removeClass('margin-t-b').css('margin-top',-1*(height/2));}
else{modalBlock.addClass('margin-t-b').removeClass('modal-top');}
if($(window).width()>width){modalBlock.addClass('modal-left').removeClass('margin-l').css('margin-left',-1*(width/2));}
else{modalBlock.addClass('margin-l').removeClass('modal-left');}}}
$(document).on('click','a[modal]',function(){var modalWindow=$('div#'+$(this).attr('modal'));if(modalWindow.length){modalWindow.fadeIn('fast');$('body').addClass('modal-show');ModalRefresh();return false;}});function ModalHide(){$('.modal:visible').fadeOut('fast',function(){$('body').removeClass('modal-show');});}
$(document).on('click','.icon-close, .modal',function(event){if(event.target!=this)
return false;else
ModalHide();}).on('keydown',function(key){if(key.keyCode==27)
ModalHide();})})