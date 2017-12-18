Build a simple Rails API backend with full CRUD actions for 1 resource. The resource can be anything, dogs, pizzas, pants, flowers, etc. For example, if the resource I chose was hogs, I should have the following routes:

<!-- GET ‘/lists’ --> DONE

<!-- POST ‘/lists/’  --> DONE

<!-- GET ‘/lists/:id’ --> DONE

PATCH ‘/lists/:id’ - Backend Done
DELETE ‘/lists/:id’ - Backend Done

Before moving on to the frontend, test every API endpoint with Postman and confirm that it works as expected. You should be able to make any of the above requests and see the changes reflected in your database.

Now make a React App that will serve as a frontend for your newly created backend. Your frontend will be a Single Page App, (i.e. no routes).

* It should display a list of all the things in your database.
* It should display a form to add a thing.
* Submitting the form should make a POST request to your API as well as update what the user sees on the frontend. You can choose to do this with optimistic or pessimistic rendering (https://medium.com/@duncandevs/ui-rendering-optimistic-vs-pessimistic-e8e0f4df264)
* There should be a button that will delete a thing when clicked
* Each thing should be editable

We’ll be expecting everyone to send us their repos Monday morning. If you have extenuating circumstances where you will not be able to work this weekend, please let us know. Otherwise you’ll be expected to submit your repo. Be sure to work one feature at a time so that you still have something to submit even if, for example, you didn’t get the edit feature totally working.
