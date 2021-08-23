select 
artist_name,
concert_name,
concert_date,
scheduled_start_at,
scheduled_end_at
from artists_concerts
join artists
on artists.artist_id = artists_concerts.artist_id
join concerts
on artists_concerts.concert_id = concerts.concert_id