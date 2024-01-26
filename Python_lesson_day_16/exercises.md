# Datebase Queries Exercises 1

1. select count(*) from category;
2. select cate.name, count(fi.film_id) as "total_films"  from category cate left join film_category fi on cate.category_id = fi.category_id left join film f on fi.film_id = f.film_id group by cate.name;
3. select cate.name, avg(f.rental_duration) as "avg_rental_duration"  from category cate left join film_category fi on cate.category_id = fi.category_id left join film f on fi.film_id = f.film_id group by cate.name;
4. select title, sum(rental_rate*rental_duration) as "total_revenue" from film group by title order by title desc limit 10;
5. select cu.customer_id, cu.first_name, cu.last_name, count(r.rental_date) from customer cu left join rental r on cu.customer_id = r.rental_id group by cu.customer_id;  
6. select rating, avg(replacement_cost) as "avg_replacement_cost" from film group by rating order by avg(replacement_cost) asc;   
7. select la.name, avg(f.rental_rate) as "avg_rental_rate" from language la left join film f on la.language_id = f.language_id group by la.name;
8. select st.staff_id, st.first_name, st.last_name, sum(p.amount) as "total_payments from staff st left join payment p on st.staff_id = p.staff_id group by st.staff_id, st.first_name, st.last_name;
9. select ca.name, count(re.rental_id) from category ca left join film_category fica on ca.category_id = fica._category_id left join film fi on fica.film_id = fi.film_id left join inventory i on fi.film_id = i.film_id left join rental re on i.inventory_id = re.inventory_id group by ca.name;