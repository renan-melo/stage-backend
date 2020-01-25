select 
p.id,
p.title,
p.reg_date,
UPPER(c.name) as category,
i.img_card
from tab_post p 
inner join tab_category c on c.id = p.id_category
inner join tab_img i on i.id_post = p.id
