
### Reducers:

  - reducers/index.js: Export both users data and credentials using redux
  
 
### Components:

 #### Login.js:(Main component)
  - Login form with email and password 
  - Verify user with redux information provided in reducers.
  - After successful login it redirects to dashboard page 
    
 #### Dashboard:(child component):
   - Checks the user and fetch the details from reducers using react-redux library
   - Pass the userinfo data to UserTable component.
    
#### UserTable.js(sub child):
   - Get the data in the form of props
   - map the list of users into table 
   
   
   
 #### Tech Used:
   - React
   - Redux
   - ant design
   
### Login Credentials:
   email:hruday@gmail.com
   pass :hruday@123
   
