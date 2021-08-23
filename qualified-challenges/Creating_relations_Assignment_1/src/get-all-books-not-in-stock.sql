select 
* 
from books 
join authors 
on books.author_id = authors.author_id 
where books.in_stock = false 