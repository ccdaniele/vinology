# About VINOLOGY
VINOLOGY is an application designed to provide information about a vehicle based on the data associated with its VIN Number.

The VIN number serves as the social security number of a vehicle, every time that any procedure is carried out before a public entity, insurance company, purchase and sale of vehicles and even any major repair, this information can be associated with the VIN number.

VINOLOGY extracts this information by connecting to 4 different APIs.

The frontend uses REACT-REDUX and has the responsibility of managing the UX and making requests to APIs. The backend uses RUBY ON RAILS / PSQL and is structured through 3 models (User, Query, Cars). The responsibility of the backend is the user authentication using JWT and store the information within the user's account.

In VINOLOGY, the user can create his/her account, create a query, add, edit and delete different vehicles to the query and check codes using the code searcher thats allows the user extract specifical information about the state of the vehicle. At the same time the user can make different types of reports, download them in PDF and save it in the user's account.

VINOLOGY video example https://youtu.be/oEXVyASkCEE

# Requirements:

## Server:
- Ruby version +2.7 (set local version in the gemfile)
- Ruby on rails
- SQlite

### Install / Update Gems

```{console}
$ bundle install 
$ bundle update
```

### Initialize Database
```{console}
$ rails db:create
$ rails db:migrate
```
Seed Data
```{console}
$ rails db:seed
```

Run the Server
```{console}
$ rails s
```
### Initialize and Serve Frontend
```{console}
$ npm install && update
$ npm start
```