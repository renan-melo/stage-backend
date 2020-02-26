select c.id,UPPER(c.name) as name, c.id_group from tab_category c 
inner join tab_group g on g.id = c.id_group