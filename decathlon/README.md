## Decathlon Shopping App
  ### Pages
    1. Login Page
    2. Home Page
    3. Cart
   
  ### Page Info
    1. Login Page: User need credentials (username, password) hardcoded in the src/apiSetup/credentials.json 
    2. Home Page: Homepage has list of all the products in a categorized manner hardcoded in a src/apiSetup/sportGood.json. 
       In the header there is cart icon which navigates to cart page on click. If user is logged in then show my account else 
       login button. User can add items to cart using 'Add to Cart' button in the page.
    3. Cart: Cart displays all the items added to cart, user can increase and decrease the count of items in the added. 
       The total price and summary of the cart is displayed on the right side of the page. Checkout button will save the 
       items on click and redirect to home page.
       
  ### App Info
    App contains 3 pages which can be navigated using react-router-dom library in react, the states are maintained using 
    redux which is used to globally access the state. Bootstrap is used for pre defined components and styling.
    
  ### Start
    1. App can be started using 'npm run start' command.
    2. Credentials: 
      username ->  user@gmail.com,
      password ->  user
    3. App build can be created using 'npm run build'.
