select
tp.id,
tp.title,
tp.reg_date,
UPPER(c.name) as category,
i.img_card
from tab_post tp
inner join tab_category c on c.id = tp.id_category
inner join tab_img i on i.id_post = tp.id
{{#id_group}}
inner join tab_group tg on tg.id = c.id_group 
where tg.id = :id_group
{{/id_group}}
ORDER by tp.id desc