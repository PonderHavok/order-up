# Eat The Burger
## Description
  This is a full stack logging application that allows the user to input burgers into their "want to eat" list, which is saved in the DB. These burgers can then be moved over to the "eaten" list as they are consumed.

  [Link to Deployed Application](https://mysterious-forest-40009.herokuapp.com/)
    
  ## Table of Contents
  * [Installation](#installation)
  * [Languages and Technologies Used](#languages)
  * [Questions](#questions)
  
  ## Installation
 - assuming node and npm are installed. 

```shell
$ git clone https://github.com/PonderHavok/order-up.git
$ cd order-up/
$ npm i
```
### setting up SQL database

```shell
$ cd db
$ mysql -u root -p
Enter password:
mysql> source schema.sql
mysql> source seeds.sql
mysql> exit
```
### create JawsDB remote database
```shell
$ cd burger/
$ heroku login
$ heroku create
```
  1) Navigate to heroku.com and login with your credentials
  2) Find your Heroku app’s name in the dashboard. Click on it.
  3) Look for the Add-Ons section in your app’s dashboard and type JawsDB in the input field. That should bring up the JawsDB MySQL add-on
  4) Click on JawsDB MySQL and that should should bring up a modal asking you to provision a specific tier plan. (Note: require credit card information). Choose the free option and Provision.
  6) You’ll know that Heroku set up your database when a JawsDB entry shows up in under the Add-ons section.
  7) Click JawsDB MySQL to bring up the settings to your remote database. You’ll need this information later.

### hooking your project JawsDB
  8) Open the Graphical User Interface (GUI) software of your choice: Sequel Pro, MySQL Workbench, Valentina Studio or HeidiSQL.
  9) Create a connection to the database
     * Enter host, username, password
  10) open up schema.sql file, and change name of database to the one provided by JawsDB.

### Deploy to heroku
```shell
$ git push heroku master
```

  ### Screenshots
  ![Screenshot of Deployed Site](/public/assets/burger.png)


  ## Languages and Technologies Used
  * HTML / CSS
  * Javascript (JQuery)
  * Database: SQL (mySQL and JawsDB)
  * Deployed to Heroku web service hosting
  * Node.js and packages:
    * Express
    * mysql
    * Express Handlebars

  
  ## Questions
  If you have any questions, please send them to me through GitHub or email.

  Github Username: PonderHavok

  [transverseponderer@gmail.com](mailto:transverseponderer@gmail.com)
