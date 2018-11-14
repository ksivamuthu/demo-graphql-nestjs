# GraphQL NestJS Demo

This is the demo of the talk about [GraphQL & NestJS - Forget the REST](https://graphql-nestjs.now.sh/#/) I did in Atlanta Code Camp 2018 / TampaCC 2018.

## Table of contents

1. [Getting started](#getting-started)
2. [Conference REST API](#conference-rest-api)
3. [Conference GraphQL API](#conference-graphql-api)
4. [Conference GraphQL Client](#conference-graphql-client)
5. [Reference](#reference)
6. [Contributing](#contributing)

## Getting started

### Prerequisites.

* NodeJS (10.x)
* Apollo CLI (`npm i -g apollo`)
* MySQL (Datasource I used for demo, you can use any datasource, `typeorm` supports)

Launching the app will create the schema. 
Please execute the [schema.sql](schema.sql) file, if you want some mock records, I played in demo.


## Conference REST API

This project explains the NestJS architecture and how we implement the REST Apis for our conference demo.
```
cd conference-rest-api
npm run start
```

Navigate to `http://localhost:3000/docs` for swagger docs.

## Conference GraphQL API

This project explains how to implement graphql api in NestJS for our conference demo.

> Note: To setup the engine, you need your apollo engine api key. 

### Get your API Key
Log into [Apollo Engine](https://engine.apollographql.com) via your browser and create a service to get an API key.

Update the API key in your .env file. You can refer the .env schema in .env-sample

```
cp .env-sample .env
```
Update the ENGINE_API_KEY value with your api key received from your apollo engine.

```
cd conference-graphql-api
npm run start
```

Navigate to `http://localhost:3000/graphql` for graphql playground.

## Conference GraphQL Client

This project implements apollo graphql client in Angular for our conference demo, that talks with GraphQL server.

Start the graphql server before you start the client. This client proxies the server request at http://localhost:4200/, the same port running client.

```
cd conference-graphql-client
ng serve --proxy-config proxy.conf.json
```
## Reference

* [Apollo GraphQL](https://www.apollographql.com)
* [NestJS](https://nestjs.com)
* [Apollo Engine](https://engine.apollographql.com)
* [Type ORM](http://typeorm.io/#/)

## Contributing

You are more welcome to contribute to this project, to make it more awesome !!!
