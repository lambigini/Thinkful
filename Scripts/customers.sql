
-- First, remove the table if it exists
drop table if exists customers;

-- Create the table anew
create table customers (
    customer_id integer primary key generated by default as identity,
    customer_name varchar not null,
    phone varchar(30)
);


-- Insert some test data
-- using a multi-row insert statement here
insert into customers 
(customer_name, phone)
value
('Sam', '555-1234'),
  ('Ham', '555-4321'),
  ('Ram', '555-5678');