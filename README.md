# Kanban Web App README

![Kanban Web App Screenshot](ss.png)

## Overview

This Kanban Web App is a simple yet powerful project management tool that allows you to manage your tasks and projects using the Kanban methodology. It provides a visual board with columns for different stages of work, such as "To Do," "In Progress," and "Done," helping you to streamline your workflow and stay organized.

The application is built using HTML, CSS, and JavaScript for the front end. It utilizes AWS services for the back end, including Amazon API Gateway for handling RESTful API requests, AWS Lambda functions for serverless backend logic, and Amazon DynamoDB for data storage.

## Features

- Create tasks.
- Move tasks between columns to track their progress.
- User-friendly drag-and-drop interface for managing tasks.
- Secure and scalable backend infrastructure powered by AWS services.
- Data persistence and retrieval using Amazon DynamoDB.

## Screenshot

![Kanban Web App Screenshot](ss.png)

## Live Demo

You can access and test the Kanban Web App live by visiting the following URL:

[Live Kanban Web App](https://dev1171.dzminzs5l51lh.amplifyapp.com/index.html)

## Getting Started

To run this project locally or deploy it on your AWS account, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Eshan276/Kanban_Webapp.git
   ```

2. **Frontend Setup**:
   - Open the `index.html` file in your web browser to run the frontend locally.

3. **AWS Backend Setup**:
   - Set up your AWS account and configure AWS CLI with your credentials.
   - Create an Amazon DynamoDB table to store task data.
   - Deploy the Lambda functions and API Gateway resources using the provided AWS CloudFormation templates (if available).

4. **Configure Frontend to Use API**:
   - In your frontend JavaScript code, update the API endpoint URLs to point to your AWS API Gateway resources.

5. **Run the Application**:
   - Now that your frontend is configured to communicate with the backend, you can run the web app locally or deploy it to a web server.

## Contributing

If you'd like to contribute to this project, feel free to open issues or submit pull requests on the GitHub repository: [Kanban Web App Repository](https://github.com/Eshan276/Kanban_Webapp)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using the Kanban Web App! If you have any questions or encounter any issues, please don't hesitate to contact us. Happy task management!
