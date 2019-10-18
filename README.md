# FindKeanu. Identify fake selfies with AWS Amplify and Angular

![Keanu](https://i.imgur.com/mIhPGXf.png "Keanu")

This app shows how to use **Predictions** with **AWS Amplify** and **Angular** to make sure Keanu Reeves is really in a picture. Predictions uses **Amazon Rekognition**.

![FindKeanu](https://i.imgur.com/oc3sZTA.gif "FindKeanu")

Features included:
- Predictions identify entities for celebrities
- Identify Keanu Reeves in pictures
- Display bounding box and landmarks for Keanu or any other celebrities registered in Amazon Rekognition.
- Display first additional information link if available

> To improve accuracy use high definition images whenever possible.

Predictions usage example:
```
Predictions.identify({
  entities: {
    source: { file },
    celebrityDetection: true
  }
}).then(response)
```

![Output](https://imgur.com/YMOez3F.gif)

Once familiar with this API you can move to more advanced use cases to search, filter and categorise big volumes of pictures!

## Deploy with the AWS Amplify Console

The AWS Amplify Console provides hosting for fullstack serverless web apps. [Learn more](https://console.amplify.aws). Deploy this app to your AWS account with a single click:

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/gsans/find-keanu-angular)

The Amplify Console will fork this repo in your GitHub account, and then build and deploy your backend and frontend in a single workflow. Your app will be available at `https://master.APPID.amplifyapp.com`.

## Run locally with the Amplify CLI

1. Install and configure the Amplify CLI

```
  npm install -g @aws-amplify/cli
  amplify configure
```

2. Install and configure the Amplify CLI

```
  amplify init --app https://github.com/gsans/find-keanu-angular
```
  
>The init command clones the GitHub repo, initializes the CLI, creates a ‘sampledev’ environment in CLI, detects and adds categories, provisions the backend, pushes the changes to the cloud, and starts the app.

3. Provisioning the frontend and backend

Once the process is complete, the CLI will automatically open the app in your default browser.