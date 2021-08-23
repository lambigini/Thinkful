select
artist_name,
song_name,
album_name
from artists
right join
songs 
on  artists.artist_id = songs.artist
