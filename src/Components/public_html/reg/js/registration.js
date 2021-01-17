//Registration Javascript













//Registration Javascript Start




var script_url = 'https://script.google.com/macros/s/AKfycbz3uqxQa5-SE5N217bgreSO2fEuSE9S2lkume898mwdIiE6IVl_/exec';

function getjsondata(){
    var name = document.forms["signup-form"]["name"].value;
    var email = document.forms["signup-form"]["email"].value;
    //var pass = document.forms["signup-form"]["pass"].value;
    var mobile = document.forms["signup-form"]["mobile"].value;
    var dob = document.forms["signup-form"]["dob"].value;
    var gender = document.forms["signup-form"]["gender"].value;
    var college = document.forms["signup-form"]["college"].value;
    var city = document.forms["signup-form"]["city"].value;
    var state = document.forms["signup-form"]["state"].value;


    var json_object = {
        'name' : name,
        'email' : email,
        'mobile' : mobile,
        'dob' : dob,
        'gender' : gender,
        'college' : college,
        'city' : city,
        'state' : state,
    }

    return json_object;
}

function onSuccess(data){
    console.log(data);
    console.log("response from google app!!");
    
    //$('forms#signup-form').reset();

    document.forms["signup-form"]["name"].value = " " ;
    document.forms["signup-form"]["email"].value = " ";
    document.forms["signup-form"]["college"].value = " ";
    document.forms["signup-form"]["city"].value = " ";
    document.forms["signup-form"]["state"].value = " ";
    //var pass = document.forms["signup-form"]["pass"].value;
    document.forms["signup-form"]["mobile"].value = " ";
    document.forms["signup-form"]["dob"].value =" ";
    document.forms["signup-form"]["gender"].value = " " ;

}

$(document).ready(function(){
  $("form#signup-form").submit(function(event){
    event.preventDefault();
    var $form = $('form#signup-form');
    var json_object = getjsondata();

    var payload = JSON.stringify(json_object);
    //alert(payload);
    console.log(payload);
    //now send the payload to google sheets web app

    var jqxhr = $.ajax({
        url : script_url,
        async : false,
        method : "GET",
        dataType : "json",
        data : json_object,

        success : function(data){
            onSuccess(data);
        }
    });

  });
});





