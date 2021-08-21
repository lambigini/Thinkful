select
artist_name,
song_name,
album_name
from artists
join songs
on artists.artist_id = songs.artist
where song_name like '%The%'