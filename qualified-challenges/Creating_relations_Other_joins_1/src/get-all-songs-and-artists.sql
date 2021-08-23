select
artist_name as artist,
song_name,
album_name as album
from artists
full join
songs 
on  artists.artist_id = songs.artist
