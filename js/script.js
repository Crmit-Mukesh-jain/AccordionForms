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
  });
  