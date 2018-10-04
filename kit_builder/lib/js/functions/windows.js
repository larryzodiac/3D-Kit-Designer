
// HELP WINDOW

$('#helpButton').click(function() {
  $('#helpWindow').addClass('helpActive');
});

$('#helpWindowClose').click(function() {
  $('#helpWindow').removeClass('helpActive');
});

// PALETTE WINDOW

var paletteToggle = false;

$('#paletteWindowToggle').click(function() {
  if (paletteToggle === false) {
    $('#palette').addClass('paletteActive');
    $('#paletteWindowToggle').removeClass('paletteChevronClosed');
    $('#paletteWindowToggle').addClass('paletteChevronOpen');
    paletteToggle = true;
  } else {
    $('#palette').removeClass('paletteActive');
    $('#paletteWindowToggle').removeClass('paletteChevronOpen');
    $('#paletteWindowToggle').addClass('paletteChevronClosed');
    paletteToggle = false;
  }
});

// SELECTOR WINDOW

var selector = 'primary';

function grabCurrentSelector(id) {
  selector = id;
  console.log('Current selector: ' + selector);
  $('#palette').addClass('paletteActive');
  $('#paletteWindowToggle').removeClass('paletteChevronClosed');
  $('#paletteWindowToggle').addClass('paletteChevronOpen');
  paletteToggle = true;
}

$('#primary, #secondary, #tertiary, #accent').click(function() {
  var id = $(this).attr('id');
  grabCurrentSelector(id);
});

// All colour boxes
$('#white, #lightGrey, #midGrey, #darkGrey, #black, #azure, #sky, #royal, #navy, #darkNavy, #darkGreen, #forest, #emerald, #jade, #lime, #maroon, #scarlet, #brightRed, #lightRed, #tangerine, #orange, #amber, #gold, #yellow, #lemon, #lichePurple, #emperorsChildren, #lavender, #lilac, #velvet, #burgundy, #raspberry, #grape, #magenta, #rhubarb')
.click(function() {
  var colour = $(this).attr('fill');
  console.log(colour);
  $('#' + selector + 'SelectorSvg').attr('fill', colour);
  console.log(selector);
  $('#' + selector + 'OnSvg').attr('fill', colour);
  if($("#webgl").length > 1) {
    $(this).empty();
  }
  getSvg();
  jsonloader.load('assets/models/jersey.json', getJersey);
})
