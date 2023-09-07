$(function() {
    var infoCheckbox = $("#copyInfoCheck");
  
    $("#copyInfoCheck").on("click", function() {
      if (infoCheckbox.is(":checked")) {
        var address1, address2, city, state, zip;
  
        address1 = $("#sAddress1").val();
        address2 = $("#sAddress2").val();
        city = $("#sCity").val();
        state = $("#oState").val();
        zip = $("#sZIP").val();
  
        console.log(address1);
        console.log(address2);
        console.log(city);
        console.log(state);
        console.log(zip);
  
        $("#sCAddress1").val(address1);
        $("#sCAddress2").val(address2);
        $("#sCCity").val(city);
        $("#oCState").val(state);
        $("#sCZIP").val(zip);
      } else {
        $("#sCAddress1").val("");
        $("#sCAddress2").val("");
        $("#sCCity").val("");
        $("#oCState").val("");
        $("#sCZIP").val("");
      }
    });
  
    $("#LbAnnualRev").hide();
    $("#oAnnualRev0").hide();
    $("#oAnnualRev1").hide();
    $("#oAnnualRev3").hide();
    $("#category").change(function() {
      //basic type options
      if ($("#category").val() == "OM" && $("#type").val() == "Basic") {
        $("#LbAnnualRev").show();
        $("#oAnnualRev0").show();
  
        $("#oAnnualRev1").hide();
        $("#oAnnualRev3").hide();
      } else if ($("#type").val() === "Basic") {
        $("#LbAnnualRev").hide();
        $("#oAnnualRev0").hide();
        $("#oAnnualRev1").hide();
        $("#oAnnualRev3").hide();
      } else if (
        ($("#type").val() === "Full" && $("#category").val() === "CM") ||
        $("#category").val() === "GM" ||
        $("#category").val() === "OM"
      ) {
        //end basic type options
  
        //Full Type options
        $("#LbAnnualRev").show();
        $("#oAnnualRev0").show();
  
        $("#oAnnualRev1").hide();
        $("#oAnnualRev3").hide();
      } else if ($("#type").val() === "Full" && $("#category").val() == "NS") {
        $("#LbAnnualRev").show();
        $("#oAnnualRev1").show();
  
        $("#oAnnualRev0").hide();
        $("#oAnnualRev3").hide();
      } else if ($("#type").val() === "Full" && $("#category").val() == "RET") {
        $("#LbAnnualRev").show();
        $("#oAnnualRev3").show();
  
        $("#oAnnualRev0").hide();
        $("#oAnnualRev1").hide();
      } else {
        //end full type options
        $("#LbAnnualRev").hide();
        $("#oAnnualRev0").hide();
        $("#oAnnualRev1").hide();
        $("#oAnnualRev3").hide();
      }
    });
  
    $("#type").change(function() {
      //basic type options
      if ($("#type").val() === "Basic") {
        $("#LbAnnualRev").hide();
        $("#oAnnualRev0").hide();
        $("#oAnnualRev1").hide();
        $("#oAnnualRev3").hide();
      } else if ($("#category").val() == "OM" && $("#type").val() == "Basic") {
        $("#LbAnnualRev").show();
        $("#oAnnualRev0").show();
  
        $("#oAnnualRev1").hide();
        $("#oAnnualRev3").hide();
      } else if (
        ($("#type").val() === "Full" && $("#category").val() === "CM") ||
        $("#category").val() === "GM" ||
        $("#category").val() === "OM"
      ) {
        //end basic type options
  
        //Full Type options
        $("#LbAnnualRev").show();
        $("#oAnnualRev0").show();
  
        $("#oAnnualRev1").hide();
        $("#oAnnualRev3").hide();
      } else if ($("#type").val() === "Full" && $("#category").val() == "NS") {
        $("#LbAnnualRev").show();
        $("#oAnnualRev1").show();
  
        $("#oAnnualRev0").hide();
        $("#oAnnualRev3").hide();
      } else if ($("#type").val() === "Full" && $("#category").val() == "RET") {
        $("#LbAnnualRev").show();
        $("#oAnnualRev3").show();
  
        $("#oAnnualRev0").hide();
        $("#oAnnualRev1").hide();
      } else {
        //end full type options
        $("#LbAnnualRev").hide();
        $("#oAnnualRev0").hide();
        $("#oAnnualRev1").hide();
        $("#oAnnualRev3").hide();
      }
    });

    $("#SpeakingOpportunity").click(function () {
      if ($(this).is(":checked")) {
          $("#SpeakingOpprtunityContent").show();
      } else {
          $("#SpeakingOpprtunityContent").hide();
      }
    });
    $("#Ad1").click(function () {
      if ($(this).is(":checked")) {
          $("#AdContent1").show();
      } else {
          $("#AdContent1").hide();
      }
    });

    $("#PromoItems").click(function () {
      if ($(this).is(":checked")) {
          $("#PromoItemsContent").show();
      } else {
          $("#PromoItemsContent").hide();
      }
    });

    $("#Raffle").click(function () {
      if ($(this).is(":checked")) {
          $("#RaffleContent").show();
      } else {
          $("#RaffleContent").hide();
      }
    });

    $("#ExhibitSpace").click(function () {
      if ($(this).is(":checked")) {
          $("#ExhibitSpaceContent").show();
      } else {
          $("#ExhibitSpaceContent").hide();
      }
    });

    $("#StrategicDinner").click(function () {
      if ($(this).is(":checked")) {
          $("#StrategicDinnerContent").show();
      } else {
          $("#StrategicDinnerContent").hide();
      }
    });

    $("#Others").click(function () {
      if ($(this).is(":checked")) {
          $("#OthersContent").show();
      } else {
          $("#OthersContent").hide();
      }
    });

    // $('#checkall:checkbox').change(function () {
    //   if($(this).attr("checked")) $('input:checkbox').attr('checked','checked');
    //   else $('input:checkbox').removeAttr('checked');
    // });

    $("#add_row").on("click", function() {
      // Dynamic Rows Code
      
      // Get max row id and set new id
      var newid = 0;
      $.each($("#tab_logic tr"), function() {
          if (parseInt($(this).data("id")) > newid) {
              newid = parseInt($(this).data("id"));
          }
      });
      newid++;
      
      var tr = $("<tr></tr>", {
          id: "addr"+newid,
          "data-id": newid
      });
      
      // loop through each td and create new elements with name of newid
      $.each($("#tab_logic tbody tr:nth(0) td"), function() {
          var td;
          var cur_td = $(this);
          
          var children = cur_td.children();
          
          // add new td and element if it has a nane
          if ($(this).data("name") !== undefined) {
              td = $("<td></td>", {
                  "data-name": $(cur_td).data("name")
              });
              
              var c = $(cur_td).find($(children[0]).prop('tagName')).clone().val("");
              c.attr("name", $(cur_td).data("name") + newid);
              c.appendTo($(td));
              td.appendTo($(tr));
          } else {
              td = $("<td></td>", {
                  'text': $('#tab_logic tr').length
              }).appendTo($(tr));
          }
      });
      
      // add delete button and td
      /*
      $("<td></td>").append(
          $("<button class='btn btn-danger glyphicon glyphicon-remove row-remove'></button>")
              .click(function() {
                  $(this).closest("tr").remove();
              })
      ).appendTo($(tr));
      */
      
      // add the new row
      $(tr).appendTo($('#tab_logic'));
      
      $(tr).find("td button.row-remove").on("click", function() {
           $(this).closest("tr").remove();
      });
});




  // Sortable Code
  var fixHelperModified = function(e, tr) {
      var $originals = tr.children();
      var $helper = tr.clone();
  
      $helper.children().each(function(index) {
          $(this).width($originals.eq(index).width())
      });
      
      return $helper;
  };

  $(".table-sortable tbody").sortable({
      helper: fixHelperModified      
  }).disableSelection();

  $(".table-sortable thead").disableSelection();



  $("#add_row").trigger("click");
    
  });
  