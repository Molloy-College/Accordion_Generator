 margins = {
     top: 70,
     bottom: 80, //180
     left: 60,
     width: 485
 };

 const styleHTML = ".accordion {background-color: #eee;color: #981E32;cursor: pointer;padding: 18px;width: 100%;border: none;text-align: left;outline: none;font-size: 15px;transition: 0.4s;} .active-custom, .accordion:hover {background-color: #ccc;} .accordion:after {content: '+'; color: #777;font-weight: bold;float: right;margin-left: 5px;} .active-custom:after {content: '-';} .panel {padding: 0 18px;background-color: rgba(241, 241, 241, 0.719);max-height: 0;overflow: hidden;transition: max-height 0.2s ease-out;}"

 const jsHTML = 'var acc = document.getElementsByClassName("accordion");var i;for (i = 0; i < acc.length; i++) {acc[i].addEventListener("click", function() {this.classList.toggle("active-custom");var panel = this.nextElementSibling;if (panel.style.maxHeight) {panel.style.maxHeight = null;} else {panel.style.maxHeight = panel.scrollHeight + "px";} });}'

 document.getElementById("css-word").innerHTML = styleHTML;

 document.getElementById("js-word").innerHTML = jsHTML;

 function addEssentialFunctionInputAndFill() {
    $('#generate-html-input-ul').append('<li><button type="button" class="btn btn-default btn-sm deleteButton"><i class="far fa-trash-alt"></i></button><div class="row"><div class="col-md-4"><h4 class="header-notice">Header</h4><textarea class="header-text"></textarea></div><div class="col-md-8"><h4 class="header-content-area">Content Area</h4><textarea class="content-area-text"></textarea><br/></div></div></li>');
			$('#ul-panel-fill-for-doc').append('<li></li>')
 }

 // event handlers
 $(document).on('click', '.deleteButton', (function() {
    $(this).parent().remove();
 }));

 $(document).on('click', '#panelAddButton', (function() {
    addEssentialFunctionInputAndFill();
}));

 function assignTextFields() {
     $('#generate-html-input-ul li').each(function(index) {
        $('#panels-fill').text(
          $('#panels-fill').text() +
          '<div><button class="accordion"><strong>'+$(this).find("textarea.header-text").val()+'</strong></button><div class="panel"><p>'+$(this).find("textarea.content-area-text").val()+'</p></div></div>'
        );
        $('#accordion-preview').append(
          '<div><button class="accordion"><strong>'+$(this).find("textarea.header-text").val()+'</strong></button><div class="panel"><p>'+$(this).find("textarea.content-area-text").val()+'</p></div></div>'
        );
     });
 }

 function resetStaticElements() {
    $('#panels-fill').empty();
    $('#accordion-preview').empty();
 }

function generateWord() {
    resetStaticElements();
    assignTextFields();
    $('.word-content').wordExport('Accordion-Component');
    var acc = document.getElementsByClassName("accordion");
      var i;
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          console.log('click')
          this.classList.toggle("active-custom");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        });
      }
}

function generate() {
  resetStaticElements();
  assignTextFields();
  var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        console.log('click')
        this.classList.toggle("active-custom");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
}

 // EVENT HANDLERS
 $('#word-export-button').click(function (events) {
     generateWord();
 });

 $('#generate-button').click(function (events) {
    generate();
  });

 // ACCORDION