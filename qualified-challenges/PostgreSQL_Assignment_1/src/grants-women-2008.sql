select 
 sum(amount) 
from grants
where fiscal_year >= '01/01/2008'
and fiscal_year < '01/01/2009'
and applicant_name like '%Women%'
