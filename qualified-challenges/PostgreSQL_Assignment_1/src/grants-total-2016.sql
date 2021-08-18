select 
 sum(amount) 
from grants
where fiscal_year >= '01/01/2016'
and fiscal_year < '01/01/2017'
