select *
from books_genres bg
join books b 
on bg.book_id = b.book_id 
join authors a 
on b.author_id = a.author_id 
join genres g 
on bg.genre_id = g.genre_id 
where  g.genre_name  = 'autobiography'
or g.genre_name = 'history'
and a.author_name  = 'Leo Tolstoy'