# insurance-assignment

## Table of contents
* [Features Implemented](#features-implemented)
* [Test Cases](#test-cases)
* [Technologies](#technologies)
* [Setup](#setup)
* [Additional Note](#additional-note)

## Features Implemented
Following features are implemented in this simple application.

1.  Get user data filtered by user id ->
      - Routing performed by module getUserById.
      - Handles both valid and invalid user id.
  
2. Get user data filtered by user name -> 
      - Routing performed by module getUserByName.
      - Handles both valid and invalid user name.

#### Feature 3 and 4 are available only to admin user.
3. Get the list of policies linked to a user name
      - Routing performed by module getPolicyByName.
      - Handles valid client name, invalid client name and client who has zero policies

4. Get the user linked to a policy number
      - Routing performed by module getUserByPolicyNum.
      - Handles both valid and invalid policy number.

5) Authentication and authorization. Take the user role from the web service that returns the list of company clients.Application uses client-sessions for session management.
- Login : Enter user name and email id from web services. 

- Role  : If logged in user has admin access all four web services are available to the user. 
          If user isn't admin only getUserById and getUserByName modules are available to user
          
- Logout: Redirects to login page.

 
## Test Cases
Implemented under folder __tests__
- invalid user name
- valid user name
- invalid policy id
- valid policy id
- valid user id
- invalid user id
- user name having zero policies
- http://www.mocky.io/v2/5808862710000087232b75ac is active or inactive
- http://www.mocky.io/v2/580891a4100000e8242b75c5 service active or inactive

#### Following scenarios are handled in web application.
- If admin logs in and http://www.mocky.io/v2/580891a4100000e8242b75c5 is down 
- Limit display options to user and admin

## Technologies

* Node : version 12.18.3
* View engine : EJS
* Npm :  version 6.14.6
* Bootstrap 4
* Framework : Express
* Design pattern
* Javascript
* HTML
* CSS
* Github
* VS studio code editor
* Unit testing : Jest


## Setup
To run this project, assuming npm is installed locally.

```
$ git clone https://github.com/AshaNarayana/insurance-assignment.git
$ npm install
$ npm run start 
$ npm run test   
```

## Additional Note
Additional information regarding usage of web application.

- Application developed on port 3000
- Login with user credentials as mentioned above
- Options are displayed based on role.
- Search using user name, user id and policy number.
- At any time click on Insurance and Policies tab at the top to go to main page.
- Click on logout to login with different user.
