-- MySQL dump 10.13  Distrib 8.0.12, for osx10.13 (x86_64)
--
-- Host: localhost    Database: devconferences
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `conference`
--

DROP TABLE IF EXISTS `conference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `conference` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `websiteUrl` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conference`
--

LOCK TABLES `conference` WRITE;
/*!40000 ALTER TABLE `conference` DISABLE KEYS */;
INSERT INTO `conference` VALUES (1,'Atlanta Code Camp',2018,'https://www.atlantacodecamp.com/2018','Kennesaw State University, Marietta Campus','2018-09-15 04:17:03.068888','2018-09-15 04:17:03.068888');
/*!40000 ALTER TABLE `conference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `abstract` varchar(5000) NOT NULL,
  `level` enum('Beginner','Intermediate','Advanced','Expert','0','1','2','3') NOT NULL,
  `category` enum('GeneralDiscussion','ClientDevelopment','WebDevelopment','DatabaseDevelopment','CloudDevelopment','Design','ProfessionalDevelopment','CareerAdvancement','ITTopics','0','1','2','3','4','5','6','7','8') NOT NULL,
  `keywords` varchar(255) NOT NULL,
  `stars` int(11) NOT NULL DEFAULT '0',
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `conferenceId` int(11) DEFAULT NULL,
  `speakerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_4c199fd6078136210f8f21bb0ca` (`conferenceId`),
  KEY `FK_a7265f8c21c5c95ebc2dd614446` (`speakerId`),
  CONSTRAINT `FK_4c199fd6078136210f8f21bb0ca` FOREIGN KEY (`conferenceId`) REFERENCES `conference` (`id`),
  CONSTRAINT `FK_a7265f8c21c5c95ebc2dd614446` FOREIGN KEY (`speakerId`) REFERENCES `speaker` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES (2,'Boost your Bot IQ','“Boost your Bot’s IQ - How to turn dumb bot into smart bot…” When it comes to making a truly smart bot, these are still early days. Let’s see how to add intelligence that will enable different experiences today and tomorrow. Come on, make your bot brighter to have a conversation with the human The session includes - Introduction to Microsoft Bot Framework - Designing conversational flow - Managing conversation flow is an essential task in building bots. How a bot is able to perform core tasks elegantly and handle interruptions gracefully. - Add Intelligence to Bot - How to train LUIS models and add intelligence to Bot Deployment and Analytics - How to deploy chatbot and add Application Insights. - Demo - Chatbot that demonstrates the conversational flow and LUIS Language processing.','Beginner','CloudDevelopment','nodejs,typescript',9,'2018-09-15 04:28:22.570655','2018-09-15 15:59:20.000000',1,1),(3,'React Native Up and Running','Learn about React Native and why it is so popular. What kind of software and tech stack do you need to get started and how to work within a bleeding edge platform. > History of React Native & Current Support/Release Cycle > CLI for iOS, Android and Windows > React Native UI design, Router and Forms > Tools, Popular Plug-ins and Resources > Windows App Center - deployments testing and analytics made easy','Beginner','WebDevelopment','mobile,reactnative',2,'2018-09-15 04:29:44.568965','2018-09-15 15:59:24.000000',1,2),(4,'Search Driven Apps','Search is a core tenet of modern software usability. In this talk I will show you how highly scalable and feature-rich search engines like Elasticsearch or Azure Search make certain types of problems very easy to solve. I will show you why search engines are so good at what they do, and then demo three small apps that take advantage of this approach.','Intermediate','WebDevelopment','search',0,'2018-09-15 04:31:24.749298','2018-09-15 04:31:24.749298',1,3),(5,'Azure Cloud Deployments Made Easy','If you are a developer or engineer looking to start building or migrating to Azure, then you are going to want the help of Azure Resource Manager (ARM). Gone are the days of submitting tickets or filling out build sheets for servers, developers can now integrate infrastructure directly into their code base. ARM allows you to deploy, manage, and monitor resources programmatically. Making the efforts of managing resources for multiple environments, applications, and configurations simple, easy, and updatable with the push of a button. In this session you will learn how to leverage native tools to deliver your application to Azure.','Beginner','CloudDevelopment','deployments',0,'2018-09-15 04:33:36.248738','2018-09-15 04:33:36.248738',1,4),(6,'DevOps and Agile - Break Down Silos And Build C.A.M.P.S.','Most businesses struggle with how to effectively implement Agile and DevOps. Unfortunately, there is no silver bullet; more than just engineers, coaches, and the code is vital to the success of Agile and DevOps','Beginner','CloudDevelopment','deployments',0,'2018-09-15 04:34:09.281039','2018-09-15 04:34:09.281039',1,4),(7,'Architecting a Reusable Starter Kit to Get Your Application into Production Quicker.','Every time you start a new web development project, you have to make hundreds of decisions. Why start every new project from scratch where you have to build yet another login or account management screen, configure webpack, get hot module reloading working, configuring testing and logging, etc...? In this presentation, I discuss the benefits of having a starter kit and many of the decisions you would make in creating a scalable, cloud-based, multi-tenant application. This presentation is based on my experience developing an open-source framework and the decisions that led me to use React.js, Apollo, GraphQL, and ASP.NET MVC Core in the project. Even if you don\'t like the technology choices in ReactAdvantage, you will understand what it takes to build a starter kit so that you aren\'t making the same decisions and writing the same code for every application you develop.','Beginner','WebDevelopment','',0,'2018-09-15 04:35:45.817221','2018-09-15 04:35:45.817221',1,5),(8,'Software Developer Career Motivation Fundamentals. What’s your TLC4?.','The career opportunities for an experienced software developer are more plentiful than ever. The decision process you will encounter throughout your career as to whether you should stay with your current employer, or look for other opportunities, should be approach the same way you write code…logically. We will discuss how to apply the TLC4 Career Motivation Methodology to your own personal career assessment.','Beginner','WebDevelopment','',0,'2018-09-15 04:36:44.335408','2018-09-15 04:36:44.335408',1,6),(9,'Getting to know data science terms?.','There are a lot of misconceptions about terms and their true definitions in the data science world. Getting familiar with the jargon is imperative to learn topics such as machine learning, artificial intelligence and big data. Furthermore, I would like to get into topics such as neural networks, a demo on Jupyter Notebook, and different models (such as the Naive Bayes Model)','Beginner','ITTopics','',0,'2018-09-15 04:37:34.840418','2018-09-15 04:37:34.840418',1,7),(10,'How To Have Code Reviews Developers Actually Want.','In this presentation, I’ll first show you the benefits of code review and the business case for why they should happen. Next, I’ll show some of the most common mistakes that teams make during the review process and how to mitigate them. After talking about the bad, we’ll talk about what to look for in your code review process. Finally, I’ll wrap things up by showing the game plan I use for code reviews.','Beginner','ITTopics','',0,'2018-09-15 04:38:15.512706','2018-09-15 04:38:15.512706',1,8),(11,'Web Accessibility begins at User Persona','There are 650 Million individuals in the world that live with a disability. 57 million of those in US who are disabled were born with the disability or it came later in their life. For those who have an online presence – it is a demographic that they are largely missing out and not serving because their website may not be accessible. Designing websites for accessibility begins at the user persona stage. In sum, it is really about inclusion within the community - the business community.','Beginner','ITTopics','',0,'2018-09-15 04:38:52.139660','2018-09-15 04:38:52.139660',1,9),(12,'React Native User Authentication with Amazon AWS Cognito','We\'ll start with a blank slate and create a new React Native app and a new Amazon AWS account. I\'ll show the complete end to end of React Native user authentication so you can follow along if you are new to React Native or just want to know how to add authentication to your existing app. We\'ll cover in app user registration, logon, multi factor authentication, social provider logon, and pricing of Cognito.','Beginner','ClientDevelopment','',0,'2018-09-15 04:40:23.780747','2018-09-15 04:40:23.780747',1,10),(13,'GraphQL & NestJS - Forget the REST','GraphQL is a new way of thinking about the APIs. GraphQL is a type-safe specification and protocol, which means it pairs well together with TypeScript, a superset of JavaScript that adds strong typing and other features to the ECMAScript specification. Let\'s learn about Nestjs, the new framework that takes advantage of TypeScript to create reliable and well structured Express applications, how to implement Apollo GraphQL server in NestJS and concepts of GraphQL.','Beginner','ClientDevelopment','',0,'2018-09-15 04:41:27.515613','2018-09-15 04:41:27.515613',1,1);
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `speaker`
--

DROP TABLE IF EXISTS `speaker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `speaker` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `bio` varchar(1000) NOT NULL,
  `phonenumber` varchar(255) NOT NULL,
  `companyname` varchar(255) NOT NULL,
  `companytitle` varchar(255) NOT NULL DEFAULT '',
  `companywebsite` varchar(255) NOT NULL DEFAULT '',
  `blog` varchar(255) NOT NULL DEFAULT '',
  `website` varchar(255) NOT NULL DEFAULT '',
  `twitter` varchar(255) NOT NULL DEFAULT '',
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `speaker`
--

LOCK TABLES `speaker` WRITE;
/*!40000 ALTER TABLE `speaker` DISABLE KEYS */;
INSERT INTO `speaker` VALUES (1,'Sivamuthu Kumar','Siva is working as Architect in Computer Enterprises Inc, delivering Mobile and Cloud solutions. He offers talks to technical groups on ML and AI solutions to motivate them to get involved in it and empowering them to impact change in the world by sharing. He is much interested in exploring new technologies. He tweets about the things he is working on @ksivamuthu. He lives in Orlando with his loving wife, and they are devoted-parents to their beautiful daughter','4122095786','Computer Enterprises Inc','Architect','https://www.ceiamerica.com','','','ksivamuthu','2018-09-15 04:18:16.614721','2018-09-15 04:18:16.614721'),(2,'Betty Pierce','A steal drumming, beer drinking, barefoot running, mama who went from professional musician to coding for cash. Betty is a Sr. UI/UX Developer at Agile Thought with over 18 years of coding experience in Tampa Florida. Betty is also director of Women Who Code Tampa and Girl Develop It (GDI) Instructor. She shares her passion for coding and emerging tech by speaking at conferences and meetups. Betty most recently presented at Walt Disney World #DevFestFL and at #UXDSummit in Ft Lauderdale. She has worked in varied industries from government to advertising and now consults with Agile Thought. She builds everything from enterprise apps in Angular or React to UX to small business Wordpress sites and HTML5 games. This happy mama of five can be found cooking, cleaning and swinging kettlebells her spare time.','8889991111','Agile Thought','Sr UI/UX Developer','','','','UIBusyBetty','2018-09-15 04:19:54.824956','2018-09-15 04:19:54.824956'),(3,'Joseph Zack','Joe is a long time coder and host of the Coding Blocks podcast. He likes static languages, libraries, and refactoring himself in circles.','8889991111','Coding Blocks','Software Engineer, Podcaster','','','','codingblocks','2018-09-15 04:21:01.352810','2018-09-15 04:21:01.352810'),(4,'Sean Davis','Sean is an IT veteran with almost 20 years of experience covering every realm of IT. Approaching problems with childlike wonder, leveraging a library of skills as a polyglot and solving the unsolvable is the day-to-day. His current primary areas of expertise are around DevOps Coaching, Agile Coaching, Life Coaching, and Business Transformation. He loves to meet people, share knowledge and help others grow.','8889991111','Agile Thought','Sr. Business Transformation Consultant, DevOps','','','','seanasaservice','2018-09-15 04:21:56.447442','2018-09-15 04:21:56.447442'),(5,'Joe Walling','Joe has been developing software for over 25 years and has been working with .NET since it was in beta. He has been running the GSP Developers’ Guild for 14+ years and has been an INETA Community Champion in the past. He currently runs Walling Info Systems LLC, a custom software development and consulting company and loves going into other software development shops and help them improve their processes and the scalability and performance of their web applications.','8889991111','Walling Info Systems LLC','President','','','','joewalling','2018-09-15 04:23:21.386653','2018-09-15 04:23:21.386653'),(6,'Ari Waller','Mock description...','8889991111','','','','','','','2018-09-15 04:24:09.837597','2018-09-15 04:24:09.837597'),(7,'Apaar Bhatnagar','Mock description...','8889991111','','','','','','','2018-09-15 04:24:22.477152','2018-09-15 04:24:22.477152'),(8,'Cameron Presly','Mock description...','8889991111','','','','','','','2018-09-15 04:24:34.590346','2018-09-15 04:24:34.590346'),(9,'Christine Laikind','Mock description...','8889991111','','','','','','','2018-09-15 04:24:52.961916','2018-09-15 04:24:52.961916'),(10,'Bradley Dean','Mock description...','8889991111','','','','','','','2018-09-15 04:26:11.525148','2018-09-15 04:26:11.525148');
/*!40000 ALTER TABLE `speaker` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-17  9:32:30
