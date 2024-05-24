# SYSTEM DESIGN PRIMER
## Table of content
- Understanding System Design
- What is the Need for the System Design?
- Exploring Essential Design Methods in System Design
  - Architectural Design
  -  ERD Diagram
    - UML Diagram
  -  Class Diagrams
    -  Sequence Diagrams
- Diving Deeper into System Design Concepts
  - Performance vs Scalability
  - Latency vs Throughput
  - Consistency Patterns and Availability Patterns
- Advanced Concepts in System Design
  - CDN
  - DNS
  - Caching
  - Proxies
- Components of System Design
  - Microservices and Service Discovery
  -  Database Systems: RDBMS and NoSQL
  -  Communication Protocols
  
- Approaching System Design Interview Questions
  - Step-by-step Guide
    - Requirements clarification
    -  Estimation of resources
    -  System interface definition
    - Defining Data model
    - High-level design
    - Detailed design
    -  Identifying and resolving bottlenecks
- Sample System Design Interview Questions and Solutions

## Understanding System Design
System design is a step-by-step process of defining a particular software's architecture, modules, components, etc. It is a base concept in software engineering 

Major tech companies like Google, Microsoft, and Amazon include system design interviews in their hiring processes to evaluate candidates' abilities to architect applications from scratch. 

## What is the Need for the System Design?
System design is crucial for preparing the architecture of a software application before writing any code. It begins by understanding both functional and non-functional requirements from the business owners, including scalability, high availability, and consistency.

## Exploring Essential Design Methods in System Design
### Architectural Design
Refers to  the base of the system design.It describes the infrastructure, model, view, components, and interaction.
It includes client-server interaction and microservices.
### ERD
It stands for entity-relationship diagram and it's used in designing the application's database structure.
  ###  UML
  It stands for unified modelling language and it's used to prepare modelling software systems.
  ### Class diagrams
  They are usd to represent classes and can also cotain the class's attributes, methods, and relationships between multiple classes.
  ### Sequence diagrams
  They represent the interaction between various components of the system. It's used to model behaviour of the system.

  ## Diving Deeper into System Design Concepts
  ###  Performance vs Scalability
  Performance in a system refers to its efficiency in processing tasks, responsiveness, and ability to handle load under specified conditions. To enhance perfomance caching mechanisim  can be used.  
  scalability refers to the ability to scale the application. To enhance scalability one can distribute load across multiple servers.
  ### Latency vs Throughput
   latency is a network delay that occurs due to Geographical distance, transport protocol, or network infrastructure.  
    Throughput is the number of operations the system can handle in a particular time or the number of data passed via network request in a given time.
 ### Consistency Patterns and Availability Patterns
 Consistency ensures that all nodes in the system read the same data at a particular time. Availability patterns include load balancing, and retry and timeout strategies.

 The system's availability ensures that each request receives a response either with fresh or old data. Consistency patterns include strong consistency , eventual concistency, and weak concistency.

 ## Advanced Concepts in System Design
 ### CDN
 It stands for content delivery network.  The CDN is a distributed server network located at different geo-locations and is used to deliver content like images, various data, etc., from the server.
 ### DNS
 It stands for the domain name system.It allows users to access the website and its resources using the domain name (e.g., www.example.com).
 ### Caching
 Caching is a technique used to temporarily store frequently accessed data in a fast storage layer to improve retrieval speed and reduce latency.
 ### Proxies
 Also called prooxy server.Proxies are intermediary servers that act as gateways between clients and other servers, facilitating or controlling access, improving performance, and enhancing security.

## Components of System Design
### Microservices and Service Discovery
he microservices break down complex applications into small services, such that each service works independently and accomplishes specific tasks.  It has two concepts service identification and dynamic service discovery.
### Database Systems: RDBMS and NoSQL
The RDBMS stands for the relational database management system. The SQL databases are built on the top of the RDBMS. It stores data in table format.  
The NoSQL database means a non-SQL database. It stores the data in the key-value pair instead of in table format.
### Communication Protocols
Protocols mean rules and communication protocols refer to the rules to communicate or exchange the data between two systems examples; HTTPS, TCP/IP, and, UDP.

 ## Approaching System Design Interview Questions
  ###  Step-by-step Guide :
   ### Requirements clarification
   There can be two types of requirements: function requirements and non-function requirements.  
   The functional requirements are the requirements in the application with which the user interacts. For example, authentication, navigation.    
   The non-functional requirements are the requirements to improve the application's capabilities. For example, high availability, scalability, consistency.

   ### Estimation of resources
  while selecting the resources for the server, you should keep in mind how howmany requests it will receive per day or second.
### System interface definition 
Defining the API endpoints and what to expect from each API endpoint.
 ### Defining Data model
   To store the structured data and tables are pre-determined, you can use the relational database. For storing the unstructured data, you should use NoSQL databases like MongoDB.
   ### High-level design
   Decide how you will connect the components of the system with each other.
   ### Detailed design
   After creating basic design you  need to improve the system design by analizing the sysytem to fulfill the non-functional requirements.
   ### Identifying and resolving bottlenecks
   ### 1.  How would you design a URL Shortening service similar to TinyURL?
   To design a URL shortening service similar to TinyURL, I'd use a REST API for communication, implement load balancing to handle 500 requests/second, and utilize a relational database for data storage. The database table would map long URLs to short ones, generated using unique IDs for each shortened URL.
   ### 2. How would you design a Web Crawler?
   To design a Web Crawler, I'd employ a concurrent approach to open multiple web pages, considering system limitations. Limiting simultaneous browser windows to a manageable number, like 100, prevents memory issues. Dynamically changing web pages and domains ensures comprehensive crawling, facilitating information extraction from various sources.
   ### 3. How would you design Facebook and Instagram?
   To design Facebook and Instagram, I'd create a robust database to manage user relationships, implement chat features using both in-house and third-party solutions, and employ secure authentication methods. Algorithms for trending and latest posts would optimize feed content. Data management involves efficient storage for user posts and replication for failover, while caching and load balancing enhance performance.
   ### 4. How would you design the API rate limit?
   To design an API rate limiter, I'd establish rate-limit metrics, specifying the maximum requests per second. Handling multiple requests concurrently requires efficient queue management. Tracking requests can be done using IP addresses from request headers, enabling monitoring and enforcement of rate limits, ensuring fair access and preventing abuse.

















