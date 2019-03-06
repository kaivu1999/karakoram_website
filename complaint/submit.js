var script_url = "https://script.google.com/macros/s/AKfycbxz7awv2x1W7XHdPIROBXYFHNSAwWjdRSeVOCTapXnDNuKERuE/exec";
var name, email, mobNum, organisation, interestedIn;
function insert_value() {
    name = $("#name").val();
    email = $("#email").val();
    mobNum = $("#mobNum").val();
    organisation = $("#organisation").val();
    interestedIn = $("input[name='attendingAs']:checked").val();
    if (interestedIn == "delegate") {
    	$("#delegate").show();
    	$("#workshop").hide();
    	$("#stall").hide();
    	$("#competition").hide();
    	$("#partner").hide();
    }
    else if (interestedIn == "workshop") {
    	$("#delegate").hide();
    	$("#workshop").show();
    	$("#stall").hide();
    	$("#competition").hide();
    	$("#partner").hide();
    }
    else if (interestedIn == "stall") {
    	$("#delegate").hide();
    	$("#workshop").hide();
    	$("#stall").show();
    	$("#competition").hide();
    	$("#partner").hide();
    }
    else if (interestedIn == "competition") {
    	$("#delegate").hide();
    	$("#workshop").hide();
    	$("#stall").hide();
    	$("#competition").show();
    	$("#partner").hide();
    }
    else if (interestedIn == "partner") {
    	$("#delegate").hide();
    	$("#workshop").hide();
    	$("#stall").hide();
    	$("#competition").hide();
    	$("#partner").show();
    }
}
function delegate_submit() {
	var dYouAre = $("input[name='dYouAre']:checked").val();
	var dWorkshop = $("input[name='dWorkshop']:checked").val();
	var dOtherQuery = $("#dOtherQuery").val();
	var url = script_url + "?callback=ctrlq&name=" + name + "&email=" + email + "&mobNum=" + mobNum + "&organisation=" + organisation + "&dYouAre=" + dYouAre + "&dWorkshop=" + dWorkshop + "&dOtherQuery=" + dOtherQuery + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    console.log(url);
    //$('#form-1').trigger("reset");
}
function workshop_submit() {
	var wYouAre = $("input[name='wYouAre']:checked").val();
	var wWorkshop = $("input[name='wWorkshop']:checked").val();
	var wOtherQuery = $("#wOtherQuery").val();
	var url = script_url + "?callback=ctrlq&name=" + name + "&email=" + email + "&mobNum=" + mobNum + "&organisation=" + organisation + "&wYouAre=" + wYouAre + "&wWorkshop=" + wWorkshop + "&wOtherQuery=" + wOtherQuery + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    console.log(url);
    //$('#form-1').trigger("reset");
}
function stall_submit() {
	var sNatureOfOrg = $("input[name='sNatureOfOrg']:checked").val();
	var sDescrip = $("#sDescrip").val();
	var url = script_url + "?callback=ctrlq&name=" + name + "&email=" + email + "&mobNum=" + mobNum + "&organisation=" + organisation + "&sNatureOfOrg=" + sNatureOfOrg + "&sDescrip=" + sDescrip + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    console.log(url);
    //$('#form-1').trigger("reset");
}
function competition_submit() {
	var cYouAre = $("input[name='cYouAre']:checked").val();
	var cWorkshop = $("input[name='cWorkshop']:checked").val();
	var cOtherQuery = $("#cOtherQuery").val();
	var url = script_url + "?callback=ctrlq&name=" + name + "&email=" + email + "&mobNum=" + mobNum + "&organisation=" + organisation + "&cYouAre=" + cYouAre + "&cWorkshop=" + cWorkshop + "&cOtherQuery=" + cOtherQuery + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    console.log(url);
    //$('#form-1').trigger("reset");
}
function partner_submit() {
	var pSponsorship = $("input[name='pSponsorship']:checked").val();
	var pStallReq = $("input[name='pStallReq']:checked").val();
	var pName = $("#pName").val();
	var pMobNum = $("#pMobNum").val();
	var pEmail = $("#pEmail").val();
	var pOtherQuery = $("#pOtherQuery").val();
	var url = script_url + "?callback=ctrlq&name=" + name + "&email=" + email + "&mobNum=" + mobNum + "&organisation=" + organisation + "&pSponsorship=" + pSponsorship + "&pStallReq=" + pStallReq + "&pName=" + pName + "&pMobNum=" + pMobNum + "&pEmail=" + pEmail + "&pOtherQuery=" + pOtherQuery + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    console.log(url);
    //$('#form-1').trigger("reset");
}
/*function submit() {
    var url = script_url + "?callback=ctrlq&name=" + name + "&email=" + email + "&query=" + query + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    $('#form-1').trigger("reset");
}*/
function ctrlq(e) {
    alert('Congrats! Registered Successfully')
}
