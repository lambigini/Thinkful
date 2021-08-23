select count(*) 
from books 
join authors 
on books.author_id = authors.author_id 
where authors.author_name  = 'Leo Tolstoy'

 