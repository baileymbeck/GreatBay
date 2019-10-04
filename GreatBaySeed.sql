INSERT INTO greatbay(item, category)
VALUES ("record", "music"), ("elephant", "animals"), ("tent", "camping");

SELECT item FROM greatbay;

UPDATE greatbay 
SET bid = 5
WHERE item = "record";