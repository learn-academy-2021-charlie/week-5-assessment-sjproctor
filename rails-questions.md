# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
Domain specific language for interacting with relational databases

2. What the PostgreSQL query that would return all the content in a particular table?
SELECT * FROM table_name

3. What is the command to create a new Rails application with a PostgreSQL database?
rails new app_name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
rails g model Meal breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?
File used to alter the db schema, history of the db

6. What is the command to generate a migration file?
rail g migration add_column
rails db:migrate

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
model - Uppercase (PascalCase) and singular
table - snake_case and plural

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
Current outline of the db tables, shouldn't modify it that is what migrations are for

9. What is the Rails console?
Command line program for interacting with the rails app, model layer

10. What is the Rails console command to see all the content in a particular table?
TableName.all
