select
tp.id,
tp.title,
tp.reg_date,
UPPER(c.name) as category,
i.img_card
from tab_post tp
inner join tab_category c on c.id = tp.id_category
inner join tab_img i on i.id_post = tp.id
inner join tab_group tg on tg.id = c.idgroup 
where tg.id ='2'