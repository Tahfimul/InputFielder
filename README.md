# InputFielder

Google's Forms application is a great tool for creating forms to collect data for various purposes. An added bonus is that Google has also included Google Script Editor into this tool. It is possible to combine this feature along with Google's Firebase Cloud Firestore database storage technology to make use of the data to create other applications. For example, sometimes it can be agonizing to develop an application to handle user input data from input fields of various types of data and in a short time. In such a case, it might be feasible to embed Google Forms into the application to allow Google Forms to handle input of the data in order to make progress on other aspects of the application.

# Steps

I have made use of the generous works of [@grahamearley]( https://github.com/grahamearley/FirestoreGoogleAppsScript/tree/9ec4ca1c9fb1af9cb4df3ad5dff94762d638aa85 ) and other developers of the library as well as this [article](https://medium.com/club-devbytes/how-to-build-formiqr-leverage-google-form-with-help-of-firebase-cloud-function-to-be-a-complete-55801110b578) to achieve this project.

1. Create a <b>Google Forms form</b>
2. Open the form in Google Forms to edit it and look under the <b> Responses</b> tab
3. Click green <b>View responses in sheets</b> button and this will generate a spreadsheet corresponding to the responses of the form. It can be found under Google Sheets.
4. On the edit page of the form, Enter the Script Editor by clicking the three dotted button next to the Send button and finding the Script Editor on the menu.
5. Once at the Script Editor menu, paste the code from above and entry the data for the missing inputs in the source.
6. Then click the save button and the run button. 
7. If the script runs successfully, then click the Deploy button and then click New Deployment.
8. Then Click the Deploy Button in blue.
9. Find the alarm button on the Script Editor menu for the triggers section.
10. In order to run the script, there must be a trigger created.
11. Select the add trigger button.
12. For the function choose myFunction.
13. For the select event source, choose From Form.
14. For the select event trigger, choose on from submit and then the save button.
15. Great! Now whenever you submit the form, it will pass the information collected to your firebase cloud firestore database.

For details on setting up Firebase Cloud Firestore see: https://firebase.google.com/docs/firestore
For details on retrieving or generating Firebase secret key see: https://firebase.google.com/docs/projects/api-keys
