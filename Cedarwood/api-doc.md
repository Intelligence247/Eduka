# API Documentation

# School

## GET  Get School Info
Method	GET
Function	staff.school.schoolInfo()
Parameters
Parameter Name	Value Type	Description
Request

Direct Function


    // make request
    staff.school.schoolInfo({
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    {
      "status": "success",
      "message": "school info fetched",
      "data": {
          "name": "Rigan School",
          "motto": "In God we trust",
          "email": "school@gmail.com",
          "logo": "/media/logo/logo.png",
          "about": "",
          "year_established": 2001,
          "address": {
              "address": "11, Allen Avenue",
              "country": "Nigeria",
              "state": "Kwara",
              "lga": "Ilorin East"
          },
          "phone_number": ""
      }
    }

Response

error



    // authorization error (invalid site id)
    {
      "error": "Unauthorized request origin",
      "statusText": "Unauthorized",
      "statusCode": 401
    }
      // server error
    {
      "status": "error",
      "message": "Error occured: {error details}"
    }



## GET  Get Sessions (List/Single Item)
Method	GET
Function	staff.school.getSessions()
Parameters
Parameter Name	Value Type	Description
session_id	Integer	Optional; to fetch a single item (rather than a list), use the ID of selected item
Request

Direct Function


    // for a list of items

    staff.school.getSessions({
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })

    // for a single item

    staff.school.getSessions({
      params: { session_id: 1 },
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    // for a list
    {
      "status": "success",
      "data": [
          {
              "id": 4,
              "title": "2025/2026 Session"
          }
      ]
    }
      
    // for a single item
    {
      "status": "success",
      "data": {
          "id": 4,
          "title": "2025/2026 Session"
      }
    }
    

Response

error



    // invalid parameter (for single item)
    {
      "status": "error",
      "message": "Session not found"
    }
      // authorization error (invalid site id)
    {
      "error": "Unauthorized request origin",
      "statusText": "Unauthorized",
      "statusCode": 401
    }
      // authorization error (login required)
    {
      "detail": "Authentication credentials were not provided.",
      "statusText": "Unauthorized",
      "statusCode": 401
    }
      // server error
    {
      "status": "error",
      "message": "Error occured: {error details}"
    }


## GET  Get Terms (List/Single Item)
Method	GET
Function	staff.school.getTerms()
Parameters
Parameter Name	Value Type	Description
session_id	Integer	Optional; to filter terms by session, provide the id of the session
term_id	Integer	Optional; to fetch a single item (rather than a list), use the id of selected item
Request

Direct Function


    // for a list of items (without filter)

    staff.school.getTerms({
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })

    // for a list of items (with session filter)

    staff.school.getTerms({
      params: { session_id: 1 },
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })

    // for a single item

    staff.school.getTerms({
      params: { term_id: 1 },
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    // for a list
    {
      "status": "success",
      "data": [
          {
              "id": 7,
              "session": {
                  "id": 4,
                  "title": "2025/2026 Session"
              },
              "title": "First Term",
              "term": 1,
              "start_date": "2025-09-22",
              "end_date": "2025-12-21",
              "number_of_weeks": 13
          }
      ]
    }
      
    // for a single item
    {
      "status": "success",
      "data": {
          "id": 7,
          "session": {
              "id": 4,
              "title": "2025/2026 Session"
          },
          "title": "First Term",
          "term": 1,
          "start_date": "2025-09-22",
          "end_date": "2025-12-21",
          "number_of_weeks": 13
      }
    }

Response

error



    // invalid session filter
    {
      "status": "error",
      "message": "Invalid session parameter"
    }
      // invalid parameter (for single item)
    {
      "status": "error",
      "message": "Term not found"
    }
    // authorization error (invalid site id)
      {
        "error": "Unauthorized request origin",
        "statusText": "Unauthorized",
        "statusCode": 401
      }
        // authorization error (login required)
      {
        "detail": "Authentication credentials were not provided.",
        "statusText": "Unauthorized",
        "statusCode": 401
      }
      // server error
    {
      "status": "error",
      "message": "Error occured: {error details}"
    }


## GET  Get Events (List/Single Item)
Method	GET
Function	staff.school.getEvents()
Parameters
Parameter Name	Value Type	Description
status	String	Optional; to filter based on status (options are: "upcoming", "past", "all", "ongoing")
event_id	Integer	Optional; to fetch a single item (rather than a list), use the id of selected item
Request

Direct Function


    // for a list of items (without filter)

    staff.school.getEvents({
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })

    // for a list of items (with status filter)

    staff.school.getEvents({
      params: { status: "upcoming" },
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })

    // for a single item

    staff.school.getEvents({
      params: { event_id: 1 },
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    // for a list
    {
      "status": "success",
      "data": [
          {
              "id": 2,
              "title": "End of Year Party",
              "date": "2025-12-20",
              "time": "12:00:00",
              "venue": "School Compound",
              "status": "Upcoming",
              "description": ""
          },
          {
              "id": 1,
              "title": "InterHouse Sports",
              "date": "2025-12-09",
              "time": "10:00:00",
              "venue": "Army Barracks Field",
              "status": "Ongoing",
              "description": ""
          }
      ]
    }
      
    // for a single item
    {
      "status": "success",
      "data": {
          "id": 1,
          "title": "InterHouse Sports",
          "date": "2025-12-09",
          "time": "10:00:00",
          "venue": "Army Barracks Field",
          "status": "Ongoing",
          "description": ""
      }
    }

Response

error



    // invalid status filter
    {
      "status": "error",
      "message": "Invalid status parameter"
    }
      // invalid parameter (for single item)
    {
      "status": "error",
      "message": "Invalid event parameter"
    }
    // authorization error (invalid site id)
      {
        "error": "Unauthorized request origin",
        "statusText": "Unauthorized",
        "statusCode": 401
      }
        // authorization error (login required)
      {
        "detail": "Authentication credentials were not provided.",
        "statusText": "Unauthorized",
        "statusCode": 401
      }
      // server error
    {
      "status": "error",
      "message": "Error occured: {error details}"
    }






# Staff account

## GET  Check Login Status
Method	GET
Function	staff.account.loginStatus()
Parameters
Parameter Name	Value Type	Description
Request

Direct Function


    // make request
    staff.account.loginStatus({
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    // if logged in
    {
      "status": "success",
      "authenticated": true
    }
      // if logged out
    {
      "status": "success",
      "authenticated": false
    }

Response

error



    // authorization error (invalid site id)
    {
      "error": "Unauthorized request origin",
      "statusText": "Unauthorized",
      "statusCode": 401
    }
    // server error
    {
      "status": "error",
      "message": "Error occured: {error details}"
    }



## POST  Staff Login Authentication
Method	POST
Function	staff.account.login()
Parameters
Parameter Name	Value Type	Description
email	String	Required
password	String	Required
Request

Direct Function


    var formData = {
        "email": "staff@gmail.com",
        "password": "password123"
    }

    // make request
    staff.account.login({
      formData: formData,
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    // best way to determine if success message is 2-FA or not is to check if the "email" key is present in response
    
    // if 2-FA login is not enabled
    {
      "status": "success",
      "message": "Login successful"
    }
      
    // if 2-FA is enabled
    {
      "status": "success",
      "email": "staff@gmail.com",   // email should be passed when verifying login OTP
      "message": "OTP code has been sent to staff@gmail.com. It expires in 15 minutes"
    }

    Response

error



      // error due to invalid parameters
    {
      "status": "error",
      "message": "Invalid login credentials."
    }
    // error due to deactivated account
    {
      "status": "error",
      "message": "Your account has been deactivated. Kindly contact the administrator."
    }



## POST  Verify Login OTP (for 2-FA Login)
Method	POST
Function	staff.account.verifyLogin()
Parameters
Parameter Name	Value Type	Description
email	String	Required
code	String	Required; 8-digits OTP code sent to email
Request

Direct Function


    var formData = {
        "email": "staff@gmail.com",
        "code": "12345678"
    }

    // make request
    staff.account.verifyLogin({
      formData: formData,
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    {
      "status": "success",
      "message": "Login successful"
    }

    Response

error



    // invalid email
    {
      "status": "error",
      "message": "Invalid email address"
    }
      // wrong email
    {
      "status": "error",
      "message": "Invalid login credentials"
    }
      // invalid code
    {
      "status": "error",
      "message": "Invalid OTP code"
    }
      // expired OTP
    {
      "status": "error",
      "message": "OTP code has expired. Kindly log back in to generate another."
    }
      // server error
    {
      "status": "error",
      "message": "Error occurred: {error_details}"
    }




## POST  Forgot Password
Method	POST
Function	admin.account.forgotPassword()
Parameters
Parameter Name	Value Type	Description
email	String	Required; Registered staff email
Request

Direct Function


    var formData = {
        "email": "staff@gmail.com"
    }

    // make request
    staff.account.forgotPassword({
      formData: formData,
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    {
      "status": "success",
      "message": "Password reset instructions has been sent to your email. Kindly ensure to check your spam folders as well."
    }

Response

error



      // error due to invalid parameters
    {
      "status": "error",
      "message": "Invalid email address."
    }
      // error due to unregistered email
    {
      "status": "error",
      "message": "User not found."
    }
    // error due server
    {
      "status": "error",
      "message": "Error occured: {error_details}."
    }


## GET  Get Staff Profile
Method	GET
Function	staff.account.getProfile()
Parameters
Parameter Name	Value Type	Description
Request

Direct Function


    // make request
    staff.account.getProfile({
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    {
      "status": "success",
      "message": "request successful.",
      "data": {
          "title": "",
          "date_of_birth": "1997-07-07",
          "gender": "female",
          "firstName": "Jane",
          "middleName": "Mary",
          "lastName": "Foster",
          "staffId": "RIG@JMF001",
          "qualification": "MSc English",
          "image": "/media/staff/images/avatar-3.jpg",
          "resume": null,
          "classes_assigned": [],
          "email": "janefoster@gmail.com",
          "phone_number": "09011223344",
          "address": {
              "address": "11, Allen Avenue",
              "country": "Nigeria",
              "state": "Edo",
              "lga": "Etsako West"
          },
          "role": "English Teacher",
          "salary": "50000.00",
          "_2fa_enabled": false
      }
    }

Response

error



    // server error
    {
      "status": "error",
      "message": "Error occured: {error details}"
    }



## POST  Staff Logout
Method	POST
Function	staff.account.logout()
Parameters
Parameter Name	Value Type	Description
Request

Direct Function



    // make request
    staff.account.logout({
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    {
      "status": "success",
      "message": "Logout successful"
    }

Response

error



      // error due to server
    {
      "status": "error",
      "message": "Error occured: {error_details}."
    }


## POST  Change Password
Method	POST
Function	staff.account.changePassword()
Parameters
Parameter Name	Value Type	Description
old_password	String	Required
new_password	String	Required; must be at least 8 alphanumeric characters long
Request

Direct Function


    var formData = {
        old_password: "password123",
        new_password: "newpassword223"
    }
    
    // make request
    staff.account.changePassword({
      formData: formData,
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    {
      "status": "success",
      "message": "password changed successfully."
    }

Response

error



    // error due to incorrect password
    {
      "status": "error",
      "message": "Incorrect password"
  }
    // password combination error
    {
      "status": "error",
      "message": "Invalid new password combination"
    }
    // server error
    {
      "status": "error",
      "message": "Error occurred: {error_details}"
    }



## POST  Upload Passport Image
Method	POST
Function	staff.account.uploadPassport()
Parameters
Parameter Name	Value Type	Description
phone_number	String	Required; new phone number to update
Request

Direct Function


    let image = document.querySelector() // for image inputs

    let formData = new FormData();
    formData.append('image', image)
    
    // make request
    staff.account.uploadPassport({
      formData: formData,
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error)
    })
    



Response

success


    {
      "status": "success",
      "message": "image uploaded successfully."
    }

Response

error



    // no file provided
    {
      "status": "error",
      "message": "Invalid image"
    }
      // large file size
    {
      "status": "error",
      "message": "Image size must not exceed 2MB"
    }
      // unsupported file format
    {
      "status": "error",
      "message": "Image type must be one of the following: .jpg, .jpeg, .png"
    }
      // existing file
    {
      "status": "error",
      "message": "User image has already been uploaded"
    }
    // server error
    {
      "status": "error",
      "message": "Error occurred: {error_details}"
    }
