select 
artist_id,
 artist_name,
   song_name
 from artists 
join 
songs 
on artists.artist_id = songs.artist