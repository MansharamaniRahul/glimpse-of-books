Steps to run the application
Step 1) run "npm install" in directory having package.json file
Step 2) "npm start` to start the application on localhost:3000;

While doing the testing, I found that data from GoodReads was inconsistent, if I was given more time, I would have added checks for each key before ustilising it to get the details.In many cases, it fails due to change in name of key in the data. If the json object of data can be assusmed to be constant, then we make usage of keys from data dynamic, i.e. without making use of actual name of keys.
Also, I would have written test cases using mocha, chai Jest, and enzyme test framework.

Their is one more thing that can be done to make selection of books easier, we could have build the Sunburst graph that can help to filter out books based on authors, ratings, geners etc.

I can imporve css of loading mask as well, which currently is just a small puff to demostrate that we are waiting for response from server.
