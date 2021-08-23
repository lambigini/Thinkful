select *
from books b 
join authors a 
on b.author_id = a.author_id 
where  length(b.title) > 25