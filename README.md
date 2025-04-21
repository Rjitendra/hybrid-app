# Hybrid AngularJS + Angular Application

## Project Setup

This repository contains a hybrid application that integrates AngularJS with Angular. Follow these steps to set up and run the project locally.

### Steps to Run the Project

1. **Clone the Project**:
   Clone this repository to your local machine.

2. **Set Up the Legacy AngularJS Application**:
   - Navigate to the `legacy-angularjs` folder.
   - Install dependencies using:
     ```bash
     npm install
     ```
   - Start the application:
     ```bash
     npm start
     ```
   - The application will be available at `localhost:8080`.

3. **Build the Legacy Application**:
   - Run the following command to generate the build files:
     ```bash
     npm run build
     ```
   - The build files will be available in the `legacy-build` folder.

4. **Set Up the Angular Application**:
   - Navigate to the Angular application folder (`ng-hybrid` or `ng-hybrid-index`).
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the Angular application:
     ```bash
     npm start
     ```
   - The application will be available at `localhost:4200`.

5. **Hybrid Setup**:
   - Both the AngularJS and Angular applications should now be running. You will be able to see the legacy AngularJS application running inside the Angular application.

### Folder Structure

The project includes 7 folders, each representing a different type of project to demonstrate various configurations and implementations.

### AngularJS Inside Angular

To use AngularJS selectors within Angular components, you need to register the provider in the `app.module.ts` file as shown below:

```typescript
providers: [
  { provide: '$scope', useExisting: '$rootScope' }
]
