select ti.img_banner as src,tp.title from tab_img ti
inner join tab_post tp on ti.id_post = tp.id
{{#id_group}}
inner join tab_category tc on tp.id_category = tc.id
inner join tab_group tg on tc.id_group = tg.id
where tg.id = :id_group
{{/id_group}}
limit 4;
