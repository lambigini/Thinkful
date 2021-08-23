select *
from books b 
join authors a 
on b.author_id = a.author_id 
where b.publication_year  < 2005
and a.nationality <> 'United States of America'

