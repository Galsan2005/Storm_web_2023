# Datebase Queries Exercises

1. select * from customer where first_name = 'Jamie'; (2 rows)
2. select * from customer where first_name = 'Jamie' or last_name = 'Rice'; (2, 1 rows)
3. select * from customer where last_name = 'Adam' or last_name = 'Rodriguez'; (2 rows)
4. select * from country where country = 'Mongolia' or country = 'Afghanistan'; (1 row)
5. select * from country where country = 'Germany'; (id = 38)
6. select * from city where country_id = 38; (7 rows)
7. select * from language where name = 'English'; (id = 1)
    select * from film where language_id = 1; (1000 rows)
8. select * from film where title = 'Apollo Teen'; ( 1 row)
9. select * from film_actor where actor_id = 33; (28 rows)
10. select * from film_category where film_id = 33; (id = 7)
    select * from category where category_id = 7; (name = drama)