# Rule Engine with AST

## Overview
The **Rule Engine with AST** is a 3-tier application designed to determine user eligibility using configurable rules represented as an Abstract Syntax Tree (AST). The application features a user-friendly UI for rule creation and evaluation, an API for backend interactions, and a robust MySQL database for storing rules and user data.

## Architecture Overview
The project follows a three-tier architecture:
- **UI**: Built with HTML, CSS, and JavaScript for a responsive and interactive frontend.
- **API**: Developed using Java and Spring Boot, providing endpoints for rule management and evaluation.
- **Backend**: MySQL database for persistent storage of rules and user data.

### Project Structure
```plaintext
rule-engine/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── ruleengine/
│   │   │               ├── RuleEngineApplication.java       
│   │   │               ├── controller/
│   │   │               │   └── RuleController.java          
│   │   │               ├── exception/
│   │   │               │   └── GlobalExceptionHandler.java 
│   │   │               ├── model/
│   │   │               │   ├── Node.java
│   │   │               │   └── UserData.java                
│   │   │               ├── service/
│   │   │               │   └── RuleService.java             
│   │   │               └── config/
│   │   │                   └── WebConfig.java             
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── index.html                             <!-- Frontend -->
│   │       │   ├── styles.css                              
│   │       │   └── script.js                                 
│   │       └── application.properties                        <!-- Backend Configuration -->
└── pom.xml                                                   <!-- Maven Dependencies -->
