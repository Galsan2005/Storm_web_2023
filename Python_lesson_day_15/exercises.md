# Datebase Queries Exercises 1

1. insert into lesson_day_15_schema.countries(country_id, country_name, region_id) values (1, 'Mongolia', 1);
2. insert into lesson_day_15_schema.locations(location_id, street_address, postal_code, state, country_id, region_id) values(3, 12, 341, 34, 3, 3);
3. insert into lesson_day_15_schema.countries(country_id, country_name, region_id) values (5, 'Korea', 5);
4. update lesson_day_15_schema.countries set country_name = 'Japan' region_id = 5 where country_id = 5;
5. delete from lesson_day_15_schema.countries where country_id = 1;
6. update lesson_day_15_schema.countries set country_name = 'China' region_id = 1 where country_id = 1;
7. delete from lesson_day_15_schema.locations where location_id = 1;

# Datebase Queries Exercises 2

1. \c dvdrental
2. select * from store;
3. select * from film where length between 120 and 500 limit 10;
4. select first_name, last_name from actor limit 10;
5. select store_id, count(*) from customer group by store_id;
6. select * from customer order by first_name desc limit 10;
7. select last_name, count(*) from actor group by last_name order by last_name asc limit 10;
8. select * from customer where first_name like '%Beverly%';
9. select rating from film limit 10 offset 15;
10. select release_year from film limit 10 offset 2020;
11. select active, count(*) from customer group by active limit 10;

