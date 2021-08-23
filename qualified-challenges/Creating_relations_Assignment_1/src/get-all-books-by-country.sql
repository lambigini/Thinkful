select 
* 
from books 
join authors 
on books.author_id = authors.author_id 
where authors.nationality = 'China'
or authors.nationality = 'Turkey'