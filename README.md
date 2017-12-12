# Running the application

- Download the code
- Navigate to inside the project folder on terminal
- Do an npm install for installing all the project dependencies
- Then npm start or node app.js or to get the app running on local host

- You also can go an test the application directly from  Heroku using the following URL:
  https://condorlabs-apirest.herokuapp.com/

  # Endpoints

  ## GET /providers

  ## GET /providers/{id}

  ## POST /providers
  
  This endpoint recive JSON with the following structure: <br>

```json
  {
        "createdAt": Date,
        "createdBy": Number,
        "status": String,
        "assignedTo": Number,
        "staffStatus": String,
        "providerType": String,
        "employerId": Number,
        "projectedStartDate": Date,
        "email": String,
        "middleName": String,
        "lastName": String,
        "firstName": String,
        "updatedBy": Number,
        "updatedAt": Date,
        "specialty": String
  }
  ```
  
  The specialty in this structure makes reference to a Specialty in the SPECIALTIES collection.
  If the given specialty is found in the specialties collection, the attribute of the object will be populated with the data extracted from the specialties collection. 
    

  ## PUT /providers/{id}
  This endpoint recive JSON with the following structure: <br>
  
  ```json
    {
          "createdAt": Date,
          "createdBy": Number,
          "status": String,
          "assignedTo": Number,
          "staffStatus": String,
          "providerType": String,
          "employerId": Number,
          "projectedStartDate": Date,
          "email": String,
          "middleName": String,
          "lastName": String,
          "firstName": String,
          "updatedBy": Number,
          "updatedAt": Date,
          "specialty": {
              "name": String,
              "createdBy": Number,
              "createdAt": Date,
              "updatedBy": Number,
              "updatedAt": Date
          }
    }
    ```


  ## DELETE /providers/{id}
