$(document).ready(function() {
    $(".modalbox").fancybox();
  });

  $( function() {
    $( "#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 0, 8 ],
      slide: function( event, ui ) {
        $( "#minCost" ).val(ui.values[ 0 ]);
        $( "#maxCost" ).val(ui.values[ 1 ]);
      }
    });
    $( "#minCost" ).val($( "#slider-range" ).slider( "values", 0 ));
     $( "#maxCost" ).val($( "#slider-range" ).slider( "values", 1 ));
       
  } );

  $( function() {
    $( "#slider").slider({
      range: true,
      min: 8,
      max: 50,
      values: [ 30, 8 ],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ]);
         $( "#amount_2" ).val(ui.values[ 1 ]);
      }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#amount_2" ).val($( "#slider-range" ).slider( "values", 1 ));
      
  } );
