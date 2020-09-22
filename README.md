# insurance-assignment

## Features Implemented
Following features are implemented in this application.

1)  Get user data filtered by user id ->
      Routing performed by module getUserById.
      Handles both valid and invalid user id.
  
2) Get user data filtered by user name -> 
    Routing performed by module getUserByName.
    Handles both valid and invalid user name.


3) Get the list of policies linked to a user name
    Routing performed by module getPolicyByName.
    Handles valid client name, invalid client name and client who has zero policies

4) Get the user linked to a policy number
    Routing performed by module getUserByPolicyNum.
    Handles both valid and invalid policy number.

5) Authentication and authorization. Take the user role from the web service that returns the list of company clients.Application uses client-sessions for session management.
> Login  - Enter user name and email id from web services. 
> Role   - If logged in user has admin access all four web services are available to the user. 
          If user isn't admin only getUserById and getUserByName modules are available to user-
> Logout - Redirects to login page.
 
## Test Cases
Implemented under folder __tests__
Handles 
 
