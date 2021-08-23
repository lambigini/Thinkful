select
artist_name,
song_name,
album_name
from artists
left join
songs 
on  artists.artist_id = songs.artist
