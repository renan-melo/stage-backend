select 
p.id,
p.title,
p.reg_date,
UPPER(c.name) as category,
i.img_card,
pv.qtd_view
from tab_post p 
inner join tab_category c on c.id = p.id_category
inner join tab_img i on i.id_post = p.id
inner join tab_post_view pv on pv.id_post = p.id
order by pv.qtd_view desc
limit 10;