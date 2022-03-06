## Task 1
## Social network profile
It is necessary to create a <Profile> component with which we could display information about the user of the social network.

The component must accept multiple props with user information:
  - username — username
  - tag — social network tag without @
  - location - city and country
  - avatar - link to the image
  - stats - object with information about activity
  
## Task 2
  
## Statistics Section
Create a <Statistics> component that would display statistics on transmitted props. For example, uploads to the cloud by file type, visits to a web page by users from different countries, financial expenses, etc.

The component must accept two props title and stats, which specify the title and the statistics object.
 - title - is optional, and if it is not passed, the <h2> title markup should not be rendered.
 - stats - an array of objects containing information about the statistics element. Can have any number of elements.
 - You can skip the background color of the statistics element in the design, or create a function to generate a random color.
 
## Task 3
  
## Friend list
We need to create a <FriendList> component with which we could display information about the user's friends.
The component must accept one friends prop, which is an array of friend objects.

You need to create a <FriendListItem> component.

The component must accept several props:
  - avatar - link to the avatar
  - name - friend's name
  - isOnline - a boolean indicating the status of a friend, online or not.
Depending on the isOnline prop, the span.status background color should change.

## Task 4
  
## Transaction History
It is necessary to create a transaction history component in the personal account of the Internet Bank.

The data for the list is available in JSON format in the transactions.json file. This is an array of objects, each object describes one transaction with the following properties:
  - id — unique transaction ID
  - type — transaction type
  - amount - transaction amount
  - currency - currency type

It is necessary to create a <TransactionHistory> component that accepts one prop items - an array of transaction objects from transactions.json. The component creates the table markup. Each transaction is a table row.