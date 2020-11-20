function upload(){

    var form_data = new FormData($('form#form')[0]); // THIS LINE TO GET ALL DATA INSIDE TAG <form>
    
    $.ajax({
        url: action, // URL
        method: 'POST', // Ur Method
        dataType: 'JSON', // DATA TYPE SERVER SIDE EXPECT
        data: form_data, // Send Data 
        contentType: false, // Required This
        processData: false, // Required This
        success: (response) => {
          alert('success');
        },
        error: (response) => {
          alert('error');
        }
    });

}
