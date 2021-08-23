create table books_genres 
(
   primary key (book_id, genre_id ),
    book_id integer references books(book_id),
    genre_id integer references genres(genre_id)
)