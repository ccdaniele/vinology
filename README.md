VINOLOGY is an application designed to provide information about a vehicle based on the data recorded in its VIN Number.

The Vin number serves as the social security number of a vehicle, every time that any procedure is carried out before a public entity, insurance company, purchase and sale of vehicles and even any major repair, this information can be recorded in the VIN number

VINOLOGY extracts this information by connecting to 4 different APIs.

The frontend use REACT-REDUX and have the responsabilty of managing the UX and make the request to APIs. The backend use RUBY ON RAILS / PSQL and is structured through 3 models (User, Query, Cars). The responsabilty of the backend is the user authentication using JWT and store the information within the user's account.

In VINOLOGY the user can create his account, create a query, add, edit and delete different vehicles to the query and check codes using the code searcher thats allows the user extract specifical information about the state of the vehicle. At the same time the user can make different types of reports, download them in PDF and save it in the user account.

VINOLOGY video example https://youtu.be/oEXVyASkCEE

Requires:

Server:

Ruby version +2.7 (set local version in the gemfile) Ruby on rails SQlite

Install / update gems

$ bundle install $ bundle update

DB

$ rails db:create $ rails db:migrate

Seed data

$ rails db:seed

Run server

$ rails s

Frontend:

$ npm install $ npm update $ npm start