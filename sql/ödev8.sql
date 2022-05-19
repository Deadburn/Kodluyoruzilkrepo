--test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), 
--birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
CREATE TABLE employee (
	id INT,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
);
--Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
insert into employee (id, name, email, birthday) values (1, 'Sharl McBrier', 'smcbrier0@usatoday.com', '1943-06-18');
insert into employee (id, name, email, birthday) values (2, 'Tally Ellinor', null, null);
insert into employee (id, name, email, birthday) values (3, 'Bronson Gawke', 'bgawke2@hatena.ne.jp', '1901-08-26');
insert into employee (id, name, email, birthday) values (4, 'Fernandina Caldicot', 'fcaldicot3@dion.ne.jp', '1953-11-12');
insert into employee (id, name, email, birthday) values (5, 'Alysa Berthomier', null, null);
insert into employee (id, name, email, birthday) values (6, 'Kingsly Creffeild', 'kcreffeild5@livejournal.com', '1990-01-31');
insert into employee (id, name, email, birthday) values (7, 'Karalynn Egdale', null, null);
insert into employee (id, name, email, birthday) values (8, 'Consuela Briers', null, null);
insert into employee (id, name, email, birthday) values (9, 'Elizabet Whenham', 'ewhenham8@si.edu', '1967-07-02');
insert into employee (id, name, email, birthday) values (10, 'Emery Elkins', 'eelkins9@mit.edu', '1993-05-28');
insert into employee (id, name, email, birthday) values (11, 'Jacinthe Cortnay', 'jcortnaya@shop-pro.jp', '1932-12-16');
insert into employee (id, name, email, birthday) values (12, 'Con Hyam', 'chyamb@tinyurl.com', '2016-09-29');
insert into employee (id, name, email, birthday) values (13, 'Mirelle Nel', 'mnelc@github.io', '1985-05-02');
insert into employee (id, name, email, birthday) values (14, 'Halley Heaps', 'hheapsd@cnbc.com', '1942-03-19');
insert into employee (id, name, email, birthday) values (15, 'Lona Bunston', 'lbunstone@moonfruit.com', '1965-09-05');
insert into employee (id, name, email, birthday) values (16, 'Kristo Hasty', 'khastyf@hostgator.com', '2001-09-11');
insert into employee (id, name, email, birthday) values (17, 'Alyosha Lafaye', null, null);
insert into employee (id, name, email, birthday) values (18, 'Vita Vizor', 'vvizorh@cpanel.net', '1977-11-15');
insert into employee (id, name, email, birthday) values (19, 'Galina Bere', 'gberei@tamu.edu', '2014-07-06');
insert into employee (id, name, email, birthday) values (20, 'Dolf Baldacchi', 'dbaldacchij@sciencedaily.com', '1942-02-20');
insert into employee (id, name, email, birthday) values (21, 'Raffaello Lyard', 'rlyardk@jimdo.com', '1951-11-05');
insert into employee (id, name, email, birthday) values (22, 'Ailis Seid', 'aseidl@taobao.com', '1999-09-06');
insert into employee (id, name, email, birthday) values (23, 'Fielding Lisimore', 'flisimorem@howstuffworks.com', '1905-10-27');
insert into employee (id, name, email, birthday) values (24, 'Maximilien Twiddy', 'mtwiddyn@baidu.com', '1940-11-20');
insert into employee (id, name, email, birthday) values (25, 'Nolie Selesnick', 'nselesnicko@netlog.com', '1951-06-18');
insert into employee (id, name, email, birthday) values (26, 'Xaviera Yeskin', 'xyeskinp@4shared.com', '1964-08-01');
insert into employee (id, name, email, birthday) values (27, 'Shaine Ryde', 'srydeq@cbc.ca', '1982-07-16');
insert into employee (id, name, email, birthday) values (28, 'Noni McGenn', null, null);
insert into employee (id, name, email, birthday) values (29, 'Dulsea Mulqueen', 'dmulqueens@goo.ne.jp', '1974-12-04');
insert into employee (id, name, email, birthday) values (30, 'Wilona Nellies', 'wnelliest@hp.com', '2000-07-02');
insert into employee (id, name, email, birthday) values (31, 'Yuma Gori', null, null);
insert into employee (id, name, email, birthday) values (32, 'Claudia Hackforth', 'chackforthv@webnode.com', '1921-02-16');
insert into employee (id, name, email, birthday) values (33, 'Lonnie Sadat', 'lsadatw@spotify.com', '1993-10-01');
insert into employee (id, name, email, birthday) values (34, 'Trueman Blood', 'tbloodx@elegantthemes.com', '1930-01-19');
insert into employee (id, name, email, birthday) values (35, 'Sly Tilberry', 'stilberryy@hud.gov', '2019-03-13');
insert into employee (id, name, email, birthday) values (36, 'Margy Miskelly', 'mmiskellyz@bloomberg.com', '2013-09-28');
insert into employee (id, name, email, birthday) values (37, 'Bearnard Cordero', 'bcordero10@pinterest.com', '2012-09-09');
insert into employee (id, name, email, birthday) values (38, 'Zsazsa Ville', 'zville11@icio.us', '2003-07-02');
insert into employee (id, name, email, birthday) values (39, 'Gertrude Vassall', 'gvassall12@ebay.com', '1960-10-15');
insert into employee (id, name, email, birthday) values (40, 'Kelly Rumney', 'krumney13@domainmarket.com', '1944-07-01');
insert into employee (id, name, email, birthday) values (41, 'Rianon Siman', null, null);
insert into employee (id, name, email, birthday) values (42, 'Brigg Mibourne', 'bmibourne15@squarespace.com', '1937-06-21');
insert into employee (id, name, email, birthday) values (43, 'Annabela Elles', 'aelles16@uiuc.edu', '1996-05-02');
insert into employee (id, name, email, birthday) values (44, 'Natty Marwood', 'nmarwood17@w3.org', '2014-08-10');
insert into employee (id, name, email, birthday) values (45, 'Torin Yankeev', 'tyankeev18@dropbox.com', '2013-02-06');
insert into employee (id, name, email, birthday) values (46, 'Doll Cicconetti', 'dcicconetti19@washington.edu', '2016-08-09');
insert into employee (id, name, email, birthday) values (47, 'Cathyleen McTaggart', 'cmctaggart1a@nymag.com', '1937-06-11');
insert into employee (id, name, email, birthday) values (48, 'Zeke Garratt', 'zgarratt1b@tmall.com', '2000-04-20');
insert into employee (id, name, email, birthday) values (49, 'Jodi Crutchfield', 'jcrutchfield1c@kickstarter.com', '1905-07-14');
insert into employee (id, name, email, birthday) values (50, 'Chelsey Belderfield', 'cbelderfield1d@icq.com', '1993-07-13');
--Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
UPDATE employee SET name = 'Robert Hatemo' WHERE id = 20;
UPDATE employee SET name = 'Cihan' WHERE id = 18;
UPDATE employee SET email = 'sqlash@gmail.com' WHERE id = 15;
UPDATE employee SET email = 'eastwest@outlook.com' WHERE id = 21;
UPDATE employee SET email = 'milenakafka@gmail.com' WHERE name = 'Milena Kayne';
--Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
DELETE FROM employee WHERE id = 20;
DELETE FROM employee WHERE email = 'sqlash@gmail.com';
DELETE FROM employee WHERE name = 'Cihan';
DELETE FROM employee WHERE id = 21;
DELETE FROM employee WHERE name = 'Milena Kayne';

