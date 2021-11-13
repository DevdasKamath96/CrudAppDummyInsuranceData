function edit_row(no)
{
console.log(no)
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var pid=document.getElementById("pid_row"+no);
 var cid=document.getElementById("cid_row"+no);
 var fuel=document.getElementById("fuel_row"+no);
 var vs=document.getElementById("vs_row"+no);
 var premium=document.getElementById("premium_row"+no);
 var bil=document.getElementById("bil_row"+no);
 var pip=document.getElementById("pip_row"+no);
 var pdp=document.getElementById("pdp_row"+no);
 var collision=document.getElementById("collision_row"+no);
 var comprehensive=document.getElementById("comprehensive_row"+no);
 var gender=document.getElementById("gender_row"+no);
 var ig=document.getElementById("ig_row"+no);
 var region=document.getElementById("region_row"+no);
 var ms=document.getElementById("ms_row"+no);
	
 var pid_data=pid.innerHTML;
 var cid_data=cid.innerHTML;
 var fuel_data=fuel.innerHTML;
 var vs_data=vs.innerHTML;
 var premium_data=premium.innerHTML;
 var bil_data=bil.innerHTML;
 var pip_data=pip.innerHTML;
 var pdp_data=pdp.innerHTML;
 var collision_data=collision.innerHTML;
 var comprehensive_data=comprehensive.innerHTML;
 var gender_data=gender.innerHTML;
 var ig_data=ig.innerHTML;
 var region_data=region.innerHTML;
 var ms_data=ms.innerHTML;


	
 pid.innerHTML="<input type='text' id='pid_text"+no+"' value='"+pid_data+"'>";
 cid.innerHTML="<input type='text' id='cid_text"+no+"' value='"+cid_data+"'>";
 fuel.innerHTML="<input type='text' id='fuel_text"+no+"' value='"+fuel_data+"'>";
 vs.innerHTML="<input type='text' id='vs_text"+no+"' value='"+vs_data+"'>";
 premium.innerHTML="<input type='text' id='premium_text"+no+"'  value='"+premium_data+"'>";
 bil.innerHTML="<input type='text' id='bil_text"+no+"' value='"+bil_data+"'>";
 pip.innerHTML="<input type='text' id='pip_text"+no+"' value='"+pip_data+"'>";
 pdp.innerHTML="<input type='text' id='pdp_text"+no+"' value='"+pdp_data+"'>";
 collision.innerHTML="<input type='text' id='collision_text"+no+"' value='"+collision_data+"'>";
 comprehensive.innerHTML="<input type='text' id='comprehensive_text"+no+"' value='"+comprehensive_data+"'>";
 gender.innerHTML="<input type='text' id='gender_text"+no+"' value='"+gender_data+"'>";
 ig.innerHTML="<input type='text' id='ig_text"+no+"' value='"+ig_data+"'>";
 region.innerHTML="<input type='text' id='region_text"+no+"' value='"+region_data+"'>";
 ms.innerHTML="<input type='text' id='ms_text"+no+"' value='"+ms_data+"'>";
}

function save_row(no)
{
 var pid_val=document.getElementById("pid_text"+no).value;
 var cid_val=document.getElementById("cid_text"+no).value;
 var fuel_val=document.getElementById("fuel_text"+no).value;
 var vs_val=document.getElementById("vs_text"+no).value;
 var premium_val=document.getElementById("premium_text"+no).value;
 var bil_val=document.getElementById("bil_text"+no).value;
 var pip_val=document.getElementById("pip_text"+no).value;
 var pdp_val=document.getElementById("pdp_text"+no).value;
 var collision_val=document.getElementById("collision_text"+no).value;
 var comprehensive_val=document.getElementById("comprehensive_text"+no).value;
 var gender_val=document.getElementById("gender_text"+no).value;
 var ig_val=document.getElementById("ig_text"+no).value;
 var region_val=document.getElementById("region_text"+no).value;
 var ms_val=document.getElementById("ms_text"+no).value;

 if (premium_val >1000000) {
   alert("premium value must be less than 1000000")
 } else {

 insurance_data = {"ProjectID":pid_val,
                 "CustomerID":cid_val,
                 "Fuel": fuel_val,
                 "VehicleSegment": vs_val,
                 "Premium": premium_val,
                 "BIL": bil_val,
                 "PIP": pip_val,
                 "PDP": pdp_val,
                 "Collision": collision_val,
                 "Comprehensive": comprehensive_val,
                 "Gender": gender_val,
                 "IncomeGroup": ig_val,
                 "Region": region_val,
                 "MaritalStatus": ms_val,
 }

 document.getElementById("pid_row"+no).innerHTML=pid_val;
 document.getElementById("cid_row"+no).innerHTML=cid_val;
 document.getElementById("fuel_row"+no).innerHTML=fuel_val;
 document.getElementById("vs_row"+no).innerHTML=vs_val;
 document.getElementById("premium_row"+no).innerHTML=premium_val;
 document.getElementById("bil_row"+no).innerHTML=bil_val;
 document.getElementById("pip_row"+no).innerHTML=pip_val;
 document.getElementById("pdp_row"+no).innerHTML=pdp_val;
 document.getElementById("collision_row"+no).innerHTML=collision_val;
 document.getElementById("comprehensive_row"+no).innerHTML=comprehensive_val;
 document.getElementById("gender_row"+no).innerHTML=gender_val;
 document.getElementById("ig_row"+no).innerHTML=ig_val;
 document.getElementById("region_row"+no).innerHTML=region_val;
 document.getElementById("ms_row"+no).innerHTML=ms_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";



 fetch('/api/update_data', {
  method: 'post',
  body: JSON.stringify(insurance_data)
}).then(r => r.json())
  .then(token => {
    if (token.status){
      console.log(token.status)          
    }
    else {
      alert("chnange was not updated in the database")
    }
  })
}
location.reload()

}
